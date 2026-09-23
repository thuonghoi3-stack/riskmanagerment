import { useMemo, useState } from "react";
import { t } from "@/lib/i18n";
import { CATALOG } from "@/lib/risk/catalog";
import { formatNum, formatPct, formatUsd } from "@/lib/utils";
import type { Factor, LabResult, Locale } from "@/lib/risk/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EquityChart } from "./charts";

function metricDisplay(key: string, value: number) {
  if (
    key.toLowerCase().includes("pct") ||
    ["heat", "ror", "cagr", "mdd", "kelly", "halfKelly", "optF", "halfF", "quarterF", "pUp", "dsr", "parkinson", "gk", "yz", "garch", "ewma", "atrPct"].includes(key)
  ) {
    const v = key === "ror" || key === "kelly" || key === "halfKelly" || key === "optF" || key === "halfF" || key === "quarterF" || key === "dsr"
      ? value * (key === "dsr" || key === "ror" || key.includes("Kelly") || key.includes("F") ? 100 : 1)
      : value;
    if (key === "ror") return formatPct(value * 100, 2);
    if (key === "kelly" || key === "halfKelly" || key === "optF" || key === "halfF" || key === "quarterF")
      return formatPct(value * 100, 1);
    if (key === "dsr") return formatPct(value * 100, 1);
    if (key === "heat" || key === "atrPct" || key === "cagr" || key === "mdd" || key === "pUp" || key === "parkinson" || key === "gk" || key === "yz" || key === "garch" || key === "ewma" || key === "varPct" || key === "cvarPct")
      return formatPct(value, 2);
  }
  if (["var", "cvar", "floor", "cushion", "exposure", "riskAmount", "close", "atr"].includes(key)) {
    return formatUsd(value, key === "close" || key === "atr" ? 2 : 0);
  }
  if (["leverage", "levAtr", "levVol"].includes(key)) return `${formatNum(value, 2)}×`;
  return formatNum(value, 2);
}

function FactorTable({
  locale,
  factors,
}: {
  locale: Locale;
  factors: Factor[];
}) {
  return (
    <ul className="divide-y divide-border">
      {factors.map((f) => (
        <li key={f.id} className="flex items-start gap-3 py-3">
          <Badge variant="outline" className="mt-0.5 shrink-0">
            {f.formula}
          </Badge>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-sm">{f.id}</span>
              <span className="font-mono text-xs tabular-nums text-muted-foreground">
                {formatNum(f.score, 0)} · {formatPct(f.weight * 100, 0)}
              </span>
            </div>
            <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-track">
              <div
                className="h-full bg-primary"
                style={{ width: `${Math.max(2, f.score).toFixed(2)}%` }}
              />
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {locale === "vi" ? f.noteVi : f.noteEn}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function SignalFactors({
  locale,
  result,
}: {
  locale: Locale;
  result: LabResult;
}) {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>{t(locale, "entry")}</CardTitle>
        </CardHeader>
        <CardContent>
          <FactorTable locale={locale} factors={result.entryFactors} />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>{t(locale, "exit")}</CardTitle>
        </CardHeader>
        <CardContent>
          <FactorTable locale={locale} factors={result.exitFactors} />
        </CardContent>
      </Card>
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>{t(locale, "barrier")}</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <Mini k={t(locale, "upper")} v={formatUsd(result.barrier.u, 2)} />
          <Mini k={t(locale, "lower")} v={formatUsd(result.barrier.l, 2)} />
          <Mini k={t(locale, "vertical")} v={`t+${result.barrier.vertical - result.playhead}`} />
          <Mini
            k={t(locale, "hit")}
            v={`${result.barrier.hitKind} · ${result.barrier.label > 0 ? "+" : result.barrier.label < 0 ? "−" : "0"}`}
          />
          <Mini k={t(locale, "metaP")} v={formatPct(result.metrics.pUp, 1)} />
          <Mini k={t(locale, "barsHeld")} v={String(result.barsHeld)} />
          <Mini k={t(locale, "trail")} v={result.trail == null ? "—" : formatUsd(result.trail, 2)} />
          <Mini k="ATR%" v={formatPct(result.metrics.atrPct, 2)} />
        </CardContent>
      </Card>
    </div>
  );
}

function Mini({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{k}</div>
      <div className="mt-1 font-mono text-sm tabular-nums">{v}</div>
    </div>
  );
}

export function SizingView({
  locale,
  result,
}: {
  locale: Locale;
  result: LabResult;
}) {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{t(locale, "compare")}</CardTitle>
        </CardHeader>
        <CardContent>
          <EquityChart locale={locale} result={result} />
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                <tr>
                  <th className="pb-2 font-medium"> </th>
                  <th className="pb-2 font-medium">CAGR</th>
                  <th className="pb-2 font-medium">MDD</th>
                  <th className="pb-2 font-medium">Sharpe</th>
                  <th className="pb-2 font-medium">Ulcer</th>
                </tr>
              </thead>
              <tbody>
                {result.methods.map((m) => (
                  <tr key={m.id} className="border-t border-border">
                    <td className="py-2.5">{locale === "vi" ? m.nameVi : m.nameEn}</td>
                    <td className="py-2.5 font-mono tabular-nums">{formatPct(m.cagr * 100, 1)}</td>
                    <td className="py-2.5 font-mono tabular-nums">{formatPct(m.maxDd * 100, 1)}</td>
                    <td className="py-2.5 font-mono tabular-nums">{formatNum(m.sharpe, 2)}</td>
                    <td className="py-2.5 font-mono tabular-nums">{formatNum(m.ulcer, 2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <Mini k="Half-Kelly A5" v={formatPct(result.metrics.halfKelly * 100, 1)} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Mini k="Quarter-f B1" v={formatPct(result.metrics.quarterF * 100, 1)} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <Mini k="Vol-target L A6" v={`${formatNum(result.metrics.levVol, 2)}×`} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function BookView({
  locale,
  result,
}: {
  locale: Locale;
  result: LabResult;
}) {
  const dailyRoom = Math.max(0, 100 - (result.metrics.heat / Math.max(result.metrics.maxHeat, 0.01)) * 40);
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>HRP · Risk parity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[440px] text-left text-sm">
              <thead className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                <tr>
                  <th className="pb-2 font-medium"> </th>
                  <th className="pb-2 font-medium">{t(locale, "vol")}</th>
                  <th className="pb-2 font-medium">{t(locale, "iv")}</th>
                  <th className="pb-2 font-medium">{t(locale, "rp")}</th>
                  <th className="pb-2 font-medium">{t(locale, "hrp")}</th>
                </tr>
              </thead>
              <tbody>
                {result.book.map((a) => (
                  <tr key={a.id} className="border-t border-border">
                    <td className="py-2.5 font-medium">{a.id}</td>
                    <td className="py-2.5 font-mono tabular-nums">{formatPct(a.vol * 100, 0)}</td>
                    <td className="py-2.5 font-mono tabular-nums">{formatPct(a.iv * 100, 1)}</td>
                    <td className="py-2.5 font-mono tabular-nums">{formatPct(a.rp * 100, 1)}</td>
                    <td className="py-2.5 font-mono tabular-nums">{formatPct(a.hrp * 100, 1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="space-y-2 p-4">
            <Mini k={t(locale, "floor")} v={formatUsd(result.metrics.floor, 0)} />
            <Mini k={t(locale, "cushion")} v={formatUsd(result.metrics.cushion, 0)} />
            <Mini k={t(locale, "exposure")} v={formatUsd(result.metrics.exposure, 0)} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 p-4">
            <Mini k="VaR 95% 1d" v={formatUsd(result.metrics.var, 0)} />
            <Mini k="CVaR 95% 1d" v={formatUsd(result.metrics.cvar, 0)} />
            <Mini k="DSR" v={formatNum(result.metrics.dsr, 2)} />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="space-y-2 p-4">
            <Mini k={t(locale, "prop")} v={result.metrics.heat > result.metrics.maxHeat ? (locale === "vi" ? "KHOÁ heat" : "HEAT LOCK") : (locale === "vi" ? "Mở" : "Open")} />
            <Mini k={t(locale, "dailyHeadroom")} v={formatPct(dailyRoom, 0)} />
            <Mini k="UPI" v={formatNum(result.metrics.upi, 2)} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export function FormulaView({
  locale,
  result,
}: {
  locale: Locale;
  result: LabResult;
}) {
  const [q, setQ] = useState("");
  const rows = useMemo(() => {
    const s = q.trim().toLowerCase();
    return CATALOG.filter((f) => {
      if (!s) return true;
      return (
        f.id.toLowerCase().includes(s) ||
        f.titleVi.toLowerCase().includes(s) ||
        f.titleEn.toLowerCase().includes(s) ||
        f.latex.toLowerCase().includes(s)
      );
    });
  }, [q]);

  const groups = [
    { part: "A" as const, title: t(locale, "partA") },
    { part: "B" as const, title: t(locale, "partB") },
    { part: "D" as const, title: t(locale, "partD") },
  ];

  return (
    <div className="space-y-4">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t(locale, "search")}
        className="h-11 w-full rounded-md bg-secondary px-3 text-sm shadow-[var(--shadow-border)] placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
      />
      {rows.length === 0 ? (
        <p className="text-sm text-muted-foreground">{t(locale, "emptySearch")}</p>
      ) : (
        groups.map((g) => {
          const list = rows.filter((r) => r.part === g.part);
          if (!list.length) return null;
          return (
            <section key={g.part} className="space-y-3">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {g.title}
              </h3>
              <div className="space-y-3">
                {list.map((f) => (
                  <Card key={f.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{f.id}</Badge>
                          <h4 className="text-sm font-medium">
                            {locale === "vi" ? f.titleVi : f.titleEn}
                          </h4>
                        </div>
                      </div>
                      <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">
                        {f.latex}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {locale === "vi" ? f.blurbVi : f.blurbEn}
                      </p>
                      {f.keys.length > 0 ? (
                        <dl className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
                          {f.keys.map((k) => (
                            <div key={k}>
                              <dt className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                                {k}
                              </dt>
                              <dd className="font-mono text-sm tabular-nums">
                                {metricDisplay(k, result.metrics[k] ?? 0)}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      ) : null}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}

const STEPS = [
  {
    n: "01",
    id: "A1+B5",
    vi: "ATR% + Ulcer Index — đo vol và nỗi đau downside.",
    en: "ATR% + Ulcer Index — vol and downside pain.",
    keys: ["atrPct", "ulcer"],
  },
  {
    n: "02",
    id: "B2",
    vi: "CVaR giới hạn đuôi danh mục, bổ sung Portfolio Heat.",
    en: "CVaR as a tail budget, beside portfolio heat.",
    keys: ["cvarPct", "heat"],
  },
  {
    n: "03",
    id: "B4",
    vi: "SQN đánh giá chất lượng hệ thống trước khi sizing aggressive.",
    en: "SQN gates how aggressive sizing may be.",
    keys: ["sqn"],
  },
  {
    n: "04",
    id: "A5/B1",
    vi: "Kelly / Optimal f (half hoặc quarter) làm trần % vốn.",
    en: "Kelly / Optimal f (half or quarter) caps the fraction.",
    keys: ["halfKelly", "quarterF"],
  },
  {
    n: "05",
    id: "B3",
    vi: "Risk of Ruin kiểm tra ngược — khuyến nghị < 1–2%.",
    en: "Risk of Ruin back-check — keep under 1–2%.",
    keys: ["ror"],
  },
  {
    n: "06",
    id: "A2/A8",
    vi: "Khoảng cách stop ATR đổi risk% thành size cụ thể.",
    en: "ATR stop distance turns risk% into a size.",
    keys: ["size", "stopDist"],
  },
  {
    n: "07",
    id: "B6",
    vi: "CPPI floor/cushion giới hạn exposure toàn tài khoản.",
    en: "CPPI floor/cushion caps whole-account exposure.",
    keys: ["exposure", "cushion"],
  },
  {
    n: "08",
    id: "A6+A7",
    vi: "Vol targeting + tương quan → đòn bẩy cuối.",
    en: "Vol targeting + correlation → final leverage.",
    keys: ["leverage", "levVol"],
  },
];

export function PipelineView({
  locale,
  result,
}: {
  locale: Locale;
  result: LabResult;
}) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-display text-2xl font-medium tracking-tight">
          {t(locale, "pipelineTitle")}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{t(locale, "pipelineLead")}</p>
      </div>
      <ol className="space-y-3">
        {STEPS.map((s) => (
          <li key={s.n}>
            <Card>
              <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start">
                <div className="flex items-center gap-3 sm:w-24 sm:flex-col sm:items-start">
                  <span className="font-display text-2xl leading-none text-muted-foreground">
                    {s.n}
                  </span>
                  <Badge variant="outline">{s.id}</Badge>
                </div>
                <div className="flex-1">
                  <p className="text-sm leading-relaxed">
                    {locale === "vi" ? s.vi : s.en}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                    {s.keys.map((k) => (
                      <Mini key={k} k={k} v={metricDisplay(k, result.metrics[k] ?? 0)} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </li>
        ))}
      </ol>
    </div>
  );
}
