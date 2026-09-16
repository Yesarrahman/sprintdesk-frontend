import { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Inbox,
  GitPullRequest,
  Clock,
  Layers,
  Users,
  ShieldAlert,
  Calendar,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata, generateSoftwareApplicationSchema } from "@/lib/seo";
import { getAppUrl } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Features — End-to-End Task & Sprint Architecture",
  description:
    "Explore SprintDesk's complete product capabilities: Capture Inbox, Personal Task Flow, Team Sprint Board, Command Center, and No-Code Automations.",
  canonicalUrl: "/features",
});

const featuresList = [
  {
    id: "capture",
    category: "FEATURE CATEGORY 01",
    phase: "CAPTURE",
    headline: "Catch work before it disappears.",
    subheadline: "Zero-friction inbox for raw thoughts, incoming requests, and technical reminders.",
    description:
      "Great ideas don't arrive scheduled in backlog grooming. Capture Inbox lets you log ideas via global hotkeys, webhooks, or mobile in under two seconds. No forced fields, no dropdowns, no friction.",
    bullets: [
      "Global shortcut captures text, links, and code snippets in milliseconds",
      "Unorganized queue holds thoughts safely until your scheduled triage window",
      "Automatic deduplication prevents redundant backlog noise",
    ],
    uiTag: "Capture Inbox",
    uiMetric: "Average capture speed: 1.4s",
    mockupType: "inbox",
  },
  {
    id: "triage",
    category: "FEATURE CATEGORY 02",
    phase: "TRIAGE",
    headline: "Decide where the work belongs.",
    subheadline: "One-click context routing from unstructured ideas to organized execution.",
    description:
      "Review your raw inbox on your terms. With one keystroke, route an item to your private Personal Flow for confidential focus, or promote it to a Team Sprint Board with story points and an assigned epic.",
    bullets: [
      "Choose destination: Personal Space vs. Team Workspace",
      "Assign story points (1, 2, 3, 5, 8) and target sprint milestone",
      "Keep collaborative boards clean from half-baked personal notes",
    ],
    uiTag: "Triage Engine",
    uiMetric: "1-Click Routing",
    mockupType: "triage",
  },
  {
    id: "focus",
    category: "FEATURE CATEGORY 03",
    phase: "FOCUS",
    headline: "Keep personal work personal.",
    subheadline: "Deep work sanctuary with automated daily finish-line calculations.",
    description:
      "Engineers and individual contributors deserve a calm, unmonitored space to organize their daily output. Personal Task Flow isolates your critical tasks, integrates your calendar commitments, and dynamically updates your estimated workday finish time.",
    bullets: [
      "Dynamic Finish Line engine updates automatically as tasks complete",
      "Private checklists that teammates and managers don't need to see",
      "Pomodoro and deep-work timers tied directly to task cards",
    ],
    uiTag: "Personal Workspace",
    uiMetric: "Finish Line: 5:40 PM",
    mockupType: "personal",
  },
  {
    id: "execute",
    category: "FEATURE CATEGORY 04",
    phase: "EXECUTE",
    headline: "Turn individual tasks into team momentum.",
    subheadline: "Agile sprint boards engineered for clarity, speed, and real story velocity.",
    description:
      "When work requires coordination, SprintDesk's Team Sprint Board gives everyone total alignment. Swimlanes group work by engineer or epic, story points track real effort, and cards update in real time across the team.",
    bullets: [
      "Flexible views: Standard Kanban column view or Assignee Swimlanes",
      "Story points tracking with automated burndown projection",
      "PR and commit linking via native GitHub and GitLab webhooks",
    ],
    uiTag: "Sprint Board",
    uiMetric: "Sprint 42 • 78% Done",
    mockupType: "team",
  },
  {
    id: "monitor",
    category: "FEATURE CATEGORY 05",
    phase: "MONITOR",
    headline: "See what's moving — and what's stuck.",
    subheadline: "Team Command Center eliminates status meetings and uncovers hidden blockers.",
    description:
      "Engineering leaders get instant visibility without interrogating developers. Command Center aggregates active velocity, individual workload distribution, and blocker alerts in a single visual console.",
    bullets: [
      "Workload balance radar reveals over-allocated and under-allocated engineers",
      "Automated blocker alerts ping the channel when a card is stalled >24 hours",
      "Live activity stream logs deployments, reviews, and card movements",
    ],
    uiTag: "Command Center",
    uiMetric: "+18% Velocity Trend",
    mockupType: "monitor",
  },
  {
    id: "plan",
    category: "FEATURE CATEGORY 06",
    phase: "PLAN",
    headline: "See the work ahead before it becomes urgent.",
    subheadline: "Visual calendar mapping milestones, release schedules, and task due dates.",
    description:
      "Connect your sprint milestones directly to real-world calendar deadlines. Drag-and-drop tasks to balance workloads across weeks and prevent end-of-quarter release crunches.",
    bullets: [
      "Monthly and weekly timeline views with multi-day task spanning",
      "Google Calendar and Outlook two-way sync for meeting buffers",
      "Sprint release milestone markers with automatic deadline warnings",
    ],
    uiTag: "Calendar Schedule",
    uiMetric: "Synchronized Sync",
    mockupType: "calendar",
  },
  {
    id: "automate",
    category: "FEATURE CATEGORY 07",
    phase: "AUTOMATE",
    headline: "Stop manually managing predictable work.",
    subheadline: "Deterministic If-This-Then-That rule builder for zero-overhead triage.",
    description:
      "Configure automated rules in plain English: When a PR is opened, move task to 'In Review'. When marked 'Urgent', notify the technical lead. When completed, archive subtasks and recalculate sprint velocity.",
    bullets: [
      "Visual rule builder requires zero coding or webhook maintenance",
      "Cross-workspace triggers (e.g. personal task completion updates team epic)",
      "Instant Slack and Discord alerts with action buttons directly in chat",
    ],
    uiTag: "Automation Engine",
    uiMetric: "Rules Active ✓",
    mockupType: "automate",
  },
];

export default function FeaturesPage() {
  const schema = generateSoftwareApplicationSchema();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Features Hero */}
        <section className="relative pb-20 border-b border-[#CBD6E2]/40 bg-gradient-to-b from-[#F5F8FB] to-white">
          <Container size="default">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>Everything Connected</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                One workspace for every stage of the work.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8">
                From the first unorganized thought to coordinated team delivery, SprintDesk connects personal focus and team execution into a continuous, automation-driven workflow.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")}>
                  Start Free Trial →
                </Button>
                <Button variant="outline" size="lg" href="/how-it-works">
                  See The 60-Second Tour
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Answer Engine Callout Block (AEO) */}
        <section className="py-8 bg-[#F5F8FB] border-b border-[#CBD6E2]/60">
          <Container size="narrow">
            <div className="p-4 rounded-xl bg-white border border-[#CBD6E2] text-xs leading-relaxed text-[#0D2440]">
              <strong className="text-[#2E5E99] uppercase font-bold block mb-1">
                The SprintDesk Architecture at a Glance
              </strong>
              SprintDesk replaces tool fragmentation by unifying 7 capabilities in one database: Quick Capture, Context Triage, Personal Task Flow, Team Sprint Board, Command Center, Calendar Scheduling, and No-Code Automations. This enables individual contributors to retain private focus while keeping engineering managers updated in real time.
            </div>
          </Container>
        </section>

        {/* Feature Categories Stack */}
        <section className="py-20 sm:py-28">
          <Container size="default">
            <div className="space-y-28">
              {featuresList.map((feat, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={feat.id}
                    id={feat.id}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                  >
                    {/* Text column */}
                    <div
                      className={`lg:col-span-6 space-y-6 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#2E5E99] bg-[#E7F0FA] px-2.5 py-1 rounded-md">
                          {feat.category}
                        </span>
                        <span className="text-xs font-bold text-[#5F7083] uppercase tracking-wider">
                          Phase: {feat.phase}
                        </span>
                      </div>

                      <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D2440] tracking-tight">
                        {feat.headline}
                      </h2>

                      <p className="text-sm sm:text-base font-medium text-[#2E5E99]">
                        {feat.subheadline}
                      </p>

                      <p className="text-xs sm:text-sm text-[#5F7083] leading-relaxed">
                        {feat.description}
                      </p>

                      <ul className="space-y-3 pt-2">
                        {feat.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs text-[#0D2440]">
                            <div className="w-4 h-4 rounded-full bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center shrink-0 mt-0.5">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4">
                        <Link
                          href={`/${feat.id === "focus" ? "personal-task-management" : feat.id === "execute" ? "sprint-management" : feat.id === "monitor" ? "team-workload-management" : feat.id === "automate" ? "workflow-automation" : "how-it-works"}`}
                          className="inline-flex items-center gap-2 text-xs font-bold text-[#2E5E99] hover:underline"
                        >
                          <span>Deep dive into {feat.phase} workflows</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                    {/* Visual Mockup column */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="rounded-2xl border border-[#CBD6E2] bg-[#F5F8FB] p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#CBD6E2]">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#CBD6E2]" />
                            <span className="w-3 h-3 rounded-full bg-[#CBD6E2]" />
                            <span className="w-3 h-3 rounded-full bg-[#CBD6E2]" />
                            <span className="ml-2 text-xs font-mono font-bold text-[#0D2440]">
                              {feat.uiTag}
                            </span>
                          </div>
                          <Badge variant="sapphire" className="text-[11px]">
                            {feat.uiMetric}
                          </Badge>
                        </div>

                        {/* Interactive Widget Box */}
                        <div className="rounded-xl bg-white border border-[#CBD6E2] p-5 shadow-xs font-mono text-xs space-y-3">
                          <div className="text-[11px] text-[#5F7083] uppercase font-bold tracking-wider">
                            Active State Simulator
                          </div>
                          <div className="p-3 rounded-lg bg-[#0D2440] text-white">
                            <div className="text-emerald-400 text-[11px] mb-1">✓ Active Component</div>
                            <div className="text-xs font-sans font-semibold">
                              Task: "Implement {feat.phase.toLowerCase()} optimization"
                            </div>
                            <div className="flex items-center gap-3 text-[10px] text-[#7BA4D0] mt-2">
                              <span>Priority: High</span>
                              <span>Context: {feat.phase}</span>
                              <span>Status: Connected</span>
                            </div>
                          </div>
                          <p className="text-[11px] text-[#5F7083] font-sans">
                            Instant synchronization across all team members and connected GitHub/Slack integrations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Final Conversion CTA */}
        <section className="py-20 bg-[#0D2440] text-white">
          <Container size="default" className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Everything connected. Nothing lost.
            </h2>
            <p className="text-sm sm:text-base text-[#CBD6E2] mb-8 leading-relaxed">
              Join thousands of engineers, designers, and managers who have eliminated tool fatigue with SprintDesk.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href={getAppUrl("/signup")}
                className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white w-full sm:w-auto"
              >
                Start Free Trial →
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/pricing"
                className="bg-transparent border-[#7BA4D0] text-white hover:bg-[#163359] w-full sm:w-auto"
              >
                View Pricing Plans
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
