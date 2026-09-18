import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAppUrl(path: string = ""): string {
  const base = process.env.NEXT_PUBLIC_APP_URL || "https://sprint-desk.netlify.app";
  if (!path) return `${base}/login`;
  
  const [pathname, search] = path.split("?");
  const queryStr = search ? `?${search}` : "";

  if (pathname === "/login" || pathname === "/signup" || pathname.startsWith("/signup")) {
    return `${base}/login${queryStr}`;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}

export function getSiteUrl(path: string = ""): string {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3001";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
