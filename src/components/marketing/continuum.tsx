"use client";

import * as React from "react";
import { Check, ArrowRight, Terminal } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/utils";
import { GsapReveal, GsapScale } from "@/components/marketing/gsap-effects";

const continuumStages = [
  {
    id: "01",
    tab: "01 CAPTURE",
    tag: "Stage 01 • Frictionless Inbox",
    headline: "Zero-Latency Thought Capture",
    description: "Ideas arrive when you least expect them. Capture rough notes, bug reports, and to-dos in under two seconds without choosing projects, tags, or story points upfront.",
    bullets: [
      "Global shortcut capture without leaving your current editor",
      "Automatic unorganized backlog queue for later evaluation",
      "Preserves original mental flow before task structuring",
    ],
    code: `// SprintDesk Quick Capture API
await sprintdesk.inbox.capture({
  content: "Fix mobile navbar sticky transition",
  source: "cli-shortcut",
  state: "raw_unassigned",
  capturedAt: new Date().toISOString()
});
// Status: Captured to Inbox (0 friction)`,
  },
  {
    id: "02",
    tab: "02 TRIAGE",
    tag: "Stage 02 • Context Routing",
    headline: "One-Click Triage Modal",
    description: "Triage items when you are calm and ready. Decide with a single click whether a captured note belongs to your private personal flow or a collaborative team sprint.",
    bullets: [
      "Route immediately to Personal Space or Team Sprint Board",
      "Attach initial estimates, priority, and milestone tags",
      "Zero clutter: raw thoughts disappear from your inbox",
    ],
    code: `// Triage Action: Route to Team Board
const triaged = await sprintdesk.triage({
  itemId: "inbox_9941",
  targetWorkspace: "Engineering Core",
  targetBoard: "Sprint 42",
  priority: "HIGH",
  storyPoints: 3,
  assignee: "@alex.morgan"
});`,
  },
  {
    id: "03",
    tab: "03 PERSONAL",
    tag: "Stage 03 • Focus Sanctuary",
    headline: "Personal Focus Without Team Noise",
    description: "Work privately on daily priorities without teammates scrutinizing your draft notes or drowning in 40 notifications from unrelated team tickets.",
    bullets: [
      "Calculates your realistic daily finish line in real time (e.g. 5:40 PM)",
      "Private subtasks that never clutter company boards",
      "Daily focus view isolates high-leverage deliverables",
    ],
    code: `// Personal Workday Finish Line Engine
calculateFinishTime({
  tasksActive: 4,
  estimatedMinutes: 210,
  averageVelocityModifier: 1.15,
  scheduledMeetings: ["11:00 AM Standup", "2:30 PM 1-on-1"],
  result: "Estimated Finish: 5:40 PM (On Track)"
});`,
  },
  {
    id: "04",
    tab: "04 TEAM",
    tag: "Stage 04 • Coordinated Execution",
    headline: "Synchronized Team Sprint Board",
    description: "Promote triaged tasks to the shared sprint board with story point sizing, assignee swimlanes, and automated blocker radar.",
    bullets: [
      "Fibonacci complexity sizing separated from personal hours",
      "1-Click assignee swimlanes to visualize workload balance",
      "Real-time card movements with sub-100ms sync across teammates",
    ],
    code: `// Team Sprint Board State
export const sprintConfig = {
  name: "Sprint 42",
  capacityStoryPoints: 42,
  completedPoints: 34,
  columns: ["Backlog", "To Do", "In Progress", "In Review", "Completed"],
  swimlaneGrouping: "assignee"
};`,
  },
  {
    id: "05",
    tab: "05 AUTOMATE",
    tag: "Stage 05 • Event-Driven Automations",
    headline: "Event-Driven No-Code Workflows",
    description: "Create simple deterministic rules that automatically update tasks, notify leads, and escalate blockers without manual babysitting.",
    bullets: [
      "WHEN Status = In Review → THEN Set Priority = High",
      "Automatically route pull request notifications to assignees",
      "Instant agency-grade workflow automation without writing code",
    ],
    code: `// Event-Driven Automations Engine
sprintdesk.automations.registerRule({
  trigger: { event: "task.status_changed", to: "in_review" },
  actions: [
    { type: "set_priority", value: "high" },
    { type: "assign_member", role: "project_manager" }
  ]
});
// Automated: Status updated & PM notified.`,
  },
];

export function Continuum() {
  const [activeTab, setActiveTab] = React.useState(4); // Default to 05 Automate like screenshot
  const stage = continuumStages[activeTab];

  return (
    <section className="py-20 md:py-28 bg-[#0D2440] text-white relative overflow-hidden">
      <Container size="default">
        {/* Section Header */}
        <GsapReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-2">
              THE FOUNDATION
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              The 5 Continuum
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#CBD6E2] max-w-md">
            Stop juggling 4 tools. One system: Capture → Triage → Organize → Execute → Automate.
          </p>
        </GsapReveal>

        {/* 5-Tab Segmented Switcher */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 rounded-xl bg-[#081728] border border-[#1E3A5F] mb-8">
          {continuumStages.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(idx)}
              className={`py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                activeTab === idx
                  ? "bg-[#2E5E99] text-white shadow-sm"
                  : "text-[#7BA4D0] hover:text-white"
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* Stage Content Window matching UI Screenshot */}
        <GsapScale className="rounded-2xl border border-[#1E3A5F] bg-[#0A1B2F] p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Stage Details (6 cols) */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0]">
                {stage.tag}
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                {stage.headline}
              </h3>
              <p className="text-sm text-[#CBD6E2] leading-relaxed">
                {stage.description}
              </p>

              <div className="space-y-2.5 pt-2">
                {stage.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E7F0FA]">
                    <div className="w-4 h-4 rounded mt-0.5 bg-[#2E5E99] text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Terminal / Rule Execution Box (6 cols) */}
            <div className="lg:col-span-6">
              <div className="rounded-xl border border-[#1E3A5F] bg-[#050D18] p-5 font-mono text-xs text-[#CBD6E2] shadow-inner overflow-x-auto">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E3A5F] text-[11px] text-[#5F7083]">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#2E5E99]" />
                    <span>sprintdesk.workflow.engine</span>
                  </div>
                  <span className="text-[#23865A] font-bold">ACTIVE ✓</span>
                </div>
                <pre className="text-xs text-[#7BA4D0] leading-relaxed whitespace-pre-wrap">
                  {stage.code}
                </pre>
              </div>
            </div>
          </div>
        </GsapScale>
      </Container>
    </section>
  );
}
