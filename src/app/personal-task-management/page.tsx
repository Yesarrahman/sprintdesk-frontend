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
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";

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
  // Live Simulator State
  const [taskCount, setTaskCount] = React.useState(4);
  const [taskMinutes, setTaskMinutes] = React.useState(45);
  const [meetingMinutes, setMeetingMinutes] = React.useState(60);

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
            <div className="max-w-3xl mx-auto">
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
            </div>
          </Container>
        </section>

        {/* AEO / AI Search Definition Block */}
        <section className="py-8 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="narrow">
            <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] text-xs sm:text-sm text-[#0D2440] leading-relaxed">
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
            </div>
          </Container>
        </section>

        {/* Interactive Tool: Workday Finish Line Calculator */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="max-w-4xl mx-auto rounded-2xl border-2 border-[#2E5E99] bg-[#0D2440] text-white p-6 sm:p-10 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E3A5F]">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-[#7BA4D0]">
                    Interactive Simulator
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Simulate Your Daily Finish Line
                  </h3>
                </div>
                <Badge variant="sapphire" className="text-xs">
                  SprintDesk Algorithm v4.2
                </Badge>
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
            </div>
          </Container>
        </section>

        {/* 5 Core Pillars */}
        <section className="py-20 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D2440] tracking-tight mb-3">
                Built for deep work, not ticket administration.
              </h2>
              <p className="text-sm text-[#5F7083]">
                Five pillars that transform personal task management from scattered notes into calm execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  1. Zero-Friction Capture
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Log ideas in under a second using global desktop hotkeys without opening your browser.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  2. Scheduled Triage
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Review raw ideas during morning planning and route them to private focus or team sprints.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  3. Finish Line Calculus
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Know down to the minute when you will complete your commitments and log off guilt-free.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white">
          <Container size="narrow">
            <div className="text-center mb-16">
              <h2 className="font-heading font-extrabold text-3xl text-[#0D2440] tracking-tight mb-3">
                Personal Task Management FAQs
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#CBD6E2] p-6 hover:border-[#7BA4D0] transition-colors"
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

            <div className="mt-12 pt-8 border-t border-[#CBD6E2]/50 flex flex-wrap items-center justify-between text-xs text-[#2E5E99]">
              <Link href="/team-task-management" className="hover:underline flex items-center gap-1">
                Explore Team Task Management →
              </Link>
              <Link href="/how-it-works" className="hover:underline flex items-center gap-1">
                View SprintDesk Workflow →
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
