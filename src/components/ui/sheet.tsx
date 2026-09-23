import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;

export function SheetContent({
  className,
  children,
  title,
  ...props
}: React.ComponentProps<typeof Dialog.Content> & { title?: string }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-background/70 data-[state=open]:animate-in" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-card shadow-[var(--shadow-border)]",
          "data-[state=open]:animate-in",
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
          <Dialog.Title className="text-sm font-medium">
            {title ?? " "}
          </Dialog.Title>
          <Dialog.Close asChild>
            <Button variant="ghost" size="icon" aria-label="Close">
              <X />
            </Button>
          </Dialog.Close>
        </div>
        <div className="flex-1 overflow-y-auto p-4">{children}</div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
