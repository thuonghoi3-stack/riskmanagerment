import { t } from "@/lib/i18n";
import { formatNum, formatUsd } from "@/lib/utils";
import type { LabResult, Locale } from "@/lib/risk/types";
import { Badge } from "@/components/ui/badge";

function Gauge({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const r = 54;
  const c = 2 * Math.PI * r;
  const span = 0.75;
  const dash = c * span;
  const offset = dash * (1 - value / 100);
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative size-[132px] sm:size-[148px]">
        <svg viewBox="0 0 140 140" className="size-full">
          <g transform="rotate(135 70 70)">
            <circle
              cx="70"
              cy="70"
              r={r}
              fill="none"
              stroke="var(--color-track)"
              strokeWidth="6"
              strokeDasharray={`${dash.toFixed(2)} ${c.toFixed(2)}`}
              strokeLinecap="butt"
            />
            <circle
              cx="70"
              cy="70"
              r={r}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="6"
              strokeDasharray={`${dash.toFixed(2)} ${c.toFixed(2)}`}
              strokeDashoffset={offset.toFixed(2)}
              strokeLinecap="butt"
              className="gauge-arc"
            />
          </g>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-4xl font-medium leading-none tabular-nums tracking-tight sm:text-5xl">
            {formatNum(value, 0)}
          </span>
        </div>
      </div>
      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

function StackBar({
  factors,
}: {
  factors: LabResult["entryFactors"];
}) {
  return (
    <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-track">
      {factors.map((f) => (
        <span
          key={f.id}
          title={`${f.formula} · ${f.id} · ${formatNum(f.score, 0)}`}
          className="h-full bg-primary/80 first:rounded-l-full last:rounded-r-full"
          style={{
            width: `${(f.weight * 100).toFixed(2)}%`,
            opacity: (0.25 + (f.score / 100) * 0.75).toFixed(3),
          }}
        />
      ))}
    </div>
  );
}

const verdictKey = {
  open: "verdictOpen",
  exit: "verdictExit",
  wait: "verdictWait",
  aside: "verdictAside",
} as const;

export function ScoreHero({
  locale,
  result,
}: {
  locale: Locale;
  result: LabResult;
}) {
  const sideVar =
    result.side === "long" ? "long" : result.side === "short" ? "short" : "default";
  return (
    <div className="stagger-in">
      <div className="flex flex-wrap items-center gap-2">
        <Badge variant={sideVar === "default" ? "default" : sideVar}>
          {t(locale, result.side)}
        </Badge>
        <Badge
          variant={
            result.verdict === "open"
              ? "long"
              : result.verdict === "exit"
                ? "short"
                : "default"
          }
        >
          {t(locale, verdictKey[result.verdict])}
        </Badge>
        {result.inTrade ? (
          <Badge variant="outline">{t(locale, "inTrade")}</Badge>
        ) : (
          <Badge variant="outline">{t(locale, "hypothetical")}</Badge>
        )}
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:gap-8">
        <div>
          <Gauge value={result.entryScore} label={t(locale, "entry")} />
          <div className="mt-3">
            <StackBar factors={result.entryFactors} />
          </div>
        </div>
        <div>
          <Gauge value={result.exitScore} label={t(locale, "exit")} />
          <div className="mt-3">
            <StackBar factors={result.exitFactors} />
          </div>
        </div>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
        <Stat k={t(locale, "size")} v={`${formatNum(result.metrics.size, 4)} ${t(locale, "units")}`} />
        <Stat k={t(locale, "leverage")} v={`${formatNum(result.metrics.leverage, 2)}×`} />
        <Stat k={t(locale, "ror")} v={`${(result.metrics.ror * 100).toFixed(2)}%`} />
        <Stat k={t(locale, "sqn")} v={formatNum(result.metrics.sqn, 2)} />
        <Stat k={t(locale, "heat")} v={`${result.metrics.heat.toFixed(1)}%`} />
        <Stat k={t(locale, "cvar")} v={formatUsd(result.metrics.cvar, 0)} />
        <Stat k={t(locale, "ulcer")} v={formatNum(result.metrics.ulcer, 2)} />
        <Stat k={t(locale, "kelly")} v={`${(result.metrics.halfKelly * 100).toFixed(1)}%`} />
      </dl>

      <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
        {locale === "vi" ? result.noteVi : result.noteEn}
      </p>
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{k}</dt>
      <dd className="mt-0.5 font-mono text-sm tabular-nums">{v}</dd>
    </div>
  );
}
