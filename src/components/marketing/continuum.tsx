"use client";

import * as React from "react";
import { Sparkles, ArrowRight, Check, Zap, Layers, Users, Inbox, Sliders } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const stages = [
  {
    id: "01",
    label: "01 CAPTURE",
    tag: "Stage 01 • Frictionless Inbox",
    title: "Zero-Latency Thought Capture",
    description:
      "Ideas arrive when you least expect them. Capture rough notes, bug reports, and to-dos in under two seconds without choosing projects, tags, or story points upfront.",
    bullets: [
      "Global shortcut capture without leaving your current editor",
      "Automatic unorganized backlog queue for later evaluation",
      "Preserves original mental flow before task structuring",
    ],
    previewType: "code",
    codeSnippet: `// SprintDesk Quick Capture API
await sprintdesk.inbox.capture({
  content: "Fix mobile navbar sticky transition",
  source: "cli-shortcut",
  state: "raw_unassigned",
  capturedAt: new Date().toISOString()
});
// Status: Captured to Inbox (0 friction)`,
    cta: "Explore Capture Inbox",
    href: "/features#capture",
  },
  {
    id: "02",
    label: "02 TRIAGE",
    tag: "Stage 02 • Intelligent Decision",
    title: "One-Click Context Routing",
    description:
      "Triage items when you are calm and ready. Decide with a single click whether a captured idea belongs to your private personal work or a collaborative team sprint.",
    bullets: [
      "Route immediately to Personal Flow or Team Sprint Board",
      "Attach initial estimates, priority, and milestone tags",
      "Zero clutter: raw thoughts disappear from your inbox",
    ],
    previewType: "code",
    codeSnippet: `// Triage Action: Route to Team Board
const triaged = await sprintdesk.triage({
  itemId: "inbox_9941",
  targetWorkspace: "Engineering Core",
  targetBoard: "Sprint 42",
  priority: "HIGH",
  storyPoints: 3,
  assignee: "@alex.morgan"
});`,
    cta: "See Triage Workflow",
    href: "/how-it-works#triage",
  },
  {
    id: "03",
    label: "03 PERSONAL",
    tag: "Stage 03 • Deep Work Sanctuary",
    title: "Personal Focus Without Team Noise",
    description:
      "Work privately on daily priorities without having teammates scrutinize your half-finished drafts or seeing 40 notifications from unrelated team tickets.",
    bullets: [
      "Calculates your realistic daily finish line in real time",
      "Private subtasks that never clutter company boards",
      "Daily focus view isolates high-leverage deliverables",
    ],
    previewType: "code",
    codeSnippet: `// Personal Workday Finish Line Engine
calculateFinishTime({
  tasksActive: 4,
  estimatedMinutes: 210,
  averageVelocityModifier: 1.15,
  scheduledMeetings: ["11:00 AM Standup", "2:30 PM 1-on-1"],
  result: "Estimated Finish: 5:40 PM (On Track)"
});`,
    cta: "Discover Personal Flow",
    href: "/personal-task-management",
  },
  {
    id: "04",
    label: "04 TEAM",
    tag: "Stage 04 • Coordinated Velocity",
    title: "Coordinated Team Sprints",
    description:
      "When personal deliverables are ready for review, smoothly transition them into shared team swimlanes with story points, velocity burnup, and blocker tracking.",
    bullets: [
      "Cross-functional swimlanes grouped by engineer or epic",
      "Automated sprint velocity analytics and workload charts",
      "Immediate blocker alerts before deadlines get missed",
    ],
    previewType: "code",
    codeSnippet: `// Sprint Board Live Velocity State
sprintBoard.sync({
  sprint: "Sprint 42 - Q3 Release",
  totalPoints: 48,
  completedPoints: 34,
  velocityTrend: "+18%",
  openBlockers: 1, // Alert sent to Engineering Lead
  burndownHealth: "EXCELLENT"
});`,
    cta: "View Sprint Management",
    href: "/sprint-management",
  },
  {
    id: "05",
    label: "05 AUTOMATE",
    tag: "Stage 05 • Hands-Free Workflows",
    title: "Event-Driven Automations",
    description:
      "Eliminate repetitive ticket babysitting. Simple If-This-Then-That rules automatically update assignments, raise priority on blockers, and post Slack alerts.",
    bullets: [
      "No-code visual rule builder for engineers and managers",
      "Instant status triggers on GitHub PR merges and reviews",
      "Zero ticket bureaucracy: updates happen in the background",
    ],
    previewType: "code",
    codeSnippet: `// Event-Driven Rule Execution
when: status.changesTo("In Review")
and:  priority.is("High")
then: assignTo("Alex Morgan - Lead")
and:  slack.notify("#eng-releases", "PR ready for review")
status: [AUTOMATION ACTIVE ✓]`,
    cta: "Explore No-Code Automations",
    href: "/workflow-automation",
  },
];

export function Continuum() {
  const [activeTab, setActiveTab] = React.useState("05");
  const currentStage = stages.find((s) => s.id === activeTab) || stages[4];

  return (
    <section className="bg-[#0D2440] text-white py-24 sm:py-32 relative overflow-hidden border-t border-b border-[#1E3A5F]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E5E99]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#7BA4D0]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7BA4D0]" />
            The Unified Lifecycle
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4">
            The 5 Continuum
          </h2>
          <p className="text-sm sm:text-base text-[#7BA4D0] leading-relaxed">
            Stop juggling fragmented tools. SprintDesk unifies Capture → Triage → Personal Focus → Team Execution → Automations into one seamless continuum.
          </p>
        </div>

        {/* Horizontal Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#1E3A5F] pb-4">
          {stages.map((stage) => {
            const isActive = stage.id === activeTab;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveTab(stage.id)}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#2E5E99] text-white shadow-md shadow-[#2E5E99]/30"
                    : "bg-[#163359]/60 text-[#7BA4D0] hover:bg-[#163359] hover:text-white"
                }`}
              >
                {stage.label}
              </button>
            );
          })}
        </div>

        {/* Active Stage Display Card */}
        <div className="rounded-2xl border border-[#1E3A5F] bg-[#0A1A2E] p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163359] border border-[#2E5E99]/60 text-xs font-semibold text-[#7BA4D0]">
                {currentStage.tag}
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {currentStage.title}
              </h3>
              <p className="text-sm text-[#CBD6E2] leading-relaxed">
                {currentStage.description}
              </p>

              <ul className="space-y-3">
                {currentStage.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs text-[#E7F0FA]">
                    <div className="w-4 h-4 rounded-full bg-[#2E5E99] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  href={currentStage.href}
                  className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white text-xs font-semibold"
                >
                  {currentStage.cta} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>

            {/* Right Interactive/Code Simulation */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-[#1E3A5F] bg-[#051120] p-4 sm:p-6 shadow-inner font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E3A5F] text-[#7BA4D0] text-[11px]">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    live_engine_trace.log
                  </span>
                  <span className="text-[#CBD6E2]/60">Stage {currentStage.id} of 05</span>
                </div>

                <pre className="text-[#E7F0FA] overflow-x-auto leading-relaxed whitespace-pre-wrap">
                  <code>{currentStage.codeSnippet}</code>
                </pre>

                <div className="mt-4 pt-3 border-t border-[#1E3A5F] flex items-center justify-between text-[11px] text-[#7BA4D0]">
                  <span>Zero Data Loss Guarantee</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Realtime Sync (12ms)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
