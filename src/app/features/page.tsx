import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Inbox,
  GitPullRequest,
  Clock,
  Layers,
  Users,
  AlertOctagon,
  Calendar,
  Zap,
  ArrowRight,
  CheckCircle2,
  Filter,
  Check,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo";
import { getAppUrl } from "@/lib/utils";
import { KanbanMotionBoard } from "@/components/marketing/kanban-motion-board";
import { AutomationRuleBuilder } from "@/components/marketing/automation-rule-builder";
import { CapacityCalculator } from "@/components/marketing/capacity-calculator";

export const metadata: Metadata = constructMetadata({
  title: "Features — End-to-End Task & Sprint Architecture",
  description:
    "Explore SprintDesk's complete product capabilities across all 7 outcomes: Capture, Triage, Focus, Execute, Monitor, Plan, and Automate.",
  canonicalUrl: "/features",
});

const outcomeSections = [
  {
    id: "capture",
    num: "01",
    phase: "CAPTURE",
    headline: "Catch work before it disappears.",
    subheadline: "Zero-friction capture inbox for raw thoughts, incoming requests, and technical reminders.",
    description:
      "Great ideas don't arrive during scheduled backlog grooming. Capture Inbox lets you log thoughts via global hotkeys in under two seconds. No mandatory dropdowns, no friction.",
    bullets: [
      "Global shortcut captures text, code snippets, and PR links instantly",
      "Unorganized queue safely holds thoughts until your daily triage window",
      "Prevents half-baked personal scratchpad notes from polluting team boards",
    ],
    badgeText: "Average capture speed: 1.4s",
    linkText: "Explore Personal Flow →",
    href: "/personal-task-management",
  },
  {
    id: "triage",
    num: "02",
    phase: "TRIAGE",
    headline: "Decide where the work belongs.",
    subheadline: "One-click context routing from unstructured ideas to organized execution.",
    description:
      "Review your raw inbox on your terms. With one click, route an item to your private Personal Flow for focused execution, or promote it to a Team Sprint Board with story points and an assigned epic.",
    bullets: [
      "Route between Personal Workspace and Team Workspace instantly",
      "Attach Fibonacci story points (1, 2, 3, 5, 8) and target milestone",
      "Keep collaborative sprint boards clean and calibrated",
    ],
    badgeText: "1-Click Triage Routing",
    linkText: "Learn How Triage Works →",
    href: "/how-it-works",
  },
  {
    id: "focus",
    num: "03",
    phase: "FOCUS",
    headline: "Keep personal work personal.",
    subheadline: "Deep work sanctuary with automated daily finish-line calculations.",
    description:
      "Individual engineers and contributors deserve an unmonitored space to organize their daily output. Personal Task Flow isolates your critical tasks and calculates your estimated workday finish time.",
    bullets: [
      "Finish Line engine dynamically updates as you complete planned tasks",
      "Private checklists that managers and clients don't need to see",
      "Integrated daily schedule connecting tasks to calendar blocks",
    ],
    badgeText: "Finish Line: 5:40 PM",
    linkText: "See Personal Task Flow →",
    href: "/personal-task-management",
  },
  {
    id: "execute",
    num: "04",
    phase: "EXECUTE",
    headline: "Turn individual tasks into team momentum.",
    subheadline: "Agile sprint boards engineered for clarity, speed, and real story velocity.",
    description:
      "When work requires coordination, SprintDesk gives everyone total alignment. Swimlanes group work by developer or epic, story points track real complexity, and board state updates in real time.",
    bullets: [
      "Flexible views: Standard Kanban column view or Assignee Swimlanes",
      "Story points tracking with automated burndown projection",
      "PR and commit linking via native GitHub and GitLab webhooks",
    ],
    badgeText: "Sprint 24 • 78% Done",
    linkText: "Explore Team Sprint Boards →",
    href: "/sprint-management",
  },
  {
    id: "monitor",
    num: "05",
    phase: "MONITOR",
    headline: "See what's moving — and what's stuck.",
    subheadline: "Command Center visibility that eliminates afternoon status sync meetings.",
    description:
      "Managers and team leads get instant clarity on active work, blocker alerts, and workload distribution without interrupting developers.",
    bullets: [
      "Real-time velocity tracking comparing commitments against actual output",
      "Open blocker radar highlights stalled tickets before Friday reviews",
      "Workload capacity bars prevent developer overload and burnout",
    ],
    badgeText: "+18% Team Velocity",
    linkText: "See Workload Management →",
    href: "/team-workload-management",
  },
  {
    id: "plan",
    num: "06",
    phase: "PLAN",
    headline: "See the work ahead.",
    subheadline: "Integrated calendar for milestone scheduling and deadline awareness.",
    description:
      "Never get blindsided by release dates. The interactive visual calendar overlays sprint milestones, release freezes, and personal commitments in one timeline.",
    bullets: [
      "Monthly and weekly views showing task milestones and dependencies",
      "Drag-and-drop deadline rescheduling that auto-notifies assignees",
      "Two-way synchronization with Google Calendar and Outlook",
    ],
    badgeText: "Interactive Milestone Calendar",
    linkText: "Tour How It Works →",
    href: "/how-it-works",
  },
  {
    id: "automate",
    num: "07",
    phase: "AUTOMATE",
    headline: "Stop manually managing predictable work.",
    subheadline: "Visual no-code rule builder for automated task routing and status updates.",
    description:
      "Build powerful If-This-Then-That rules in seconds. Automatically change priorities, assign reviewers, and notify channels when task criteria are satisfied.",
    bullets: [
      "Trigger rules on column change, label addition, or blocker flags",
      "Auto-assign technical leads when tickets enter Review stage",
      "Zero coding required — intuitive visual builder anyone can configure",
    ],
    badgeText: "No-Code Rule Engine",
    linkText: "See Workflow Automations →",
    href: "/workflow-automation",
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero Section */}
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#CBD6E2] text-xs font-mono font-bold uppercase tracking-wider text-[#2E5E99] mb-6">
                <Sparkles className="w-3.5 h-3.5" /> Complete Product Capabilities
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                One workspace for every stage of the work.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8 max-w-2xl mx-auto">
                From the first unorganized thought to the final sprint release, SprintDesk keeps personal focus and team velocity seamlessly connected.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")} className="font-bold">
                  Start Free Workspace →
                </Button>
                <Button variant="outline" size="lg" href="/how-it-works">
                  See How It Works
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Live Interactive Kanban Simulator Showcase */}
        <section className="py-12 bg-[#F8FAFC] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#2E5E99] mb-2">
                Live Interactive Experience
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440]">
                Experience sprint velocity in real time
              </h2>
              <p className="text-xs sm:text-sm text-[#5F7083] mt-2">
                Click any task card below to advance it across sprint stages and watch velocity recalculate dynamically.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <KanbanMotionBoard />
            </div>
          </Container>
        </section>

        {/* 7 Outcome Sections */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="space-y-24 max-w-5xl mx-auto">
              {outcomeSections.map((item, index) => {
                const isEven = index % 2 === 1;

                return (
                  <div
                    key={item.id}
                    id={item.id}
                    className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${
                      isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Left: Text & Details */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#2E5E99] bg-[#E7F0FA] px-2 py-0.5 rounded">
                          OUTCOME {item.num}
                        </span>
                        <span className="text-xs font-mono uppercase text-[#7BA4D0] font-bold tracking-wider">
                          {item.phase}
                        </span>
                      </div>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440] leading-tight">
                        {item.headline}
                      </h3>
                      <p className="text-sm font-semibold text-[#2E5E99]">
                        {item.subheadline}
                      </p>
                      <p className="text-xs sm:text-sm text-[#5F7083] leading-relaxed">
                        {item.description}
                      </p>
                      <ul className="space-y-2 pt-2">
                        {item.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2 text-xs text-[#0D2440]">
                            <CheckCircle2 className="w-4 h-4 text-[#2E5E99] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4">
                        <Link
                          href={item.href}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2E5E99] hover:text-[#0D2440] hover:underline"
                        >
                          {item.linkText}
                        </Link>
                      </div>
                    </div>

                    {/* Right: Feature Specific Visual Card */}
                    <div className="flex-1 w-full">
                      {item.id === "execute" ? (
                        <div className="p-5 rounded-2xl border border-[#CBD6E2] bg-white shadow-lg">
                          <div className="flex items-center justify-between text-xs font-mono font-bold text-[#2E5E99] mb-3 pb-2 border-b border-slate-100">
                            <span>Team Sprint Board</span>
                            <span className="text-emerald-600 font-semibold">Active Velocity</span>
                          </div>
                          <div className="space-y-2.5">
                            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs">
                              <div className="flex justify-between font-bold text-[#0D2440]">
                                <span>SD-104: OAuth Token Refresh</span>
                                <span className="text-[#2E5E99] font-mono">3 SP</span>
                              </div>
                              <div className="text-[11px] text-[#5F7083] mt-1">Assignee: Alex M. • Ready for QA</div>
                            </div>
                            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 text-xs">
                              <div className="flex justify-between font-bold text-[#0D2440]">
                                <span>SD-118: Assignee Swimlanes</span>
                                <span className="text-[#2E5E99] font-mono">5 SP</span>
                              </div>
                              <div className="text-[11px] text-[#5F7083] mt-1">Assignee: Sarah C. • In Progress</div>
                            </div>
                          </div>
                        </div>
                      ) : item.id === "automate" ? (
                        <AutomationRuleBuilder />
                      ) : (
                        <div className="rounded-2xl border border-[#CBD6E2] bg-[#F8FAFC] p-6 shadow-md">
                          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 text-xs font-mono font-bold">
                            <span className="text-[#0D2440]">{item.headline}</span>
                            <span className="text-[#2E5E99] bg-[#E7F0FA] px-2 py-0.5 rounded">
                              {item.badgeText}
                            </span>
                          </div>
                          <p className="text-xs text-[#5F7083] leading-relaxed">
                            {item.description}
                          </p>
                          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-[#2E5E99]">
                            <span>Status: Verified Active</span>
                            <span>Sub-50ms sync</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Capacity Calculator Section */}
        <section className="py-16 bg-[#F8FAFC] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="max-w-4xl mx-auto">
              <CapacityCalculator />
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#0D2440] text-white text-center">
          <Container size="narrow">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4 text-white">
              Everything connected. Nothing lost.
            </h2>
            <p className="text-sm sm:text-base text-[#CBD6E2] mb-8 max-w-xl mx-auto">
              Start planning work with clarity, protecting personal focus, and moving sprints forward together.
            </p>
            <Button
              variant="pill-primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="bg-[#2E5E99] hover:bg-[#3D78BE] text-white px-8 font-bold"
            >
              Start Free Today <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
