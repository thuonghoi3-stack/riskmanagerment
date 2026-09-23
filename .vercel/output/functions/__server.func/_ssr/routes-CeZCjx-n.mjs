import { i as __toESM } from "../_runtime.mjs";
import { c as require_react, r as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { a as Play, i as RotateCcw, o as Pause, r as SlidersHorizontal, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { a as DialogPortal, i as DialogOverlay, n as DialogClose, o as DialogTitle, r as DialogContent, s as DialogTrigger, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as Trigger, n as List, r as Root2, t as Content } from "../_libs/radix-ui__react-tabs.mjs";
import { t as Provider } from "../_libs/radix-ui__react-tooltip.mjs";
import { a as Area, c as ReferenceLine, i as XAxis, l as ResponsiveContainer, n as LineChart, o as Line, r as YAxis, s as CartesianGrid, t as ComposedChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CeZCjx-n.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var dict = {
	vi: {
		app: "Vantage",
		tag: "Bàn nghiên cứu rủi ro hệ thống",
		entry: "Điểm vào",
		exit: "Điểm thoát",
		open: "Mở vị thế",
		close: "Đóng / giảm",
		wait: "Chờ",
		aside: "Đứng ngoài",
		long: "Long",
		short: "Short",
		flat: "Đứng ngoài",
		inTrade: "Đang có vị thế",
		hypothetical: "Giả định theo tín hiệu sơ cấp",
		signal: "Tín hiệu",
		sizing: "Định cỡ",
		book: "Danh mục",
		formulas: "Công thức",
		pipeline: "Quy trình",
		params: "Tham số",
		account: "Tài khoản",
		market: "Thị trường",
		system: "Hệ thống",
		instrument: "Cặp",
		scenario: "Kịch bản",
		equity: "Vốn",
		riskPct: "Rủi ro / lệnh",
		atrPeriod: "Chu kỳ ATR",
		atrK: "Hệ số k",
		maxLev: "Đòn bẩy trần",
		targetVol: "Vol mục tiêu",
		maxHeat: "Heat trần",
		tpR: "Take-profit R",
		holdBars: "Rào thời gian",
		winRate: "Win rate",
		avgWin: "Thắng TB (R)",
		avgLoss: "Thua TB (R)",
		nTrades: "Số lệnh mẫu",
		cppiFloor: "Sàn CPPI",
		cppiM: "Multiplier",
		dailyLoss: "Lỗ ngày trần",
		maxDd: "Drawdown trần",
		corrStress: "Stress tương quan",
		playhead: "Mốc thời gian",
		size: "Kích thước",
		leverage: "Đòn bẩy",
		stop: "Stop",
		trail: "Trailing",
		heat: "Nhiệt",
		ror: "RoR",
		sqn: "SQN",
		cvar: "CVaR",
		ulcer: "Ulcer",
		kelly: "Kelly",
		factors: "Đóng góp điểm",
		methods: "Đường cong vốn",
		replay: "Phát",
		pause: "Dừng",
		reset: "Đầu chuỗi",
		live: "Nến hiện tại",
		barrier: "Triple-barrier",
		upper: "Rào trên",
		lower: "Rào dưới",
		vertical: "Rào thời gian",
		hit: "Chạm",
		research: "Ghi chú nghiên cứu",
		partA: "Phần A — Nền tảng",
		partB: "Phần B — Chuyên gia",
		partD: "Phần D — Quant",
		search: "Lọc công thức",
		weight: "Trọng số",
		raw: "Giá trị",
		score: "Điểm",
		rp: "Risk parity",
		hrp: "HRP",
		iv: "Inverse-vol",
		vol: "σ",
		prop: "Vòng khóa prop-firm",
		dailyHeadroom: "Dư địa lỗ ngày",
		ddHeadroom: "Dư địa drawdown",
		cushion: "Cushion",
		floor: "Sàn",
		exposure: "Exposure",
		units: "đơn vị",
		scenarioTrend: "Xu hướng",
		scenarioChop: "Đi ngang",
		scenarioSpike: "Vol spike",
		scenarioCrash: "Sập",
		scenarioSqueeze: "Nén rồi bung",
		pipelineTitle: "Tám bước tích hợp",
		pipelineLead: "Cùng một bộ tham số chạy xuyên suốt pipeline — từ đo vol đến đòn bẩy cuối.",
		copyParams: "Sao chép JSON",
		copied: "Đã chép",
		verdictOpen: "Mở",
		verdictExit: "Thoát",
		verdictWait: "Chờ",
		verdictAside: "Xung đột",
		vsCap: "so với trần",
		assumedFrom: "Vào lệnh từ nến",
		barsHeld: "Số nến giữ",
		metaP: "P(chạm TP)",
		dsr: "DSR",
		compare: "So sánh phương pháp định cỡ",
		formulaLive: "Giá trị live",
		emptySearch: "Không khớp công thức nào.",
		mobileParams: "Tham số",
		footer: "Công thức theo tài liệu quản lý vị thế & rủi ro — không phải lời khuyên đầu tư."
	},
	en: {
		app: "Vantage",
		tag: "Systematic risk research desk",
		entry: "Entry score",
		exit: "Exit score",
		open: "Open position",
		close: "Exit / reduce",
		wait: "Wait",
		aside: "Stand aside",
		long: "Long",
		short: "Short",
		flat: "Flat",
		inTrade: "In a trade",
		hypothetical: "Assumed from primary signal",
		signal: "Signal",
		sizing: "Sizing",
		book: "Book",
		formulas: "Formulas",
		pipeline: "Pipeline",
		params: "Parameters",
		account: "Account",
		market: "Market",
		system: "System",
		instrument: "Pair",
		scenario: "Scenario",
		equity: "Equity",
		riskPct: "Risk / trade",
		atrPeriod: "ATR period",
		atrK: "ATR multiple k",
		maxLev: "Leverage cap",
		targetVol: "Target vol",
		maxHeat: "Heat cap",
		tpR: "Take-profit R",
		holdBars: "Time barrier",
		winRate: "Win rate",
		avgWin: "Avg win (R)",
		avgLoss: "Avg loss (R)",
		nTrades: "Sample trades",
		cppiFloor: "CPPI floor",
		cppiM: "Multiplier",
		dailyLoss: "Daily loss cap",
		maxDd: "Max drawdown",
		corrStress: "Correlation stress",
		playhead: "Playhead",
		size: "Size",
		leverage: "Leverage",
		stop: "Stop",
		trail: "Trail",
		heat: "Heat",
		ror: "RoR",
		sqn: "SQN",
		cvar: "CVaR",
		ulcer: "Ulcer",
		kelly: "Kelly",
		factors: "Score contribution",
		methods: "Equity curves",
		replay: "Play",
		pause: "Pause",
		reset: "Start",
		live: "Current bar",
		barrier: "Triple-barrier",
		upper: "Upper",
		lower: "Lower",
		vertical: "Vertical",
		hit: "Hit",
		research: "Research note",
		partA: "Part A — Foundations",
		partB: "Part B — Practitioner",
		partD: "Part D — Quant",
		search: "Filter formulas",
		weight: "Weight",
		raw: "Value",
		score: "Score",
		rp: "Risk parity",
		hrp: "HRP",
		iv: "Inverse-vol",
		vol: "σ",
		prop: "Prop-firm locks",
		dailyHeadroom: "Daily loss room",
		ddHeadroom: "Drawdown room",
		cushion: "Cushion",
		floor: "Floor",
		exposure: "Exposure",
		units: "units",
		scenarioTrend: "Trend",
		scenarioChop: "Chop",
		scenarioSpike: "Vol spike",
		scenarioCrash: "Crash",
		scenarioSqueeze: "Squeeze",
		pipelineTitle: "Eight-step integration",
		pipelineLead: "One parameter set runs the whole pipeline — from vol measurement to final leverage.",
		copyParams: "Copy JSON",
		copied: "Copied",
		verdictOpen: "Open",
		verdictExit: "Exit",
		verdictWait: "Wait",
		verdictAside: "Conflict",
		vsCap: "vs cap",
		assumedFrom: "Entered on bar",
		barsHeld: "Bars held",
		metaP: "P(hit TP)",
		dsr: "DSR",
		compare: "Sizer comparison",
		formulaLive: "Live values",
		emptySearch: "No formulas match.",
		mobileParams: "Parameters",
		footer: "Formulas from the position & risk note — not investment advice."
	}
};
function t(locale, key) {
	return dict[locale][key];
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function clamp(n, min, max) {
	return Math.min(max, Math.max(min, n));
}
function formatNum(n, digits = 2, opts) {
	if (!Number.isFinite(n)) return "—";
	if (opts?.compact && Math.abs(n) >= 1e3) return (opts.sign && n > 0 ? "+" : "") + new Intl.NumberFormat("en-US", {
		notation: "compact",
		maximumFractionDigits: 1
	}).format(n);
	const abs = Math.abs(n);
	const d = abs >= 1e3 ? 0 : abs >= 100 ? 1 : digits;
	const body = n.toLocaleString("en-US", {
		minimumFractionDigits: d,
		maximumFractionDigits: d
	});
	if (opts?.sign && n > 0) return `+${body}`;
	return body;
}
function formatPct(n, digits = 1, sign = false) {
	if (!Number.isFinite(n)) return "—";
	const body = `${n.toFixed(digits)}%`;
	if (sign && n > 0) return `+${body}`;
	return body;
}
function formatUsd(n, digits = 0) {
	if (!Number.isFinite(n)) return "—";
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: digits,
		minimumFractionDigits: digits
	}).format(n);
}
function mean(xs) {
	if (!xs.length) return 0;
	return xs.reduce((a, b) => a + b, 0) / xs.length;
}
function variance(xs, ddof = 1) {
	if (xs.length < 2) return 0;
	const m = mean(xs);
	let s = 0;
	for (const x of xs) s += (x - m) ** 2;
	return s / (xs.length - ddof);
}
function stdev(xs) {
	return Math.sqrt(Math.max(variance(xs), 0));
}
function returns(closes) {
	const r = [];
	for (let i = 1; i < closes.length; i++) {
		const prev = closes[i - 1];
		r.push(prev === 0 ? 0 : closes[i] / prev - 1);
	}
	return r;
}
function erf(x) {
	const a1 = .254829592;
	const a2 = -.284496736;
	const a3 = 1.421413741;
	const a4 = -1.453152027;
	const a5 = 1.061405429;
	const p = .3275911;
	const sign = x < 0 ? -1 : 1;
	const ax = Math.abs(x);
	const t = 1 / (1 + p * ax);
	return sign * (1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-ax * ax));
}
function normPdf(x) {
	return Math.exp(-.5 * x * x) / Math.sqrt(2 * Math.PI);
}
function normCdf(x) {
	return .5 * (1 + erf(x / Math.SQRT2));
}
/** Acklam's inverse normal CDF */
function normInv(p) {
	const a = [
		-39.69683028665376,
		220.9460984245205,
		-275.9285104469687,
		138.3577509590705,
		-30.66479806614716,
		2.506628277459239
	];
	const b = [
		-54.47609879822406,
		161.5858368580409,
		-155.6989798598866,
		66.80131188771972,
		-13.28068155288572
	];
	const c = [
		-.007784894002430293,
		-.3223964580411365,
		-2.400758277161838,
		-2.549732539343734,
		4.374664141464968,
		2.938163982698783
	];
	const d = [
		.007784695709041462,
		.3224671290700398,
		2.445134137142996,
		3.754408661907416
	];
	const plow = .02425;
	const phigh = .97575;
	if (p <= 0) return -Infinity;
	if (p >= 1) return Infinity;
	if (p < plow) {
		const q = Math.sqrt(-2 * Math.log(p));
		return (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1);
	}
	if (p <= phigh) {
		const q = p - .5;
		const r = q * q;
		return (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1);
	}
	const q = Math.sqrt(-2 * Math.log(1 - p));
	return -((((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1));
}
function trueRange(h, l, prevC) {
	return Math.max(h - l, Math.abs(h - prevC), Math.abs(l - prevC));
}
function trueRanges(candles) {
	const trs = [];
	for (let i = 0; i < candles.length; i++) {
		const prev = i === 0 ? candles[i].c : candles[i - 1].c;
		trs.push(trueRange(candles[i].h, candles[i].l, prev));
	}
	return trs;
}
function atrSma(trs, n) {
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
function atrEma(trs, n) {
	const out = new Array(trs.length).fill(0);
	if (!trs.length) return out;
	out[0] = trs[0];
	for (let i = 1; i < trs.length; i++) out[i] = (out[i - 1] * (n - 1) + trs[i]) / n;
	return out;
}
function atrPct(atr, close) {
	if (close === 0) return 0;
	return atr / close * 100;
}
function roc(closes, n, i) {
	const j = i - n;
	if (j < 0 || closes[j] === 0) return 0;
	return (closes[i] - closes[j]) / closes[j] * 100;
}
function positionSize(equity, riskPct, atr, k) {
	const stop = atr * k;
	if (stop <= 0) return 0;
	return equity * riskPct / stop;
}
function maxLeverageFromAtr(targetRiskPct, atrPercent, k) {
	if (atrPercent <= 0 || k <= 0) return 0;
	return targetRiskPct / atrPercent * (1 / k);
}
function volTargetLeverage(targetVol, atrPercent, maxLev) {
	const realized = atrPercent / 100 * Math.sqrt(252);
	if (realized <= 0) return 0;
	return Math.min(targetVol / realized, maxLev);
}
function kellyFraction(p, avgWin, avgLoss) {
	const b = avgLoss === 0 ? 0 : avgWin / avgLoss;
	if (b <= 0) return 0;
	const q = 1 - p;
	return (p * b - q) / b;
}
function ulcerIndex(prices) {
	if (!prices.length) return 0;
	let peak = prices[0];
	let acc = 0;
	for (const p of prices) {
		peak = Math.max(peak, p);
		const d = peak === 0 ? 0 : (p - peak) / peak * 100;
		acc += d * d;
	}
	return Math.sqrt(acc / prices.length);
}
function maxDrawdown(prices) {
	let peak = prices[0] ?? 0;
	let mdd = 0;
	for (const p of prices) {
		peak = Math.max(peak, p);
		if (peak > 0) mdd = Math.min(mdd, p / peak - 1);
	}
	return mdd;
}
function sharpe(rets, rfPer = 0) {
	if (rets.length < 2) return 0;
	const ex = rets.map((r) => r - rfPer);
	const s = stdev(ex);
	if (s === 0) return 0;
	return mean(ex) / s * Math.sqrt(252);
}
function sortino(rets, rfPer = 0) {
	const downs = rets.filter((r) => r - rfPer < 0).map((r) => (r - rfPer) ** 2);
	if (!downs.length) return 0;
	const dd = Math.sqrt(mean(downs));
	if (dd === 0) return 0;
	return (mean(rets) - rfPer) / dd * Math.sqrt(252);
}
function calmar(cagr, mdd) {
	const dd = Math.abs(mdd);
	if (dd === 0) return 0;
	return cagr / dd;
}
function sqn(rs) {
	if (rs.length < 2) return 0;
	const s = stdev(rs);
	if (s === 0) return 0;
	const n = Math.min(rs.length, 100);
	return mean(rs) / s * Math.sqrt(n);
}
function riskOfRuinVince(winRate, avgWin, avgLoss, units) {
	if (avgLoss <= 0) return 1;
	const A = (winRate * avgWin - (1 - winRate) * avgLoss) / avgLoss;
	if (A <= 0) return 1;
	return ((1 - A) / (1 + A)) ** units;
}
function varParametric(V, z, sigma, T) {
	return V * z * sigma * Math.sqrt(T);
}
function cvarParametric(V, z, sigma, T, alpha) {
	const tail = 1 - alpha;
	if (tail <= 0) return varParametric(V, z, sigma, T);
	return V * sigma * Math.sqrt(T) * (normPdf(z) / tail);
}
function optimalF(trades) {
	const losses = trades.filter((t) => t < 0);
	if (!losses.length) return {
		f: 0,
		twr: 1,
		half: 0,
		quarter: 0
	};
	const largestLoss = Math.min(...losses);
	if (largestLoss >= 0) return {
		f: 0,
		twr: 1,
		half: 0,
		quarter: 0
	};
	let bestF = .01;
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
	return {
		f: bestF,
		twr: bestTwr,
		half: bestF / 2,
		quarter: bestF / 4
	};
}
function cppi(Vt, V0, floorPct, m) {
	const floor = floorPct * V0;
	const cushion = Math.max(Vt - floor, 0);
	return {
		floor,
		cushion,
		exposure: Math.min(m * cushion, Vt)
	};
}
function parkinson(candles) {
	if (!candles.length) return 0;
	let acc = 0;
	for (const k of candles) {
		if (k.l <= 0 || k.h <= 0) continue;
		const x = Math.log(k.h / k.l);
		acc += x * x;
	}
	return Math.sqrt(1 / (4 * Math.log(2)) * (acc / candles.length));
}
function garmanKlass(candles) {
	if (!candles.length) return 0;
	let acc = 0;
	for (const k of candles) {
		if (k.l <= 0 || k.o <= 0) continue;
		const hl = Math.log(k.h / k.l);
		const co = Math.log(k.c / k.o);
		acc += .5 * hl * hl - (2 * Math.log(2) - 1) * co * co;
	}
	return Math.sqrt(Math.max(acc / candles.length, 0));
}
function rogersSatchell(candles) {
	if (!candles.length) return 0;
	let acc = 0;
	for (const k of candles) {
		if (k.o <= 0 || k.c <= 0) continue;
		acc += Math.log(k.h / k.c) * Math.log(k.h / k.o) + Math.log(k.l / k.c) * Math.log(k.l / k.o);
	}
	return Math.sqrt(Math.max(acc / candles.length, 0));
}
function yangZhang(candles) {
	if (candles.length < 2) return garmanKlass(candles);
	const n = candles.length;
	const overnight = [];
	const openClose = [];
	for (let i = 1; i < n; i++) {
		if (candles[i - 1].c > 0 && candles[i].o > 0) overnight.push(Math.log(candles[i].o / candles[i - 1].c));
		if (candles[i].o > 0) openClose.push(Math.log(candles[i].c / candles[i].o));
	}
	const k = .34 / (1.34 + (n + 1) / (n - 1));
	const rs = rogersSatchell(candles.slice(1));
	const so = variance(overnight);
	const sc = variance(openClose);
	return Math.sqrt(Math.max(so + k * sc + (1 - k) * rs * rs, 0));
}
function ewmaVar(rets, lambda = .94) {
	const out = [];
	if (!rets.length) return out;
	let v = Math.max(rets[0] ** 2, 1e-12);
	out.push(v);
	for (let i = 1; i < rets.length; i++) {
		v = lambda * v + (1 - lambda) * rets[i] ** 2;
		out.push(v);
	}
	return out;
}
function garchForecast(rets, alpha = .08, beta = .9) {
	if (rets.length < 4) return stdev(rets);
	const lr = Math.max(variance(rets), 1e-12);
	const omega = lr * Math.max(1 - alpha - beta, 1e-6);
	let v = lr;
	for (const r of rets) v = omega + alpha * r * r + beta * v;
	return Math.sqrt(Math.max(v, 0));
}
function skewKurt(xs) {
	if (xs.length < 4) return {
		skew: 0,
		kurt: 3
	};
	const m = mean(xs);
	const s = stdev(xs);
	if (s === 0) return {
		skew: 0,
		kurt: 3
	};
	let m3 = 0;
	let m4 = 0;
	for (const x of xs) {
		const z = (x - m) / s;
		m3 += z ** 3;
		m4 += z ** 4;
	}
	return {
		skew: m3 / xs.length,
		kurt: m4 / xs.length
	};
}
function probabilisticSharpe(srHat, srStar, T, skew, kurt) {
	if (T <= 1) return 0;
	const denom = Math.sqrt(Math.max(1 - skew * srHat + (kurt - 1) / 4 * srHat * srHat, 1e-12));
	return normCdf((srHat - srStar) * Math.sqrt(T - 1) / denom);
}
function deflatedSharpe(srHat, T, skew, kurt, nTrials, srVar) {
	const n = Math.max(nTrials, 1);
	const srStar = Math.sqrt(Math.max(srVar, 1e-8)) * (.4227843351 * normInv(1 - 1 / n) + .5772156649 * normInv(1 - 1 / (n * Math.E)));
	return {
		srStar,
		dsr: probabilisticSharpe(srHat, srStar, T, skew, kurt)
	};
}
function riskParityWeights(sigmas) {
	const inv = sigmas.map((s) => s <= 0 ? 0 : 1 / s);
	const s = inv.reduce((a, b) => a + b, 0) || 1;
	return inv.map((x) => x / s);
}
function corrDistance(corr) {
	const n = corr.length;
	const d = Array.from({ length: n }, () => Array(n).fill(0));
	for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) d[i][j] = Math.sqrt(Math.max(.5 * (1 - corr[i][j]), 0));
	return d;
}
/** Average-linkage agglomerative order (quasi-diagonalization). */
function leafOrder(corr) {
	const n = corr.length;
	const d = corrDistance(corr);
	const nodes = Array.from({ length: n }, (_, i) => ({
		members: [i],
		id: i
	}));
	let live = nodes.map((_, i) => i);
	const distClusters = (a, b) => {
		let s = 0;
		let c = 0;
		for (const i of a.members) for (const j of b.members) {
			s += d[i][j];
			c++;
		}
		return c ? s / c : 0;
	};
	while (live.length > 1) {
		let bi = 0;
		let bj = 1;
		let best = Infinity;
		for (let i = 0; i < live.length; i++) for (let j = i + 1; j < live.length; j++) {
			const dd = distClusters(nodes[live[i]], nodes[live[j]]);
			if (dd < best) {
				best = dd;
				bi = i;
				bj = j;
			}
		}
		const a = nodes[live[bi]];
		const b = nodes[live[bj]];
		const merged = {
			members: [...a.members, ...b.members],
			id: nodes.length
		};
		nodes.push(merged);
		const next = live.filter((_, k) => k !== bi && k !== bj);
		next.push(nodes.length - 1);
		live = next;
	}
	return nodes[live[0]]?.members ?? Array.from({ length: n }, (_, i) => i);
}
function hrpWeights(corr, vols) {
	const n = corr.length;
	const order = leafOrder(corr);
	const w = Array(n).fill(1);
	const cov = (idx) => {
		let v = 0;
		for (const i of idx) for (const j of idx) {
			const ci = vols[i] * vols[j] * corr[i][j];
			v += w[i] * w[j] * ci;
		}
		return Math.max(v, 1e-12);
	};
	const bisect = (items) => {
		if (items.length <= 1) return;
		const mid = Math.ceil(items.length / 2);
		const left = items.slice(0, mid);
		const right = items.slice(mid);
		const v1 = cov(left);
		const a = 1 - v1 / (v1 + cov(right));
		for (const i of left) w[i] *= a;
		for (const i of right) w[i] *= 1 - a;
		bisect(left);
		bisect(right);
	};
	bisect(order);
	const s = w.reduce((a, b) => a + b, 0) || 1;
	return w.map((x) => x / s);
}
function mapScore(value, lo, hi, invert = false) {
	if (hi === lo) return 50;
	const t = clamp((value - lo) / (hi - lo), 0, 1);
	return (invert ? 1 - t : t) * 100;
}
function gaussianScore(value, mu, sigma) {
	if (sigma <= 0) return 0;
	const z = (value - mu) / sigma;
	return 100 * Math.exp(-.5 * z * z);
}
var INSTRUMENTS = [
	{
		id: "BTC",
		symbol: "BTCUSDT",
		name: "Bitcoin",
		startPrice: 64250,
		vol: .028,
		drift: 6e-4
	},
	{
		id: "ETH",
		symbol: "ETHUSDT",
		name: "Ethereum",
		startPrice: 3420,
		vol: .034,
		drift: 5e-4
	},
	{
		id: "SOL",
		symbol: "SOLUSDT",
		name: "Solana",
		startPrice: 148,
		vol: .048,
		drift: 7e-4
	},
	{
		id: "AVAX",
		symbol: "AVAXUSDT",
		name: "Avalanche",
		startPrice: 28.4,
		vol: .052,
		drift: 3e-4
	}
];
var DEFAULT_PARAMS = {
	equity: 1e4,
	riskPct: .01,
	atrPeriod: 14,
	atrK: 2,
	maxLeverage: 5,
	targetVol: .15,
	maxHeat: .12,
	tpR: 2,
	holdBars: 20,
	winRate: .55,
	avgWin: 1.8,
	avgLoss: 1,
	nTrades: 80,
	cppiFloor: .8,
	cppiM: 4,
	dailyLossLimit: .04,
	maxDd: .2,
	rf: .04,
	varAlpha: .95,
	trials: 24,
	corrStress: 0
};
function instrumentById(id) {
	return INSTRUMENTS.find((x) => x.id === id) ?? INSTRUMENTS[0];
}
function mulberry32(seed) {
	let a = seed >>> 0;
	return () => {
		a |= 0;
		a = a + 1831565813 | 0;
		let t = Math.imul(a ^ a >>> 15, 1 | a);
		t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
		return ((t ^ t >>> 14) >>> 0) / 4294967296;
	};
}
function randn(rng) {
	const u = Math.max(rng(), 1e-12);
	const v = Math.max(rng(), 1e-12);
	return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}
function generateCandles(instrument, scenario, n = 180) {
	const rng = mulberry32({
		trend: 14011,
		chop: 22007,
		spike: 33019,
		crash: 44029,
		squeeze: 55037
	}[scenario] + instrument.id.charCodeAt(0) * 97);
	const out = [];
	let price = instrument.startPrice;
	let vol = instrument.vol;
	const t0 = 17040672e5;
	for (let i = 0; i < n; i++) {
		const prog = i / (n - 1);
		let drift = instrument.drift;
		let shock = 0;
		if (scenario === "trend") {
			drift = instrument.drift * 2.4;
			vol = instrument.vol * (.75 + .15 * Math.sin(prog * 8));
		} else if (scenario === "chop") {
			drift = (instrument.startPrice - price) / instrument.startPrice * .08;
			vol = instrument.vol * .7;
		} else if (scenario === "spike") {
			vol = instrument.vol * (prog < .62 ? .55 : 1.8);
			if (i === Math.floor(n * .64)) shock = -.07;
		} else if (scenario === "crash") {
			drift = prog > .45 && prog < .7 ? -.012 : instrument.drift * .3;
			vol = instrument.vol * (prog > .45 && prog < .78 ? 2.1 : .9);
		} else if (scenario === "squeeze") {
			vol = instrument.vol * (.35 + .05 * prog);
			if (prog > .72) {
				vol = instrument.vol * 1.6;
				drift = instrument.drift * 4;
			}
		}
		vol = .92 * vol + .08 * instrument.vol * (.6 + rng());
		const r = drift + vol * randn(rng) + shock;
		const o = price;
		let c = o * Math.exp(r);
		const wick = vol * o * (.35 + rng() * .8);
		let h = Math.max(o, c) + wick * rng();
		let l = Math.min(o, c) - wick * rng();
		if (l <= 0) l = Math.min(o, c) * .98;
		h = Math.max(h, o, c);
		l = Math.min(l, o, c);
		c = Math.max(c, l * 1.0001);
		out.push({
			t: t0 + i * 864e5,
			o,
			h,
			l,
			c
		});
		price = c;
	}
	return out;
}
function synthesizeTrades(params, seed) {
	const rng = mulberry32(seed ^ 2654435769);
	const n = Math.max(8, Math.round(params.nTrades));
	const trades = [];
	for (let i = 0; i < n; i++) {
		const win = rng() < params.winRate;
		const noise = .55 + rng();
		if (win) trades.push(params.avgWin * noise);
		else trades.push(-params.avgLoss * noise);
	}
	return trades;
}
var BOOK_SYMBOLS = [
	"BTC",
	"ETH",
	"SOL",
	"AVAX",
	"LINK",
	"DOGE"
];
function bookCorrelation(stress) {
	const base = [
		[
			1,
			.78,
			.62,
			.58,
			.54,
			.48
		],
		[
			.78,
			1,
			.66,
			.6,
			.57,
			.5
		],
		[
			.62,
			.66,
			1,
			.7,
			.55,
			.58
		],
		[
			.58,
			.6,
			.7,
			1,
			.52,
			.5
		],
		[
			.54,
			.57,
			.55,
			.52,
			1,
			.42
		],
		[
			.48,
			.5,
			.58,
			.5,
			.42,
			1
		]
	];
	const s = Math.max(0, Math.min(1, stress));
	return base.map((row, i) => row.map((v, j) => i === j ? 1 : v + (.95 - v) * s));
}
function bookVols(scenario) {
	const base = [
		.55,
		.62,
		.78,
		.82,
		.7,
		.95
	];
	const k = scenario === "spike" || scenario === "crash" ? 1.35 : scenario === "squeeze" ? .7 : 1;
	return base.map((v) => v * k);
}
function demoPositions(candles, playhead, atr, k) {
	const px = candles[playhead]?.c ?? 0;
	const stopDist = atr * k;
	return [
		{
			id: "p1",
			symbol: "ETHUSDT",
			side: "long",
			entry: px * .985,
			size: 1.6,
			stop: px * .985 - stopDist * .6,
			openedBar: Math.max(0, playhead - 7)
		},
		{
			id: "p2",
			symbol: "SOLUSDT",
			side: "long",
			entry: px > 0 ? px * .012 : 140,
			size: 18,
			stop: (px > 0 ? px * .012 : 140) - stopDist * .02,
			openedBar: Math.max(0, playhead - 4)
		},
		{
			id: "p3",
			symbol: "LINKUSDT",
			side: "short",
			entry: 14.8,
			size: 40,
			stop: 14.8 + stopDist * .008,
			openedBar: Math.max(0, playhead - 3)
		}
	];
}
function last(xs, i) {
	if (!xs.length) return void 0;
	if (i === void 0) return xs[xs.length - 1];
	return xs[Math.max(0, Math.min(i, xs.length - 1))];
}
function primarySide(rocN, atrPercent) {
	const thr = .45 * Math.max(atrPercent, .2);
	if (rocN > thr) return "long";
	if (rocN < -thr) return "short";
	return "flat";
}
function findEntryBar(sides, i) {
	const s = sides[i];
	if (s === "flat") return i;
	for (let k = i; k >= 1; k--) if (sides[k] !== s) return k + 1;
	return 0;
}
function tripleBarrier(candles, start, m, sigma, h, side) {
	const p0 = candles[start]?.c ?? 0;
	const u = p0 * (1 + m * sigma);
	const l = p0 * (1 - m * sigma);
	const vertical = Math.min(candles.length - 1, start + h);
	if (p0 <= 0) return {
		u,
		l,
		vertical,
		label: 0,
		hitBar: null,
		hitKind: "open"
	};
	for (let i = start + 1; i <= vertical; i++) {
		const k = candles[i];
		if (side === "short") {
			if (k.l <= p0 - (u - p0)) return {
				u: p0 - (u - p0),
				l: p0 + (p0 - l),
				vertical,
				label: 1,
				hitBar: i,
				hitKind: "upper"
			};
			if (k.h >= p0 + (p0 - l)) return {
				u: p0 - (u - p0),
				l: p0 + (p0 - l),
				vertical,
				label: -1,
				hitBar: i,
				hitKind: "lower"
			};
		} else {
			if (k.h >= u) return {
				u,
				l,
				vertical,
				label: 1,
				hitBar: i,
				hitKind: "upper"
			};
			if (k.l <= l) return {
				u,
				l,
				vertical,
				label: -1,
				hitBar: i,
				hitKind: "lower"
			};
		}
	}
	const lastC = candles[vertical]?.c ?? p0;
	const label = lastC === p0 ? 0 : lastC > p0 ? 1 : -1;
	return {
		u,
		l,
		vertical,
		label: side === "short" ? -label : label,
		hitBar: vertical,
		hitKind: "time"
	};
}
function scoreEntry(args) {
	const volSweet = gaussianScore(args.atrPercent, 2.4, 1.6);
	const yzPen = mapScore(args.garchPct / Math.max(args.yzPct, .2), .8, 2.2, true);
	return [
		{
			id: "momentum",
			formula: "A4",
			weight: .15,
			raw: args.momentum,
			score: mapScore(args.momentum, -2, 8),
			noteVi: "Momentum = ROC / ATR%. Điểm cao = xu hướng mạnh so với nhiễu.",
			noteEn: "Momentum = ROC / ATR%. High means trend dominates noise."
		},
		{
			id: "volRegime",
			formula: "A1",
			weight: .12,
			raw: args.atrPercent,
			score: volSweet,
			noteVi: "ATR% quanh 1.5–4% là dải giao dịch được. Quá nén hoặc quá nở đều trừ điểm.",
			noteEn: "ATR% near 1.5–4% is tradeable. Compression or explosion both score lower."
		},
		{
			id: "kelly",
			formula: "A5",
			weight: .12,
			raw: args.halfKelly,
			score: mapScore(args.halfKelly, 0, .2),
			noteVi: "Half-Kelly dương mới cho phép đặt cược. Edge âm → 0.",
			noteEn: "Positive half-Kelly is required to size in. Negative edge scores 0."
		},
		{
			id: "sqn",
			formula: "B4",
			weight: .12,
			raw: args.sqnVal,
			score: mapScore(args.sqnVal, .8, 4.2),
			noteVi: "SQN < 1.6 hệ thống yếu; 2.5–3 tốt. Sizing aggressive chỉ khi SQN đủ.",
			noteEn: "SQN < 1.6 is weak; 2.5–3 is good. Aggressive sizing needs quality."
		},
		{
			id: "ror",
			formula: "B3",
			weight: .1,
			raw: args.ror,
			score: mapScore(args.ror, 5e-4, .05, true),
			noteVi: "Risk of Ruin nên < 2%. Risk% cao làm RoR nhảy bậc.",
			noteEn: "Keep risk of ruin under 2%. High risk-per-trade explodes RoR."
		},
		{
			id: "ulcer",
			formula: "B5",
			weight: .08,
			raw: args.ulcer,
			score: mapScore(args.ulcer, 1, 18, true),
			noteVi: "Ulcer Index phạt drawdown sâu và kéo dài — 'nỗi đau' khi hold.",
			noteEn: "Ulcer Index penalizes deep, long drawdowns — the pain of holding."
		},
		{
			id: "heat",
			formula: "A7",
			weight: .08,
			raw: args.heat,
			score: mapScore(args.heat / Math.max(args.maxHeat, .01), .15, 1.05, true),
			noteVi: "Dư địa nhiệt danh mục. Heat gần trần thì không mở thêm.",
			noteEn: "Portfolio heat headroom. Near the cap, do not add risk."
		},
		{
			id: "cppi",
			formula: "B6",
			weight: .08,
			raw: args.cushionRatio,
			score: mapScore(args.cushionRatio, 0, .35),
			noteVi: "Cushion CPPI > 0 mới được phép risk-on. Sàn thủng → đứng ngoài.",
			noteEn: "CPPI cushion must be > 0 to risk-on. Floor breach means stand aside."
		},
		{
			id: "barrier",
			formula: "D1",
			weight: .08,
			raw: args.pUp,
			score: args.pUp * 100,
			noteVi: "Xác suất chạm rào trên (meta-label analog) — bet size tỉ lệ thuận.",
			noteEn: "P(hit upper barrier) — a meta-label analog; bet size scales with it."
		},
		{
			id: "garch",
			formula: "D5",
			weight: .07,
			raw: args.garchPct,
			score: yzPen,
			noteVi: "GARCH/EWMA so với Yang-Zhang. Vol clustering sắp tới trừ điểm vào.",
			noteEn: "GARCH/EWMA vs Yang-Zhang. Upcoming vol clustering cuts the entry score."
		}
	];
}
function scoreExit(args) {
	const fade = mapScore(args.mom, 6, -1);
	return [
		{
			id: "trail",
			formula: "A8",
			weight: .14,
			raw: args.trailProx,
			score: mapScore(args.trailProx, .05, .95),
			noteVi: "Giá sát trailing stop ATR → thoát. 0 = còn xa, 1 = chạm.",
			noteEn: "Price hugging the ATR trail. 0 = room, 1 = about to stop out."
		},
		{
			id: "heat",
			formula: "A7",
			weight: .12,
			raw: args.heat,
			score: mapScore(args.heat / Math.max(args.maxHeat, .01), .4, 1.1),
			noteVi: "Heat vượt trần chấp nhận (≈ 0.5–0.6 × max DD) → giảm vị thế.",
			noteEn: "Heat above the cap (≈ 0.5–0.6 × max DD) → cut."
		},
		{
			id: "cvar",
			formula: "B2",
			weight: .12,
			raw: args.cvarPct,
			score: mapScore(args.cvarPct, 2, 12),
			noteVi: "CVaR đuôi 1 ngày. Crypto fat-tail — CVaR > VaR đáng kể thì giảm.",
			noteEn: "1-day expected shortfall. Fat tails: when CVaR >> VaR, reduce."
		},
		{
			id: "ulcer",
			formula: "B5",
			weight: .12,
			raw: args.ulcer,
			score: mapScore(args.ulcer, 2, 20),
			noteVi: "Đau drawdown đang lớn — thoát để bảo vệ đường cong vốn.",
			noteEn: "Drawdown pain is elevated — exit to protect the equity curve."
		},
		{
			id: "floor",
			formula: "B6",
			weight: .1,
			raw: args.floorProx,
			score: mapScore(args.floorProx, .08, .9),
			noteVi: "Vốn sát sàn CPPI. Gap crypto có thể xuyên sàn trước khi rebalance.",
			noteEn: "Equity near the CPPI floor. Crypto gaps can breach before rebalance."
		},
		{
			id: "daily",
			formula: "D6",
			weight: .1,
			raw: args.dailyLoss,
			score: mapScore(args.dailyLoss / Math.max(args.dailyCap, .005), .2, 1),
			noteVi: "Daily loss limit kiểu prop-firm. Chạm X% trong ngày thì khóa.",
			noteEn: "Prop-firm daily loss. Hit the cap and the desk locks."
		},
		{
			id: "volSpike",
			formula: "D5",
			weight: .1,
			raw: args.volRatio,
			score: mapScore(args.volRatio, .9, 2.1),
			noteVi: "Vol forecast / vol hiện tại. Clustering → stop ATR trễ, thoát sớm.",
			noteEn: "Forecast vol vs realized. Clustering means ATR lags — leave early."
		},
		{
			id: "fade",
			formula: "A4",
			weight: .1,
			raw: args.mom,
			score: fade,
			noteVi: "Momentum đang tắt. ROC/ATR% suy → lý do thoát xu hướng.",
			noteEn: "Momentum fading. Falling ROC/ATR% is a trend-exit tell."
		},
		{
			id: "time",
			formula: "D1",
			weight: .1,
			raw: args.timeUsed,
			score: args.inTrade ? mapScore(args.timeUsed, .35, 1.05) : 18,
			noteVi: "Rào thời gian triple-barrier. Hết giờ mà chưa chạm TP → đóng.",
			noteEn: "Vertical barrier. Time’s up without TP → close."
		}
	];
}
function weighted(factors) {
	const w = factors.reduce((s, f) => s + f.weight, 0) || 1;
	return factors.reduce((s, f) => s + f.weight * f.score, 0) / w;
}
function simulateMethods(candles, atrs, sides, params, trades) {
	const opt = optimalF(trades);
	const fKelly = Math.max(0, kellyFraction(params.winRate, params.avgWin, params.avgLoss) / 2);
	return [
		{
			id: "ff",
			nameVi: "Fixed fractional",
			nameEn: "Fixed fractional",
			kind: "ff"
		},
		{
			id: "kelly",
			nameVi: "Half-Kelly",
			nameEn: "Half-Kelly",
			kind: "kelly"
		},
		{
			id: "optf",
			nameVi: "Quarter-f",
			nameEn: "Quarter-f",
			kind: "optf"
		},
		{
			id: "vol",
			nameVi: "Vol targeting",
			nameEn: "Vol targeting",
			kind: "vol"
		},
		{
			id: "cppi",
			nameVi: "CPPI",
			nameEn: "CPPI",
			kind: "cppi"
		}
	].map((spec) => {
		const eq = [params.equity];
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
				const stopPct = atrP / 100 * params.atrK;
				lev = stopPct <= 0 ? 0 : params.riskPct / stopPct;
				lev = Math.min(lev, params.maxLeverage);
			} else if (spec.kind === "kelly") lev = Math.min(fKelly * 8, params.maxLeverage);
			else if (spec.kind === "optf") lev = Math.min(opt.quarter * 8, params.maxLeverage);
			else if (spec.kind === "vol") lev = volTargetLeverage(params.targetVol, atrP, params.maxLeverage);
			else {
				const c = cppi(v, v0, params.cppiFloor, params.cppiM);
				lev = v <= 0 ? 0 : c.exposure / v;
			}
			if (atrP > 10) lev *= .5;
			v = Math.max(v * (1 + lev * signed), v0 * .05);
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
			sharpe: sharpe(rets)
		};
	});
}
function computeLab(candles, playhead, params, trades, positionsHeat) {
	const n = candles.length;
	const i = clamp(playhead, 0, Math.max(n - 1, 0));
	const window = candles.slice(0, i + 1);
	const trs = trueRanges(window);
	const atrs = atrEma(trs, params.atrPeriod);
	const atrsSma = atrSma(trs, params.atrPeriod);
	const closes = window.map((c) => c.c);
	const rets = returns(closes);
	const sides = closes.map((_, idx) => {
		const a = atrPct(atrs[idx] || 0, closes[idx] || 1);
		return primarySide(roc(closes, 20, idx), a);
	});
	const fullAtr = atrs;
	const entrySeries = [];
	const exitSeries = [];
	const ewma = ewmaVar(rets.length ? rets : [0], .94);
	const ewmaAligned = [ewma[0] ?? 0, ...ewma];
	const buildAt = (idx, storeSeries) => {
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
		const assumedStop = assumedEntry == null ? null : side === "short" ? assumedEntry + params.atrK * atr : assumedEntry - params.atrK * atr;
		const assumedTp = assumedEntry == null || assumedStop == null ? null : side === "short" ? assumedEntry - params.tpR * (assumedStop - assumedEntry) : assumedEntry + params.tpR * (assumedEntry - assumedStop);
		let trail = null;
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
		for (const p of positionsHeat) heatNom += Math.abs(p.entry - p.stop) * p.size;
		const heat = params.equity <= 0 ? 0 : heatNom / params.equity;
		const cp = cppi(params.equity, params.equity, params.cppiFloor, params.cppiM);
		const yz = yangZhang(window.slice(Math.max(0, idx - 20), idx + 1));
		const yzPct = yz * 100;
		const garch = garchForecast(rets.slice(0, Math.max(0, idx)));
		const garchPct = garch * 100;
		const sigmaHat = Math.max(yz, atrP / 100 / Math.sqrt(1), .004);
		const pUp = clamp(.5 + .22 * Math.tanh(mom / 3) - .15 * Math.max(garch / Math.max(yz, 1e-6) - 1, 0), .05, .95);
		const dailyRet = idx > 0 && closes[idx - 1] ? closes[idx] / closes[idx - 1] - 1 : 0;
		const dailyLoss = Math.max(0, -dailyRet);
		const trailProx = trail == null || assumedEntry == null ? .15 : side === "long" ? clamp((trail + params.atrK * atr - px) / Math.max(params.atrK * atr, 1e-9), 0, 1) : clamp((px - (trail - params.atrK * atr)) / Math.max(params.atrK * atr, 1e-9), 0, 1);
		const stopDistNow = Math.abs(px - (trail ?? assumedStop ?? px));
		const trailHit = assumedStop == null ? 0 : 1 - clamp(stopDistNow / Math.max(params.atrK * atr, 1e-9), 0, 1);
		const z = params.varAlpha >= .99 ? 2.32635 : 1.64485;
		const sigDay = stdev(rets.slice(Math.max(0, rets.length - 40))) || atrP / 100;
		const cvar = cvarParametric(params.equity, z, sigDay, 1, params.varAlpha);
		const varr = varParametric(params.equity, z, sigDay, 1);
		const floorProx = cp.floor <= 0 ? 0 : clamp(1 - (params.equity - cp.floor) / Math.max(params.equity, 1), 0, 1);
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
			pUp
		});
		const exitFactors = scoreExit({
			trailProx: trailHit,
			heat,
			maxHeat: params.maxHeat,
			cvarPct: params.equity <= 0 ? 0 : cvar / params.equity * 100,
			ulcer: ui,
			floorProx,
			dailyLoss,
			dailyCap: params.dailyLossLimit,
			volRatio,
			mom,
			timeUsed,
			inTrade
		});
		let eScore = weighted(entryFactors);
		let xScore = weighted(exitFactors);
		if (side === "flat") {
			xScore *= .72;
			eScore = .88 * eScore + 12;
		} else eScore *= .82;
		if (cp.cushion <= 0) eScore = Math.min(eScore, 18);
		if (ror > .02) eScore *= .7;
		if (atrP > 10) eScore *= .5;
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
			trailProx
		};
	};
	const step = Math.max(1, Math.floor(window.length / 90));
	for (let idx = 0; idx < window.length; idx++) if (idx % step === 0 || idx === window.length - 1 || idx < 3) buildAt(idx, true);
	else {
		entrySeries.push(last(entrySeries) ?? 50);
		exitSeries.push(last(exitSeries) ?? 30);
	}
	const snap = buildAt(i, false);
	const units = params.riskPct > 0 ? 1 / params.riskPct : 100;
	let size = positionSize(params.equity, params.riskPct, snap.atr, params.atrK);
	let lev = snap.px <= 0 || params.equity <= 0 ? 0 : size * snap.px / params.equity;
	if (lev > params.maxLeverage) {
		size = params.equity * params.maxLeverage / snap.px;
		lev = params.maxLeverage;
	}
	if (snap.atrP > 10) size *= .5;
	if (snap.ror > .02) size *= .5;
	lev = snap.px <= 0 || params.equity <= 0 ? 0 : size * snap.px / params.equity;
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
	const cagr = closes[0] > 0 ? Math.pow(closes[closes.length - 1] / closes[0], 365 / days) - 1 : 0;
	const cal = calmar(cagr, mdd);
	const upi = snap.ui <= 0 ? 0 : (mean(rets) * 252 - params.rf) / (snap.ui / 100);
	const { skew, kurt } = skewKurt(rets);
	const defl = deflatedSharpe((rets.length < 2 || stdev(rets) === 0 ? 0 : mean(rets) / stdev(rets)) * Math.sqrt(252), rets.length, skew, kurt, params.trials, .04);
	const methods = simulateMethods(window, atrs, sides, params, trades);
	const vols = bookVols("trend");
	const corr = bookCorrelation(params.corrStress);
	const rp = riskParityWeights(vols);
	const hrp = hrpWeights(corr, vols);
	const ivSum = vols.reduce((s, v) => s + (v <= 0 ? 0 : 1 / v), 0) || 1;
	const book = BOOK_SYMBOLS.map((id, idx) => ({
		id,
		vol: vols[idx],
		iv: (vols[idx] <= 0 ? 0 : 1 / vols[idx]) / ivSum,
		rp: rp[idx],
		hrp: hrp[idx]
	}));
	const barrier = tripleBarrier(window, snap.inTrade ? findEntryBar(sides, i) : i, params.atrK, Math.max(snap.sigmaHat, .004), params.holdBars, snap.side === "flat" ? "long" : snap.side);
	let verdict = "wait";
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
			varPct: params.equity ? snap.varr / params.equity * 100 : 0,
			cvarPct: params.equity ? snap.cvar / params.equity * 100 : 0,
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
			units
		},
		barrier,
		series: {
			close: closes,
			atr: fullAtr,
			atrPct: closes.map((c, idx) => atrPct(fullAtr[idx] || 0, c)),
			entryScore: entrySeries,
			exitScore: exitSeries,
			ewma: ewmaAligned.map((v) => Math.sqrt(Math.max(v, 0)) * 100)
		},
		methods,
		book,
		positions: [],
		trades,
		noteVi,
		noteEn
	};
}
function composeNoteVi(snap, verdict, size, lev, params) {
	return `${verdict === "open" ? "Mở vị thế" : verdict === "exit" ? "Đóng / giảm" : verdict === "aside" ? "Xung đột — đứng ngoài" : "Chờ"}. Tín hiệu sơ cấp ${snap.side === "long" ? "long" : snap.side === "short" ? "short" : "đứng ngoài"}. Momentum A4 = ${snap.mom.toFixed(2)}, ATR% = ${snap.atrP.toFixed(2)}. Half-Kelly ${(snap.halfKelly * 100).toFixed(1)}%, SQN ${snap.sqnVal.toFixed(2)}, RoR ${(snap.ror * 100).toFixed(2)}%. Heat ${(snap.heat * 100).toFixed(1)}% / trần ${(params.maxHeat * 100).toFixed(0)}%. Size đề xuất ${size.toFixed(4)} đơn vị · đòn bẩy ${lev.toFixed(2)}×.`;
}
function composeNoteEn(snap, verdict, size, lev, params) {
	return `${verdict === "open" ? "Open" : verdict === "exit" ? "Exit / reduce" : verdict === "aside" ? "Conflict — stand aside" : "Wait"}. Primary signal ${snap.side}. Momentum A4 = ${snap.mom.toFixed(2)}, ATR% = ${snap.atrP.toFixed(2)}. Half-Kelly ${(snap.halfKelly * 100).toFixed(1)}%, SQN ${snap.sqnVal.toFixed(2)}, RoR ${(snap.ror * 100).toFixed(2)}%. Heat ${(snap.heat * 100).toFixed(1)}% vs cap ${(params.maxHeat * 100).toFixed(0)}%. Suggested size ${size.toFixed(4)} units · leverage ${lev.toFixed(2)}×.`;
}
var STORAGE_KEY = "vantage-lab-v1";
function persist(s) {
	if (typeof localStorage === "undefined") return;
	localStorage.setItem(STORAGE_KEY, JSON.stringify({
		locale: s.locale,
		instrument: s.instrument,
		scenario: s.scenario,
		params: s.params
	}));
}
var useLab = create((set, get) => ({
	locale: "vi",
	tab: "signal",
	instrument: "BTC",
	scenario: "trend",
	params: { ...DEFAULT_PARAMS },
	playhead: null,
	playing: false,
	setLocale: (locale) => {
		set({ locale });
		persist(get());
	},
	setTab: (tab) => set({ tab }),
	setInstrument: (instrument) => {
		set({
			instrument,
			playhead: null,
			playing: false
		});
		persist(get());
	},
	setScenario: (scenario) => {
		set({
			scenario,
			playhead: null,
			playing: false
		});
		persist(get());
	},
	patchParams: (p) => {
		set({ params: {
			...get().params,
			...p
		} });
		persist(get());
	},
	setPlayhead: (playhead) => set({ playhead }),
	setPlaying: (playing) => set({ playing }),
	hydrate: () => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) return;
			const saved = JSON.parse(raw);
			set({
				locale: saved.locale === "en" ? "en" : "vi",
				instrument: saved.instrument ?? "BTC",
				scenario: saved.scenario ?? "trend",
				params: {
					...DEFAULT_PARAMS,
					...saved.params ?? {}
				}
			});
		} catch {}
	}
}));
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-muted",
			ghost: "text-foreground hover:bg-muted",
			outline: "bg-transparent text-foreground shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			destructive: "bg-destructive text-primary-foreground hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-xs",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function Card({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-2xl bg-card text-card-foreground shadow-[var(--shadow-border)]", className),
		...props
	});
}
function CardHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1 p-4 pb-0", className),
		...props
	});
}
function CardTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: cn("text-sm font-medium tracking-tight text-foreground", className),
		...props
	});
}
function CardContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("p-4", className),
		...props
	});
}
function Separator({ className, orientation = "horizontal", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "separator",
		className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
		...props
	});
}
var Sheet = Dialog;
var SheetTrigger = DialogTrigger;
function SheetContent({ className, children, title, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-background/70 data-[state=open]:animate-in" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
		className: cn("fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-card shadow-[var(--shadow-border)]", "data-[state=open]:animate-in", className),
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-3 border-b border-border px-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
				className: "text-sm font-medium",
				children: title ?? " "
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex-1 overflow-y-auto p-4",
			children
		})]
	})] });
}
var Tabs = Root2;
function TabsList({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
		className: cn("flex h-11 w-full items-center gap-0.5 overflow-x-auto rounded-lg bg-muted p-1", className),
		...props
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trigger, {
		className: cn("inline-flex h-9 min-h-9 shrink-0 flex-1 items-center justify-center rounded-md px-3 text-xs font-medium text-muted-foreground transition-[color,background-color] duration-150", "data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-[var(--shadow-border)]", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40", className),
		...props
	});
}
function TabsContent({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
		className: cn("mt-4 outline-none", className),
		...props
	});
}
function TooltipProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		delayDuration: 200,
		children
	});
}
function Slider({ value, min, max, step = 1, onValueChange, className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "range",
		min,
		max,
		step,
		value,
		onChange: (e) => onValueChange(Number(e.target.value)),
		className: cn("v-range w-full", className),
		...rest
	});
}
function Field({ label, display, value, min, max, step, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-xs text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-mono text-xs tabular-nums text-foreground",
			children: display
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
		"aria-label": label,
		value,
		min,
		max,
		step,
		onValueChange: onChange
	})] });
}
function Group({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-1",
			children
		})]
	});
}
function ParamPanel({ locale, instrument, scenario, params, onInstrument, onScenario, onPatch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
				title: t(locale, "market"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-xs text-muted-foreground",
						children: t(locale, "instrument")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						className: "v-select",
						value: instrument,
						onChange: (e) => onInstrument(e.target.value),
						children: INSTRUMENTS.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: x.id,
							children: x.symbol
						}, x.id))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-1.5 block text-xs text-muted-foreground",
						children: t(locale, "scenario")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
						className: "v-select",
						value: scenario,
						onChange: (e) => onScenario(e.target.value),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "trend",
								children: t(locale, "scenarioTrend")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "chop",
								children: t(locale, "scenarioChop")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "spike",
								children: t(locale, "scenarioSpike")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "crash",
								children: t(locale, "scenarioCrash")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "squeeze",
								children: t(locale, "scenarioSqueeze")
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
				title: t(locale, "account"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "equity"),
						display: formatUsd(params.equity, 0),
						value: params.equity,
						min: 1e3,
						max: 25e4,
						step: 500,
						onChange: (v) => onPatch({ equity: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "riskPct"),
						display: formatPct(params.riskPct * 100, 2),
						value: params.riskPct,
						min: .002,
						max: .05,
						step: .001,
						onChange: (v) => onPatch({ riskPct: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "maxLev"),
						display: `${params.maxLeverage.toFixed(1)}×`,
						value: params.maxLeverage,
						min: 1,
						max: 20,
						step: .5,
						onChange: (v) => onPatch({ maxLeverage: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "maxHeat"),
						display: formatPct(params.maxHeat * 100, 0),
						value: params.maxHeat,
						min: .04,
						max: .3,
						step: .01,
						onChange: (v) => onPatch({ maxHeat: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "dailyLoss"),
						display: formatPct(params.dailyLossLimit * 100, 0),
						value: params.dailyLossLimit,
						min: .01,
						max: .1,
						step: .005,
						onChange: (v) => onPatch({ dailyLossLimit: v })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
				title: "ATR / barrier",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "atrPeriod"),
						display: String(params.atrPeriod),
						value: params.atrPeriod,
						min: 7,
						max: 28,
						step: 1,
						onChange: (v) => onPatch({ atrPeriod: Math.round(v) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "atrK"),
						display: params.atrK.toFixed(1),
						value: params.atrK,
						min: 1,
						max: 4,
						step: .1,
						onChange: (v) => onPatch({ atrK: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "tpR"),
						display: `${params.tpR.toFixed(1)}R`,
						value: params.tpR,
						min: .8,
						max: 4,
						step: .1,
						onChange: (v) => onPatch({ tpR: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "holdBars"),
						display: String(params.holdBars),
						value: params.holdBars,
						min: 5,
						max: 40,
						step: 1,
						onChange: (v) => onPatch({ holdBars: Math.round(v) })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "targetVol"),
						display: formatPct(params.targetVol * 100, 0),
						value: params.targetVol,
						min: .06,
						max: .4,
						step: .01,
						onChange: (v) => onPatch({ targetVol: v })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
				title: t(locale, "system"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "winRate"),
						display: formatPct(params.winRate * 100, 0),
						value: params.winRate,
						min: .35,
						max: .75,
						step: .01,
						onChange: (v) => onPatch({ winRate: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "avgWin"),
						display: params.avgWin.toFixed(2),
						value: params.avgWin,
						min: .6,
						max: 4,
						step: .05,
						onChange: (v) => onPatch({ avgWin: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "avgLoss"),
						display: params.avgLoss.toFixed(2),
						value: params.avgLoss,
						min: .5,
						max: 2.5,
						step: .05,
						onChange: (v) => onPatch({ avgLoss: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "nTrades"),
						display: String(params.nTrades),
						value: params.nTrades,
						min: 20,
						max: 200,
						step: 5,
						onChange: (v) => onPatch({ nTrades: Math.round(v) })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Group, {
				title: "CPPI / HRP",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "cppiFloor"),
						display: formatPct(params.cppiFloor * 100, 0),
						value: params.cppiFloor,
						min: .5,
						max: .95,
						step: .01,
						onChange: (v) => onPatch({ cppiFloor: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "cppiM"),
						display: params.cppiM.toFixed(1),
						value: params.cppiM,
						min: 2,
						max: 8,
						step: .5,
						onChange: (v) => onPatch({ cppiM: v })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(locale, "corrStress"),
						display: formatPct(params.corrStress * 100, 0),
						value: params.corrStress,
						min: 0,
						max: 1,
						step: .05,
						onChange: (v) => onPatch({ corrStress: v })
					})
				]
			})
		]
	});
}
var badgeVariants = cva("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide", {
	variants: { variant: {
		default: "bg-secondary text-secondary-foreground",
		long: "bg-long/15 text-long",
		short: "bg-short/15 text-short",
		warn: "bg-warn/15 text-warn",
		outline: "shadow-[var(--shadow-border)] text-muted-foreground"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
function Gauge({ value, label }) {
	const r = 54;
	const c = 2 * Math.PI * r;
	const dash = c * .75;
	const offset = dash * (1 - value / 100);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative size-[132px] sm:size-[148px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				viewBox: "0 0 140 140",
				className: "size-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: "rotate(135 70 70)",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "70",
						cy: "70",
						r,
						fill: "none",
						stroke: "var(--color-track)",
						strokeWidth: "6",
						strokeDasharray: `${dash.toFixed(2)} ${c.toFixed(2)}`,
						strokeLinecap: "butt"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "70",
						cy: "70",
						r,
						fill: "none",
						stroke: "var(--color-primary)",
						strokeWidth: "6",
						strokeDasharray: `${dash.toFixed(2)} ${c.toFixed(2)}`,
						strokeDashoffset: offset.toFixed(2),
						strokeLinecap: "butt",
						className: "gauge-arc"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-4xl font-medium leading-none tabular-nums tracking-tight sm:text-5xl",
					children: formatNum(value, 0)
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground",
			children: label
		})]
	});
}
function StackBar({ factors }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-1.5 w-full overflow-hidden rounded-full bg-track",
		children: factors.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			title: `${f.formula} · ${f.id} · ${formatNum(f.score, 0)}`,
			className: "h-full bg-primary/80 first:rounded-l-full last:rounded-r-full",
			style: {
				width: `${(f.weight * 100).toFixed(2)}%`,
				opacity: (.25 + f.score / 100 * .75).toFixed(3)
			}
		}, f.id))
	});
}
var verdictKey = {
	open: "verdictOpen",
	exit: "verdictExit",
	wait: "verdictWait",
	aside: "verdictAside"
};
function ScoreHero({ locale, result }) {
	const sideVar = result.side === "long" ? "long" : result.side === "short" ? "short" : "default";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "stagger-in",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: sideVar === "default" ? "default" : sideVar,
						children: t(locale, result.side)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: result.verdict === "open" ? "long" : result.verdict === "exit" ? "short" : "default",
						children: t(locale, verdictKey[result.verdict])
					}),
					result.inTrade ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: t(locale, "inTrade")
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: t(locale, "hypothetical")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-2 gap-4 sm:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
					value: result.entryScore,
					label: t(locale, "entry")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackBar, { factors: result.entryFactors })
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, {
					value: result.exitScore,
					label: t(locale, "exit")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StackBar, { factors: result.exitFactors })
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t(locale, "size"),
						v: `${formatNum(result.metrics.size, 4)} ${t(locale, "units")}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t(locale, "leverage"),
						v: `${formatNum(result.metrics.leverage, 2)}×`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t(locale, "ror"),
						v: `${(result.metrics.ror * 100).toFixed(2)}%`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t(locale, "sqn"),
						v: formatNum(result.metrics.sqn, 2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t(locale, "heat"),
						v: `${result.metrics.heat.toFixed(1)}%`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t(locale, "cvar"),
						v: formatUsd(result.metrics.cvar, 0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t(locale, "ulcer"),
						v: formatNum(result.metrics.ulcer, 2)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						k: t(locale, "kelly"),
						v: `${(result.metrics.halfKelly * 100).toFixed(1)}%`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 text-sm leading-relaxed text-muted-foreground",
				children: locale === "vi" ? result.noteVi : result.noteEn
			})
		]
	});
}
function Stat({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-0.5 font-mono text-sm tabular-nums",
		children: v
	})] });
}
var strokeFg = "var(--color-foreground)";
var strokeMute = "var(--color-muted-foreground)";
var strokeBorder = "var(--color-border)";
var long = "var(--color-long)";
var short = "var(--color-short)";
function Tip({ active, payload, label }) {
	if (!active || !payload?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-popover px-2.5 py-2 text-xs shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-1 text-muted-foreground",
			children: label
		}), payload.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between gap-4 tabular-nums",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: p.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatNum(Number(p.value), 2) })]
		}, p.name))]
	});
}
function PriceChart({ locale, candles, result, playhead, playing, onPlayhead, onToggle, onReset }) {
	const data = result.series.close.map((c, i) => {
		const atr = result.series.atr[i] ?? 0;
		return {
			i,
			c,
			aHi: c + atr,
			aLo: Math.max(c - atr, 0),
			entry: result.series.entryScore[i],
			exit: result.series.exitScore[i]
		};
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-medium",
				children: t(locale, "live")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground",
				children: [
					t(locale, "playhead"),
					" ",
					playhead + 1,
					"/",
					candles.length
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "icon",
					onClick: onReset,
					"aria-label": t(locale, "reset"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "icon",
					onClick: onToggle,
					"aria-label": playing ? t(locale, "pause") : t(locale, "replay"),
					children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-56 w-full sm:h-64",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
				data,
				margin: {
					top: 8,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						stroke: strokeBorder,
						vertical: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "i",
						hide: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						domain: ["auto", "auto"],
						width: 48,
						tick: {
							fill: strokeMute,
							fontSize: 10
						},
						axisLine: false,
						tickLine: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, {}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "aHi",
						stroke: "none",
						fill: strokeFg,
						fillOpacity: .04,
						dot: false,
						isAnimationActive: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "c",
						name: "Close",
						stroke: strokeFg,
						strokeWidth: 1.5,
						dot: false,
						isAnimationActive: false
					}),
					result.assumedEntry != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
						y: result.assumedEntry,
						stroke: strokeMute,
						strokeDasharray: "3 3"
					}) : null,
					result.assumedStop != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
						y: result.assumedStop,
						stroke: short,
						strokeDasharray: "4 4"
					}) : null,
					result.assumedTp != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
						y: result.assumedTp,
						stroke: long,
						strokeDasharray: "4 4"
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
						x: playhead,
						stroke: strokeFg,
						strokeOpacity: .35
					})
				]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "h-28 w-full pt-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
				data,
				margin: {
					top: 4,
					right: 8,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "i",
						hide: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						domain: [0, 100],
						width: 48,
						hide: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, {}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "entry",
						name: t(locale, "entry"),
						stroke: strokeFg,
						strokeWidth: 1.4,
						dot: false,
						isAnimationActive: false
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						type: "monotone",
						dataKey: "exit",
						name: t(locale, "exit"),
						stroke: strokeMute,
						strokeWidth: 1.4,
						strokeDasharray: "4 3",
						dot: false,
						isAnimationActive: false
					})
				]
			}) })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			"aria-label": t(locale, "playhead"),
			value: playhead,
			min: 30,
			max: Math.max(candles.length - 1, 30),
			step: 1,
			onValueChange: onPlayhead
		})
	] });
}
function EquityChart({ locale, result }) {
	const n = result.methods[0]?.equity.length ?? 0;
	const data = Array.from({ length: n }, (_, i) => {
		const row = { i };
		for (const m of result.methods) row[m.id] = m.equity[i] ?? 0;
		return row;
	});
	const colors = [
		"var(--color-foreground)",
		"var(--color-muted-foreground)",
		"var(--color-long)",
		"var(--color-warn)",
		"var(--color-short)"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-64 w-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
			data,
			margin: {
				top: 8,
				right: 8,
				left: 0,
				bottom: 0
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					stroke: strokeBorder,
					vertical: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					dataKey: "i",
					hide: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					width: 56,
					tick: {
						fill: strokeMute,
						fontSize: 10
					},
					axisLine: false,
					tickLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, {}) }),
				result.methods.map((m, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
					type: "monotone",
					dataKey: m.id,
					name: locale === "vi" ? m.nameVi : m.nameEn,
					stroke: colors[idx % colors.length],
					strokeWidth: 1.4,
					dot: false,
					isAnimationActive: false
				}, m.id))
			]
		}) })
	});
}
var CATALOG = [
	{
		id: "A1",
		part: "A",
		titleVi: "ATR chuẩn hoá",
		titleEn: "ATR normalize",
		latex: "ATR% = ATRₙ / Close × 100",
		keys: [
			"atr",
			"atrPct",
			"atrSma"
		],
		blurbVi: "True range lấy max của high–low và khoảng nhảy so với đóng cửa trước. ATR% cho phép so sánh chéo giữa các coin.",
		blurbEn: "True range is the max of high–low and the gap versus prior close. ATR% makes coins comparable cross-sectionally."
	},
	{
		id: "A2",
		part: "A",
		titleVi: "Định cỡ fixed-fractional",
		titleEn: "ATR position sizing",
		latex: "Size = (Equity × Risk%) / (ATR × k)",
		keys: [
			"size",
			"riskAmount",
			"stopDist"
		],
		blurbVi: "Rủi ro tiền mặt cố định trên mỗi lệnh, khoảng cách stop = k × ATR. Đây là size đề xuất chính của desk.",
		blurbEn: "Fixed cash risk per trade, stop distance = k × ATR. This is the desk’s primary recommended size."
	},
	{
		id: "A3",
		part: "A",
		titleVi: "Đòn bẩy chuẩn hoá ATR",
		titleEn: "ATR leverage normalize",
		latex: "L_max = (Target risk% / ATR%) × 1/k",
		keys: [
			"levAtr",
			"leverage",
			"atrPct"
		],
		blurbVi: "Tránh stop −99% khi ATR% lớn: đòn bẩy tối đa tỉ lệ nghịch với biến động.",
		blurbEn: "Avoid the −99% stop problem when ATR% is huge: max leverage scales inversely with vol."
	},
	{
		id: "A4",
		part: "A",
		titleVi: "Momentum hiệu chỉnh rủi ro",
		titleEn: "Risk-adjusted momentum",
		latex: "Score = ROCₙ / ATR%",
		keys: [
			"momentum",
			"roc",
			"atrPct"
		],
		blurbVi: "Coin +10% với ATR 1%/ngày mạnh hơn hẳn coin +10% với ATR 5%. Trụ cột của điểm vào.",
		blurbEn: "A +10% move at 1% ATR/day dwarfs the same move at 5% ATR. Core of the entry score."
	},
	{
		id: "A5",
		part: "A",
		titleVi: "Kelly criterion",
		titleEn: "Kelly criterion",
		latex: "f* = (p·b − q) / b",
		keys: ["kelly", "halfKelly"],
		blurbVi: "Trần lý thuyết % vốn. Thực tế dùng half-Kelly. Edge âm thì f* ≤ 0 — sizing không cứu được hệ thống.",
		blurbEn: "Theoretical fraction of equity. In practice use half-Kelly. Negative edge ⇒ f* ≤ 0 — sizing cannot save the system."
	},
	{
		id: "A6",
		part: "A",
		titleVi: "Volatility targeting",
		titleEn: "Volatility targeting",
		latex: "L_t = σ_target / σ_realized",
		keys: ["levVol", "atrPct"],
		blurbVi: "Đòn bẩy động để danh mục bám mục tiêu biến động năm. Có cap L_max.",
		blurbEn: "Dynamic leverage so the book sticks to an annual vol target, capped at L_max."
	},
	{
		id: "A7",
		part: "A",
		titleVi: "Portfolio heat",
		titleEn: "Portfolio heat",
		latex: "Heat = Σ |Entry − Stop|·Size / Equity",
		keys: ["heat", "maxHeat"],
		blurbVi: "Tổng rủi ro đang mở. Trần ≈ 0.5–0.6 × drawdown chấp nhận. Tương quan cao thì nhân risk.",
		blurbEn: "Sum of open risk. Cap ≈ 0.5–0.6 × acceptable drawdown. High correlation inflates risk."
	},
	{
		id: "A8",
		part: "A",
		titleVi: "Stop & trailing ATR",
		titleEn: "ATR stops",
		latex: "SL_long = Entry − k·ATR",
		keys: ["stopDist", "atr"],
		blurbVi: "Scalp k=1–1.5, day 1.5–2, swing 2–3. Trailing chỉ đi một hướng theo high − k·ATR.",
		blurbEn: "Scalp k=1–1.5, day 1.5–2, swing 2–3. Trailing only ratchets: high − k·ATR."
	},
	{
		id: "A9",
		part: "A",
		titleVi: "Risk parity",
		titleEn: "Risk parity",
		latex: "wᵢ = (1/σᵢ) / Σ 1/σⱼ",
		keys: [],
		blurbVi: "Mỗi coin góp cùng một đơn vị rủi ro. Đòn bẩy tổng kéo σ danh mục về mục tiêu.",
		blurbEn: "Each coin contributes the same risk unit. Book leverage then hits the vol target."
	},
	{
		id: "A10",
		part: "A",
		titleVi: "Sharpe · Sortino · Calmar",
		titleEn: "Sharpe · Sortino · Calmar",
		latex: "Sharpe = (R−R_f)/σ    Calmar = CAGR / MDD",
		keys: [
			"sharpe",
			"sortino",
			"calmar",
			"cagr",
			"mdd"
		],
		blurbVi: "Ba thước hiệu suất. Sortino chỉ phạt lệch xuống; Calmar nhìn drawdown.",
		blurbEn: "Three performance rulers. Sortino only penalises downside; Calmar looks at drawdown."
	},
	{
		id: "B1",
		part: "B",
		titleVi: "Optimal f (Vince)",
		titleEn: "Optimal f (Vince)",
		latex: "TWR(f) = Π (1 + f · (−Tᵢ / LargestLoss))",
		keys: [
			"optF",
			"halfF",
			"quarterF",
			"twr"
		],
		blurbVi: "Tối ưu tăng trưởng hình học trên toàn bộ chuỗi lệnh. Full-f drawdown rất sâu — dùng quarter-f.",
		blurbEn: "Maximises geometric growth on the whole trade list. Full-f drawdowns are brutal — use quarter-f."
	},
	{
		id: "B2",
		part: "B",
		titleVi: "VaR & CVaR",
		titleEn: "VaR & CVaR",
		latex: "ES = V·σ·√T · φ(z) / (1−α)",
		keys: [
			"var",
			"cvar",
			"varPct",
			"cvarPct"
		],
		blurbVi: "CVaR đo lỗ trung bình trong đuôi, không chỉ ngưỡng. Basel III / FRTB ưa CVaR hơn VaR.",
		blurbEn: "CVaR is average loss in the tail, not just the threshold. Basel III / FRTB prefers it to VaR."
	},
	{
		id: "B3",
		part: "B",
		titleVi: "Risk of Ruin",
		titleEn: "Risk of Ruin",
		latex: "RoR ≈ ((1−A)/(1+A))^U",
		keys: ["ror", "units"],
		blurbVi: "Xác suất cháy tài khoản. A ≤ 0 → RoR → 100%. Quản lý vị thế không cứu kỳ vọng âm.",
		blurbEn: "Probability of tapping out. A ≤ 0 ⇒ RoR → 100%. Position sizing cannot save a negative-edge system."
	},
	{
		id: "B4",
		part: "B",
		titleVi: "SQN (Van Tharp)",
		titleEn: "SQN (Van Tharp)",
		latex: "SQN = (R̄ / σ_R) · √N",
		keys: ["sqn"],
		blurbVi: "<1.6 yếu; 2.5–3 tốt; >5 nghi overfitting. N kẹp 100. SQN cao thì Kelly/f mới an toàn.",
		blurbEn: "<1.6 weak; 2.5–3 good; >5 suspect overfitting. Cap N at 100. High SQN makes Kelly/f safer."
	},
	{
		id: "B5",
		part: "B",
		titleVi: "Ulcer Index / UPI",
		titleEn: "Ulcer Index / UPI",
		latex: "UI = √(mean Dₜ²)    Dₜ = (Pₜ−peak)/peak",
		keys: ["ulcer", "upi"],
		blurbVi: "Phạt cả độ sâu lẫn thời gian nằm dưới đỉnh. Gần 'nỗi đau' live hơn Sharpe.",
		blurbEn: "Penalises both depth and time spent under water. Closer to live pain than Sharpe."
	},
	{
		id: "B6",
		part: "B",
		titleVi: "CPPI",
		titleEn: "CPPI",
		latex: "E_t = min(m · max(V_t − F, 0), V_t)",
		keys: [
			"floor",
			"cushion",
			"exposure"
		],
		blurbVi: "Bảo hiểm tỉ lệ cố định: sàn vốn + cushion × m. Cushion = 0 thì cấm mở lệnh mới.",
		blurbEn: "Constant-proportion insurance: a capital floor plus cushion × m. Cushion = 0 forbids new trades."
	},
	{
		id: "D1",
		part: "D",
		titleVi: "Triple-barrier + meta-label",
		titleEn: "Triple-barrier + meta-label",
		latex: "U = P₀(1+mσ̂)   L = P₀(1−mσ̂)   t₀+h",
		keys: ["pUp"],
		blurbVi: "Nhãn theo rào nào chạm trước. Meta-model chỉ hỏi tín hiệu sơ cấp lần này có đáng tin — bet size ∝ P̂.",
		blurbEn: "Label by whichever barrier is touched first. The meta-model only asks if this primary signal is trustworthy — bet size ∝ P̂."
	},
	{
		id: "D2",
		part: "D",
		titleVi: "Purged k-fold + embargo",
		titleEn: "Purged k-fold + embargo",
		latex: "purge overlap(label) ∪ embargo after test",
		keys: [],
		blurbVi: "Nhãn tài chính chồng lấn thời gian. CV xáo trộn sẽ leak. Purge cửa sổ nhãn, embargo ~1% sau block test.",
		blurbEn: "Financial labels overlap in time. Shuffled CV leaks. Purge overlapping labels and embargo ~1% after each test block."
	},
	{
		id: "D3",
		part: "D",
		titleVi: "DSR & PBO",
		titleEn: "DSR & PBO",
		latex: "DSR = PSR(SR*)   SR* từ N trials",
		keys: [
			"dsr",
			"srStar",
			"sharpe"
		],
		blurbVi: "Deflated Sharpe trừ may rủi khi thử nhiều biến thể. DSR > 0.95 mới coi là edge thật.",
		blurbEn: "Deflated Sharpe subtracts luck from trying many variants. DSR > 0.95 is real-edge territory."
	},
	{
		id: "D4",
		part: "D",
		titleVi: "Hierarchical Risk Parity",
		titleEn: "Hierarchical Risk Parity",
		latex: "α = 1 − V₁/(V₁+V₂)  (recursive bisection)",
		keys: [],
		blurbVi: "Không cần nghịch đảo hiệp phương sai — ổn khi basket altcoin gần suy biến. Thay A9 khi số cặp lớn.",
		blurbEn: "No covariance inverse — stable when an alt basket is nearly singular. Replaces A9 on large universes."
	},
	{
		id: "D5",
		part: "D",
		titleVi: "Parkinson · GK · Yang-Zhang · GARCH",
		titleEn: "Parkinson · GK · Yang-Zhang · GARCH",
		latex: "σ_YZ² = σ_on² + k σ_oc² + (1−k) σ_RS²",
		keys: [
			"parkinson",
			"gk",
			"yz",
			"garch",
			"ewma"
		],
		blurbVi: "OHLC giàu hơn close-to-close. Yang-Zhang chuẩn 24/7. GARCH/EWMA dự báo clustering — ATR trễ nhất lúc đổi regime.",
		blurbEn: "OHLC is richer than close-to-close. Yang-Zhang is the 24/7 standard. GARCH/EWMA forecast clustering — ATR lags most at regime shifts."
	},
	{
		id: "D6",
		part: "D",
		titleVi: "Khóa prop-firm",
		titleEn: "Prop-firm locks",
		latex: "daily loss ∧ max DD ∧ scaling plan",
		keys: [
			"heat",
			"mdd",
			"cvarPct"
		],
		blurbVi: "Nhiều lớp giới hạn cứng: lỗ ngày, drawdown từ đỉnh, scale-in theo bậc. Lớp nào chạm trước thì dừng.",
		blurbEn: "Stacked hard limits: daily loss, peak-to-trough DD, stepped scaling. First one hit stops the desk."
	}
];
function metricDisplay(key, value) {
	if (key.toLowerCase().includes("pct") || [
		"heat",
		"ror",
		"cagr",
		"mdd",
		"kelly",
		"halfKelly",
		"optF",
		"halfF",
		"quarterF",
		"pUp",
		"dsr",
		"parkinson",
		"gk",
		"yz",
		"garch",
		"ewma",
		"atrPct"
	].includes(key)) {
		(key === "ror" || key === "kelly" || key === "halfKelly" || key === "optF" || key === "halfF" || key === "quarterF" || key === "dsr") && value * (key === "dsr" || key === "ror" || key.includes("Kelly") || key.includes("F") ? 100 : 1);
		if (key === "ror") return formatPct(value * 100, 2);
		if (key === "kelly" || key === "halfKelly" || key === "optF" || key === "halfF" || key === "quarterF") return formatPct(value * 100, 1);
		if (key === "dsr") return formatPct(value * 100, 1);
		if (key === "heat" || key === "atrPct" || key === "cagr" || key === "mdd" || key === "pUp" || key === "parkinson" || key === "gk" || key === "yz" || key === "garch" || key === "ewma" || key === "varPct" || key === "cvarPct") return formatPct(value, 2);
	}
	if ([
		"var",
		"cvar",
		"floor",
		"cushion",
		"exposure",
		"riskAmount",
		"close",
		"atr"
	].includes(key)) return formatUsd(value, key === "close" || key === "atr" ? 2 : 0);
	if ([
		"leverage",
		"levAtr",
		"levVol"
	].includes(key)) return `${formatNum(value, 2)}×`;
	return formatNum(value, 2);
}
function FactorTable({ locale, factors }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "divide-y divide-border",
		children: factors.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-start gap-3 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: "outline",
				className: "mt-0.5 shrink-0",
				children: f.formula
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: f.id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs tabular-nums text-muted-foreground",
							children: [
								formatNum(f.score, 0),
								" · ",
								formatPct(f.weight * 100, 0)
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 h-1 overflow-hidden rounded-full bg-track",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full bg-primary",
							style: { width: `${Math.max(2, f.score).toFixed(2)}%` }
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 text-xs leading-relaxed text-muted-foreground",
						children: locale === "vi" ? f.noteVi : f.noteEn
					})
				]
			})]
		}, f.id))
	});
}
function SignalFactors({ locale, result }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-4 lg:grid-cols-2",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: t(locale, "entry") }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactorTable, {
				locale,
				factors: result.entryFactors
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: t(locale, "exit") }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FactorTable, {
				locale,
				factors: result.exitFactors
			}) })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "lg:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: t(locale, "barrier") }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "upper"),
							v: formatUsd(result.barrier.u, 2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "lower"),
							v: formatUsd(result.barrier.l, 2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "vertical"),
							v: `t+${result.barrier.vertical - result.playhead}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "hit"),
							v: `${result.barrier.hitKind} · ${result.barrier.label > 0 ? "+" : result.barrier.label < 0 ? "−" : "0"}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "metaP"),
							v: formatPct(result.metrics.pUp, 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "barsHeld"),
							v: String(result.barsHeld)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "trail"),
							v: result.trail == null ? "—" : formatUsd(result.trail, 2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: "ATR%",
							v: formatPct(result.metrics.atrPct, 2)
						})
					]
				})]
			})
		]
	});
}
function Mini({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
		children: k
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 font-mono text-sm tabular-nums",
		children: v
	})] });
}
function SizingView({ locale, result }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: t(locale, "compare") }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EquityChart, {
			locale,
			result
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[480px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 font-medium",
							children: " "
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 font-medium",
							children: "CAGR"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 font-medium",
							children: "MDD"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 font-medium",
							children: "Sharpe"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 font-medium",
							children: "Ulcer"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: result.methods.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5",
							children: locale === "vi" ? m.nameVi : m.nameEn
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5 font-mono tabular-nums",
							children: formatPct(m.cagr * 100, 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5 font-mono tabular-nums",
							children: formatPct(m.maxDd * 100, 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5 font-mono tabular-nums",
							children: formatNum(m.sharpe, 2)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5 font-mono tabular-nums",
							children: formatNum(m.ulcer, 2)
						})
					]
				}, m.id)) })]
			})
		})] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						k: "Half-Kelly A5",
						v: formatPct(result.metrics.halfKelly * 100, 1)
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						k: "Quarter-f B1",
						v: formatPct(result.metrics.quarterF * 100, 1)
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
						k: "Vol-target L A6",
						v: `${formatNum(result.metrics.levVol, 2)}×`
					})
				}) })
			]
		})]
	});
}
function BookView({ locale, result }) {
	const dailyRoom = Math.max(0, 100 - result.metrics.heat / Math.max(result.metrics.maxHeat, .01) * 40);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "HRP · Risk parity" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[440px] text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 font-medium",
							children: " "
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 font-medium",
							children: t(locale, "vol")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 font-medium",
							children: t(locale, "iv")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 font-medium",
							children: t(locale, "rp")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 font-medium",
							children: t(locale, "hrp")
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: result.book.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-border",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5 font-medium",
							children: a.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5 font-mono tabular-nums",
							children: formatPct(a.vol * 100, 0)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5 font-mono tabular-nums",
							children: formatPct(a.iv * 100, 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5 font-mono tabular-nums",
							children: formatPct(a.rp * 100, 1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5 font-mono tabular-nums",
							children: formatPct(a.hrp * 100, 1)
						})
					]
				}, a.id)) })]
			})
		}) })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "space-y-2 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "floor"),
							v: formatUsd(result.metrics.floor, 0)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "cushion"),
							v: formatUsd(result.metrics.cushion, 0)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "exposure"),
							v: formatUsd(result.metrics.exposure, 0)
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "space-y-2 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: "VaR 95% 1d",
							v: formatUsd(result.metrics.var, 0)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: "CVaR 95% 1d",
							v: formatUsd(result.metrics.cvar, 0)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: "DSR",
							v: formatNum(result.metrics.dsr, 2)
						})
					]
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
					className: "space-y-2 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "prop"),
							v: result.metrics.heat > result.metrics.maxHeat ? locale === "vi" ? "KHOÁ heat" : "HEAT LOCK" : locale === "vi" ? "Mở" : "Open"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: t(locale, "dailyHeadroom"),
							v: formatPct(dailyRoom, 0)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k: "UPI",
							v: formatNum(result.metrics.upi, 2)
						})
					]
				}) })
			]
		})]
	});
}
function FormulaView({ locale, result }) {
	const [q, setQ] = (0, import_react.useState)("");
	const rows = (0, import_react.useMemo)(() => {
		const s = q.trim().toLowerCase();
		return CATALOG.filter((f) => {
			if (!s) return true;
			return f.id.toLowerCase().includes(s) || f.titleVi.toLowerCase().includes(s) || f.titleEn.toLowerCase().includes(s) || f.latex.toLowerCase().includes(s);
		});
	}, [q]);
	const groups = [
		{
			part: "A",
			title: t(locale, "partA")
		},
		{
			part: "B",
			title: t(locale, "partB")
		},
		{
			part: "D",
			title: t(locale, "partD")
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			value: q,
			onChange: (e) => setQ(e.target.value),
			placeholder: t(locale, "search"),
			className: "h-11 w-full rounded-md bg-secondary px-3 text-sm shadow-[var(--shadow-border)] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
		}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted-foreground",
			children: t(locale, "emptySearch")
		}) : groups.map((g) => {
			const list = rows.filter((r) => r.part === g.part);
			if (!list.length) return null;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "space-y-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground",
					children: g.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3",
					children: list.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
						className: "p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-baseline justify-between gap-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										variant: "outline",
										children: f.id
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "text-sm font-medium",
										children: locale === "vi" ? f.titleVi : f.titleEn
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-mono text-xs leading-relaxed text-muted-foreground",
								children: f.latex
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: locale === "vi" ? f.blurbVi : f.blurbEn
							}),
							f.keys.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3",
								children: f.keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[11px] uppercase tracking-[0.12em] text-muted-foreground",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "font-mono text-sm tabular-nums",
									children: metricDisplay(k, result.metrics[k] ?? 0)
								})] }, k))
							}) : null
						]
					}) }, f.id))
				})]
			}, g.part);
		})]
	});
}
var STEPS = [
	{
		n: "01",
		id: "A1+B5",
		vi: "ATR% + Ulcer Index — đo vol và nỗi đau downside.",
		en: "ATR% + Ulcer Index — vol and downside pain.",
		keys: ["atrPct", "ulcer"]
	},
	{
		n: "02",
		id: "B2",
		vi: "CVaR giới hạn đuôi danh mục, bổ sung Portfolio Heat.",
		en: "CVaR as a tail budget, beside portfolio heat.",
		keys: ["cvarPct", "heat"]
	},
	{
		n: "03",
		id: "B4",
		vi: "SQN đánh giá chất lượng hệ thống trước khi sizing aggressive.",
		en: "SQN gates how aggressive sizing may be.",
		keys: ["sqn"]
	},
	{
		n: "04",
		id: "A5/B1",
		vi: "Kelly / Optimal f (half hoặc quarter) làm trần % vốn.",
		en: "Kelly / Optimal f (half or quarter) caps the fraction.",
		keys: ["halfKelly", "quarterF"]
	},
	{
		n: "05",
		id: "B3",
		vi: "Risk of Ruin kiểm tra ngược — khuyến nghị < 1–2%.",
		en: "Risk of Ruin back-check — keep under 1–2%.",
		keys: ["ror"]
	},
	{
		n: "06",
		id: "A2/A8",
		vi: "Khoảng cách stop ATR đổi risk% thành size cụ thể.",
		en: "ATR stop distance turns risk% into a size.",
		keys: ["size", "stopDist"]
	},
	{
		n: "07",
		id: "B6",
		vi: "CPPI floor/cushion giới hạn exposure toàn tài khoản.",
		en: "CPPI floor/cushion caps whole-account exposure.",
		keys: ["exposure", "cushion"]
	},
	{
		n: "08",
		id: "A6+A7",
		vi: "Vol targeting + tương quan → đòn bẩy cuối.",
		en: "Vol targeting + correlation → final leverage.",
		keys: ["leverage", "levVol"]
	}
];
function PipelineView({ locale, result }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-2xl font-medium tracking-tight",
			children: t(locale, "pipelineTitle")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted-foreground",
			children: t(locale, "pipelineLead")
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "space-y-3",
			children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
				className: "flex flex-col gap-3 p-4 sm:flex-row sm:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 sm:w-24 sm:flex-col sm:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl leading-none text-muted-foreground",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: s.id
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-relaxed",
						children: locale === "vi" ? s.vi : s.en
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 flex flex-wrap gap-x-6 gap-y-2",
						children: s.keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							k,
							v: metricDisplay(k, result.metrics[k] ?? 0)
						}, k))
					})]
				})]
			}) }) }, s.n))
		})]
	});
}
function LabApp() {
	const locale = useLab((s) => s.locale);
	const tab = useLab((s) => s.tab);
	const instrument = useLab((s) => s.instrument);
	const scenario = useLab((s) => s.scenario);
	const params = useLab((s) => s.params);
	const playhead = useLab((s) => s.playhead);
	const playing = useLab((s) => s.playing);
	const setLocale = useLab((s) => s.setLocale);
	const setTab = useLab((s) => s.setTab);
	const setInstrument = useLab((s) => s.setInstrument);
	const setScenario = useLab((s) => s.setScenario);
	const patchParams = useLab((s) => s.patchParams);
	const setPlayhead = useLab((s) => s.setPlayhead);
	const setPlaying = useLab((s) => s.setPlaying);
	const hydrate = useLab((s) => s.hydrate);
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		hydrate();
	}, [hydrate]);
	const inst = instrumentById(instrument);
	const candles = (0, import_react.useMemo)(() => generateCandles(inst, scenario, 180), [inst, scenario]);
	const trades = (0, import_react.useMemo)(() => synthesizeTrades(params, 901 + params.nTrades * 13), [params]);
	const last = candles.length - 1;
	const head = playhead == null ? last : Math.min(playhead, last);
	const atrWarm = candles[Math.max(0, head)]?.c ? candles[head].c * .02 : 1;
	const heatPos = (0, import_react.useMemo)(() => demoPositions(candles, head, atrWarm, params.atrK), [
		candles,
		head,
		atrWarm,
		params.atrK
	]);
	const result = (0, import_react.useMemo)(() => computeLab(candles, head, params, trades, heatPos.map((p) => ({
		entry: p.entry,
		stop: p.stop,
		size: p.size
	}))), [
		candles,
		head,
		params,
		trades,
		heatPos
	]);
	(0, import_react.useEffect)(() => {
		if (!playing) return;
		const id = window.setInterval(() => {
			const cur = useLab.getState().playhead;
			const i = cur == null ? 40 : cur;
			if (i >= last) {
				useLab.getState().setPlaying(false);
				return;
			}
			useLab.getState().setPlayhead(i + 1);
		}, 140);
		return () => window.clearInterval(id);
	}, [playing, last]);
	const paramsEl = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamPanel, {
		locale,
		instrument,
		scenario,
		params,
		onInstrument: setInstrument,
		onScenario: setScenario,
		onPatch: patchParams
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-background text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl font-medium tracking-tight",
							children: t(locale, "app")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:inline",
							children: "desk"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate text-xs text-muted-foreground",
						children: t(locale, "tag")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-11 items-center rounded-md bg-muted p-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `h-9 min-w-11 rounded px-2.5 text-xs font-medium ${locale === "vi" ? "bg-card text-foreground shadow-[var(--shadow-border)]" : "text-muted-foreground"}`,
							onClick: () => setLocale("vi"),
							children: "VI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `h-9 min-w-11 rounded px-2.5 text-xs font-medium ${locale === "en" ? "bg-card text-foreground shadow-[var(--shadow-border)]" : "text-muted-foreground"}`,
							onClick: () => setLocale("en"),
							children: "EN"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Sheet, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "icon",
								"aria-label": t(locale, "mobileParams"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, {})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetContent, {
							title: t(locale, "params"),
							children: paramsEl
						})] })
					})]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "hidden lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto pr-1",
					children: paramsEl
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "min-w-0 space-y-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
						className: "p-5 sm:p-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScoreHero, {
							locale,
							result
						})
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tabs, {
						value: tab,
						onValueChange: (v) => setTab(v),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsList, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "signal",
									children: t(locale, "signal")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "sizing",
									children: t(locale, "sizing")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "book",
									children: t(locale, "book")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "formulas",
									children: t(locale, "formulas")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsTrigger, {
									value: "pipeline",
									children: t(locale, "pipeline")
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabsContent, {
								value: "signal",
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
									className: "p-4 sm:p-5",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceChart, {
										locale,
										candles,
										result,
										playhead: head,
										playing,
										onPlayhead: (i) => {
											setPlaying(false);
											setPlayhead(i);
										},
										onToggle: () => {
											if (playing) setPlaying(false);
											else {
												if (head >= last) setPlayhead(40);
												setPlaying(true);
											}
										},
										onReset: () => {
											setPlaying(false);
											setPlayhead(40);
										}
									})
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignalFactors, {
									locale,
									result
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "sizing",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SizingView, {
									locale,
									result
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "book",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookView, {
									locale,
									result
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "formulas",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaView, {
									locale,
									result
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsContent, {
								value: "pipeline",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PipelineView, {
									locale,
									result
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-3 pb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs leading-relaxed text-muted-foreground",
							children: t(locale, "footer")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							size: "sm",
							onClick: async () => {
								const payload = {
									instrument,
									scenario,
									params,
									scores: {
										entry: result.entryScore,
										exit: result.exitScore,
										verdict: result.verdict
									}
								};
								try {
									await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
									setCopied(true);
									window.setTimeout(() => setCopied(false), 1600);
								} catch {}
							},
							children: copied ? t(locale, "copied") : t(locale, "copyParams")
						})]
					})
				]
			})]
		})]
	}) });
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabApp, {});
}
//#endregion
export { Home as component };
