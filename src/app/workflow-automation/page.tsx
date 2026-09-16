"use client";

import * as React from "react";
import Link from "next/link";
import {
  Zap,
  CheckCircle2,
  Play,
  RefreshCw,
  ArrowRight,
  Sliders,
  Bell,
  GitPullRequest,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";

export default function WorkflowAutomationPage() {
  const [activeTrigger, setActiveTrigger] = React.useState<"review" | "blocker" | "deploy">("review");
  const [simState, setSimState] = React.useState({
    status: "Todo",
    priority: "Medium",
    assignee: "Alex Morgan",
    slackAlert: "None",
  });
  const [isRunning, setIsRunning] = React.useState(false);

  const runSimulation = () => {
    setIsRunning(true);
    if (activeTrigger === "review") {
      setSimState({
        status: "In Review",
        priority: "High (P1)",
        assignee: "Sarah Chen (Lead)",
        slackAlert: "Sent to #eng-reviews",
      });
    } else if (activeTrigger === "blocker") {
      setSimState({
        status: "Blocked",
        priority: "Urgent (P0)",
        assignee: "DevOps On-Call",
        slackAlert: "High-Priority Alert to #eng-leads",
      });
    } else {
      setSimState({
        status: "Released",
        priority: "Normal",
        assignee: "QA Lead",
        slackAlert: "Release Broadcast to #announcements",
      });
    }
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setSimState({
      status: "Todo",
      priority: "Medium",
      assignee: "Alex Morgan",
      slackAlert: "None",
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero */}
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Zap className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>No-Code Workflow Automations</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Let your workflow handle the busywork.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8">
                Create simple no-code rules that automatically update tasks, escalate priorities, and assign work when key sprint conditions are met.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")}>
                  Start Free Automations →
                </Button>
                <Button variant="outline" size="lg" href="/pricing">
                  View Enterprise Automations
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* AEO / AI Search Definition Block */}
        <section className="py-8 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="narrow">
            <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] text-xs sm:text-sm text-[#0D2440] leading-relaxed">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#2E5E99] mb-2">
                What is Workflow Automation in Task Management?
              </h2>
              <p className="mb-3">
                <strong>Workflow automation</strong> is the programmatic execution of rule-based triggers and actions (If This → Then That) without manual human data entry. In modern sprint and project management software, workflow automation dynamically changes task statuses upon GitHub PR merges, notifies Slack channels when blockers are identified, and escalates story priorities based on delivery deadlines.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#5F7083] pt-2 border-t border-[#CBD6E2]/50">
                <span>Key benefits: 0 manual ticket updates</span>
                <span>•</span>
                <span>Consistent triage</span>
                <span>•</span>
                <span>Zero administrative drag</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Interactive No-Code Rule Builder */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="max-w-4xl mx-auto rounded-2xl border-2 border-[#2E5E99] bg-[#0D2440] text-white p-6 sm:p-10 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E3A5F]">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-[#7BA4D0]">
                    Interactive Automation Builder
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Test an Event-Driven Rule
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => { setActiveTrigger("review"); resetSimulation(); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activeTrigger === "review" ? "bg-[#2E5E99] text-white" : "bg-[#163359] text-[#7BA4D0]"
                    }`}
                  >
                    PR Review Rule
                  </button>
                  <button
                    onClick={() => { setActiveTrigger("blocker"); resetSimulation(); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activeTrigger === "blocker" ? "bg-[#2E5E99] text-white" : "bg-[#163359] text-[#7BA4D0]"
                    }`}
                  >
                    Blocker Escalation
                  </button>
                  <button
                    onClick={() => { setActiveTrigger("deploy"); resetSimulation(); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activeTrigger === "deploy" ? "bg-[#2E5E99] text-white" : "bg-[#163359] text-[#7BA4D0]"
                    }`}
                  >
                    Deploy to Staging
                  </button>
                </div>
              </div>

              {/* Rule Visual Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-[#081728] border border-[#1E3A5F]">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#7BA4D0]">
                    WHEN (TRIGGER)
                  </span>
                  <div className="text-xs font-bold text-white mt-1 mb-2">Event Detected</div>
                  <div className="p-2.5 rounded bg-[#0E2540] border border-[#2E5E99]/60 text-xs font-mono text-[#E7F0FA]">
                    {activeTrigger === "review"
                      ? "Task status → In Review"
                      : activeTrigger === "blocker"
                      ? "Task tagged → BLOCKED"
                      : "GitHub PR → Merged"}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#081728] border border-[#1E3A5F]">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#7BA4D0]">
                    THEN (ACTION 1)
                  </span>
                  <div className="text-xs font-bold text-white mt-1 mb-2">Update Metadata</div>
                  <div className="p-2.5 rounded bg-[#0E2540] border border-[#2E5E99]/60 text-xs font-mono text-[#E7F0FA]">
                    {activeTrigger === "review"
                      ? "Set Priority: High (P1)"
                      : activeTrigger === "blocker"
                      ? "Set Priority: Urgent (P0)"
                      : "Set Status: Released"}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#081728] border border-[#1E3A5F]">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#7BA4D0]">
                    AND (ACTION 2)
                  </span>
                  <div className="text-xs font-bold text-white mt-1 mb-2">Notify & Assign</div>
                  <div className="p-2.5 rounded bg-[#0E2540] border border-[#2E5E99]/60 text-xs font-mono text-[#E7F0FA]">
                    {activeTrigger === "review"
                      ? "Assign Sarah Chen & Ping Slack"
                      : activeTrigger === "blocker"
                      ? "Escalate to DevOps On-Call"
                      : "Notify QA Squad & Slack"}
                  </div>
                </div>
              </div>

              {/* Execution State Box */}
              <div className="p-5 rounded-xl bg-[#081728] border border-[#1E3A5F] flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="text-[10px] text-[#7BA4D0] uppercase font-mono font-bold">
                    Target Task: Task #104 — "Refactor Auth Token Cache"
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                    <span className="text-[#CBD6E2]">
                      Status: <strong className={isRunning ? "text-emerald-400 font-mono" : "text-white font-mono"}>{simState.status}</strong>
                    </span>
                    <span className="text-[#CBD6E2]">
                      Priority: <strong className={isRunning ? "text-rose-400 font-mono" : "text-white font-mono"}>{simState.priority}</strong>
                    </span>
                    <span className="text-[#CBD6E2]">
                      Owner: <strong className="text-[#7BA4D0] font-mono">{simState.assignee}</strong>
                    </span>
                    {isRunning && (
                      <span className="text-emerald-400 text-xs font-mono">
                        ({simState.slackAlert})
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {!isRunning ? (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={runSimulation}
                      className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white text-xs font-semibold px-5"
                    >
                      <Play className="w-3.5 h-3.5 mr-1.5 fill-current" /> Fire Rule
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={resetSimulation}
                      className="bg-transparent text-white border-[#7BA4D0] hover:bg-[#163359] text-xs"
                    >
                      <RefreshCw className="w-3.5 h-3.5 mr-1.5" /> Reset
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3 Core Pillars */}
        <section className="py-20 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D2440] tracking-tight mb-3">
                If this. Then that. Without the busywork.
              </h2>
              <p className="text-sm text-[#5F7083]">
                Three reasons engineering squads automate their sprint hygiene with SprintDesk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Zero Manual Status Updates
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  When developers open a pull request or merge to main, tasks automatically advance columns. No more forgetting to drag cards.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Deterministic Escalation
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Ensure critical bugs and blocked cards never sit silently. Rules automatically alert the right team leads before deadlines are at risk.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Cross-Workspace Sync
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  When a personal subtask finishes, rules can automatically recalculate overall team sprint progress without exposing private notes.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#0D2440] text-white text-center">
          <Container size="default" className="max-w-3xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Build the rule once. Let the workflow repeat itself.
            </h2>
            <p className="text-sm text-[#CBD6E2] mb-8 leading-relaxed">
              Automations are available on SprintDesk Enterprise plans. Start free today and explore automated sprint velocity.
            </p>
            <Button
              variant="primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white"
            >
              Start Free Automation Workspace →
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
