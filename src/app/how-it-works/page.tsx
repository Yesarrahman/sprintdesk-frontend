import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Inbox,
  SlidersHorizontal,
  UserCheck,
  Users,
  BarChart3,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo";
import { getAppUrl } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "How It Works — The 60-Second SprintDesk Tour",
  description:
    "Discover how SprintDesk connects thoughts into tasks, tasks into sprints, and sprints into automated delivery in six simple steps.",
  canonicalUrl: "/how-it-works",
});

const steps = [
  {
    step: "01",
    title: "CAPTURE",
    headline: "Capture first. Think later.",
    description:
      "Ideas arrive when you're in the middle of writing code, designing, or replying to clients. Don't break your mental flow. Hit the global hotkey and type your thought into the Capture Inbox.",
    example: "Quick Capture: 'Fix mobile navbar sticky transition' (0.8 seconds to log)",
    icon: Inbox,
    color: "#2E5E99",
  },
  {
    step: "02",
    title: "TRIAGE",
    headline: "Give the work a home.",
    description:
      "When your deep work session ends, open your triage queue. In one click, decide: Does this belong in my private Personal Task Flow, or does it belong on the Team Sprint Board?",
    example: "Action: Move to 'Team Workspace' → Board: 'Sprint 42' → Assign: 'Alex Morgan' → 3 pts",
    icon: SlidersHorizontal,
    color: "#7BA4D0",
  },
  {
    step: "03",
    title: "FOCUS",
    headline: "Work without the noise.",
    description:
      "Your Personal Task Flow is your private sanctuary. No teammates commenting, no corporate micromanagement. SprintDesk calculates your daily Estimated Finish Time (e.g. 5:40 PM) so you always know if your day is realistic.",
    example: "Status: 3 of 4 tasks finished. Finish Predictor: 5:40 PM (On Track)",
    icon: UserCheck,
    color: "#2E5E99",
  },
  {
    step: "04",
    title: "EXECUTE",
    headline: "Bring the team into the work.",
    description:
      "When personal tickets are ready for collaboration or review, they populate the Team Sprint Board. Group cards by engineer or epic with advanced swimlanes, track story points, and monitor pull requests.",
    example: "Sprint 42: 34 / 42 pts completed. Alex Morgan & Sarah Chen active.",
    icon: Users,
    color: "#7BA4D0",
  },
  {
    step: "05",
    title: "MONITOR",
    headline: "Know what needs attention.",
    description:
      "Engineering managers and product leads get real-time velocity metrics without asking for daily standup updates. Identify blocked tasks instantly before they compromise release deadlines.",
    example: "Radar Alert: 'Auth PR blocked by staging DB'. Auto-routed to Lead.",
    icon: BarChart3,
    color: "#2E5E99",
  },
  {
    step: "06",
    title: "AUTOMATE",
    headline: "Let the workflow move itself.",
    description:
      "Configure automated If-This-Then-That triggers: When a GitHub PR merges, move task to 'Done'. When status changes to 'Review', assign the engineering lead and notify the Slack channel.",
    example: "Trigger: PR Merged → Status: Completed → Velocity: +3 pts calculated",
    icon: Zap,
    color: "#7BA4D0",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero Section */}
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>The 60-Second Workflow Tour</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                From a quick thought <br />
                to coordinated execution.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8">
                SprintDesk turns scattered work into a unified workflow — without forcing personal productivity and team collaboration into separate, clunky tools.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")}>
                  Start Free Today →
                </Button>
                <Button variant="outline" size="lg" href="/features">
                  Explore All Features
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Workflow Diagram & Steps */}
        <section className="py-16 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/60">
          <Container size="narrow">
            <div className="space-y-12">
              {steps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-[#CBD6E2] bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow relative"
                  >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#CBD6E2]/50">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] border border-[#7BA4D0]/40 flex items-center justify-center text-[#2E5E99] font-bold text-sm">
                          {item.step}
                        </div>
                        <div>
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2E5E99]">
                            STEP {item.step} • {item.title}
                          </span>
                          <h2 className="font-heading font-bold text-xl sm:text-2xl text-[#0D2440]">
                            {item.headline}
                          </h2>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#F5F8FB] border border-[#CBD6E2] flex items-center justify-center text-[#5F7083] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-sm text-[#5F7083] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="p-3 rounded-lg bg-[#0D2440] text-white font-mono text-xs flex items-center justify-between">
                      <span className="text-[#E7F0FA] truncate pr-2">{item.example}</span>
                      <span className="text-emerald-400 shrink-0 flex items-center gap-1 text-[11px]">
                        <CheckCircle className="w-3.5 h-3.5" /> Handled
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Conclusion Section */}
        <section className="py-24 bg-[#0D2440] text-white">
          <Container size="default" className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              One workflow. Two contexts. <br />
              One source of truth.
            </h2>
            <p className="text-sm sm:text-base text-[#CBD6E2] mb-8 leading-relaxed">
              Stop maintaining duplicate to-do lists that get out of sync with team releases. Experience unified personal focus and team velocity today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={getAppUrl("/signup")}
                className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white w-full sm:w-auto"
              >
                Start Free — No Credit Card →
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/pricing"
                className="bg-transparent border-[#7BA4D0] text-white hover:bg-[#163359] w-full sm:w-auto"
              >
                View Plans & Pricing
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
