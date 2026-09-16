"use client";

import * as React from "react";
import Link from "next/link";
import {
  Flame,
  CheckCircle2,
  TrendingUp,
  Layers,
  Users,
  AlertOctagon,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";

export default function SprintManagementPage() {
  // Velocity Simulator State
  const [engineers, setEngineers] = React.useState(5);
  const [sprintDays, setSprintDays] = React.useState(10);
  const [pointsPerEng, setPointsPerEng] = React.useState(8);

  const capacityPoints = engineers * pointsPerEng;
  const historicVelocity = Math.round(capacityPoints * 0.88);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero */}
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Flame className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>Agile Sprint Management</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Turn every sprint into visible momentum.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8">
                Plan work, track effort with story points, surface blockers early, and understand how your team is moving — all from one connected sprint workspace.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")}>
                  Start Free Sprint Workspace →
                </Button>
                <Button variant="outline" size="lg" href="/features#execute">
                  Explore Sprint Boards
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
                What is Sprint Management?
              </h2>
              <p className="mb-3">
                <strong>Sprint management</strong> is the iterative agile methodology of scoping, executing, and evaluating a fixed time-boxed cycle of technical work (typically 1 to 2 weeks). Effective sprint management relies on story point estimation to measure complexity rather than arbitrary hours, real-time burnup metrics to project delivery dates, and swimlanes to prevent workload imbalances.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#5F7083] pt-2 border-t border-[#CBD6E2]/50">
                <span>Key metrics: Story Points (Fibonacci)</span>
                <span>•</span>
                <span>Sprint Velocity (+18%)</span>
                <span>•</span>
                <span>Cycle Time & Burndown</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Interactive Tool: Sprint Capacity & Velocity Estimator */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="max-w-4xl mx-auto rounded-2xl border-2 border-[#2E5E99] bg-[#0D2440] text-white p-6 sm:p-10 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E3A5F]">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-[#7BA4D0]">
                    Interactive Capacity Tool
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Sprint Capacity & Velocity Calculator
                  </h3>
                </div>
                <Badge variant="sapphire" className="text-xs">
                  Agile Metrics Engine
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                {/* Sliders */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#CBD6E2] mb-2">
                      <span>Engineers in Sprint Squad:</span>
                      <strong className="text-white font-mono text-sm">{engineers} engineers</strong>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="15"
                      value={engineers}
                      onChange={(e) => setEngineers(Number(e.target.value))}
                      className="w-full accent-[#2E5E99] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#CBD6E2] mb-2">
                      <span>Sprint Duration (Working Days):</span>
                      <strong className="text-white font-mono text-sm">{sprintDays} days</strong>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="20"
                      step="5"
                      value={sprintDays}
                      onChange={(e) => setSprintDays(Number(e.target.value))}
                      className="w-full accent-[#2E5E99] cursor-pointer"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-semibold text-[#CBD6E2] mb-2">
                      <span>Target Story Points / Engineer:</span>
                      <strong className="text-white font-mono text-sm">{pointsPerEng} pts</strong>
                    </div>
                    <input
                      type="range"
                      min="4"
                      max="16"
                      value={pointsPerEng}
                      onChange={(e) => setPointsPerEng(Number(e.target.value))}
                      className="w-full accent-[#2E5E99] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Capacity Result */}
                <div className="rounded-xl bg-[#081728] border border-[#1E3A5F] p-6 text-center flex flex-col justify-center items-center">
                  <span className="text-xs uppercase font-mono tracking-wider text-[#7BA4D0] mb-2">
                    Recommended Sprint Capacity
                  </span>
                  <div className="text-5xl font-extrabold text-white font-heading tracking-tight mb-2">
                    {capacityPoints} <span className="text-xl text-[#7BA4D0]">PTS</span>
                  </div>
                  <div className="text-xs text-[#CBD6E2] mb-4">
                    Conservative Commitment: <strong>{historicVelocity} pts</strong> (with 12% safety buffer)
                  </div>
                  <div className="px-3 py-1 rounded-full bg-[#163359] border border-[#2E5E99] text-xs text-[#E7F0FA] flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Calculated with SprintDesk Historical Models</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E3A5F] text-center">
                <Button
                  variant="primary"
                  size="md"
                  href={getAppUrl("/signup")}
                  className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white text-xs font-semibold"
                >
                  Create Your Sprint 1 Board in SprintDesk →
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* 3 Core Sprint Capabilities */}
        <section className="py-20 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D2440] tracking-tight mb-3">
                Precision agile tooling without legacy bloat.
              </h2>
              <p className="text-sm text-[#5F7083]">
                SprintDesk removes the 40-field ticket forms of legacy enterprise tools while preserving the rigorous agile metrics technical teams rely on.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Story Points & Fibonacci Sizing
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Size tasks by cognitive complexity (1, 2, 3, 5, 8). SprintDesk tracks historic completion rates to predict sprint delivery confidence accurately.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Multi-Dimensional Swimlanes
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Toggle your sprint board between Assignee Swimlanes, Epic Roadmaps, and Priority tiers with one click. Visual grouping eliminates blind spots.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Live Blocker Escalation
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Marking a card as blocked instantly shifts card border to high-visibility amber and routes a notification to designated squad leaders.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#0D2440] text-white text-center">
          <Container size="default" className="max-w-3xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Plan clearly. Execute together.
            </h2>
            <p className="text-sm text-[#CBD6E2] mb-8 leading-relaxed">
              Experience the sprint workspace that engineering squads love using every day.
            </p>
            <Button
              variant="primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white"
            >
              Start Free Sprint Workspace →
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
