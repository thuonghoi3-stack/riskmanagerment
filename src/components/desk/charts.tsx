import { Pause, Play, RotateCcw } from "lucide-react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip as RTooltip,
  XAxis,
  YAxis,
} from "recharts";
import { t } from "@/lib/i18n";
import { formatNum } from "@/lib/utils";
import type { Candle, LabResult, Locale } from "@/lib/risk/types";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";

const strokeFg = "var(--color-foreground)";
const strokeMute = "var(--color-muted-foreground)";
const strokeBorder = "var(--color-border)";
const long = "var(--color-long)";
const short = "var(--color-short)";

function Tip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { name: string; value: number; color: string }[];
  label?: string | number;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md bg-popover px-2.5 py-2 text-xs shadow-[var(--shadow-border)]">
      <div className="mb-1 text-muted-foreground">{label}</div>
      {payload.map((p) => (
        <div key={p.name} className="flex justify-between gap-4 tabular-nums">
          <span className="text-muted-foreground">{p.name}</span>
          <span>{formatNum(Number(p.value), 2)}</span>
        </div>
      ))}
    </div>
  );
}

export function PriceChart({
  locale,
  candles,
  result,
  playhead,
  playing,
  onPlayhead,
  onToggle,
  onReset,
}: {
  locale: Locale;
  candles: Candle[];
  result: LabResult;
  playhead: number;
  playing: boolean;
  onPlayhead: (i: number) => void;
  onToggle: () => void;
  onReset: () => void;
}) {
  const data = result.series.close.map((c, i) => {
    const atr = result.series.atr[i] ?? 0;
    return {
      i,
      c,
      aHi: c + atr,
      aLo: Math.max(c - atr, 0),
      entry: result.series.entryScore[i],
      exit: result.series.exitScore[i],
    };
  });

  return (
    <div>
      <div className="mb-3 flex items-center justify-between gap-3">
        <div>
          <h3 className="text-sm font-medium">{t(locale, "live")}</h3>
          <p className="text-xs text-muted-foreground">
            {t(locale, "playhead")} {playhead + 1}/{candles.length}
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" onClick={onReset} aria-label={t(locale, "reset")}>
            <RotateCcw />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={onToggle}
            aria-label={playing ? t(locale, "pause") : t(locale, "replay")}
          >
            {playing ? <Pause /> : <Play />}
          </Button>
        </div>
      </div>
      <div className="h-56 w-full sm:h-64">
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid stroke={strokeBorder} vertical={false} />
            <XAxis dataKey="i" hide />
            <YAxis
              domain={["auto", "auto"]}
              width={48}
              tick={{ fill: strokeMute, fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <RTooltip content={<Tip />} />
            <Area
              type="monotone"
              dataKey="aHi"
              stroke="none"
              fill={strokeFg}
              fillOpacity={0.04}
              dot={false}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="c"
              name="Close"
              stroke={strokeFg}
              strokeWidth={1.5}
              dot={false}
              isAnimationActive={false}
            />
            {result.assumedEntry != null ? (
              <ReferenceLine
                y={result.assumedEntry}
                stroke={strokeMute}
                strokeDasharray="3 3"
              />
            ) : null}
            {result.assumedStop != null ? (
              <ReferenceLine y={result.assumedStop} stroke={short} strokeDasharray="4 4" />
            ) : null}
            {result.assumedTp != null ? (
              <ReferenceLine y={result.assumedTp} stroke={long} strokeDasharray="4 4" />
            ) : null}
            <ReferenceLine x={playhead} stroke={strokeFg} strokeOpacity={0.35} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <div className="h-28 w-full pt-2">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 4, right: 8, left: 0, bottom: 0 }}>
            <XAxis dataKey="i" hide />
            <YAxis domain={[0, 100]} width={48} hide />
            <RTooltip content={<Tip />} />
            <Line
              type="monotone"
              dataKey="entry"
              name={t(locale, "entry")}
              stroke={strokeFg}
              strokeWidth={1.4}
              dot={false}
              isAnimationActive={false}
            />
            <Line
              type="monotone"
              dataKey="exit"
              name={t(locale, "exit")}
              stroke={strokeMute}
              strokeWidth={1.4}
              strokeDasharray="4 3"
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <Slider
        aria-label={t(locale, "playhead")}
        value={playhead}
        min={30}
        max={Math.max(candles.length - 1, 30)}
        step={1}
        onValueChange={onPlayhead}
      />
    </div>
  );
}

export function EquityChart({
  locale,
  result,
}: {
  locale: Locale;
  result: LabResult;
}) {
  const n = result.methods[0]?.equity.length ?? 0;
  const data = Array.from({ length: n }, (_, i) => {
    const row: Record<string, number> = { i };
    for (const m of result.methods) row[m.id] = m.equity[i] ?? 0;
    return row;
  });
  const colors = [
    "var(--color-foreground)",
    "var(--color-muted-foreground)",
    "var(--color-long)",
    "var(--color-warn)",
    "var(--color-short)",
  ];
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid stroke={strokeBorder} vertical={false} />
          <XAxis dataKey="i" hide />
          <YAxis
            width={56}
            tick={{ fill: strokeMute, fontSize: 10 }}
            axisLine={false}
            tickLine={false}
          />
          <RTooltip content={<Tip />} />
          {result.methods.map((m, idx) => (
            <Line
              key={m.id}
              type="monotone"
              dataKey={m.id}
              name={locale === "vi" ? m.nameVi : m.nameEn}
              stroke={colors[idx % colors.length]}
              strokeWidth={1.4}
              dot={false}
              isAnimationActive={false}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
