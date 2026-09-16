import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check, X, Sparkles, Scale, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo";
import { comparisons } from "@/lib/content";
import { getAppUrl } from "@/lib/utils";

const comp = comparisons["sprintdesk-vs-clickup"];

export const metadata: Metadata = constructMetadata({
  title: "SprintDesk vs. ClickUp — An Honest Comparison (2026)",
  description:
    "Discover how SprintDesk compares to ClickUp. Lightning performance vs feature bloat, dual-workspace privacy, and daily finish line predictors.",
  canonicalUrl: "/compare/sprintdesk-vs-clickup",
});

export default function SprintDeskVsClickUpPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        <article>
          <Container size="default">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5F7083] hover:text-[#0D2440]"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to Comparisons
                </Link>
              </div>

              <div className="pb-8 mb-10 border-b border-[#CBD6E2]/60">
                <Badge variant="sapphire" className="mb-4">Competitor Breakdown</Badge>
                <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D2440] tracking-tight mb-4">
                  SprintDesk vs. ClickUp
                </h1>
                <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed">
                  {comp.verdict}
                </p>
              </div>

              {/* Comparison Matrix Table */}
              <div className="rounded-2xl border border-[#CBD6E2] overflow-hidden shadow-sm mb-12">
                <div className="grid grid-cols-12 bg-[#0D2440] text-white p-4 font-heading font-bold text-xs">
                  <div className="col-span-6 sm:col-span-5">Feature Breakdown</div>
                  <div className="col-span-3 text-center text-[#7BA4D0]">SprintDesk</div>
                  <div className="col-span-3 sm:col-span-4 text-center">ClickUp</div>
                </div>

                {comp.matrix.map((row, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-12 p-4 text-xs border-b border-[#CBD6E2]/40 hover:bg-[#F5F8FB] transition-colors items-center"
                  >
                    <div className="col-span-6 sm:col-span-5 font-bold text-[#0D2440]">
                      {row.feature}
                    </div>
                    <div className="col-span-3 text-center font-semibold text-[#2E5E99] px-1">
                      {row.sprintdesk}
                    </div>
                    <div className="col-span-3 sm:col-span-4 text-center text-[#5F7083] px-1">
                      {row.competitor}
                    </div>
                  </div>
                ))}
              </div>

              {/* Editorial Analysis */}
              <div className="space-y-8 text-sm sm:text-base text-[#162538] leading-relaxed mb-16">
                <div>
                  <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#0D2440] mb-3">
                    1. The Bloat Penalty: Speed as a Feature
                  </h2>
                  <p>
                    ClickUp famously markets itself as the "one app to replace them all"—bundling docs, whiteboards, spreadsheets, chat, and wikis into one platform. The consequence for technical teams is noticeable latency, complex nested hierarchies, and endless configuration settings.
                  </p>
                  <p className="mt-2">
                    SprintDesk believes that <strong>speed and focus are features</strong>. The platform loads in under 100 milliseconds, captures thoughts via global shortcuts in under a second, and focuses strictly on what matters: turning raw ideas into focused personal execution and predictable team velocity.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#0D2440] text-white text-center">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                  Choose speed and clarity over feature overload.
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD6E2] max-w-xl mx-auto mb-6">
                  Build and deliver with SprintDesk's modern, opinionated sprint architecture.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  href={getAppUrl("/signup")}
                  className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white text-xs font-semibold"
                >
                  Start SprintDesk Free →
                </Button>
              </div>
            </div>
          </Container>
        </article>
      </main>

      <Footer />
    </div>
  );
}
