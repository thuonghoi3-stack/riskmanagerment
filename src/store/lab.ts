import { create } from "zustand";
import { DEFAULT_PARAMS } from "@/lib/risk/market";
import type {
  DeskTab,
  InstrumentId,
  LabParams,
  Locale,
  ScenarioId,
} from "@/lib/risk/types";

const STORAGE_KEY = "vantage-lab-v1";

type LabState = {
  locale: Locale;
  tab: DeskTab;
  instrument: InstrumentId;
  scenario: ScenarioId;
  params: LabParams;
  playhead: number | null;
  playing: boolean;
  setLocale: (l: Locale) => void;
  setTab: (t: DeskTab) => void;
  setInstrument: (id: InstrumentId) => void;
  setScenario: (s: ScenarioId) => void;
  patchParams: (p: Partial<LabParams>) => void;
  setPlayhead: (i: number | null) => void;
  setPlaying: (v: boolean) => void;
  hydrate: () => void;
};

function persist(s: LabState) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      locale: s.locale,
      instrument: s.instrument,
      scenario: s.scenario,
      params: s.params,
    }),
  );
}

export const useLab = create<LabState>((set, get) => ({
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
    set({ instrument, playhead: null, playing: false });
    persist(get());
  },
  setScenario: (scenario) => {
    set({ scenario, playhead: null, playing: false });
    persist(get());
  },
  patchParams: (p) => {
    set({ params: { ...get().params, ...p } });
    persist(get());
  },
  setPlayhead: (playhead) => set({ playhead }),
  setPlaying: (playing) => set({ playing }),
  hydrate: () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const saved = JSON.parse(raw) as Partial<LabState>;
      set({
        locale: saved.locale === "en" ? "en" : "vi",
        instrument: saved.instrument ?? "BTC",
        scenario: saved.scenario ?? "trend",
        params: { ...DEFAULT_PARAMS, ...(saved.params ?? {}) },
      });
    } catch {
      /* ignore */
    }
  },
}));
