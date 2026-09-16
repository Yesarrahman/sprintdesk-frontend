import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { constructMetadata, generateOrganizationSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const absans = localFont({
  src: "../../public/fonts/Absans-Regular.woff2",
  variable: "--font-absans",
  display: "swap",
});

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${absans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <link rel="icon" href="/sd-logo.png" />
      </head>
      <body className="min-h-screen bg-white text-[#0D1C2F] font-sans antialiased selection:bg-[#2E5E99] selection:text-white">
        {children}
      </body>
    </html>
  );
}
