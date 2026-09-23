import { clamp } from "@/lib/utils";
import type { Candle } from "./types";

export function mean(xs: number[]) {
  if (!xs.length) return 0;
  return xs.reduce((a, b) => a + b, 0) / xs.length;
}

export function variance(xs: number[], ddof = 1) {
  if (xs.length < 2) return 0;
  const m = mean(xs);
  let s = 0;
  for (const x of xs) s += (x - m) ** 2;
  return s / (xs.length - ddof);
}

export function stdev(xs: number[]) {
  return Math.sqrt(Math.max(variance(xs), 0));
}

export function returns(closes: number[]) {
  const r: number[] = [];
  for (let i = 1; i < closes.length; i++) {
    const prev = closes[i - 1];
    r.push(prev === 0 ? 0 : closes[i] / prev - 1);
  }
  return r;
}

export function erf(x: number) {
  const a1 = 0.254829592;
  const a2 = -0.284496736;
  const a3 = 1.421413741;
  const a4 = -1.453152027;
  const a5 = 1.061405429;
  const p = 0.3275911;
  const sign = x < 0 ? -1 : 1;
  const ax = Math.abs(x);
  const t = 1 / (1 + p * ax);
  const y =
    1 -
    ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-ax * ax);
  return sign * y;
}

export function normPdf(x: number) {
  return Math.exp(-0.5 * x * x) / Math.sqrt(2 * Math.PI);
}

export function normCdf(x: number) {
  return 0.5 * (1 + erf(x / Math.SQRT2));
}

/** Acklam's inverse normal CDF */
export function normInv(p: number) {
  const a = [
    -3.969683028665376e1, 2.209460984245205e2, -2.759285104469687e2,
    1.383577509590705e2, -3.066479806614716e1, 2.506628277459239,
  ];
  const b = [
    -5.447609879822406e1, 1.615858368580409e2, -1.556989798598866e2,
    6.680131188771972e1, -1.328068155288572e1,
  ];
  const c = [
    -7.784894002430293e-3, -3.223964580411365e-1, -2.400758277161838,
    -2.549732539343734, 4.374664141464968, 2.938163982698783,
  ];
  const d = [
    7.784695709041462e-3, 3.224671290700398e-1, 2.445134137142996,
    3.754408661907416,
  ];
  const plow = 0.02425;
  const phigh = 1 - plow;
  if (p <= 0) return -Infinity;
  if (p >= 1) return Infinity;
  if (p < plow) {
    const q = Math.sqrt(-2 * Math.log(p));
    return (
      (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
      ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
    );
  }
  if (p <= phigh) {
    const q = p - 0.5;
    const r = q * q;
    return (
      ((((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) *
        q) /
      (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1)
    );
  }
  const q = Math.sqrt(-2 * Math.log(1 - p));
  return -(
    (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) /
    ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1)
  );
}

export function trueRange(h: number, l: number, prevC: number) {
  return Math.max(h - l, Math.abs(h - prevC), Math.abs(l - prevC));
}

export function trueRanges(candles: Candle[]) {
  const trs: number[] = [];
  for (let i = 0; i < candles.length; i++) {
    const prev = i === 0 ? candles[i].c : candles[i - 1].c;
    trs.push(trueRange(candles[i].h, candles[i].l, prev));
  }
  return trs;
}

export function atrSma(trs: number[], n: number) {
  const out = new Array(trs.length).fill(0);
  let sum = 0;
  for (let i = 0; i < trs.length; i++) {
    sum += trs[i];
    if (i >= n) sum -= trs[i - n];
    if (i >= n - 1) out[i] = sum / n;
    else out[i] = sum / (i + 1);
  }
  return out;
}

export function atrEma(trs: number[], n: number) {
  const out = new Array(trs.length).fill(0);
  if (!trs.length) return out;
  out[0] = trs[0];
  for (let i = 1; i < trs.length; i++) {
    out[i] = (out[i - 1] * (n - 1) + trs[i]) / n;
  }
  return out;
}

export function atrPct(atr: number, close: number) {
  if (close === 0) return 0;
  return (atr / close) * 100;
}

export function roc(closes: number[], n: number, i: number) {
  const j = i - n;
  if (j < 0 || closes[j] === 0) return 0;
  return ((closes[i] - closes[j]) / closes[j]) * 100;
}

export function positionSize(
  equity: number,
  riskPct: number,
  atr: number,
  k: number,
) {
  const stop = atr * k;
  if (stop <= 0) return 0;
  return (equity * riskPct) / stop;
}

export function maxLeverageFromAtr(
  targetRiskPct: number,
  atrPercent: number,
  k: number,
) {
  if (atrPercent <= 0 || k <= 0) return 0;
  return (targetRiskPct / atrPercent) * (1 / k);
}

export function volTargetLeverage(
  targetVol: number,
  atrPercent: number,
  maxLev: number,
) {
  const realized = (atrPercent / 100) * Math.sqrt(252);
  if (realized <= 0) return 0;
  return Math.min(targetVol / realized, maxLev);
}

export function kellyFraction(p: number, avgWin: number, avgLoss: number) {
  const b = avgLoss === 0 ? 0 : avgWin / avgLoss;
  if (b <= 0) return 0;
  const q = 1 - p;
  return (p * b - q) / b;
}

export function ulcerIndex(prices: number[]) {
  if (!prices.length) return 0;
  let peak = prices[0];
  let acc = 0;
  for (const p of prices) {
    peak = Math.max(peak, p);
    const d = peak === 0 ? 0 : ((p - peak) / peak) * 100;
    acc += d * d;
  }
  return Math.sqrt(acc / prices.length);
}

export function maxDrawdown(prices: number[]) {
  let peak = prices[0] ?? 0;
  let mdd = 0;
  for (const p of prices) {
    peak = Math.max(peak, p);
    if (peak > 0) mdd = Math.min(mdd, p / peak - 1);
  }
  return mdd;
}

export function sharpe(rets: number[], rfPer = 0) {
  if (rets.length < 2) return 0;
  const ex = rets.map((r) => r - rfPer);
  const s = stdev(ex);
  if (s === 0) return 0;
  return (mean(ex) / s) * Math.sqrt(252);
}

export function sortino(rets: number[], rfPer = 0) {
  const downs = rets.filter((r) => r - rfPer < 0).map((r) => (r - rfPer) ** 2);
  if (!downs.length) return 0;
  const dd = Math.sqrt(mean(downs));
  if (dd === 0) return 0;
  return ((mean(rets) - rfPer) / dd) * Math.sqrt(252);
}

export function calmar(cagr: number, mdd: number) {
  const dd = Math.abs(mdd);
  if (dd === 0) return 0;
  return cagr / dd;
}

export function sqn(rs: number[]) {
  if (rs.length < 2) return 0;
  const s = stdev(rs);
  if (s === 0) return 0;
  const n = Math.min(rs.length, 100);
  return (mean(rs) / s) * Math.sqrt(n);
}

export function riskOfRuin11(winRate: number, units: number) {
  if (winRate <= 0) return 1;
  if (winRate >= 1) return 0;
  return ((1 - winRate) / winRate) ** units;
}

export function riskOfRuinVince(
  winRate: number,
  avgWin: number,
  avgLoss: number,
  units: number,
) {
  if (avgLoss <= 0) return 1;
  const A = (winRate * avgWin - (1 - winRate) * avgLoss) / avgLoss;
  if (A <= 0) return 1;
  return ((1 - A) / (1 + A)) ** units;
}

export function varParametric(
  V: number,
  z: number,
  sigma: number,
  T: number,
) {
  return V * z * sigma * Math.sqrt(T);
}

export function cvarParametric(
  V: number,
  z: number,
  sigma: number,
  T: number,
  alpha: number,
) {
  const tail = 1 - alpha;
  if (tail <= 0) return varParametric(V, z, sigma, T);
  return V * sigma * Math.sqrt(T) * (normPdf(z) / tail);
}

export function optimalF(trades: number[]) {
  const losses = trades.filter((t) => t < 0);
  if (!losses.length) return { f: 0, twr: 1, half: 0, quarter: 0 };
  const largestLoss = Math.min(...losses);
  if (largestLoss >= 0) return { f: 0, twr: 1, half: 0, quarter: 0 };

  let bestF = 0.01;
  let bestTwr = 0;
  for (let step = 1; step <= 99; step++) {
    const f = step / 100;
    let twr = 1;
    let ruined = false;
    for (const trade of trades) {
      const hpr = 1 + f * (-trade / largestLoss);
      if (hpr <= 0) {
        ruined = true;
        break;
      }
      twr *= hpr;
    }
    if (!ruined && twr > bestTwr) {
      bestTwr = twr;
      bestF = f;
    }
  }
  return { f: bestF, twr: bestTwr, half: bestF / 2, quarter: bestF / 4 };
}

export function cppi(Vt: number, V0: number, floorPct: number, m: number) {
  const floor = floorPct * V0;
  const cushion = Math.max(Vt - floor, 0);
  const exposure = Math.min(m * cushion, Vt);
  return { floor, cushion, exposure };
}

export function parkinson(candles: Candle[]) {
  if (!candles.length) return 0;
  let acc = 0;
  for (const k of candles) {
    if (k.l <= 0 || k.h <= 0) continue;
    const x = Math.log(k.h / k.l);
    acc += x * x;
  }
  return Math.sqrt((1 / (4 * Math.log(2))) * (acc / candles.length));
}

export function garmanKlass(candles: Candle[]) {
  if (!candles.length) return 0;
  let acc = 0;
  for (const k of candles) {
    if (k.l <= 0 || k.o <= 0) continue;
    const hl = Math.log(k.h / k.l);
    const co = Math.log(k.c / k.o);
    acc += 0.5 * hl * hl - (2 * Math.log(2) - 1) * co * co;
  }
  return Math.sqrt(Math.max(acc / candles.length, 0));
}

export function rogersSatchell(candles: Candle[]) {
  if (!candles.length) return 0;
  let acc = 0;
  for (const k of candles) {
    if (k.o <= 0 || k.c <= 0) continue;
    acc +=
      Math.log(k.h / k.c) * Math.log(k.h / k.o) +
      Math.log(k.l / k.c) * Math.log(k.l / k.o);
  }
  return Math.sqrt(Math.max(acc / candles.length, 0));
}

export function yangZhang(candles: Candle[]) {
  if (candles.length < 2) return garmanKlass(candles);
  const n = candles.length;
  const overnight: number[] = [];
  const openClose: number[] = [];
  for (let i = 1; i < n; i++) {
    if (candles[i - 1].c > 0 && candles[i].o > 0) {
      overnight.push(Math.log(candles[i].o / candles[i - 1].c));
    }
    if (candles[i].o > 0) {
      openClose.push(Math.log(candles[i].c / candles[i].o));
    }
  }
  const k = 0.34 / (1.34 + (n + 1) / (n - 1));
  const rs = rogersSatchell(candles.slice(1));
  const so = variance(overnight);
  const sc = variance(openClose);
  return Math.sqrt(Math.max(so + k * sc + (1 - k) * rs * rs, 0));
}

export function ewmaVar(rets: number[], lambda = 0.94) {
  const out: number[] = [];
  if (!rets.length) return out;
  let v = Math.max(rets[0] ** 2, 1e-12);
  out.push(v);
  for (let i = 1; i < rets.length; i++) {
    v = lambda * v + (1 - lambda) * rets[i] ** 2;
    out.push(v);
  }
  return out;
}

export function garchForecast(
  rets: number[],
  alpha = 0.08,
  beta = 0.9,
) {
  if (rets.length < 4) return stdev(rets);
  const lr = Math.max(variance(rets), 1e-12);
  const omega = lr * Math.max(1 - alpha - beta, 1e-6);
  let v = lr;
  for (const r of rets) {
    v = omega + alpha * r * r + beta * v;
  }
  return Math.sqrt(Math.max(v, 0));
}

export function skewKurt(xs: number[]) {
  if (xs.length < 4) return { skew: 0, kurt: 3 };
  const m = mean(xs);
  const s = stdev(xs);
  if (s === 0) return { skew: 0, kurt: 3 };
  let m3 = 0;
  let m4 = 0;
  for (const x of xs) {
    const z = (x - m) / s;
    m3 += z ** 3;
    m4 += z ** 4;
  }
  return { skew: m3 / xs.length, kurt: m4 / xs.length };
}

export function probabilisticSharpe(
  srHat: number,
  srStar: number,
  T: number,
  skew: number,
  kurt: number,
) {
  if (T <= 1) return 0;
  const denom = Math.sqrt(
    Math.max(1 - skew * srHat + ((kurt - 1) / 4) * srHat * srHat, 1e-12),
  );
  const z = ((srHat - srStar) * Math.sqrt(T - 1)) / denom;
  return normCdf(z);
}

export function deflatedSharpe(
  srHat: number,
  T: number,
  skew: number,
  kurt: number,
  nTrials: number,
  srVar: number,
) {
  const n = Math.max(nTrials, 1);
  const gamma = 0.5772156649;
  const v = Math.max(srVar, 1e-8);
  const srStar =
    Math.sqrt(v) *
    ((1 - gamma) * normInv(1 - 1 / n) + gamma * normInv(1 - 1 / (n * Math.E)));
  return {
    srStar,
    dsr: probabilisticSharpe(srHat, srStar, T, skew, kurt),
  };
}

export function riskParityWeights(sigmas: number[]) {
  const inv = sigmas.map((s) => (s <= 0 ? 0 : 1 / s));
  const s = inv.reduce((a, b) => a + b, 0) || 1;
  return inv.map((x) => x / s);
}

function corrDistance(corr: number[][]) {
  const n = corr.length;
  const d = Array.from({ length: n }, () => Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      d[i][j] = Math.sqrt(Math.max(0.5 * (1 - corr[i][j]), 0));
    }
  }
  return d;
}

/** Average-linkage agglomerative order (quasi-diagonalization). */
export function leafOrder(corr: number[][]) {
  const n = corr.length;
  const d = corrDistance(corr);
  type Node = { members: number[]; id: number };
  const nodes: Node[] = Array.from({ length: n }, (_, i) => ({
    members: [i],
    id: i,
  }));
  let live = nodes.map((_, i) => i);
  const distClusters = (a: Node, b: Node) => {
    let s = 0;
    let c = 0;
    for (const i of a.members) {
      for (const j of b.members) {
        s += d[i][j];
        c++;
      }
    }
    return c ? s / c : 0;
  };
  while (live.length > 1) {
    let bi = 0;
    let bj = 1;
    let best = Infinity;
    for (let i = 0; i < live.length; i++) {
      for (let j = i + 1; j < live.length; j++) {
        const dd = distClusters(nodes[live[i]], nodes[live[j]]);
        if (dd < best) {
          best = dd;
          bi = i;
          bj = j;
        }
      }
    }
    const a = nodes[live[bi]];
    const b = nodes[live[bj]];
    const merged: Node = {
      members: [...a.members, ...b.members],
      id: nodes.length,
    };
    nodes.push(merged);
    const next = live.filter((_, k) => k !== bi && k !== bj);
    next.push(nodes.length - 1);
    live = next;
  }
  return nodes[live[0]]?.members ?? Array.from({ length: n }, (_, i) => i);
}

export function hrpWeights(corr: number[][], vols: number[]) {
  const n = corr.length;
  const order = leafOrder(corr);
  const w = Array(n).fill(1);
  const cov = (idx: number[]) => {
    let v = 0;
    for (const i of idx) {
      for (const j of idx) {
        const ci = vols[i] * vols[j] * corr[i][j];
        v += w[i] * w[j] * ci;
      }
    }
    return Math.max(v, 1e-12);
  };
  const bisect = (items: number[]) => {
    if (items.length <= 1) return;
    const mid = Math.ceil(items.length / 2);
    const left = items.slice(0, mid);
    const right = items.slice(mid);
    const v1 = cov(left);
    const v2 = cov(right);
    const a = 1 - v1 / (v1 + v2);
    for (const i of left) w[i] *= a;
    for (const i of right) w[i] *= 1 - a;
    bisect(left);
    bisect(right);
  };
  bisect(order);
  const s = w.reduce((a, b) => a + b, 0) || 1;
  return w.map((x) => x / s);
}

export function mapScore(
  value: number,
  lo: number,
  hi: number,
  invert = false,
) {
  if (hi === lo) return 50;
  const t = clamp((value - lo) / (hi - lo), 0, 1);
  return (invert ? 1 - t : t) * 100;
}

export function gaussianScore(value: number, mu: number, sigma: number) {
  if (sigma <= 0) return 0;
  const z = (value - mu) / sigma;
  return 100 * Math.exp(-0.5 * z * z);
}
