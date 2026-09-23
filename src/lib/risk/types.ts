export type Side = "long" | "short" | "flat";
export type Locale = "vi" | "en";
export type ScenarioId = "trend" | "chop" | "spike" | "crash" | "squeeze";
export type InstrumentId = "BTC" | "ETH" | "SOL" | "AVAX";
export type DeskTab = "signal" | "sizing" | "book" | "formulas" | "pipeline";

export type Candle = {
  t: number;
  o: number;
  h: number;
  l: number;
  c: number;
};

export type Position = {
  id: string;
  symbol: string;
  side: "long" | "short";
  entry: number;
  size: number;
  stop: number;
  openedBar: number;
};

export type LabParams = {
  equity: number;
  riskPct: number;
  atrPeriod: number;
  atrK: number;
  maxLeverage: number;
  targetVol: number;
  maxHeat: number;
  tpR: number;
  holdBars: number;
  winRate: number;
  avgWin: number;
  avgLoss: number;
  nTrades: number;
  cppiFloor: number;
  cppiM: number;
  dailyLossLimit: number;
  maxDd: number;
  rf: number;
  varAlpha: number;
  trials: number;
  corrStress: number;
};

export type Instrument = {
  id: InstrumentId;
  symbol: string;
  name: string;
  startPrice: number;
  vol: number;
  drift: number;
};

export type Scenario = {
  id: ScenarioId;
  seed: number;
};

export type Factor = {
  id: string;
  formula: string;
  weight: number;
  raw: number;
  score: number;
  noteVi: string;
  noteEn: string;
};

export type Metric = {
  key: string;
  value: number;
  unit?: "pct" | "usd" | "x" | "n" | "score";
  digits?: number;
};

export type BarrierResult = {
  u: number;
  l: number;
  vertical: number;
  label: 1 | -1 | 0;
  hitBar: number | null;
  hitKind: "upper" | "lower" | "time" | "open";
};

export type MethodPath = {
  id: string;
  nameVi: string;
  nameEn: string;
  equity: number[];
  maxDd: number;
  cagr: number;
  ulcer: number;
  sharpe: number;
};

export type BookAsset = {
  id: string;
  vol: number;
  iv: number;
  rp: number;
  hrp: number;
};

export type LabResult = {
  playhead: number;
  candle: Candle;
  side: Side;
  inTrade: boolean;
  assumedEntry: number | null;
  assumedStop: number | null;
  assumedTp: number | null;
  trail: number | null;
  barsHeld: number;
  entryScore: number;
  exitScore: number;
  entryFactors: Factor[];
  exitFactors: Factor[];
  verdict: "open" | "exit" | "wait" | "aside";
  metrics: Record<string, number>;
  barrier: BarrierResult;
  series: {
    close: number[];
    atr: number[];
    atrPct: number[];
    entryScore: number[];
    exitScore: number[];
    ewma: number[];
  };
  methods: MethodPath[];
  book: BookAsset[];
  positions: Position[];
  trades: number[];
  noteVi: string;
  noteEn: string;
};
