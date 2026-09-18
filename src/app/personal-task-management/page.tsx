"use client";

import * as React from "react";
import Link from "next/link";
import {
  Clock,
  Sparkles,
  CheckCircle2,
  Lock,
  ArrowRight,
  Sliders,
  Calendar,
  Layers,
  HelpCircle,
  Shield,
  ArrowUpRight,
  FolderGit2,
  Check,
  RefreshCw,
  EyeOff,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";
import { GsapReveal, GsapScale, GsapStagger } from "@/components/marketing/gsap-effects";

const faqs = [
  {
    question: "What is personal task management?",
    answer:
      "Personal task management is the systematic process of capturing, prioritizing, scheduling, and completing your individual commitments. Unlike collaborative team project boards, personal task management protects private focus by filtering out external noise, interruptions, and premature scrutiny.",
  },
  {
    question: "Can my employer or teammates see my Personal Task Flow?",
    answer:
      "No. SprintDesk isolates your Personal Workspace with cryptographic permissions. Your private checklists, subtasks, notes, and estimated finish times remain strictly visible to you alone, until you choose to triage an item to a shared team board.",
  },
  {
    question: "How does the Estimated Finish Time engine calculate my workday end?",
    answer:
      "The finish predictor analyzes your total estimated task minutes, historical completion pace (velocity modifier), and calendar meeting commitments to calculate a precise finish time (e.g. 5:40 PM). As you check off tasks, it updates dynamically.",
  },
  {
    question: "How do I triage a personal task into a team sprint?",
    answer:
      "Simply click 'Triage to Board' on any personal card. Select your team workspace, choose the active sprint column, assign story points, and the card smoothly bridges into team visibility without losing your private notes.",
  },
];

export default function PersonalTaskManagementPage() {
  // Live Simulator State: Workday Finish Line
  const [taskCount, setTaskCount] = React.useState(4);
  const [taskMinutes, setTaskMinutes] = React.useState(45);
  const [meetingMinutes, setMeetingMinutes] = React.useState(60);

  // Live Simulator State: Triage Bridge
  const [triageStep, setTriageStep] = React.useState<"scratchpad" | "triaging" | "promoted">("scratchpad");
  const [fibPoints, setFibPoints] = React.useState<number>(3);
  const [targetColumn, setTargetColumn] = React.useState<string>("In Progress");

  // Calculate estimated finish time
  const totalMinutes = taskCount * taskMinutes + meetingMinutes;
  const startTime = 9 * 60; // 9:00 AM
  const finishMinutesTotal = startTime + totalMinutes;
  const finishHour = Math.floor(finishMinutesTotal / 60) % 12 || 12;
  const finishMin = Math.round(finishMinutesTotal % 60)
    .toString()
    .padStart(2, "0");
  const isPM = finishMinutesTotal >= 12 * 60;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero Section */}
        <section className="pb-16 text-center">
          <Container size="default">
            <GsapReveal className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Lock className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>Personal Task Management</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Your work deserves a space of its own.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8">
                Capture tasks, organize priorities, and protect your deep focus without getting buried in team pings or corporate project boards.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")}>
                  Start Personal Workspace Free →
                </Button>
                <Button variant="outline" size="lg" href="/how-it-works">
                  See The Flow
                </Button>
              </div>
            </GsapReveal>
          </Container>
        </section>

        {/* AEO / AI Search Definition Block */}
        <section className="py-8 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="narrow">
            <GsapReveal duration={0.6} y={15} className="p-6 rounded-xl bg-white border border-[#CBD6E2] text-xs sm:text-sm text-[#0D2440] leading-relaxed">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#2E5E99] mb-2">
                What is Personal Task Management?
              </h2>
              <p className="mb-3">
                <strong>Personal task management</strong> is the discipline of capturing, prioritizing, and executing individual work commitments within a dedicated focus environment. Unlike team project management software—which emphasizes public accountability, ticket administration, and cross-team dependencies—personal task management provides a private buffer where professionals can think, plan, and calculate realistic workday completion times without surveillance.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#5F7083] pt-2 border-t border-[#CBD6E2]/50">
                <span>Key components: Zero-latency capture</span>
                <span>•</span>
                <span>Contextual triage</span>
                <span>•</span>
                <span>Dynamic finish-time estimation</span>
              </div>
            </GsapReveal>
          </Container>
        </section>

        {/* Section 3: Interactive Tool: Workday Finish Line Calculator */}
        <section id="finish-time" className="py-20 bg-white scroll-mt-28">
          <Container size="default">
            <GsapScale className="max-w-4xl mx-auto rounded-2xl border-2 border-[#2E5E99] bg-[#0D2440] text-white p-6 sm:p-10 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E3A5F]">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-[#7BA4D0]">
                    Interactive Simulator
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Simulate Your Daily Finish Line
                  </h3>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#163359] border border-[#2E5E99] text-xs text-[#E7F0FA] font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>PRD Section 11 Algorithm</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                {/* Sliders */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#CBD6E2] mb-2">
                      <span>Tasks Planned for Today:</span>
                      <strong className="text-white font-mono text-sm">{taskCount} tasks</strong>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      value={taskCount}
                      onChange={(e) => setTaskCount(Number(e.target.value))}
                      className="w-full accent-[#2E5E99] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#CBD6E2] mb-2">
                      <span>Avg. Minutes per Task:</span>
                      <strong className="text-white font-mono text-sm">{taskMinutes} mins</strong>
                    </div>
                    <input
                      type="range"
                      min="15"
                      max="90"
                      step="5"
                      value={taskMinutes}
                      onChange={(e) => setTaskMinutes(Number(e.target.value))}
                      className="w-full accent-[#2E5E99] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#CBD6E2] mb-2">
                      <span>Scheduled Meetings & Distractions:</span>
                      <strong className="text-white font-mono text-sm">{meetingMinutes} mins</strong>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="180"
                      step="15"
                      value={meetingMinutes}
                      onChange={(e) => setMeetingMinutes(Number(e.target.value))}
                      className="w-full accent-[#2E5E99] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Calculation Result */}
                <div className="rounded-xl bg-[#081728] border border-[#1E3A5F] p-6 text-center flex flex-col justify-center items-center">
                  <span className="text-xs uppercase font-mono tracking-wider text-[#7BA4D0] mb-2">
                    Estimated Workday Finish Time
                  </span>
                  <div className="text-5xl font-extrabold text-white font-heading tracking-tight mb-2">
                    {finishHour}:{finishMin}{" "}
                    <span className="text-xl text-[#7BA4D0]">{isPM ? "PM" : "AM"}</span>
                  </div>
                  <div className="text-xs text-[#CBD6E2] mb-4">
                    Total Work Load: {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#163359] border border-[#2E5E99] text-xs text-[#E7F0FA] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Realistic Workday Predictor</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E3A5F] text-center">
                <p className="text-xs text-[#7BA4D0] mb-3">
                  Never guess if your daily to-do list is actually achievable.
                </p>
                <Button
                  variant="primary"
                  size="md"
                  href={getAppUrl("/signup")}
                  className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white text-xs font-semibold"
                >
                  Track Your Workday in SprintDesk Free →
                </Button>
              </div>
            </GsapScale>
          </Container>
        </section>

        {/* Section 4: 5 Core Deep Work Pillars */}
        <section className="py-20 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D2440] tracking-tight mb-3">
                Built for deep work, not ticket administration.
              </h2>
              <p className="text-sm text-[#5F7083]">
                Five architectural pillars that transform personal task management from scattered notes into calm execution.
              </p>
            </div>

            <GsapStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] hover:border-[#7BA4D0] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center font-bold mb-3">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  1. Zero-Friction Capture
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Log ideas in under a second via global keyboard shortcut without opening a browser tab or filling mandatory form dropdowns.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] hover:border-[#7BA4D0] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center font-bold mb-3">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  2. Dual-Workspace Privacy
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Personal cards and checklists are cryptographically isolated. Teammates and managers cannot inspect your personal scratchpad.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] hover:border-[#7BA4D0] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center font-bold mb-3">
                  <Calendar className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  3. Morning Triage Engine
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Start your day by sorting raw inbox items into today&apos;s focus list, scheduling them for later, or triaging them to team boards.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] hover:border-[#7BA4D0] transition-colors">
                <div className="w-9 h-9 rounded-lg bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center font-bold mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  4. Finish Line Algorithm
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Dynamic mathematical projection of your workday completion time based on task estimates, meeting loads, and historical velocity.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] hover:border-[#7BA4D0] transition-colors md:col-span-2">
                <div className="w-9 h-9 rounded-lg bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center font-bold mb-3">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  5. One-Click Sprint Promotion
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  When private tasks evolve into collaborative team deliverables, elevate them to your Team Sprint Board with story points and an epic assignment in a single click.
                </p>
              </div>
            </GsapStagger>
          </Container>
        </section>

        {/* Section 5: [NEW] Personal-to-Team Triage Bridge */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-bold font-mono uppercase tracking-wider text-[#2E5E99] mb-3">
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>The Missing Bridge in Project Tools</span>
                </div>
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D2440] tracking-tight">
                  How Personal Notes Become Team Sprints
                </h2>
                <p className="text-sm text-[#5F7083] mt-2 max-w-xl mx-auto">
                  Experience how SprintDesk connects private scratchpad thoughts into collaborative agile deliverables without copy-pasting or losing context.
                </p>
              </div>

              {/* Interactive Bridge Visualizer */}
              <div className="rounded-2xl border border-[#CBD6E2] bg-[#F8FAFC] p-6 sm:p-8 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#CBD6E2]">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                      triageStep === "scratchpad" ? "bg-[#2E5E99] text-white" : "bg-[#E7F0FA] text-[#2E5E99]"
                    }`}>
                      1. Private Scratchpad
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#5F7083]" />
                    <span className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                      triageStep === "triaging" ? "bg-[#2E5E99] text-white" : "bg-[#E7F0FA] text-[#2E5E99]"
                    }`}>
                      2. Triage & Sizing
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#5F7083]" />
                    <span className={`px-3 py-1 rounded-full text-xs font-bold transition-colors ${
                      triageStep === "promoted" ? "bg-emerald-600 text-white" : "bg-[#E7F0FA] text-[#2E5E99]"
                    }`}>
                      3. Team Sprint Card
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      if (triageStep === "scratchpad") setTriageStep("triaging");
                      else if (triageStep === "triaging") setTriageStep("promoted");
                      else setTriageStep("scratchpad");
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#CBD6E2] text-xs font-semibold text-[#0D2440] hover:bg-[#F5F8FB] transition-colors cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3 text-[#2E5E99]" />
                    <span>{triageStep === "promoted" ? "Reset Demonstration" : "Next Step →"}</span>
                  </button>
                </div>

                {/* Stage 1: Private Scratchpad Note */}
                {triageStep === "scratchpad" && (
                  <div className="p-6 rounded-xl bg-white border-2 border-dashed border-[#CBD6E2] space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-[#2E5E99]" />
                        <span className="text-xs font-mono font-bold text-[#2E5E99] uppercase">Private Scratchpad Item</span>
                      </div>
                      <span className="text-[11px] text-[#5F7083]">Captured 9:14 AM • Only visible to you</span>
                    </div>
                    <div className="text-base font-bold text-[#0D2440]">
                      Draft cache invalidation logic for distributed auth session tokens
                    </div>
                    <p className="text-xs text-[#5F7083]">
                      Investigate Redis cluster replica lag and check if TTL matches JWT expiration times.
                    </p>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-mono text-[#5F7083]">Est: 45 min</span>
                      <button
                        onClick={() => setTriageStep("triaging")}
                        className="px-3.5 py-1.5 rounded-lg bg-[#2E5E99] text-white text-xs font-bold hover:bg-[#3a72b5] transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>Triage to Team Board</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Stage 2: Triaging & Story Points */}
                {triageStep === "triaging" && (
                  <div className="p-6 rounded-xl bg-white border border-[#2E5E99] shadow-md space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#2E5E99] uppercase">Triage Modal: Route to Team Sprint</span>
                      <span className="text-[11px] bg-[#E7F0FA] text-[#2E5E99] px-2 py-0.5 rounded font-bold">Workspace: Core Squad</span>
                    </div>
                    <div className="text-sm font-bold text-[#0D2440]">
                      Draft cache invalidation logic for distributed auth session tokens
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="text-xs font-bold text-[#0D2440] block mb-1.5">
                          Fibonacci Story Points:
                        </label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 5, 8].map((pts) => (
                            <button
                              key={pts}
                              onClick={() => setFibPoints(pts)}
                              className={`w-8 h-8 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                                fibPoints === pts
                                  ? "bg-[#2E5E99] text-white ring-2 ring-[#2E5E99]/30"
                                  : "bg-[#F5F8FB] border border-[#CBD6E2] text-[#0D2440] hover:bg-[#E7F0FA]"
                              }`}
                            >
                              {pts}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-bold text-[#0D2440] block mb-1.5">
                          Target Board Column:
                        </label>
                        <select
                          value={targetColumn}
                          onChange={(e) => setTargetColumn(e.target.value)}
                          className="w-full text-xs p-2 rounded-lg border border-[#CBD6E2] bg-white text-[#0D2440]"
                        >
                          <option>Sprint Backlog</option>
                          <option>In Progress</option>
                          <option>Code Review</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                      <button
                        onClick={() => setTriageStep("scratchpad")}
                        className="px-3 py-1.5 text-xs text-[#5F7083] hover:text-[#0D2440] cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={() => setTriageStep("promoted")}
                        className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors cursor-pointer flex items-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5" />
                        <span>Confirm Promotion ({fibPoints} pts)</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Stage 3: Promoted Team Sprint Card */}
                {triageStep === "promoted" && (
                  <div className="p-6 rounded-xl bg-emerald-50/60 border-2 border-emerald-500/80 shadow-md space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-mono font-bold text-emerald-700 uppercase">Live in Active Sprint 42</span>
                      </div>
                      <span className="text-xs font-mono font-bold bg-white px-2.5 py-1 rounded-full border border-emerald-300 text-emerald-800">
                        Column: {targetColumn}
                      </span>
                    </div>
                    <div className="text-base font-bold text-[#0D2440]">
                      Draft cache invalidation logic for distributed auth session tokens
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono font-bold">
                        {fibPoints} Story Points
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold">
                        Epic: #infrastructure
                      </span>
                      <span className="text-xs text-[#5F7083]">
                        Assigned: You • Contributes to Team Velocity
                      </span>
                    </div>
                    <div className="pt-2 text-xs text-emerald-900 leading-relaxed">
                      ✓ Successfully linked to team sprint burndown. Private scratchpad subtasks remain safely isolated in your personal focus view.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* Section 6: FAQs & Final CTA */}
        <section className="py-24 bg-[#F5F8FB] border-t border-[#CBD6E2]/70">
          <Container size="narrow">
            <div className="text-center mb-16">
              <h2 className="font-heading font-extrabold text-3xl text-[#0D2440] tracking-tight mb-3">
                Personal Task Management FAQs
              </h2>
              <p className="text-xs sm:text-sm text-[#5F7083]">
                Everything you need to know about private task isolation and daily finish time forecasting.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#CBD6E2] bg-white p-6 hover:border-[#7BA4D0] transition-colors"
                >
                  <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2 flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#2E5E99] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F7083] leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* In-page Final CTA Box */}
            <div className="mt-16 p-8 rounded-2xl bg-[#0D2440] text-white text-center shadow-xl">
              <h3 className="font-heading font-extrabold text-2xl mb-2 text-white">
                Start your private focus workspace today.
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD6E2] mb-6 max-w-md mx-auto">
                No credit card required. Experience zero-friction capture and our predictive Estimated Finish Time algorithm.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="pill-primary"
                  size="md"
                  href={getAppUrl("/signup")}
                  className="bg-[#2E5E99] hover:bg-[#3D78BE] text-white font-bold"
                >
                  Create Free Personal Workspace →
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="/how-it-works"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Explore How It Works
                </Button>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-[#CBD6E2]/50 flex flex-wrap items-center justify-between text-xs text-[#2E5E99]">
              <Link href="/team-task-management" className="hover:underline flex items-center gap-1">
                Explore Team Task Management →
              </Link>
              <Link href="/sprint-management" className="hover:underline flex items-center gap-1">
                View Agile Sprint Boards →
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
