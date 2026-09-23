import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { t } from "@/lib/i18n";
import { computeLab } from "@/lib/risk/engine";
import {
  demoPositions,
  generateCandles,
  instrumentById,
  synthesizeTrades,
} from "@/lib/risk/market";
import type { DeskTab } from "@/lib/risk/types";
import { useLab } from "@/store/lab";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ParamPanel } from "./param-panel";
import { ScoreHero } from "./score-hero";
import { PriceChart } from "./charts";
import {
  BookView,
  FormulaView,
  PipelineView,
  SignalFactors,
  SizingView,
} from "./views";

export function LabApp() {
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

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const inst = instrumentById(instrument);
  const candles = useMemo(
    () => generateCandles(inst, scenario, 180),
    [inst, scenario],
  );
  const trades = useMemo(
    () => synthesizeTrades(params, 901 + params.nTrades * 13),
    [params],
  );
  const last = candles.length - 1;
  const head = playhead == null ? last : Math.min(playhead, last);

  const atrWarm = candles[Math.max(0, head)]?.c
    ? candles[head].c * 0.02
    : 1;
  const heatPos = useMemo(
    () => demoPositions(candles, head, atrWarm, params.atrK),
    [candles, head, atrWarm, params.atrK],
  );

  const result = useMemo(
    () =>
      computeLab(
        candles,
        head,
        params,
        trades,
        heatPos.map((p) => ({ entry: p.entry, stop: p.stop, size: p.size })),
      ),
    [candles, head, params, trades, heatPos],
  );

  useEffect(() => {
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

  const paramsEl = (
    <ParamPanel
      locale={locale}
      instrument={instrument}
      scenario={scenario}
      params={params}
      onInstrument={setInstrument}
      onScenario={setScenario}
      onPatch={patchParams}
    />
  );

  return (
    <TooltipProvider>
      <div className="min-h-dvh bg-background text-foreground">
        <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xl font-medium tracking-tight">
                  {t(locale, "app")}
                </span>
                <span className="hidden text-[11px] uppercase tracking-[0.16em] text-muted-foreground sm:inline">
                  desk
                </span>
              </div>
              <p className="truncate text-xs text-muted-foreground">
                {t(locale, "tag")}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex h-11 items-center rounded-md bg-muted p-1">
                <button
                  type="button"
                  className={`h-9 min-w-11 rounded px-2.5 text-xs font-medium ${locale === "vi" ? "bg-card text-foreground shadow-[var(--shadow-border)]" : "text-muted-foreground"}`}
                  onClick={() => setLocale("vi")}
                >
                  VI
                </button>
                <button
                  type="button"
                  className={`h-9 min-w-11 rounded px-2.5 text-xs font-medium ${locale === "en" ? "bg-card text-foreground shadow-[var(--shadow-border)]" : "text-muted-foreground"}`}
                  onClick={() => setLocale("en")}
                >
                  EN
                </button>
              </div>
              <div className="lg:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" aria-label={t(locale, "mobileParams")}>
                      <SlidersHorizontal />
                    </Button>
                  </SheetTrigger>
                  <SheetContent title={t(locale, "params")}>{paramsEl}</SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-6">
          <aside className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto pr-1">
              {paramsEl}
            </div>
          </aside>

          <main className="min-w-0 space-y-6">
            <Card>
              <CardContent className="p-5 sm:p-6">
                <ScoreHero locale={locale} result={result} />
              </CardContent>
            </Card>

            <Tabs
              value={tab}
              onValueChange={(v) => setTab(v as DeskTab)}
            >
              <TabsList>
                <TabsTrigger value="signal">{t(locale, "signal")}</TabsTrigger>
                <TabsTrigger value="sizing">{t(locale, "sizing")}</TabsTrigger>
                <TabsTrigger value="book">{t(locale, "book")}</TabsTrigger>
                <TabsTrigger value="formulas">{t(locale, "formulas")}</TabsTrigger>
                <TabsTrigger value="pipeline">{t(locale, "pipeline")}</TabsTrigger>
              </TabsList>

              <TabsContent value="signal" className="space-y-4">
                <Card>
                  <CardContent className="p-4 sm:p-5">
                    <PriceChart
                      locale={locale}
                      candles={candles}
                      result={result}
                      playhead={head}
                      playing={playing}
                      onPlayhead={(i) => {
                        setPlaying(false);
                        setPlayhead(i);
                      }}
                      onToggle={() => {
                        if (playing) setPlaying(false);
                        else {
                          if (head >= last) setPlayhead(40);
                          setPlaying(true);
                        }
                      }}
                      onReset={() => {
                        setPlaying(false);
                        setPlayhead(40);
                      }}
                    />
                  </CardContent>
                </Card>
                <SignalFactors locale={locale} result={result} />
              </TabsContent>

              <TabsContent value="sizing">
                <SizingView locale={locale} result={result} />
              </TabsContent>
              <TabsContent value="book">
                <BookView locale={locale} result={result} />
              </TabsContent>
              <TabsContent value="formulas">
                <FormulaView locale={locale} result={result} />
              </TabsContent>
              <TabsContent value="pipeline">
                <PipelineView locale={locale} result={result} />
              </TabsContent>
            </Tabs>

            <Separator />
            <div className="flex flex-wrap items-center justify-between gap-3 pb-8">
              <p className="text-xs leading-relaxed text-muted-foreground">
                {t(locale, "footer")}
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={async () => {
                  const payload = {
                    instrument,
                    scenario,
                    params,
                    scores: {
                      entry: result.entryScore,
                      exit: result.exitScore,
                      verdict: result.verdict,
                    },
                  };
                  try {
                    await navigator.clipboard.writeText(JSON.stringify(payload, null, 2));
                    setCopied(true);
                    window.setTimeout(() => setCopied(false), 1600);
                  } catch {
                    /* ignore */
                  }
                }}
              >
                {copied ? t(locale, "copied") : t(locale, "copyParams")}
              </Button>
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  );
}
