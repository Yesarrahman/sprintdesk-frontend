"use client";

import * as React from "react";
import Link from "next/link";
import {
  Users,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  BarChart2,
  Clock,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";

export default function TeamTaskManagementPage() {
  const [activeTab, setActiveTab] = React.useState<"board" | "workload">("workload");

  const teammates = [
    { name: "Sarah Chen", role: "Staff Backend Engineer", tasks: 4, points: 14, capacity: "85%" },
    { name: "Alex Morgan", role: "Frontend Lead", tasks: 3, points: 11, capacity: "70%" },
    { name: "David Kim", role: "Full Stack Engineer", tasks: 2, points: 8, capacity: "50%" },
    { name: "Maria Lopez", role: "Product Designer", tasks: 3, points: 9, capacity: "65%" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero Section */}
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Users className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>Team Task Management Software</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                One place to see what your team is working on.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8">
                SprintDesk helps engineering and product squads organize tasks, balance workloads, surface blockers, and maintain momentum without scheduling more status meetings.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")}>
                  Start Free With Your Team →
                </Button>
                <Button variant="outline" size="lg" href="/pricing">
                  Compare Team Plans
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
                What is Team Task Management?
              </h2>
              <p className="mb-3">
                <strong>Team task management</strong> is the collaborative coordination of project deliverables, assignments, story points, and sprint deadlines across multiple contributors. Effective team task management ensures clear ownership, prevents uneven workload bottlenecks, and gives leadership real-time visibility into release progress without micromanagement or redundant standups.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#5F7083] pt-2 border-t border-[#CBD6E2]/50">
                <span>Core Outcomes: Async transparency</span>
                <span>•</span>
                <span>Workload balance</span>
                <span>•</span>
                <span>Automated blocker escalation</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Interactive Team Workload & Sprint Board Visual */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="max-w-5xl mx-auto rounded-2xl border border-[#CBD6E2] bg-[#0D2440] text-white p-6 sm:p-10 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E3A5F]">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-[#7BA4D0]">
                    Command Center Intelligence
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Live Team Workload Distribution
                  </h3>
                </div>

                <div className="inline-flex p-1 rounded-lg bg-[#081728] border border-[#1E3A5F]">
                  <button
                    onClick={() => setActiveTab("workload")}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                      activeTab === "workload"
                        ? "bg-[#2E5E99] text-white"
                        : "text-[#7BA4D0] hover:text-white"
                    }`}
                  >
                    Workload View
                  </button>
                  <button
                    onClick={() => setActiveTab("board")}
                    className={`px-3.5 py-1.5 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                      activeTab === "board"
                        ? "bg-[#2E5E99] text-white"
                        : "text-[#7BA4D0] hover:text-white"
                    }`}
                  >
                    Sprint Metrics
                  </button>
                </div>
              </div>

              {activeTab === "workload" ? (
                <div className="space-y-4">
                  {teammates.map((member) => (
                    <div
                      key={member.name}
                      className="p-4 rounded-xl bg-[#081728] border border-[#1E3A5F] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#163359] border border-[#2E5E99] flex items-center justify-center font-bold text-white text-xs">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{member.name}</div>
                          <div className="text-xs text-[#7BA4D0]">{member.role}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-6 text-xs">
                        <div>
                          <span className="text-[#5F7083] block text-[10px] uppercase font-bold">Active Tasks</span>
                          <span className="text-white font-mono font-bold">{member.tasks} tasks ({member.points} pts)</span>
                        </div>
                        <div className="w-28 sm:w-36">
                          <div className="flex justify-between text-[10px] mb-1">
                            <span className="text-[#7BA4D0]">Capacity</span>
                            <span className="text-white font-bold">{member.capacity}</span>
                          </div>
                          <div className="w-full h-2 bg-[#163359] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-[#2E5E99] rounded-full"
                              style={{ width: member.capacity }}
                            />
                          </div>
                        </div>
                        <Badge variant="success" className="text-[10px]">Optimal</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-6 rounded-xl bg-[#081728] border border-[#1E3A5F] text-center">
                    <span className="text-xs text-[#7BA4D0] uppercase font-bold block mb-2">Sprint Velocity</span>
                    <div className="text-4xl font-extrabold text-white font-heading">+18%</div>
                    <p className="text-xs text-[#CBD6E2] mt-1">Above last 4-sprint average</p>
                  </div>
                  <div className="p-6 rounded-xl bg-[#081728] border border-[#1E3A5F] text-center">
                    <span className="text-xs text-[#7BA4D0] uppercase font-bold block mb-2">Cycle Time</span>
                    <div className="text-4xl font-extrabold text-emerald-400 font-heading">1.4 Days</div>
                    <p className="text-xs text-[#CBD6E2] mt-1">From In Progress to Merged</p>
                  </div>
                  <div className="p-6 rounded-xl bg-[#081728] border border-[#1E3A5F] text-center">
                    <span className="text-xs text-[#7BA4D0] uppercase font-bold block mb-2">Active Blockers</span>
                    <div className="text-4xl font-extrabold text-amber-400 font-heading">1 Alert</div>
                    <p className="text-xs text-[#CBD6E2] mt-1">DevOps lead assigned</p>
                  </div>
                </div>
              )}

              <div className="mt-8 pt-4 border-t border-[#1E3A5F] flex flex-wrap items-center justify-between text-xs text-[#7BA4D0]">
                <span>Automatic team workload telemetry updated every 30 seconds</span>
                <span className="text-white font-semibold">Sprint 42 Target: On Schedule</span>
              </div>
            </div>
          </Container>
        </section>

        {/* 4 Core Value Pillars for Managers */}
        <section className="py-20 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D2440] tracking-tight mb-3">
                Stop chasing status updates.
              </h2>
              <p className="text-sm text-[#5F7083]">
                Give your managers total operational visibility while granting your team the autonomy to build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] hover:border-[#7BA4D0] transition-colors">
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Clear Task Ownership & Swimlanes
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Every card on the board has an unambiguous owner, story point estimate, and target sprint column. Group tasks by assignee to prevent tickets falling into limbo.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] hover:border-[#7BA4D0] transition-colors">
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Real-Time Blocker Detection
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  When a task is blocked by an API dependency or external code review, SprintDesk flags it immediately on the Command Center and alerts the relevant team lead.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] hover:border-[#7BA4D0] transition-colors">
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Balanced Engineering Workload
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  See at a glance if a senior engineer is overwhelmed with 6 simultaneous reviews while other squad members are waiting for tasks. Rebalance assignments in seconds.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] hover:border-[#7BA4D0] transition-colors">
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Async Standups & Activity Stream
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Cut 30-minute morning standups into 30 seconds of async review. The activity feed aggregates card moves, GitHub PR merges, and releases into a single feed.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA with Internal Links */}
        <section className="py-24 bg-[#0D2440] text-white text-center">
          <Container size="default" className="max-w-3xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Give your team one place to move work forward.
            </h2>
            <p className="text-sm text-[#CBD6E2] mb-8 leading-relaxed">
              Start free today with up to 3 workspaces. Scale to unlimited team members when your sprint rhythm accelerates.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Button
                variant="primary"
                size="lg"
                href={getAppUrl("/signup")}
                className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white"
              >
                Start Free With Your Team →
              </Button>
            </div>

            <div className="pt-8 border-t border-[#1E3A5F] flex flex-wrap items-center justify-center gap-6 text-xs text-[#7BA4D0]">
              <Link href="/remote-team-task-management" className="hover:underline">
                Remote Team Coordination →
              </Link>
              <span>•</span>
              <Link href="/sprint-management" className="hover:underline">
                Agile Sprint Planning →
              </Link>
              <span>•</span>
              <Link href="/team-workload-management" className="hover:underline">
                Workload Management →
              </Link>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
