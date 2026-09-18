"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, User, Users, CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/utils";
import { GsapReveal, GsapScale } from "@/components/marketing/gsap-effects";

export function Hero() {
  const [activeWorkspace, setActiveWorkspace] = React.useState<"personal" | "team">("personal");
  const [completedTasks, setCompletedTasks] = React.useState<number[]>([1]);

  const toggleTask = (id: number) => {
    setCompletedTasks((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  };

  const personalTasks = [
    { id: 1, title: "Fix mobile navbar sticky transition", tag: "Frontend", due: "11:00 AM", priority: "High" },
    { id: 2, title: "Review client onboarding workflow notes", tag: "Product", due: "2:00 PM", priority: "Medium" },
    { id: 3, title: "Investigate database query latency", tag: "Backend", due: "4:30 PM", priority: "Urgent" },
  ];

  const teamTasks = [
    { id: 10, title: "Deploy Stripe billing webhook handlers", tag: "Engineering", assignee: "Alex M.", priority: "Urgent" },
    { id: 20, title: "Finalize PDF reports generator export", tag: "Core", assignee: "Sarah C.", priority: "High" },
    { id: 30, title: "Update agency onboarding documentation", tag: "Docs", assignee: "David K.", priority: "Medium" },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      <Container size="default" className="relative">
        {/* Eyebrow badge matching UI screenshot */}
        <GsapReveal direction="up">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/30 text-xs font-semibold uppercase tracking-wider text-[#0D2440]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E5E99]" />
              <span>PERSONAL PRODUCTIVITY × TEAM EXECUTION</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="max-w-4xl mx-auto text-center mb-6">
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.04] tracking-tight text-[#0D2440]">
              Where personal focus <br className="hidden sm:inline" />
              meets team velocity.
            </h1>
          </div>

          {/* Supporting Copy */}
          <div className="max-w-2xl mx-auto text-center mb-8">
            <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed">
              Stop switching between scattered notebooks and complex project boards. SprintDesk lets you capture ideas instantly, manage personal tasks, and run team sprints in one unified, automated workspace.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
            <Button
              variant="pill-primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="w-full sm:w-auto px-8 text-base bg-[#0D2440] hover:bg-[#163359] text-white shadow-sm"
            >
              Start Free
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/how-it-works"
              className="w-full sm:w-auto text-base border-[#CBD6E2] text-[#0D2440] hover:bg-[#F5F8FB]"
            >
              See How It Works
            </Button>
          </div>

          {/* Microcopy */}
          <div className="text-center text-xs text-[#5F7083] mb-12">
            No credit card required
          </div>
        </GsapReveal>

        {/* Grounded Hero Product Visual Window */}
        <GsapScale scaleStart={0.96} duration={0.9}>
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl border border-[#CBD6E2] bg-white shadow-2xl overflow-hidden">
            {/* Browser top chrome bar */}
            <div className="h-11 bg-[#F5F8FB] border-b border-[#CBD6E2] px-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#CBD6E2]" />
                <span className="w-3 h-3 rounded-full bg-[#CBD6E2]" />
                <span className="w-3 h-3 rounded-full bg-[#CBD6E2]" />
                <span className="ml-3 text-xs font-mono text-[#5F7083]">
                  sprintdesk.app / workspace / daily-overview
                </span>
              </div>

              {/* Workspace Mode Switcher */}
              <div className="inline-flex p-1 rounded-lg bg-white border border-[#CBD6E2] shadow-2xs">
                <button
                  onClick={() => setActiveWorkspace("personal")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                    activeWorkspace === "personal"
                      ? "bg-[#0D2440] text-white"
                      : "text-[#5F7083] hover:text-[#0D2440]"
                  }`}
                >
                  <User className="w-3 h-3" />
                  Personal Flow
                </button>
                <button
                  onClick={() => setActiveWorkspace("team")}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                    activeWorkspace === "team"
                      ? "bg-[#0D2440] text-white"
                      : "text-[#5F7083] hover:text-[#0D2440]"
                  }`}
                >
                  <Users className="w-3 h-3" />
                  Team Sprint Board
                </button>
              </div>
            </div>

            {/* Internal 3-Column Grounded Dashboard View */}
            <div className="p-5 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 bg-white">
              {/* Column 1: Active Tasks (4 cols) */}
              <div className="md:col-span-5 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[#F5F8FB]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D2440]">
                    {activeWorkspace === "personal" ? "Active Tasks" : "Sprint Backlog"}
                  </span>
                  <span className="text-[11px] text-[#5F7083]">
                    {activeWorkspace === "personal" ? "Click to toggle" : "Assigned"}
                  </span>
                </div>

                <div className="space-y-2.5">
                  {(activeWorkspace === "personal" ? personalTasks : teamTasks).map((task) => {
                    const isDone = activeWorkspace === "personal" && completedTasks.includes(task.id);
                    return (
                      <div
                        key={task.id}
                        onClick={() => activeWorkspace === "personal" && toggleTask(task.id)}
                        className={`p-3 rounded-xl border transition-all ${
                          activeWorkspace === "personal" ? "cursor-pointer" : ""
                        } ${
                          isDone
                            ? "bg-[#F5F8FB] border-[#CBD6E2]/40 opacity-70"
                            : "bg-white border-[#CBD6E2] hover:border-[#2E5E99] shadow-2xs"
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div
                            className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center text-xs transition-colors ${
                              isDone ? "bg-[#23865A] text-white" : "border border-[#CBD6E2] text-transparent"
                            }`}
                          >
                            <Check className="w-3 h-3" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className={`text-xs font-semibold ${isDone ? "line-through text-[#5F7083]" : "text-[#0D2440]"}`}>
                              {task.title}
                            </p>
                            <div className="flex items-center gap-2 mt-1.5">
                              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#E7F0FA] text-[#2E5E99]">
                                {task.tag}
                              </span>
                              {"assignee" in task && (
                                <span className="text-[10px] text-[#5F7083] font-medium">
                                  {task.assignee}
                                </span>
                              )}
                              {"due" in task && (
                                <span className="text-[10px] text-[#5F7083] flex items-center gap-1 ml-auto">
                                  <Clock className="w-2.5 h-2.5" /> {task.due}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Column 2: Progress & Finish Time (4 cols) */}
              <div className="md:col-span-4 p-4 rounded-xl bg-[#F5F8FB] border border-[#CBD6E2] flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#5F7083] mb-1">
                    {activeWorkspace === "personal" ? "Daily Finish Line" : "Sprint Progress"}
                  </div>
                  <div className="text-2xl font-extrabold text-[#0D2440] mt-1">
                    {activeWorkspace === "personal"
                      ? (completedTasks.length === 3 ? "All Done" : "5:40 PM")
                      : "78% Completed"}
                  </div>
                  <p className="text-xs text-[#5F7083] mt-1">
                    {activeWorkspace === "personal"
                      ? "Calculated based on 3 active tasks & focus hours."
                      : "34 of 42 Story Points closed this sprint."}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold text-[#0D2440]">
                    <span>Pace Status</span>
                    <span className="text-[#23865A]">On Track</span>
                  </div>
                  <div className="w-full h-2 bg-[#CBD6E2]/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#2E5E99] transition-all duration-300"
                      style={{
                        width: activeWorkspace === "personal"
                          ? `${(completedTasks.length / personalTasks.length) * 100}%`
                          : "78%",
                      }}
                    />
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#CBD6E2]/60 text-xs text-[#0D2440] flex items-center justify-between">
                  <span className="font-semibold">Estimated Focus Left</span>
                  <span className="font-mono font-bold text-[#2E5E99]">
                    {activeWorkspace === "personal" ? "2h 45m" : "14h total"}
                  </span>
                </div>
              </div>

              {/* Column 3: Team Activity & Metrics (3 cols) */}
              <div className="md:col-span-3 p-4 rounded-xl bg-[#F5F8FB] border border-[#CBD6E2] flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#5F7083] mb-1">
                    Team Overview
                  </div>
                  <div className="text-xl font-extrabold text-[#0D2440] mt-1">
                    4 Active
                  </div>
                  <div className="flex -space-x-1.5 mt-2">
                    <div className="w-6 h-6 rounded-full bg-[#0D2440] text-[10px] text-white flex items-center justify-center font-bold">SC</div>
                    <div className="w-6 h-6 rounded-full bg-[#2E5E99] text-[10px] text-white flex items-center justify-center font-bold">AM</div>
                    <div className="w-6 h-6 rounded-full bg-[#7BA4D0] text-[10px] text-white flex items-center justify-center font-bold">DK</div>
                    <div className="w-6 h-6 rounded-full bg-[#CBD6E2] text-[10px] text-[#0D2440] flex items-center justify-center font-bold">ML</div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-[#CBD6E2]/60">
                  <div className="text-[10px] font-bold uppercase text-[#5F7083]">Open Blockers</div>
                  <div className="text-base font-extrabold text-[#23865A] mt-0.5 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> 0 Blockers
                  </div>
                </div>

                <div className="text-[11px] text-[#5F7083] truncate">
                  Latest: Sarah pushed report export
                </div>
              </div>
            </div>
          </div>
        </div>
        </GsapScale>
      </Container>
    </section>
  );
}
