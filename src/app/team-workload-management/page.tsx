"use client";

import * as React from "react";
import Link from "next/link";
import {
  BarChart3,
  CheckCircle2,
  AlertTriangle,
  Users,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  UserCheck,
  HelpCircle,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";
import { GsapReveal, GsapScale, GsapStagger } from "@/components/marketing/gsap-effects";

export default function TeamWorkloadManagementPage() {
  const [sarahPoints, setSarahPoints] = React.useState(14);
  const [alexPoints, setAlexPoints] = React.useState(9);
  const [davidPoints, setDavidPoints] = React.useState(7);

  const getCapacityStatus = (pts: number) => {
    if (pts >= 15) return { label: "High Risk (Burnout)", color: "text-rose-400", bg: "bg-rose-950/60 border-rose-500/40" };
    if (pts >= 10) return { label: "Optimal Velocity", color: "text-emerald-400", bg: "bg-emerald-950/60 border-emerald-500/40" };
    return { label: "Available Capacity", color: "text-[#7BA4D0]", bg: "bg-[#163359] border-[#2E5E99]" };
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero */}
        <section className="pb-16 text-center">
          <Container size="default">
            <GsapReveal direction="up">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                  <BarChart3 className="w-3.5 h-3.5 text-[#2E5E99]" />
                  <span>Team Workload Management</span>
                </div>
                <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                  See who's carrying the work.
                </h1>
                <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8">
                  SprintDesk gives engineering managers a clear view of active work, capacity distribution, and blockers — without chasing status updates or micromanaging teammates.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")}>
                    Balance Team Workload Free →
                  </Button>
                  <Button variant="outline" size="lg" href="/pricing">
                    Explore Team Plans
                  </Button>
                </div>
              </div>
            </GsapReveal>
          </Container>
        </section>

        {/* AEO / AI Search Definition Block */}
        <section className="py-8 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="narrow">
            <GsapReveal direction="up">
              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2] text-xs sm:text-sm text-[#0D2440] leading-relaxed">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#2E5E99] mb-2">
                What is Team Workload Management?
              </h2>
              <p className="mb-3">
                <strong>Team workload management</strong> is the real-time operational practice of distributing engineering and product tasks equitably across team members based on their actual capacity and historical delivery velocity. Rather than assigning work blindly or relying on manual spreadsheets, modern workload management visualizes active story points per contributor, flags over-allocation before burnout occurs, and highlights available bandwidth for incoming sprint tasks.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#5F7083] pt-2 border-t border-[#CBD6E2]/50">
                <span>Core principles: Burnout prevention</span>
                <span>•</span>
                <span>Transparent capacity allocation</span>
                <span>•</span>
                <span>Zero surveillance</span>
              </div>
            </div>
            </GsapReveal>
          </Container>
        </section>

        {/* Interactive Workload Allocation Simulator */}
        <section className="py-20 bg-white">
          <Container size="default">
            <GsapScale scaleStart={0.96} duration={0.9}>
              <div className="max-w-4xl mx-auto rounded-2xl border-2 border-[#2E5E99] bg-[#0D2440] text-white p-6 sm:p-10 shadow-2xl">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E3A5F]">
                  <div>
                    <span className="text-xs font-mono uppercase font-bold text-[#7BA4D0]">
                      Live Capacity Balancer
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      Simulate Squad Workload Distribution
                    </h3>
                  </div>
                  <Badge variant="sapphire" className="text-xs">
                    SprintDesk Workload Engine
                  </Badge>
                </div>

                {/* Teammate Capacity Sliders */}
                <div className="space-y-6 mb-8">
                  {/* Sarah */}
                  <div className="p-4 rounded-xl bg-[#081728] border border-[#1E3A5F]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div>
                        <span className="text-sm font-bold text-white">Sarah Chen (Staff Backend)</span>
                        <span className="text-xs text-[#7BA4D0] block">Capacity Limit: 12 pts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-white">{sarahPoints} pts</span>
                        <span className={`px-2.5 py-0.5 rounded text-xs font-bold border ${getCapacityStatus(sarahPoints).bg} ${getCapacityStatus(sarahPoints).color}`}>
                          {getCapacityStatus(sarahPoints).label}
                        </span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="20"
                      value={sarahPoints}
                      onChange={(e) => setSarahPoints(Number(e.target.value))}
                      className="w-full accent-[#2E5E99] cursor-pointer"
                    />
                  </div>

                  {/* Alex */}
                  <div className="p-4 rounded-xl bg-[#081728] border border-[#1E3A5F]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div>
                        <span className="text-sm font-bold text-white">Alex Morgan (Frontend Lead)</span>
                        <span className="text-xs text-[#7BA4D0] block">Capacity Limit: 12 pts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-white">{alexPoints} pts</span>
                        <span className={`px-2.5 py-0.5 rounded text-xs font-bold border ${getCapacityStatus(alexPoints).bg} ${getCapacityStatus(alexPoints).color}`}>
                          {getCapacityStatus(alexPoints).label}
                        </span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="20"
                      value={alexPoints}
                      onChange={(e) => setAlexPoints(Number(e.target.value))}
                      className="w-full accent-[#2E5E99] cursor-pointer"
                    />
                  </div>

                  {/* David */}
                  <div className="p-4 rounded-xl bg-[#081728] border border-[#1E3A5F]">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <div>
                        <span className="text-sm font-bold text-white">David Kim (Full Stack)</span>
                        <span className="text-xs text-[#7BA4D0] block">Capacity Limit: 10 pts</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-bold text-white">{davidPoints} pts</span>
                        <span className={`px-2.5 py-0.5 rounded text-xs font-bold border ${getCapacityStatus(davidPoints).bg} ${getCapacityStatus(davidPoints).color}`}>
                          {getCapacityStatus(davidPoints).label}
                        </span>
                      </div>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="18"
                      value={davidPoints}
                      onChange={(e) => setDavidPoints(Number(e.target.value))}
                      className="w-full accent-[#2E5E99] cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0E2540] border border-[#2E5E99]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#CBD6E2]">
                    Total Allocated Points: <strong className="text-white font-mono text-sm">{sarahPoints + alexPoints + davidPoints} pts</strong>
                    <span className="block text-[11px] text-[#7BA4D0]">
                      Rebalancing tasks directly from the board prevents burnout and sustains engineering velocity.
                    </span>
                  </div>
                  <Button
                    variant="primary"
                    size="sm"
                    href={getAppUrl("/signup")}
                    className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white text-xs shrink-0"
                  >
                    Apply in SprintDesk →
                  </Button>
                </div>
              </div>
            </GsapScale>
          </Container>
        </section>

        {/* 3 Core Pillars */}
        <section className="py-20 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <GsapReveal direction="up">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D2440] tracking-tight mb-3">
                  Visibility without micromanagement.
                </h2>
                <p className="text-sm text-[#5F7083]">
                  Respect developer autonomy while providing leadership with the transparent data needed to protect deadlines.
                </p>
              </div>
            </GsapReveal>

            <GsapStagger stagger={0.12}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                  <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                    Live Assignee Swimlanes
                  </h3>
                  <p className="text-xs text-[#5F7083] leading-relaxed">
                    Group active sprint tickets by contributor with a single click. Spot instantly if an engineer is juggling too many in-progress tasks.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                  <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                    Burnout Early Warning
                  </h3>
                  <p className="text-xs text-[#5F7083] leading-relaxed">
                    SprintDesk highlights contributors exceeding 100% capacity in amber, empowering leads to shift tickets before deadlines are compromised.
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                  <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                    Historical Velocity Baseline
                  </h3>
                  <p className="text-xs text-[#5F7083] leading-relaxed">
                    Track actual completed points across the last 4 sprints to build realistic future commitments rather than hopeful guesses.
                  </p>
                </div>
              </div>
            </GsapStagger>
          </Container>
        </section>

        {/* Section 5: Engineering Workload & Burnout Prevention FAQs */}
        <section className="py-20 bg-white">
          <Container size="narrow">
            <div className="text-center mb-12">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440] tracking-tight mb-3">
                Engineering Workload & Capacity FAQs
              </h2>
              <p className="text-xs sm:text-sm text-[#5F7083]">
                Practical insights on measuring engineering capacity without invasive timecards or surveillance.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl border border-[#CBD6E2] bg-[#F8FAFC]">
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#0D2440] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#2E5E99] shrink-0 mt-0.5" />
                  <span>How does SprintDesk detect workload imbalances before burnout occurs?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#5F7083] leading-relaxed pl-6.5">
                  SprintDesk compares active assigned story points against each engineer&apos;s calibrated capacity threshold. If an engineer is carrying more than 100% of their historical 4-sprint average, their capacity bar turns amber or red, signaling to leads that tickets need rebalancing before the sprint deadline.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#CBD6E2] bg-[#F8FAFC]">
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#0D2440] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#2E5E99] shrink-0 mt-0.5" />
                  <span>Why are story points more reliable for capacity planning than raw hours?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#5F7083] leading-relaxed pl-6.5">
                  Raw hour estimates create false precision and invite micromanagement. Fibonacci story points (1, 2, 3, 5, 8) capture relative complexity, technical uncertainty, and operational friction, resulting in 18% higher forecast accuracy.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#CBD6E2] bg-[#F8FAFC]">
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#0D2440] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#2E5E99] shrink-0 mt-0.5" />
                  <span>Can engineering managers reassign tasks directly from the Workload view?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#5F7083] leading-relaxed pl-6.5">
                  Yes. Leads can drag tickets between assignee swimlanes or click to reassign in real-time, instantly redistributing points without opening individual ticket modals.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#CBD6E2] bg-[#F8FAFC]">
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#0D2440] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#2E5E99] shrink-0 mt-0.5" />
                  <span>Does workload tracking expose an engineer&apos;s private personal scratchpad?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#5F7083] leading-relaxed pl-6.5">
                  No. The Workload Engine only calculates points from shared Team Workspace sprint boards. Private Personal Task Flow notes and checklists are strictly confidential to each user.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#CBD6E2] bg-[#F8FAFC]">
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#0D2440] mb-2 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#2E5E99] shrink-0 mt-0.5" />
                  <span>Which SprintDesk plan includes team workload management?</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#5F7083] leading-relaxed pl-6.5">
                  Core Kanban is available on our Free tier. Advanced Assignee Swimlanes, PDF Reports, and Story Points are included on SprintDesk Pro ($15/mo), while full Automations and unlimited members are included on SprintDesk Agency ($29/mo).
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Section 6: Final CTA */}
        <section className="py-24 bg-[#0D2440] text-white text-center">
          <Container size="default" className="max-w-3xl mx-auto">
            <GsapReveal direction="up">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
                Balance capacity. Protect your team.
              </h2>
              <p className="text-sm text-[#CBD6E2] mb-8 leading-relaxed">
                Equip your engineering leadership with real-time capacity and workload analytics without micromanagement.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  href={getAppUrl("/signup")}
                  className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white"
                >
                  Start Free Team Workload Workspace →
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/sprint-management"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Explore Sprint Boards
                </Button>
              </div>
            </GsapReveal>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
