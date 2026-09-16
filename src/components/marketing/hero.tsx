"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Sparkles, TrendingUp, Users, Check, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";

export function Hero() {
  const [completedTasks, setCompletedTasks] = React.useState<number[]>([1]);

  const toggleTask = (id: number) => {
    setCompletedTasks((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const tasks = [
    { id: 1, title: "Fix mobile navbar sticky transition", tag: "Frontend", pts: 3, priority: "High" },
    { id: 2, title: "Review client onboarding workflow", tag: "Product", pts: 2, priority: "Medium" },
    { id: 3, title: "Investigate database query latency", tag: "Backend", pts: 5, priority: "Urgent" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F5F8FB] via-white to-white">
      {/* Background soft grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#CBD6E220_1px,transparent_1px),linear-gradient(to_bottom,#CBD6E220_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <Container size="default" className="relative">
        {/* Editorial Eyebrow */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2E5E99]" />
            <span>Personal Focus × Team Velocity</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto text-center mb-6">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.1] tracking-tight text-[#0D2440]">
            Where personal focus <br className="hidden sm:inline" />
            meets <span className="text-[#2E5E99] underline decoration-[#7BA4D0]/40 underline-offset-8">team velocity</span>.
          </h1>
        </div>

        {/* Supporting Copy */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed">
            Stop switching between personal notebooks and complex project boards. SprintDesk lets you capture ideas instantly, manage personal tasks, and coordinate sprints in one unified, automation-powered workspace.
          </p>
        </div>

        {/* Hero CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <Button
            variant="pill-primary"
            size="lg"
            href={getAppUrl("/signup")}
            className="w-full sm:w-auto px-8 text-base shadow-md"
          >
            Start Free Today <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/how-it-works"
            className="w-full sm:w-auto text-base"
          >
            See How It Works
          </Button>
        </div>

        {/* Microcopy */}
        <div className="text-center text-xs text-[#5F7083] mb-14">
          Free 14-day trial • No credit card required • 2-minute setup
        </div>

        {/* Interactive Hero Product Visual (Matching user's uploaded mockup) */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-[#CBD6E2] bg-white shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(13,36,64,0.12)]">
            {/* Window header */}
            <div className="h-10 bg-[#F5F8FB] border-b border-[#CBD6E2] px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#CBD6E2]" />
                <span className="w-3 h-3 rounded-full bg-[#CBD6E2]" />
                <span className="w-3 h-3 rounded-full bg-[#CBD6E2]" />
                <span className="ml-3 text-xs font-mono text-[#5F7083]">
                  sprintdesk.app / workspace / daily-overview
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="sapphire" className="text-[11px] py-0">Live Simulation</Badge>
              </div>
            </div>

            {/* Dashboard Content Grid */}
            <div className="p-4 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#FFFFFF]">
              {/* Column 1: Active Tasks (5 cols) */}
              <div className="md:col-span-5 flex flex-col justify-between border border-[#CBD6E2]/80 rounded-xl p-4 bg-[#F5F8FB]/50">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D2440]">
                      Active Tasks ({tasks.length})
                    </span>
                    <span className="text-[11px] text-[#5F7083]">Today</span>
                  </div>

                  <div className="space-y-2.5">
                    {tasks.map((task) => {
                      const isDone = completedTasks.includes(task.id);
                      return (
                        <div
                          key={task.id}
                          onClick={() => toggleTask(task.id)}
                          className={`p-3 rounded-lg border transition-all cursor-pointer flex items-start gap-3 select-none ${
                            isDone
                              ? "bg-white/60 border-emerald-200 text-[#5F7083]"
                              : "bg-white border-[#CBD6E2] hover:border-[#2E5E99] shadow-xs"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-md mt-0.5 flex items-center justify-center transition-colors ${
                              isDone
                                ? "bg-emerald-500 text-white"
                                : "border border-[#CBD6E2] hover:border-[#2E5E99]"
                            }`}
                          >
                            {isDone && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`text-xs font-medium leading-tight mb-1.5 ${isDone ? "line-through text-[#5F7083]" : "text-[#0D2440]"}`}>
                              {task.title}
                            </div>
                            <div className="flex items-center gap-2 text-[10px]">
                              <span className="px-1.5 py-0.5 rounded bg-[#E7F0FA] text-[#2E5E99] font-medium">
                                {task.tag}
                              </span>
                              <span className="text-[#5F7083]">{task.pts} pts</span>
                              <span className={task.priority === "Urgent" ? "text-rose-600 font-semibold" : "text-[#5F7083]"}>
                                {task.priority}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#CBD6E2]/60 flex items-center justify-between text-[11px] text-[#5F7083]">
                  <span>Click task to test auto-recalculation</span>
                  <span className="text-[#2E5E99] font-semibold cursor-pointer">+ Quick Add</span>
                </div>
              </div>

              {/* Column 2: Today's Estimated Finish (4 cols) */}
              <div className="md:col-span-4 flex flex-col justify-between border border-[#CBD6E2]/80 rounded-xl p-4 bg-white shadow-xs">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D2440]">
                      Finish Predictor
                    </span>
                    <Badge variant="success" className="text-[10px]">
                      On Track
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <div className="text-[11px] text-[#5F7083] font-medium uppercase tracking-wider">
                      Estimated Finish Time
                    </div>
                    <div className="text-4xl font-extrabold text-[#0D2440] font-heading tracking-tight flex items-baseline gap-2">
                      5:40 <span className="text-lg text-[#2E5E99] font-semibold">PM</span>
                    </div>
                    <p className="text-xs text-[#5F7083] mt-1">
                      Based on current velocity & {3 - completedTasks.length} pending items
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex justify-between text-[11px] font-medium">
                      <span className="text-[#0D2440]">Daily Completion</span>
                      <span className="text-[#2E5E99] font-bold">
                        {Math.round(((completedTasks.length + 8) / 12) * 100)}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-[#E7F0FA] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#2E5E99] rounded-full transition-all duration-500"
                        style={{ width: `${((completedTasks.length + 8) / 12) * 100}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-[#5F7083] text-right">
                      {completedTasks.length + 8} of 12 tasks completed
                    </div>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-[#E7F0FA] border border-[#7BA4D0]/30 text-[11px] text-[#0D2440] flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#2E5E99] shrink-0" />
                  <span><strong>+24m buffer</strong> remaining before next sprint review.</span>
                </div>
              </div>

              {/* Column 3: Team Workload & Activity (3 cols) */}
              <div className="md:col-span-3 flex flex-col justify-between border border-[#CBD6E2]/80 rounded-xl p-4 bg-[#F5F8FB]/50">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D2440]">
                      Team Activity
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="font-semibold text-[#0D2440]">Sarah Chen</span>
                        <span className="text-[#2E5E99] font-mono">4 tasks</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#CBD6E2]/50 rounded-full overflow-hidden">
                        <div className="h-full bg-[#2E5E99] rounded-full w-[80%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="font-semibold text-[#0D2440]">Alex Morgan</span>
                        <span className="text-[#2E5E99] font-mono">3 tasks</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#CBD6E2]/50 rounded-full overflow-hidden">
                        <div className="h-full bg-[#7BA4D0] rounded-full w-[60%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span className="font-semibold text-[#0D2440]">David Kim</span>
                        <span className="text-[#2E5E99] font-mono">2 tasks</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#CBD6E2]/50 rounded-full overflow-hidden">
                        <div className="h-full bg-[#2E5E99] rounded-full w-[45%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#CBD6E2]/60 text-[11px] text-[#5F7083]">
                  <div className="font-medium text-[#0D2440] truncate">Latest Update:</div>
                  <div className="truncate text-[10px] text-[#2E5E99]">
                    Sarah moved API Auth to In Review
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration ticker banner */}
        <div className="mt-14 pt-8 border-t border-[#CBD6E2]/40 text-center">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#7BA4D0] mb-5">
            Connects effortlessly with your existing developer stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-medium text-[#5F7083]">
            <span className="flex items-center gap-1.5 hover:text-[#0D2440] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#2E5E99]" /> GitHub Webhooks
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0D2440] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#7BA4D0]" /> Slack Sync
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0D2440] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#0D2440]" /> Jira Migration
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0D2440] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#2E5E99]" /> Linear Import
            </span>
            <span className="flex items-center gap-1.5 hover:text-[#0D2440] transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#7BA4D0]" /> Google Calendar
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
