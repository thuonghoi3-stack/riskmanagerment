import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function formatNum(
  n: number,
  digits = 2,
  opts?: { compact?: boolean; sign?: boolean },
): string {
  if (!Number.isFinite(n)) return "—";
  if (opts?.compact && Math.abs(n) >= 1000) {
    return (
      (opts.sign && n > 0 ? "+" : "") +
      new Intl.NumberFormat("en-US", {
        notation: "compact",
        maximumFractionDigits: 1,
      }).format(n)
    );
  }
  const abs = Math.abs(n);
  const d = abs >= 1000 ? 0 : abs >= 100 ? 1 : digits;
  const body = n.toLocaleString("en-US", {
    minimumFractionDigits: d,
    maximumFractionDigits: d,
  });
  if (opts?.sign && n > 0) return `+${body}`;
  return body;
}

export function formatPct(n: number, digits = 1, sign = false) {
  if (!Number.isFinite(n)) return "—";
  const body = `${n.toFixed(digits)}%`;
  if (sign && n > 0) return `+${body}`;
  return body;
}

export function formatUsd(n: number, digits = 0) {
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  }).format(n);
}
