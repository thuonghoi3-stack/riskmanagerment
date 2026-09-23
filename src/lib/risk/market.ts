import type {
  Candle,
  Instrument,
  InstrumentId,
  LabParams,
  Position,
  ScenarioId,
} from "./types";

export const INSTRUMENTS: Instrument[] = [
  { id: "BTC", symbol: "BTCUSDT", name: "Bitcoin", startPrice: 64250, vol: 0.028, drift: 0.0006 },
  { id: "ETH", symbol: "ETHUSDT", name: "Ethereum", startPrice: 3420, vol: 0.034, drift: 0.0005 },
  { id: "SOL", symbol: "SOLUSDT", name: "Solana", startPrice: 148, vol: 0.048, drift: 0.0007 },
  { id: "AVAX", symbol: "AVAXUSDT", name: "Avalanche", startPrice: 28.4, vol: 0.052, drift: 0.0003 },
];

export const DEFAULT_PARAMS: LabParams = {
  equity: 10_000,
  riskPct: 0.01,
  atrPeriod: 14,
  atrK: 2,
  maxLeverage: 5,
  targetVol: 0.15,
  maxHeat: 0.12,
  tpR: 2,
  holdBars: 20,
  winRate: 0.55,
  avgWin: 1.8,
  avgLoss: 1,
  nTrades: 80,
  cppiFloor: 0.8,
  cppiM: 4,
  dailyLossLimit: 0.04,
  maxDd: 0.2,
  rf: 0.04,
  varAlpha: 0.95,
  trials: 24,
  corrStress: 0,
};

export function instrumentById(id: InstrumentId) {
  return INSTRUMENTS.find((x) => x.id === id) ?? INSTRUMENTS[0];
}

function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randn(rng: () => number) {
  const u = Math.max(rng(), 1e-12);
  const v = Math.max(rng(), 1e-12);
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export function generateCandles(
  instrument: Instrument,
  scenario: ScenarioId,
  n = 180,
): Candle[] {
  const seedMap: Record<ScenarioId, number> = {
    trend: 14011,
    chop: 22007,
    spike: 33019,
    crash: 44029,
    squeeze: 55037,
  };
  const rng = mulberry32(seedMap[scenario] + instrument.id.charCodeAt(0) * 97);
  const out: Candle[] = [];
  let price = instrument.startPrice;
  let vol = instrument.vol;
  const t0 = 1_704_067_200_000;

  for (let i = 0; i < n; i++) {
    const prog = i / (n - 1);
    let drift = instrument.drift;
    let shock = 0;

    if (scenario === "trend") {
      drift = instrument.drift * 2.4;
      vol = instrument.vol * (0.75 + 0.15 * Math.sin(prog * 8));
    } else if (scenario === "chop") {
      drift = (instrument.startPrice - price) / instrument.startPrice * 0.08;
      vol = instrument.vol * 0.7;
    } else if (scenario === "spike") {
      vol = instrument.vol * (prog < 0.62 ? 0.55 : 1.8);
      if (i === Math.floor(n * 0.64)) shock = -0.07;
    } else if (scenario === "crash") {
      drift = prog > 0.45 && prog < 0.7 ? -0.012 : instrument.drift * 0.3;
      vol = instrument.vol * (prog > 0.45 && prog < 0.78 ? 2.1 : 0.9);
    } else if (scenario === "squeeze") {
      vol = instrument.vol * (0.35 + 0.05 * prog);
      if (prog > 0.72) {
        vol = instrument.vol * 1.6;
        drift = instrument.drift * 4;
      }
    }

    vol = 0.92 * vol + 0.08 * instrument.vol * (0.6 + rng());
    const r = drift + vol * randn(rng) + shock;
    const o = price;
    let c = o * Math.exp(r);
    const wick = vol * o * (0.35 + rng() * 0.8);
    let h = Math.max(o, c) + wick * rng();
    let l = Math.min(o, c) - wick * rng();
    if (l <= 0) l = Math.min(o, c) * 0.98;
    h = Math.max(h, o, c);
    l = Math.min(l, o, c);
    c = Math.max(c, l * 1.0001);
    out.push({ t: t0 + i * 86_400_000, o, h, l, c });
    price = c;
  }
  return out;
}

export function synthesizeTrades(
  params: LabParams,
  seed: number,
): number[] {
  const rng = mulberry32(seed ^ 0x9e3779b9);
  const n = Math.max(8, Math.round(params.nTrades));
  const trades: number[] = [];
  for (let i = 0; i < n; i++) {
    const win = rng() < params.winRate;
    const noise = 0.55 + rng();
    if (win) trades.push(params.avgWin * noise);
    else trades.push(-params.avgLoss * noise);
  }
  return trades;
}

export const BOOK_SYMBOLS = ["BTC", "ETH", "SOL", "AVAX", "LINK", "DOGE"] as const;

export function bookCorrelation(stress: number) {
  const base: number[][] = [
    [1, 0.78, 0.62, 0.58, 0.54, 0.48],
    [0.78, 1, 0.66, 0.6, 0.57, 0.5],
    [0.62, 0.66, 1, 0.7, 0.55, 0.58],
    [0.58, 0.6, 0.7, 1, 0.52, 0.5],
    [0.54, 0.57, 0.55, 0.52, 1, 0.42],
    [0.48, 0.5, 0.58, 0.5, 0.42, 1],
  ];
  const s = Math.max(0, Math.min(1, stress));
  return base.map((row, i) =>
    row.map((v, j) => (i === j ? 1 : v + (0.95 - v) * s)),
  );
}

export function bookVols(scenario: ScenarioId): number[] {
  const base = [0.55, 0.62, 0.78, 0.82, 0.7, 0.95];
  const k =
    scenario === "spike" || scenario === "crash"
      ? 1.35
      : scenario === "squeeze"
        ? 0.7
        : 1;
  return base.map((v) => v * k);
}

export function demoPositions(
  candles: Candle[],
  playhead: number,
  atr: number,
  k: number,
): Position[] {
  const px = candles[playhead]?.c ?? 0;
  const stopDist = atr * k;
  return [
    {
      id: "p1",
      symbol: "ETHUSDT",
      side: "long",
      entry: px * 0.985,
      size: 1.6,
      stop: px * 0.985 - stopDist * 0.6,
      openedBar: Math.max(0, playhead - 7),
    },
    {
      id: "p2",
      symbol: "SOLUSDT",
      side: "long",
      entry: px > 0 ? px * 0.012 : 140,
      size: 18,
      stop: (px > 0 ? px * 0.012 : 140) - stopDist * 0.02,
      openedBar: Math.max(0, playhead - 4),
    },
    {
      id: "p3",
      symbol: "LINKUSDT",
      side: "short",
      entry: 14.8,
      size: 40,
      stop: 14.8 + stopDist * 0.008,
      openedBar: Math.max(0, playhead - 3),
    },
  ];
}
