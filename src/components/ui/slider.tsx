import { cn } from "@/lib/utils";

type Props = {
  value: number;
  min: number;
  max: number;
  step?: number;
  onValueChange: (v: number) => void;
  className?: string;
  "aria-label"?: string;
};

export function Slider({
  value,
  min,
  max,
  step = 1,
  onValueChange,
  className,
  ...rest
}: Props) {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onValueChange(Number(e.target.value))}
      className={cn("v-range w-full", className)}
      {...rest}
    />
  );
}
