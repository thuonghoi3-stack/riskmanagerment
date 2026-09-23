import { clamp } from "@/lib/utils";
import type {
  BarrierResult,
  BookAsset,
  Candle,
  Factor,
  LabParams,
  LabResult,
  MethodPath,
  Side,
} from "./types";
import {
  atrEma,
  atrPct,
  atrSma,
  calmar,
  cppi,
  cvarParametric,
  deflatedSharpe,
  ewmaVar,
  garchForecast,
  garmanKlass,
  gaussianScore,
  hrpWeights,
  kellyFraction,
  mapScore,
  maxDrawdown,
  maxLeverageFromAtr,
  mean,
  optimalF,
  parkinson,
  positionSize,
  returns,
  riskOfRuinVince,
  riskParityWeights,
  roc,
  sharpe,
  skewKurt,
  sortino,
  sqn,
  stdev,
  trueRanges,
  ulcerIndex,
  varParametric,
  volTargetLeverage,
  yangZhang,
} from "./math";
import {
  BOOK_SYMBOLS,
  bookCorrelation,
  bookVols,
} from "./market";

function last<T>(xs: T[], i?: number) {
  if (!xs.length) return undefined as T | undefined;
  if (i === undefined) return xs[xs.length - 1];
  return xs[Math.max(0, Math.min(i, xs.length - 1))];
}

function primarySide(rocN: number, atrPercent: number): Side {
  const thr = 0.45 * Math.max(atrPercent, 0.2);
  if (rocN > thr) return "long";
  if (rocN < -thr) return "short";
  return "flat";
}

function findEntryBar(sides: Side[], i: number) {
  const s = sides[i];
  if (s === "flat") return i;
  for (let k = i; k >= 1; k--) {
    if (sides[k] !== s) return k + 1;
  }
  return 0;
}

function tripleBarrier(
  candles: Candle[],
  start: number,
  m: number,
  sigma: number,
  h: number,
  side: Side,
): BarrierResult {
  const p0 = candles[start]?.c ?? 0;
  const u = p0 * (1 + m * sigma);
  const l = p0 * (1 - m * sigma);
  const vertical = Math.min(candles.length - 1, start + h);
  if (p0 <= 0) {
    return { u, l, vertical, label: 0, hitBar: null, hitKind: "open" };
  }
  for (let i = start + 1; i <= vertical; i++) {
    const k = candles[i];
    if (side === "short") {
      if (k.l <= p0 - (u - p0)) {
        return { u: p0 - (u - p0), l: p0 + (p0 - l), vertical, label: 1, hitBar: i, hitKind: "upper" };
      }
      if (k.h >= p0 + (p0 - l)) {
        return { u: p0 - (u - p0), l: p0 + (p0 - l), vertical, label: -1, hitBar: i, hitKind: "lower" };
      }
    } else {
      if (k.h >= u) return { u, l, vertical, label: 1, hitBar: i, hitKind: "upper" };
      if (k.l <= l) return { u, l, vertical, label: -1, hitBar: i, hitKind: "lower" };
    }
  }
  const lastC = candles[vertical]?.c ?? p0;
  const label = lastC === p0 ? 0 : lastC > p0 ? 1 : -1;
  return { u, l, vertical, label: side === "short" ? ((-label) as 1 | -1 | 0) : (label as 1 | -1 | 0), hitBar: vertical, hitKind: "time" };
}

function scoreEntry(args: {
  momentum: number;
  atrPercent: number;
  yzPct: number;
  garchPct: number;
  halfKelly: number;
  sqnVal: number;
  ror: number;
  ulcer: number;
  heat: number;
  maxHeat: number;
  cushionRatio: number;
  pUp: number;
}): Factor[] {
  const volSweet = gaussianScore(args.atrPercent, 2.4, 1.6);
  const yzPen = mapScore(args.garchPct / Math.max(args.yzPct, 0.2), 0.8, 2.2, true);
  return [
    {
      id: "momentum",
      formula: "A4",
      weight: 0.15,
      raw: args.momentum,
      score: mapScore(args.momentum, -2, 8),
      noteVi: "Momentum = ROC / ATR%. Điểm cao = xu hướng mạnh so với nhiễu.",
      noteEn: "Momentum = ROC / ATR%. High means trend dominates noise.",
    },
    {
      id: "volRegime",
      formula: "A1",
      weight: 0.12,
      raw: args.atrPercent,
      score: volSweet,
      noteVi: "ATR% quanh 1.5–4% là dải giao dịch được. Quá nén hoặc quá nở đều trừ điểm.",
      noteEn: "ATR% near 1.5–4% is tradeable. Compression or explosion both score lower.",
    },
    {
      id: "kelly",
      formula: "A5",
      weight: 0.12,
      raw: args.halfKelly,
      score: mapScore(args.halfKelly, 0, 0.2),
      noteVi: "Half-Kelly dương mới cho phép đặt cược. Edge âm → 0.",
      noteEn: "Positive half-Kelly is required to size in. Negative edge scores 0.",
    },
    {
      id: "sqn",
      formula: "B4",
      weight: 0.12,
      raw: args.sqnVal,
      score: mapScore(args.sqnVal, 0.8, 4.2),
      noteVi: "SQN < 1.6 hệ thống yếu; 2.5–3 tốt. Sizing aggressive chỉ khi SQN đủ.",
      noteEn: "SQN < 1.6 is weak; 2.5–3 is good. Aggressive sizing needs quality.",
    },
    {
      id: "ror",
      formula: "B3",
      weight: 0.1,
      raw: args.ror,
      score: mapScore(args.ror, 0.0005, 0.05, true),
      noteVi: "Risk of Ruin nên < 2%. Risk% cao làm RoR nhảy bậc.",
      noteEn: "Keep risk of ruin under 2%. High risk-per-trade explodes RoR.",
    },
    {
      id: "ulcer",
      formula: "B5",
      weight: 0.08,
      raw: args.ulcer,
      score: mapScore(args.ulcer, 1, 18, true),
      noteVi: "Ulcer Index phạt drawdown sâu và kéo dài — 'nỗi đau' khi hold.",
      noteEn: "Ulcer Index penalizes deep, long drawdowns — the pain of holding.",
    },
    {
      id: "heat",
      formula: "A7",
      weight: 0.08,
      raw: args.heat,
      score: mapScore(args.heat / Math.max(args.maxHeat, 0.01), 0.15, 1.05, true),
      noteVi: "Dư địa nhiệt danh mục. Heat gần trần thì không mở thêm.",
      noteEn: "Portfolio heat headroom. Near the cap, do not add risk.",
    },
    {
      id: "cppi",
      formula: "B6",
      weight: 0.08,
      raw: args.cushionRatio,
      score: mapScore(args.cushionRatio, 0, 0.35),
      noteVi: "Cushion CPPI > 0 mới được phép risk-on. Sàn thủng → đứng ngoài.",
      noteEn: "CPPI cushion must be > 0 to risk-on. Floor breach means stand aside.",
    },
    {
      id: "barrier",
      formula: "D1",
      weight: 0.08,
      raw: args.pUp,
      score: args.pUp * 100,
      noteVi: "Xác suất chạm rào trên (meta-label analog) — bet size tỉ lệ thuận.",
      noteEn: "P(hit upper barrier) — a meta-label analog; bet size scales with it.",
    },
    {
      id: "garch",
      formula: "D5",
      weight: 0.07,
      raw: args.garchPct,
      score: yzPen,
      noteVi: "GARCH/EWMA so với Yang-Zhang. Vol clustering sắp tới trừ điểm vào.",
      noteEn: "GARCH/EWMA vs Yang-Zhang. Upcoming vol clustering cuts the entry score.",
    },
  ];
}

function scoreExit(args: {
  trailProx: number;
  heat: number;
  maxHeat: number;
  cvarPct: number;
  ulcer: number;
  floorProx: number;
  dailyLoss: number;
  dailyCap: number;
  volRatio: number;
  mom: number;
  timeUsed: number;
  inTrade: boolean;
}): Factor[] {
  const fade = mapScore(args.mom, 6, -1);
  return [
    {
      id: "trail",
      formula: "A8",
      weight: 0.14,
      raw: args.trailProx,
      score: mapScore(args.trailProx, 0.05, 0.95),
      noteVi: "Giá sát trailing stop ATR → thoát. 0 = còn xa, 1 = chạm.",
      noteEn: "Price hugging the ATR trail. 0 = room, 1 = about to stop out.",
    },
    {
      id: "heat",
      formula: "A7",
      weight: 0.12,
      raw: args.heat,
      score: mapScore(args.heat / Math.max(args.maxHeat, 0.01), 0.4, 1.1),
      noteVi: "Heat vượt trần chấp nhận (≈ 0.5–0.6 × max DD) → giảm vị thế.",
      noteEn: "Heat above the cap (≈ 0.5–0.6 × max DD) → cut.",
    },
    {
      id: "cvar",
      formula: "B2",
      weight: 0.12,
      raw: args.cvarPct,
      score: mapScore(args.cvarPct, 2, 12),
      noteVi: "CVaR đuôi 1 ngày. Crypto fat-tail — CVaR > VaR đáng kể thì giảm.",
      noteEn: "1-day expected shortfall. Fat tails: when CVaR >> VaR, reduce.",
    },
    {
      id: "ulcer",
      formula: "B5",
      weight: 0.12,
      raw: args.ulcer,
      score: mapScore(args.ulcer, 2, 20),
      noteVi: "Đau drawdown đang lớn — thoát để bảo vệ đường cong vốn.",
      noteEn: "Drawdown pain is elevated — exit to protect the equity curve.",
    },
    {
      id: "floor",
      formula: "B6",
      weight: 0.1,
      raw: args.floorProx,
      score: mapScore(args.floorProx, 0.08, 0.9),
      noteVi: "Vốn sát sàn CPPI. Gap crypto có thể xuyên sàn trước khi rebalance.",
      noteEn: "Equity near the CPPI floor. Crypto gaps can breach before rebalance.",
    },
    {
      id: "daily",
      formula: "D6",
      weight: 0.1,
      raw: args.dailyLoss,
      score: mapScore(args.dailyLoss / Math.max(args.dailyCap, 0.005), 0.2, 1),
      noteVi: "Daily loss limit kiểu prop-firm. Chạm X% trong ngày thì khóa.",
      noteEn: "Prop-firm daily loss. Hit the cap and the desk locks.",
    },
    {
      id: "volSpike",
      formula: "D5",
      weight: 0.1,
      raw: args.volRatio,
      score: mapScore(args.volRatio, 0.9, 2.1),
      noteVi: "Vol forecast / vol hiện tại. Clustering → stop ATR trễ, thoát sớm.",
      noteEn: "Forecast vol vs realized. Clustering means ATR lags — leave early.",
    },
    {
      id: "fade",
      formula: "A4",
      weight: 0.1,
      raw: args.mom,
      score: fade,
      noteVi: "Momentum đang tắt. ROC/ATR% suy → lý do thoát xu hướng.",
      noteEn: "Momentum fading. Falling ROC/ATR% is a trend-exit tell.",
    },
    {
      id: "time",
      formula: "D1",
      weight: 0.1,
      raw: args.timeUsed,
      score: args.inTrade ? mapScore(args.timeUsed, 0.35, 1.05) : 18,
      noteVi: "Rào thời gian triple-barrier. Hết giờ mà chưa chạm TP → đóng.",
      noteEn: "Vertical barrier. Time’s up without TP → close.",
    },
  ];
}

function weighted(factors: Factor[]) {
  const w = factors.reduce((s, f) => s + f.weight, 0) || 1;
  return factors.reduce((s, f) => s + f.weight * f.score, 0) / w;
}

function simulateMethods(
  candles: Candle[],
  atrs: number[],
  sides: Side[],
  params: LabParams,
  trades: number[],
): MethodPath[] {
  const opt = optimalF(trades);
  const fKelly = Math.max(0, kellyFraction(params.winRate, params.avgWin, params.avgLoss) / 2);
  const specs = [
    { id: "ff", nameVi: "Fixed fractional", nameEn: "Fixed fractional", kind: "ff" as const },
    { id: "kelly", nameVi: "Half-Kelly", nameEn: "Half-Kelly", kind: "kelly" as const },
    { id: "optf", nameVi: "Quarter-f", nameEn: "Quarter-f", kind: "optf" as const },
    { id: "vol", nameVi: "Vol targeting", nameEn: "Vol targeting", kind: "vol" as const },
    { id: "cppi", nameVi: "CPPI", nameEn: "CPPI", kind: "cppi" as const },
  ];

  return specs.map((spec) => {
    const eq: number[] = [params.equity];
    let v = params.equity;
    const v0 = params.equity;
    let peak = v;
    for (let i = 1; i < candles.length; i++) {
      const r = candles[i - 1].c === 0 ? 0 : candles[i].c / candles[i - 1].c - 1;
      const side = sides[i - 1];
      const atrP = atrPct(atrs[i - 1] || 0, candles[i - 1].c);
      const signed = side === "long" ? r : side === "short" ? -r : 0;
      let lev = 0;
      if (spec.kind === "ff") {
        const stopPct = (atrP / 100) * params.atrK;
        lev = stopPct <= 0 ? 0 : params.riskPct / stopPct;
        lev = Math.min(lev, params.maxLeverage);
      } else if (spec.kind === "kelly") {
        lev = Math.min(fKelly * 8, params.maxLeverage);
      } else if (spec.kind === "optf") {
        lev = Math.min(opt.quarter * 8, params.maxLeverage);
      } else if (spec.kind === "vol") {
        lev = volTargetLeverage(params.targetVol, atrP, params.maxLeverage);
      } else {
        const c = cppi(v, v0, params.cppiFloor, params.cppiM);
        lev = v <= 0 ? 0 : c.exposure / v;
      }
      if (atrP > 10) lev *= 0.5;
      v = Math.max(v * (1 + lev * signed), v0 * 0.05);
      peak = Math.max(peak, v);
      eq.push(v);
    }
    const rets = returns(eq);
    const days = Math.max(eq.length - 1, 1);
    const cagr = eq[0] <= 0 ? 0 : Math.pow(eq[eq.length - 1] / eq[0], 365 / days) - 1;
    return {
      id: spec.id,
      nameVi: spec.nameVi,
      nameEn: spec.nameEn,
      equity: eq,
      maxDd: maxDrawdown(eq),
      cagr,
      ulcer: ulcerIndex(eq),
      sharpe: sharpe(rets),
    };
  });
}

export function computeLab(
  candles: Candle[],
  playhead: number,
  params: LabParams,
  trades: number[],
  positionsHeat: { entry: number; stop: number; size: number }[],
): LabResult {
  const n = candles.length;
  const i = clamp(playhead, 0, Math.max(n - 1, 0));
  const window = candles.slice(0, i + 1);
  const trs = trueRanges(window);
  const atrs = atrEma(trs, params.atrPeriod);
  const atrsSma = atrSma(trs, params.atrPeriod);
  const closes = window.map((c) => c.c);
  const rets = returns(closes);

  const sides: Side[] = closes.map((_, idx) => {
    const a = atrPct(atrs[idx] || 0, closes[idx] || 1);
    return primarySide(roc(closes, 20, idx), a);
  });

  const fullAtr = atrs;
  const entrySeries: number[] = [];
  const exitSeries: number[] = [];
  const ewma = ewmaVar(rets.length ? rets : [0], 0.94);
  const ewmaAligned = [ewma[0] ?? 0, ...ewma];

  const buildAt = (idx: number, storeSeries: boolean) => {
    const px = closes[idx] || 1;
    const atr = fullAtr[idx] || 0;
    const atrP = atrPct(atr, px);
    const rocN = roc(closes, 20, idx);
    const mom = atrP === 0 ? 0 : rocN / atrP;
    const side = sides[idx];
    const inTrade = side !== "flat";
    const entryBar = findEntryBar(sides, idx);
    const barsHeld = Math.max(0, idx - entryBar);
    const assumedEntry = inTrade ? closes[entryBar] : null;
    const assumedStop =
      assumedEntry == null
        ? null
        : side === "short"
          ? assumedEntry + params.atrK * atr
          : assumedEntry - params.atrK * atr;
    const assumedTp =
      assumedEntry == null || assumedStop == null
        ? null
        : side === "short"
          ? assumedEntry - params.tpR * (assumedStop - assumedEntry)
          : assumedEntry + params.tpR * (assumedEntry - assumedStop);
    let trail: number | null = null;
    if (inTrade && assumedStop != null) {
      trail = assumedStop;
      for (let k = entryBar; k <= idx; k++) {
        const a = fullAtr[k] || atr;
        if (side === "long") trail = Math.max(trail, window[k].h - params.atrK * a);
        else trail = Math.min(trail, window[k].l + params.atrK * a);
      }
    }

    const kFrac = kellyFraction(params.winRate, params.avgWin, params.avgLoss);
    const halfKelly = Math.max(0, kFrac / 2);
    const sqnVal = sqn(trades);
    const units = params.riskPct > 0 ? 1 / params.riskPct : 100;
    const ror = riskOfRuinVince(params.winRate, params.avgWin, params.avgLoss, units);
    const ui = ulcerIndex(closes.slice(Math.max(0, idx - 60), idx + 1));
    let heatNom = 0;
    for (const p of positionsHeat) {
      heatNom += Math.abs(p.entry - p.stop) * p.size;
    }
    const heat = params.equity <= 0 ? 0 : heatNom / params.equity;
    const cp = cppi(params.equity, params.equity, params.cppiFloor, params.cppiM);
    const yz = yangZhang(window.slice(Math.max(0, idx - 20), idx + 1));
    const yzPct = yz * 100;
    const garch = garchForecast(rets.slice(0, Math.max(0, idx)));
    const garchPct = garch * 100;
    const sigmaHat = Math.max(yz, atrP / 100 / Math.sqrt(1), 0.004);
    const pUp = clamp(0.5 + 0.22 * Math.tanh(mom / 3) - 0.15 * Math.max(garch / Math.max(yz, 1e-6) - 1, 0), 0.05, 0.95);

    const dailyRet = idx > 0 && closes[idx - 1] ? closes[idx] / closes[idx - 1] - 1 : 0;
    const dailyLoss = Math.max(0, -dailyRet);
    const trailProx =
      trail == null || assumedEntry == null
        ? 0.15
        : side === "long"
          ? clamp((trail + params.atrK * atr - px) / Math.max(params.atrK * atr, 1e-9), 0, 1)
          : clamp((px - (trail - params.atrK * atr)) / Math.max(params.atrK * atr, 1e-9), 0, 1);
    const stopDistNow = Math.abs(px - (trail ?? assumedStop ?? px));
    const trailHit =
      assumedStop == null
        ? 0
        : 1 -
          clamp(stopDistNow / Math.max(params.atrK * atr, 1e-9), 0, 1);

    const z = params.varAlpha >= 0.99 ? 2.32635 : 1.64485;
    const sigDay = stdev(rets.slice(Math.max(0, rets.length - 40))) || atrP / 100;
    const cvar = cvarParametric(params.equity, z, sigDay, 1, params.varAlpha);
    const varr = varParametric(params.equity, z, sigDay, 1);
    const floorProx =
      cp.floor <= 0 ? 0 : clamp(1 - (params.equity - cp.floor) / Math.max(params.equity, 1), 0, 1);
    const volRatio = yz <= 0 ? 1 : garch / yz;
    const timeUsed = params.holdBars <= 0 ? 0 : barsHeld / params.holdBars;

    const entryFactors = scoreEntry({
      momentum: mom,
      atrPercent: atrP,
      yzPct,
      garchPct,
      halfKelly,
      sqnVal,
      ror,
      ulcer: ui,
      heat,
      maxHeat: params.maxHeat,
      cushionRatio: params.equity <= 0 ? 0 : cp.cushion / params.equity,
      pUp,
    });
    const exitFactors = scoreExit({
      trailProx: trailHit,
      heat,
      maxHeat: params.maxHeat,
      cvarPct: params.equity <= 0 ? 0 : (cvar / params.equity) * 100,
      ulcer: ui,
      floorProx,
      dailyLoss,
      dailyCap: params.dailyLossLimit,
      volRatio,
      mom,
      timeUsed,
      inTrade,
    });

    let eScore = weighted(entryFactors);
    let xScore = weighted(exitFactors);
    if (side === "flat") {
      xScore *= 0.72;
      eScore = 0.88 * eScore + 12;
    } else {
      eScore *= 0.82;
    }
    if (cp.cushion <= 0) eScore = Math.min(eScore, 18);
    if (ror > 0.02) eScore *= 0.7;
    if (atrP > 10) eScore *= 0.5;
    eScore = clamp(eScore, 0, 100);
    xScore = clamp(xScore, 0, 100);

    if (storeSeries) {
      entrySeries.push(eScore);
      exitSeries.push(xScore);
    }

    return {
      px,
      atr,
      atrP,
      rocN,
      mom,
      side,
      inTrade,
      assumedEntry,
      assumedStop,
      assumedTp,
      trail,
      barsHeld,
      entryFactors,
      exitFactors,
      eScore,
      xScore,
      kFrac,
      halfKelly,
      sqnVal,
      ror,
      ui,
      heat,
      cp,
      yz,
      yzPct,
      garch,
      garchPct,
      pUp,
      cvar,
      varr,
      sigDay,
      sigmaHat,
      trailProx,
    };
  };

  const step = Math.max(1, Math.floor(window.length / 90));
  for (let idx = 0; idx < window.length; idx++) {
    if (idx % step === 0 || idx === window.length - 1 || idx < 3) {
      buildAt(idx, true);
    } else {
      entrySeries.push(last(entrySeries) ?? 50);
      exitSeries.push(last(exitSeries) ?? 30);
    }
  }

  const snap = buildAt(i, false);
  const units = params.riskPct > 0 ? 1 / params.riskPct : 100;
  let size = positionSize(params.equity, params.riskPct, snap.atr, params.atrK);
  let lev = snap.px <= 0 || params.equity <= 0 ? 0 : (size * snap.px) / params.equity;
  if (lev > params.maxLeverage) {
    size = (params.equity * params.maxLeverage) / snap.px;
    lev = params.maxLeverage;
  }
  if (snap.atrP > 10) size *= 0.5;
  if (snap.ror > 0.02) size *= 0.5;
  lev = snap.px <= 0 || params.equity <= 0 ? 0 : (size * snap.px) / params.equity;

  const opt = optimalF(trades);
  const levAtr = maxLeverageFromAtr(params.riskPct * 100, snap.atrP, params.atrK);
  const levVol = volTargetLeverage(params.targetVol, snap.atrP, params.maxLeverage);
  const pk = parkinson(window.slice(-20));
  const gk = garmanKlass(window.slice(-20));
  const rfDay = params.rf / 252;
  const sh = sharpe(rets, rfDay);
  const so = sortino(rets, rfDay);
  const mdd = maxDrawdown(closes);
  const days = Math.max(closes.length - 1, 1);
  const cagr =
    closes[0] > 0 ? Math.pow(closes[closes.length - 1] / closes[0], 365 / days) - 1 : 0;
  const cal = calmar(cagr, mdd);
  const upi = snap.ui <= 0 ? 0 : (mean(rets) * 252 - params.rf) / (snap.ui / 100);
  const { skew, kurt } = skewKurt(rets);
  const srDaily = rets.length < 2 || stdev(rets) === 0 ? 0 : mean(rets) / stdev(rets);
  const defl = deflatedSharpe(srDaily * Math.sqrt(252), rets.length, skew, kurt, params.trials, 0.04);

  const methods = simulateMethods(window, atrs, sides, params, trades);
  const vols = bookVols("trend");
  const corr = bookCorrelation(params.corrStress);
  const rp = riskParityWeights(vols);
  const hrp = hrpWeights(corr, vols);
  const ivSum = vols.reduce((s, v) => s + (v <= 0 ? 0 : 1 / v), 0) || 1;
  const book: BookAsset[] = BOOK_SYMBOLS.map((id, idx) => ({
    id,
    vol: vols[idx],
    iv: (vols[idx] <= 0 ? 0 : 1 / vols[idx]) / ivSum,
    rp: rp[idx],
    hrp: hrp[idx],
  }));

  const barrier = tripleBarrier(
    window,
    snap.inTrade ? findEntryBar(sides, i) : i,
    params.atrK,
    Math.max(snap.sigmaHat, 0.004),
    params.holdBars,
    snap.side === "flat" ? "long" : snap.side,
  );

  let verdict: LabResult["verdict"] = "wait";
  if (snap.eScore >= 55 && snap.xScore >= 58) verdict = "aside";
  else if (snap.xScore >= 65 && snap.inTrade) verdict = "exit";
  else if (snap.eScore >= 65 && snap.xScore < 48) verdict = "open";
  else verdict = "wait";

  const noteVi = composeNoteVi(snap, verdict, size, lev, params);
  const noteEn = composeNoteEn(snap, verdict, size, lev, params);

  return {
    playhead: i,
    candle: window[i] ?? candles[0],
    side: snap.side,
    inTrade: snap.inTrade,
    assumedEntry: snap.assumedEntry,
    assumedStop: snap.assumedStop,
    assumedTp: snap.assumedTp,
    trail: snap.trail,
    barsHeld: snap.barsHeld,
    entryScore: snap.eScore,
    exitScore: snap.xScore,
    entryFactors: snap.entryFactors,
    exitFactors: snap.exitFactors,
    verdict,
    metrics: {
      close: snap.px,
      atr: snap.atr,
      atrSma: atrsSma[i] || snap.atr,
      atrPct: snap.atrP,
      roc: snap.rocN,
      momentum: snap.mom,
      size,
      leverage: lev,
      levAtr,
      levVol,
      riskAmount: params.equity * params.riskPct,
      stopDist: snap.atr * params.atrK,
      kelly: snap.kFrac,
      halfKelly: snap.halfKelly,
      optF: opt.f,
      halfF: opt.half,
      quarterF: opt.quarter,
      twr: opt.twr,
      ror: snap.ror,
      sqn: snap.sqnVal,
      heat: snap.heat * 100,
      maxHeat: params.maxHeat * 100,
      var: snap.varr,
      cvar: snap.cvar,
      varPct: params.equity ? (snap.varr / params.equity) * 100 : 0,
      cvarPct: params.equity ? (snap.cvar / params.equity) * 100 : 0,
      ulcer: snap.ui,
      upi,
      sharpe: sh,
      sortino: so,
      calmar: cal,
      cagr: cagr * 100,
      mdd: mdd * 100,
      floor: snap.cp.floor,
      cushion: snap.cp.cushion,
      exposure: snap.cp.exposure,
      parkinson: pk * 100,
      gk: gk * 100,
      yz: snap.yzPct,
      garch: snap.garchPct,
      ewma: Math.sqrt(Math.max(last(ewma) ?? 0, 0)) * 100,
      pUp: snap.pUp * 100,
      dsr: defl.dsr,
      psr: defl.dsr,
      srStar: defl.srStar,
      skew,
      kurt,
      units,
    },
    barrier,
    series: {
      close: closes,
      atr: fullAtr,
      atrPct: closes.map((c, idx) => atrPct(fullAtr[idx] || 0, c)),
      entryScore: entrySeries,
      exitScore: exitSeries,
      ewma: ewmaAligned.map((v) => Math.sqrt(Math.max(v, 0)) * 100),
    },
    methods,
    book,
    positions: [],
    trades,
    noteVi,
    noteEn,
  };
}

function composeNoteVi(
  snap: ReturnType<typeof scorePack>,
  verdict: LabResult["verdict"],
  size: number,
  lev: number,
  params: LabParams,
) {
  const v =
    verdict === "open"
      ? "Mở vị thế"
      : verdict === "exit"
        ? "Đóng / giảm"
        : verdict === "aside"
          ? "Xung đột — đứng ngoài"
          : "Chờ";
  const side =
    snap.side === "long" ? "long" : snap.side === "short" ? "short" : "đứng ngoài";
  return `${v}. Tín hiệu sơ cấp ${side}. Momentum A4 = ${snap.mom.toFixed(2)}, ATR% = ${snap.atrP.toFixed(2)}. Half-Kelly ${ (snap.halfKelly * 100).toFixed(1)}%, SQN ${snap.sqnVal.toFixed(2)}, RoR ${(snap.ror * 100).toFixed(2)}%. Heat ${(snap.heat * 100).toFixed(1)}% / trần ${(params.maxHeat * 100).toFixed(0)}%. Size đề xuất ${size.toFixed(4)} đơn vị · đòn bẩy ${lev.toFixed(2)}×.`;
}

function composeNoteEn(
  snap: ReturnType<typeof scorePack>,
  verdict: LabResult["verdict"],
  size: number,
  lev: number,
  params: LabParams,
) {
  const v =
    verdict === "open"
      ? "Open"
      : verdict === "exit"
        ? "Exit / reduce"
        : verdict === "aside"
          ? "Conflict — stand aside"
          : "Wait";
  return `${v}. Primary signal ${snap.side}. Momentum A4 = ${snap.mom.toFixed(2)}, ATR% = ${snap.atrP.toFixed(2)}. Half-Kelly ${(snap.halfKelly * 100).toFixed(1)}%, SQN ${snap.sqnVal.toFixed(2)}, RoR ${(snap.ror * 100).toFixed(2)}%. Heat ${(snap.heat * 100).toFixed(1)}% vs cap ${(params.maxHeat * 100).toFixed(0)}%. Suggested size ${size.toFixed(4)} units · leverage ${lev.toFixed(2)}×.`;
}

/** Narrow helper so note composers can share the snapshot shape. */
function scorePack(snap: {
  mom: number;
  atrP: number;
  halfKelly: number;
  sqnVal: number;
  ror: number;
  heat: number;
  side: Side;
}) {
  return snap;
}
