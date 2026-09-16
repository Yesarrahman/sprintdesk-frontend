import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "lg" | "narrow";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const sizes = {
    default: "max-w-6xl",
    narrow: "max-w-4xl",
    sm: "max-w-3xl",
    lg: "max-w-7xl",
  };

  return (
    <div
      className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
