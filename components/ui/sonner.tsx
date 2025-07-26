"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast border p-4 rounded-md transition-all duration-300 shadow-md " +
            "group-data-[type=success]:bg-status-success/50 group-data-[type=success]:border-status-success group-data-[type=success]:text-white " +
            "group-data-[type=error]:bg-red-50 group-data-[type=error]:border-status-error group-data-[type=error]:text-status-error " +
            "group-data-[type=warning]:bg-yellow-50 group-data-[type=warning]:border-status-warning group-data-[type=warning]:text-status-warning " +
            "group-data-[type=info]:bg-blue-50 group-data-[type=info]:border-status-info group-data-[type=info]:text-status-info",

          title:
            "font-semibold text-base " +
            "group-data-[type=success]:text-white" +
            "group-data-[type=error]:text-status-error " +
            "group-data-[type=warning]:text-status-warning " +
            "group-data-[type=info]:text-status-info",

          description:
            "text-sm " +
            "group-data-[type=success]:text-white " +
            "group-data-[type=error]:text-status-error " +
            "group-data-[type=warning]:text-status-warning " +
            "group-data-[type=info]:text-status-info",

          actionButton:
            "rounded-md border bg-white px-3 py-1 text-sm font-medium transition " +
            "group-data-[type=success]:text-black " +
            "group-data-[type=error]:text-status-error " +
            "group-data-[type=warning]:text-status-warning " +
            "group-data-[type=info]:text-status-info hover:bg-neutral-100",

          cancelButton:
            "ml-2 text-xs text-natural-700 underline underline-offset-2 hover:text-black",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
