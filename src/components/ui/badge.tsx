import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "sapphire" | "outline" | "success" | "warning" | "urgent" | "subtle" | "dark";
}

export function Badge({
  className,
  variant = "sapphire",
  ...props
}: BadgeProps) {
  const variants = {
    sapphire:
      "bg-[#E7F0FA] text-[#0D2440] border border-[#7BA4D0]/40 font-medium",
    subtle:
      "bg-[#F5F8FB] text-[#5F7083] border border-[#CBD6E2]/50",
    outline:
      "border border-[#CBD6E2] text-[#0D2440] bg-white",
    success:
      "bg-emerald-50 text-[#23865A] border border-emerald-200/60 font-medium",
    warning:
      "bg-amber-50 text-[#B7791F] border border-amber-200/60 font-medium",
    urgent:
      "bg-rose-50 text-[#C94A4A] border border-rose-200/60 font-medium",
    dark:
      "bg-[#163359] text-[#E7F0FA] border border-[#2E5E99]/50 font-medium",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs tracking-tight transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
