import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "pill-primary";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E5E99] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer";

    const variants = {
      primary:
        "bg-[#2E5E99] text-white hover:bg-[#244c7d] shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0",
      "pill-primary":
        "bg-[#0D2440] text-white hover:bg-[#2E5E99] rounded-full shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "bg-[#E7F0FA] text-[#0D2440] hover:bg-[#d8e7f7] border border-[#CBD6E2]/60",
      outline:
        "border border-[#CBD6E2] bg-white text-[#0D2440] hover:bg-[#F5F8FB] hover:border-[#7BA4D0]",
      ghost:
        "text-[#5F7083] hover:text-[#0D2440] hover:bg-[#F5F8FB]",
      dark:
        "bg-[#0D2440] text-white hover:bg-[#163359] border border-[#1E3A5F] shadow-sm",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs rounded-md gap-1.5",
      md: "h-10 px-5 text-sm rounded-lg gap-2",
      lg: "h-12 px-7 text-base rounded-lg gap-2.5 font-semibold",
    };

    const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      const isExternal = href.startsWith("http");
      return (
        <Link
          href={href}
          className={combinedClasses}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </Link>
      );
    }

    return (
      <button className={combinedClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
