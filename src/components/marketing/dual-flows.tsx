"use client";

import * as React from "react";
import { User, Users, CheckCircle2, Clock, Flame, AlertCircle, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function DualFlows() {
  const [activeFlow, setActiveFlow] = React.useState<"personal" | "team">("team");

  return (
    <section className="py-24 sm:py-32 bg-[#0D2440] text-white relative overflow-hidden border-t border-[#1E3A5F]">
      <Container size="default">
        {/* Header & Flow Switcher */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7BA4D0]" />
              Dual-Workspace Architecture
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-4">
              One platform. Two distinct flows.
            </h2>
            <p className="text-sm sm:text-base text-[#7BA4D0] leading-relaxed">
              Individual contributors need unpolluted personal focus. Engineering managers need synchronized sprint metrics. SprintDesk harmonizes both without forcing compromises.
            </p>
          </div>

          {/* Interactive Flow Toggle */}
          <div className="inline-flex p-1.5 rounded-xl bg-[#081728] border border-[#1E3A5F]">
            <button
              onClick={() => setActiveFlow("personal")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeFlow === "personal"
                  ? "bg-[#2E5E99] text-white shadow-md shadow-[#2E5E99]/30"
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
                  ? "bg-[#2E5E99] text-white shadow-md shadow-[#2E5E99]/30"
                  : "text-[#7BA4D0] hover:text-white"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              Team Space
            </button>
          </div>
        </div>

        {/* Board Display Canvas */}
        <div className="rounded-2xl border border-[#1E3A5F] bg-[#0A1B2F] p-4 sm:p-8 shadow-2xl transition-all duration-300">
          {/* Header of the simulated space */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-[#1E3A5F] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#163359] border border-[#2E5E99] flex items-center justify-center text-white">
                {activeFlow === "personal" ? <User className="w-4 h-4" /> : <Users className="w-4 h-4" />}
              </div>
              <div>
                <div className="text-xs font-mono uppercase text-[#7BA4D0]">
                  {activeFlow === "personal" ? "Private Focus Environment" : "Sprint 42 — Core Platform"}
                </div>
                <div className="text-base font-bold text-white">
                  {activeFlow === "personal" ? "Alex Morgan's Personal Dashboard" : "Engineering & Product Sprint Board"}
                </div>
              </div>
            </div>

            {/* Space Metrics */}
            <div className="flex items-center gap-4 text-xs font-mono">
              {activeFlow === "personal" ? (
                <>
                  <span className="px-3 py-1 rounded bg-[#163359] text-emerald-400 border border-[#2E5E99]/50 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> Finish: 5:40 PM
                  </span>
                  <span className="px-3 py-1 rounded bg-[#163359] text-[#7BA4D0] border border-[#2E5E99]/50">
                    4 Tasks Pending
                  </span>
                </>
              ) : (
                <>
                  <span className="px-3 py-1 rounded bg-[#163359] text-[#7BA4D0] border border-[#2E5E99]/50 flex items-center gap-1.5">
                    <Flame className="w-3 h-3 text-amber-400" /> Velocity: +18%
                  </span>
                  <span className="px-3 py-1 rounded bg-[#163359] text-rose-400 border border-rose-500/40 flex items-center gap-1.5">
                    <AlertCircle className="w-3 h-3" /> 1 Blocker
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Kanban Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activeFlow === "personal" ? (
              <>
                {/* Personal Column 1: Today Focus */}
                <div className="rounded-xl bg-[#081728] border border-[#1E3A5F] p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#7BA4D0] mb-3">
                    <span>TODAY'S PRIORITIES (2)</span>
                    <span className="w-2 h-2 rounded-full bg-[#2E5E99]" />
                  </div>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-[#0E2540] border border-[#2E5E99]/60 hover:border-[#7BA4D0] transition-colors">
                      <div className="text-xs font-semibold text-white mb-2">
                        Draft API documentation for v2 auth
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#7BA4D0]">
                        <span>Est: 90m</span>
                        <span className="text-amber-400 font-medium">Personal P1</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#0E2540] border border-[#2E5E99]/60 hover:border-[#7BA4D0] transition-colors">
                      <div className="text-xs font-semibold text-white mb-2">
                        Review quarterly compensation adjustments
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#7BA4D0]">
                        <span>Est: 45m</span>
                        <span className="text-[#CBD6E2]">Confidential</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Column 2: In Progress */}
                <div className="rounded-xl bg-[#081728] border border-[#1E3A5F] p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#7BA4D0] mb-3">
                    <span>IN PROGRESS (1)</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  </div>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-[#0E2540] border border-amber-500/40">
                      <div className="text-xs font-semibold text-white mb-2">
                        Fix mobile navbar sticky transition
                      </div>
                      <div className="w-full h-1.5 bg-[#163359] rounded-full overflow-hidden mb-2">
                        <div className="h-full bg-amber-400 rounded-full w-[65%]" />
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#7BA4D0]">
                        <span>Timer: 42m elapsed</span>
                        <span className="text-emerald-400">On Track</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Column 3: Completed Today */}
                <div className="rounded-xl bg-[#081728] border border-[#1E3A5F] p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#7BA4D0] mb-3">
                    <span>COMPLETED (3)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-3 opacity-75">
                    <div className="p-3 rounded-lg bg-[#0E2540] border border-[#1E3A5F] line-through text-xs text-[#7BA4D0]">
                      Clean up local Docker cache
                    </div>
                    <div className="p-3 rounded-lg bg-[#0E2540] border border-[#1E3A5F] line-through text-xs text-[#7BA4D0]">
                      Submit design feedback on PR #104
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Team Column 1: Sprint Todo */}
                <div className="rounded-xl bg-[#081728] border border-[#1E3A5F] p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#7BA4D0] mb-3">
                    <span>SPRINT BACKLOG (8 PTS)</span>
                    <span className="w-2 h-2 rounded-full bg-[#2E5E99]" />
                  </div>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-[#0E2540] border border-[#2E5E99]/60">
                      <div className="flex items-center justify-between text-[10px] text-[#7BA4D0] mb-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-[#163359] text-white">Infra</span>
                        <span className="font-mono text-white font-bold">5 pts</span>
                      </div>
                      <div className="text-xs font-semibold text-white mb-2">
                        Postgres read-replica failover test
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#7BA4D0]">
                        <span>Assignee: Sarah Chen</span>
                        <span className="text-rose-400">High</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-[#0E2540] border border-[#2E5E99]/60">
                      <div className="flex items-center justify-between text-[10px] text-[#7BA4D0] mb-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-[#163359] text-white">Frontend</span>
                        <span className="font-mono text-white font-bold">3 pts</span>
                      </div>
                      <div className="text-xs font-semibold text-white mb-2">
                        Dark mode color tokens audit
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#7BA4D0]">
                        <span>Assignee: Alex Morgan</span>
                        <span className="text-[#CBD6E2]">Medium</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Column 2: In Review */}
                <div className="rounded-xl bg-[#081728] border border-[#1E3A5F] p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#7BA4D0] mb-3">
                    <span>IN REVIEW (5 PTS)</span>
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-[#0E2540] border border-amber-500/40">
                      <div className="flex items-center justify-between text-[10px] text-[#7BA4D0] mb-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-[#163359] text-white">Auth</span>
                        <span className="font-mono text-white font-bold">5 pts</span>
                      </div>
                      <div className="text-xs font-semibold text-white mb-2">
                        OAuth2 refresh token rotation
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-[#7BA4D0]">
                        <span>PR #242 • David Kim</span>
                        <span className="text-emerald-400">Automated</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Team Column 3: Completed Sprint Work */}
                <div className="rounded-xl bg-[#081728] border border-[#1E3A5F] p-4">
                  <div className="flex items-center justify-between text-xs font-bold text-[#7BA4D0] mb-3">
                    <span>RELEASE READY (21 PTS)</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-lg bg-[#0E2540] border border-emerald-500/30">
                      <div className="flex items-center justify-between text-[10px] text-[#7BA4D0] mb-1.5">
                        <span className="px-1.5 py-0.5 rounded bg-[#163359] text-white">Billing</span>
                        <span className="font-mono text-emerald-400 font-bold">8 pts</span>
                      </div>
                      <div className="text-xs font-semibold text-white mb-2">
                        Stripe customer portal webhooks
                      </div>
                      <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Deployed to Staging
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
