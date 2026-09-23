import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn(
        "flex h-11 w-full items-center gap-0.5 overflow-x-auto rounded-lg bg-muted p-1",
        className,
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex h-9 min-h-9 shrink-0 flex-1 items-center justify-center rounded-md px-3 text-xs font-medium text-muted-foreground transition-[color,background-color] duration-150",
        "data-[state=active]:bg-card data-[state=active]:text-foreground data-[state=active]:shadow-[var(--shadow-border)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
        className,
      )}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn("mt-4 outline-none", className)}
      {...props}
    />
  );
}
