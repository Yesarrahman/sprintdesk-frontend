import { Metadata } from "next";
import Link from "next/link";
import { Scale, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo";
import { comparisons } from "@/lib/content";

export const metadata: Metadata = constructMetadata({
  title: "Compare SprintDesk — Honest Alternative Breakdowns",
  description:
    "See how SprintDesk compares to Trello, Asana, and ClickUp. Honest feature matrices, workflow differences, and architectural tradeoffs.",
  canonicalUrl: "/compare",
});

export default function CompareIndexPage() {
  const comparisonList = Object.values(comparisons);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        <section className="text-center pb-16">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Scale className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>Honest SaaS Evaluation</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Compare SprintDesk with traditional alternatives.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed">
                We believe in honest evaluation. Discover where legacy tools excel, where they fall short for modern technical teams, and why SprintDesk offers a distinct path.
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-24">
          <Container size="default">
            <div className="space-y-8 max-w-4xl mx-auto">
              {comparisonList.map((comp) => (
                <div
                  key={comp.slug}
                  className="rounded-2xl border border-[#CBD6E2] bg-white p-6 sm:p-8 hover:border-[#2E5E99] hover:shadow-lg transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E5E99] bg-[#E7F0FA] px-2.5 py-1 rounded">
                      Competitive Analysis
                    </span>
                    <span className="text-xs text-[#5F7083]">Updated September 2026</span>
                  </div>

                  <Link href={`/compare/${comp.slug}`}>
                    <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#0D2440] hover:text-[#2E5E99] transition-colors mb-3">
                      SprintDesk vs. {comp.competitor}
                    </h2>
                  </Link>

                  <p className="text-sm text-[#5F7083] leading-relaxed mb-6">
                    {comp.verdict}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-[#F5F8FB] border border-[#CBD6E2]/50 mb-6 text-xs">
                    <div>
                      <strong className="text-[#0D2440] block mb-1">When {comp.competitor} makes sense:</strong>
                      <p className="text-[#5F7083]">{comp.idealForCompetitor}</p>
                    </div>
                    <div>
                      <strong className="text-[#2E5E99] block mb-1">When SprintDesk is the superior choice:</strong>
                      <p className="text-[#5F7083]">{comp.idealForSprintDesk}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#CBD6E2]/50">
                    <span className="text-xs text-[#7BA4D0]">Detailed 5-point matrix breakdown</span>
                    <Link
                      href={`/compare/${comp.slug}`}
                      className="text-xs font-bold text-[#2E5E99] hover:underline flex items-center gap-1"
                    >
                      <span>Read Full Comparison</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
