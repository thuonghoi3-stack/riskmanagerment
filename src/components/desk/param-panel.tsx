import type { ReactNode } from "react";
import { t } from "@/lib/i18n";
import { formatPct, formatUsd } from "@/lib/utils";
import { INSTRUMENTS } from "@/lib/risk/market";
import type { InstrumentId, LabParams, Locale, ScenarioId } from "@/lib/risk/types";
import { Slider } from "@/components/ui/slider";

function Field({
  label,
  display,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  display: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <label className="text-xs text-muted-foreground">{label}</label>
        <span className="font-mono text-xs tabular-nums text-foreground">{display}</span>
      </div>
      <Slider
        aria-label={label}
        value={value}
        min={min}
        max={max}
        step={step}
        onValueChange={onChange}
      />
    </div>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h3 className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </h3>
      <div className="space-y-1">{children}</div>
    </section>
  );
}

export function ParamPanel({
  locale,
  instrument,
  scenario,
  params,
  onInstrument,
  onScenario,
  onPatch,
}: {
  locale: Locale;
  instrument: InstrumentId;
  scenario: ScenarioId;
  params: LabParams;
  onInstrument: (id: InstrumentId) => void;
  onScenario: (s: ScenarioId) => void;
  onPatch: (p: Partial<LabParams>) => void;
}) {
  return (
    <div className="space-y-6">
      <Group title={t(locale, "market")}>
        <label className="block">
          <span className="mb-1.5 block text-xs text-muted-foreground">
            {t(locale, "instrument")}
          </span>
          <select
            className="v-select"
            value={instrument}
            onChange={(e) => onInstrument(e.target.value as InstrumentId)}
          >
            {INSTRUMENTS.map((x) => (
              <option key={x.id} value={x.id}>
                {x.symbol}
              </option>
            ))}
          </select>
        </label>
        <label className="block pt-2">
          <span className="mb-1.5 block text-xs text-muted-foreground">
            {t(locale, "scenario")}
          </span>
          <select
            className="v-select"
            value={scenario}
            onChange={(e) => onScenario(e.target.value as ScenarioId)}
          >
            <option value="trend">{t(locale, "scenarioTrend")}</option>
            <option value="chop">{t(locale, "scenarioChop")}</option>
            <option value="spike">{t(locale, "scenarioSpike")}</option>
            <option value="crash">{t(locale, "scenarioCrash")}</option>
            <option value="squeeze">{t(locale, "scenarioSqueeze")}</option>
          </select>
        </label>
      </Group>

      <Group title={t(locale, "account")}>
        <Field
          label={t(locale, "equity")}
          display={formatUsd(params.equity, 0)}
          value={params.equity}
          min={1000}
          max={250000}
          step={500}
          onChange={(v) => onPatch({ equity: v })}
        />
        <Field
          label={t(locale, "riskPct")}
          display={formatPct(params.riskPct * 100, 2)}
          value={params.riskPct}
          min={0.002}
          max={0.05}
          step={0.001}
          onChange={(v) => onPatch({ riskPct: v })}
        />
        <Field
          label={t(locale, "maxLev")}
          display={`${params.maxLeverage.toFixed(1)}×`}
          value={params.maxLeverage}
          min={1}
          max={20}
          step={0.5}
          onChange={(v) => onPatch({ maxLeverage: v })}
        />
        <Field
          label={t(locale, "maxHeat")}
          display={formatPct(params.maxHeat * 100, 0)}
          value={params.maxHeat}
          min={0.04}
          max={0.3}
          step={0.01}
          onChange={(v) => onPatch({ maxHeat: v })}
        />
        <Field
          label={t(locale, "dailyLoss")}
          display={formatPct(params.dailyLossLimit * 100, 0)}
          value={params.dailyLossLimit}
          min={0.01}
          max={0.1}
          step={0.005}
          onChange={(v) => onPatch({ dailyLossLimit: v })}
        />
      </Group>

      <Group title="ATR / barrier">
        <Field
          label={t(locale, "atrPeriod")}
          display={String(params.atrPeriod)}
          value={params.atrPeriod}
          min={7}
          max={28}
          step={1}
          onChange={(v) => onPatch({ atrPeriod: Math.round(v) })}
        />
        <Field
          label={t(locale, "atrK")}
          display={params.atrK.toFixed(1)}
          value={params.atrK}
          min={1}
          max={4}
          step={0.1}
          onChange={(v) => onPatch({ atrK: v })}
        />
        <Field
          label={t(locale, "tpR")}
          display={`${params.tpR.toFixed(1)}R`}
          value={params.tpR}
          min={0.8}
          max={4}
          step={0.1}
          onChange={(v) => onPatch({ tpR: v })}
        />
        <Field
          label={t(locale, "holdBars")}
          display={String(params.holdBars)}
          value={params.holdBars}
          min={5}
          max={40}
          step={1}
          onChange={(v) => onPatch({ holdBars: Math.round(v) })}
        />
        <Field
          label={t(locale, "targetVol")}
          display={formatPct(params.targetVol * 100, 0)}
          value={params.targetVol}
          min={0.06}
          max={0.4}
          step={0.01}
          onChange={(v) => onPatch({ targetVol: v })}
        />
      </Group>

      <Group title={t(locale, "system")}>
        <Field
          label={t(locale, "winRate")}
          display={formatPct(params.winRate * 100, 0)}
          value={params.winRate}
          min={0.35}
          max={0.75}
          step={0.01}
          onChange={(v) => onPatch({ winRate: v })}
        />
        <Field
          label={t(locale, "avgWin")}
          display={params.avgWin.toFixed(2)}
          value={params.avgWin}
          min={0.6}
          max={4}
          step={0.05}
          onChange={(v) => onPatch({ avgWin: v })}
        />
        <Field
          label={t(locale, "avgLoss")}
          display={params.avgLoss.toFixed(2)}
          value={params.avgLoss}
          min={0.5}
          max={2.5}
          step={0.05}
          onChange={(v) => onPatch({ avgLoss: v })}
        />
        <Field
          label={t(locale, "nTrades")}
          display={String(params.nTrades)}
          value={params.nTrades}
          min={20}
          max={200}
          step={5}
          onChange={(v) => onPatch({ nTrades: Math.round(v) })}
        />
      </Group>

      <Group title="CPPI / HRP">
        <Field
          label={t(locale, "cppiFloor")}
          display={formatPct(params.cppiFloor * 100, 0)}
          value={params.cppiFloor}
          min={0.5}
          max={0.95}
          step={0.01}
          onChange={(v) => onPatch({ cppiFloor: v })}
        />
        <Field
          label={t(locale, "cppiM")}
          display={params.cppiM.toFixed(1)}
          value={params.cppiM}
          min={2}
          max={8}
          step={0.5}
          onChange={(v) => onPatch({ cppiM: v })}
        />
        <Field
          label={t(locale, "corrStress")}
          display={formatPct(params.corrStress * 100, 0)}
          value={params.corrStress}
          min={0}
          max={1}
          step={0.05}
          onChange={(v) => onPatch({ corrStress: v })}
        />
      </Group>
    </div>
  );
}
