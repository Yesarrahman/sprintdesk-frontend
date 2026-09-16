import { Metadata } from "next";
import Link from "next/link";
import { Layers, Sparkles, ArrowRight, CheckCircle2, Download } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo";
import { getAppUrl } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Workflow & Sprint Templates — SprintDesk",
  description:
    "Pre-configured sprint boards, personal task flows, and automation templates ready to deploy in SprintDesk.",
  canonicalUrl: "/templates",
});

const templates = [
  {
    title: "2-Week Agile Engineering Sprint",
    category: "Software Development",
    columns: ["Sprint Backlog", "In Progress", "In Review", "QA / Staging", "Released"],
    description: "Includes Fibonacci story point sizing, GitHub webhook status triggers, and automated blocker radar.",
    pts: "38 Story Points Scoped",
  },
  {
    title: "Personal Focus & Daily Finish Line",
    category: "Individual Contributor",
    columns: ["Capture Queue", "Today Priorities", "Deep Work", "Completed Today"],
    description: "Configured with dynamic workday completion estimation, Pomodoro timers, and private subtasks.",
    pts: "100% Private Workspace",
  },
  {
    title: "Distributed Async Squad Handoff",
    category: "Remote Operations",
    columns: ["Americas Queue", "EMEA Triage", "APAC Staging", "Release Verification"],
    description: "Optimized for 24-hour follow-the-sun handoffs with automated Slack broadcast triggers upon ticket handoffs.",
    pts: "Cross-Timezone Ready",
  },
  {
    title: "Product Feature Spec to Launch",
    category: "Product Management",
    columns: ["Problem Discovery", "PRD Draft", "Design Review", "Engineering Sprint", "GA Launch"],
    description: "Bridges user feedback from Capture Inbox directly into developer story cards and release milestones.",
    pts: "Full Product Lifecycle",
  },
];

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        <section className="text-center pb-16">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Layers className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>Pre-Configured Architecture</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Start with battle-tested sprint templates.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed">
                Deploy high-performing agile workflows in under 60 seconds without configuring boards from scratch.
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-24">
          <Container size="default">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {templates.map((tpl, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#CBD6E2] bg-white p-6 sm:p-8 hover:border-[#2E5E99] hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <Badge variant="sapphire">{tpl.category}</Badge>
                      <span className="text-[#5F7083] font-mono text-[11px]">{tpl.pts}</span>
                    </div>

                    <h2 className="font-heading font-bold text-xl text-[#0D2440] mb-2">
                      {tpl.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-[#5F7083] leading-relaxed mb-6">
                      {tpl.description}
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#F5F8FB] border border-[#CBD6E2]/60 mb-6">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#7BA4D0] block mb-2">
                        Pre-Configured Board Columns:
                      </span>
                      <div className="flex flex-wrap gap-1.5 text-xs font-mono">
                        {tpl.columns.map((col, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 rounded bg-white border border-[#CBD6E2] text-[#0D2440]"
                          >
                            {col}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#CBD6E2]/50 flex items-center justify-between">
                    <span className="text-xs text-[#5F7083]">1-Click Import</span>
                    <Button
                      variant="primary"
                      size="sm"
                      href={getAppUrl("/signup")}
                      className="text-xs font-semibold"
                    >
                      Use Template Free →
                    </Button>
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
