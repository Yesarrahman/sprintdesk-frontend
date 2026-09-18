"use client";

import * as React from "react";
import { User, Users, CheckCircle2, Clock, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GsapReveal, GsapScale } from "@/components/marketing/gsap-effects";

export function DualFlows() {
  const [activeFlow, setActiveFlow] = React.useState<"personal" | "team">("team");

  return (
    <section className="py-20 sm:py-28 bg-[#0D2440] text-white relative overflow-hidden">
      <Container size="default">
        {/* Header & Flow Switcher matching screenshot */}
        <GsapReveal className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-2">
              DUAL-WORKSPACE ARCHITECTURE
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-3">
              One platform. Two distinct flows.
            </h2>
            <p className="text-sm sm:text-base text-[#CBD6E2] leading-relaxed">
              Individual contributors need unpolluted personal focus. Engineering managers need synchronized sprint metrics. SprintDesk harmonizes both without forcing compromises.
            </p>
          </div>

          {/* Interactive Flow Toggle */}
          <div className="inline-flex p-1.5 rounded-xl bg-[#081728] border border-[#1E3A5F]">
            <button
              onClick={() => setActiveFlow("personal")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFlow === "personal"
                  ? "bg-[#2E5E99] text-white shadow-sm"
                  : "text-[#7BA4D0] hover:text-white"
              }`}
            >
              <User className="w-3.5 h-3.5" />
              Personal Space
            </button>
            <button
              onClick={() => setActiveFlow("team")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFlow === "team"
                  ? "bg-[#2E5E99] text-white shadow-sm"
                  : "text-[#7BA4D0] hover:text-white"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              Team Space
            </button>
          </div>
        </GsapReveal>

        {/* Board Display Canvas matching the real kanban-board.tsx logic */}
        <GsapScale className="rounded-2xl border border-[#1E3A5F] bg-[#0A1B2F] p-5 sm:p-8 shadow-2xl">
          {/* Header row of the simulated space */}
          <div className="flex flex-wrap items-center justify-between pb-5 mb-6 border-b border-[#1E3A5F] gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0]">
                {activeFlow === "personal" ? "My Workspace • Task Flow (Solo)" : "Engineering Core • Sprint 42 (Collaborative)"}
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#163359] text-[#CBD6E2]">
                {activeFlow === "personal" ? "4 Columns (No Review)" : "5 Columns + Swimlanes"}
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-[#CBD6E2]">
              <span>View Mode:</span>
              <span className="font-bold text-white px-2 py-1 bg-[#1E3A5F] rounded">
                {activeFlow === "personal" ? "Personal Focus" : "Assignee Swimlanes"}
              </span>
            </div>
          </div>

          {/* Kanban Columns Canvas */}
          <div className={`grid gap-4 ${activeFlow === "personal" ? "grid-cols-1 sm:grid-cols-4" : "grid-cols-1 sm:grid-cols-5"}`}>
            {/* 1. Backlog */}
            <div className="p-3.5 rounded-xl bg-[#081728] border border-[#1E3A5F] space-y-3">
              <div className="flex justify-between text-xs font-bold text-[#7BA4D0]">
                <span>Backlog</span>
                <span>1</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0F2B4C] border border-[#1E3A5F] shadow-xs space-y-2">
                <div className="text-xs font-semibold text-white">OAuth Refresh Tokens</div>
                <div className="flex items-center justify-between text-[10px] text-[#7BA4D0]">
                  <span>Backend</span>
                  {activeFlow === "team" && <span className="font-bold text-[#2E5E99] bg-[#E7F0FA] px-1.5 rounded">3 pts</span>}
                </div>
              </div>
            </div>

            {/* 2. To Do */}
            <div className="p-3.5 rounded-xl bg-[#081728] border border-[#1E3A5F] space-y-3">
              <div className="flex justify-between text-xs font-bold text-[#7BA4D0]">
                <span>To Do</span>
                <span>1</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0F2B4C] border border-[#1E3A5F] shadow-xs space-y-2">
                <div className="text-xs font-semibold text-white">Stripe Webhook Handlers</div>
                <div className="flex items-center justify-between text-[10px] text-[#7BA4D0]">
                  <span>Billing</span>
                  {activeFlow === "team" && <span className="font-bold text-[#2E5E99] bg-[#E7F0FA] px-1.5 rounded">5 pts</span>}
                </div>
              </div>
            </div>

            {/* 3. In Progress */}
            <div className="p-3.5 rounded-xl bg-[#081728] border border-[#1E3A5F] space-y-3">
              <div className="flex justify-between text-xs font-bold text-[#2E5E99]">
                <span>In Progress</span>
                <span>1</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0F2B4C] border border-[#2E5E99] shadow-xs space-y-2">
                <div className="text-xs font-semibold text-white">Refactor Mobile Navigation</div>
                <div className="flex items-center justify-between text-[10px] text-[#7BA4D0]">
                  <span>Frontend</span>
                  {activeFlow === "team" && <span className="font-bold text-[#2E5E99] bg-[#E7F0FA] px-1.5 rounded">3 pts</span>}
                </div>
              </div>
            </div>

            {/* 4. In Review (Visible ONLY in Team Space, matching real kanban-board.tsx logic) */}
            {activeFlow === "team" && (
              <div className="p-3.5 rounded-xl bg-[#081728] border border-[#1E3A5F] space-y-3">
                <div className="flex justify-between text-xs font-bold text-amber-400">
                  <span>In Review</span>
                  <span>1</span>
                </div>
                <div className="p-3 rounded-lg bg-[#0F2B4C] border border-amber-500/40 shadow-xs space-y-2">
                  <div className="text-xs font-semibold text-white">PDF Report Export Generator</div>
                  <div className="flex items-center justify-between text-[10px] text-[#7BA4D0]">
                    <span>Sarah C.</span>
                    <span className="font-bold text-amber-300 bg-amber-500/20 px-1.5 rounded">2 pts</span>
                  </div>
                </div>
              </div>
            )}

            {/* 5. Completed */}
            <div className="p-3.5 rounded-xl bg-[#081728] border border-[#1E3A5F] space-y-3">
              <div className="flex justify-between text-xs font-bold text-[#23865A]">
                <span>Completed</span>
                <span>2</span>
              </div>
              <div className="p-3 rounded-lg bg-[#0F2B4C] border border-emerald-500/30 opacity-75 space-y-1">
                <div className="text-xs font-semibold text-white line-through">Onboarding Flow Polish</div>
                <div className="text-[10px] text-[#23865A] font-medium flex items-center gap-1">
                  <Check className="w-3 h-3" /> Released
                </div>
              </div>
            </div>
          </div>
        </GsapScale>
      </Container>
    </section>
  );
}
