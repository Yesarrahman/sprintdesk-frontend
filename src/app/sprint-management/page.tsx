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
  HelpCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";
import { KanbanMotionBoard } from "@/components/marketing/kanban-motion-board";
import { CapacityCalculator } from "@/components/marketing/capacity-calculator";

export default function SprintManagementPage() {
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
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8 max-w-2xl mx-auto">
                Plan work, track effort with story points, surface blockers early, and understand how your team is moving — all from one connected sprint workspace.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")} className="font-bold">
                  Start Free Sprint Workspace →
                </Button>
                <Button variant="outline" size="lg" href="/features#execute">
                  Explore Sprint Boards
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Live Interactive Drag-and-Drop Kanban Board */}
        <section className="py-12 bg-[#F8FAFC] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold uppercase text-[#2E5E99] tracking-wider">
                Live Interactive Workspace
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440] mt-1">
                Dynamic Sprint Board with Story Points
              </h2>
              <p className="text-xs sm:text-sm text-[#5F7083] mt-2">
                Click or drag tasks between columns to experience real-time sprint progression.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <KanbanMotionBoard />
            </div>
          </Container>
        </section>

        {/* AEO / AI Search Definition Block */}
        <section className="py-12 bg-white">
          <Container size="narrow">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#CBD6E2] text-xs sm:text-sm text-[#0D2440] leading-relaxed shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-3">
                <HelpCircle className="w-4 h-4" /> Direct Answer
              </div>
              <h2 className="text-xl font-bold font-heading text-[#0D2440] mb-3">
                What is Sprint Management?
              </h2>
              <p className="mb-4 text-slate-700">
                <strong>Sprint management</strong> is the iterative agile framework of scoping, executing, and evaluating a fixed time-boxed cycle of engineering work (typically 1 to 2 weeks). Effective sprint management replaces arbitrary hour estimates with story point complexity scoring, calculates realistic burndown trajectories, and groups tasks into swimlanes to prevent developer burnout and deadline blindsiders.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#CBD6E2]/60 text-xs font-mono text-[#5F7083]">
                <div>• Fibonacci Story Points (1, 2, 3, 5, 8)</div>
                <div>• Sprint Velocity (+18% Avg)</div>
                <div>• Zero Status Meeting Overhead</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Interactive Capacity & Velocity Calculator */}
        <section className="py-16 bg-[#F8FAFC] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="max-w-4xl mx-auto">
              <CapacityCalculator />
            </div>
          </Container>
        </section>

        {/* Story Points & Swimlanes Breakdown */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="p-7 rounded-2xl border border-[#CBD6E2] bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0D2440] mb-2">
                    Story Points Over Raw Hours
                  </h3>
                  <p className="text-xs text-[#5F7083] leading-relaxed mb-4">
                    Hours create false precision and invite micromanagement. SprintDesk uses Fibonacci story points to estimate relative technical complexity and unknown risk.
                  </p>
                  <ul className="space-y-2 text-xs text-[#0D2440]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E5E99]" />
                      <span>Calibrated velocity based on 4-sprint rolling averages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E5E99]" />
                      <span>Automatic warning when a sprint exceeds team capacity</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link href="/blog/why-traditional-story-points-fail" className="text-xs font-bold text-[#2E5E99] hover:underline">
                    Read our analysis on Story Points vs Hours →
                  </Link>
                </div>
              </div>

              <div className="p-7 rounded-2xl border border-[#CBD6E2] bg-white shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0D2440] mb-2">
                    Assignee & Epic Swimlanes
                  </h3>
                  <p className="text-xs text-[#5F7083] leading-relaxed mb-4">
                    Instantly re-group your sprint board by engineer or epic to reveal unassigned tickets, bottlenecks, and uneven workload distribution.
                  </p>
                  <ul className="space-y-2 text-xs text-[#0D2440]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E5E99]" />
                      <span>1-click view switch between column and swimlane layouts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E5E99]" />
                      <span>Direct integration with team workload capacity monitoring</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100">
                  <Link href="/team-workload-management" className="text-xs font-bold text-[#2E5E99] hover:underline">
                    Explore Team Workload Management →
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-[#F8FAFC] border-t border-b border-[#CBD6E2]/70">
          <Container size="narrow">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440] text-center mb-10">
              Sprint Management FAQs
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white border border-[#CBD6E2]">
                <h4 className="font-bold text-sm text-[#0D2440] mb-1">
                  How does SprintDesk connect personal tasks to team sprints?
                </h4>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Developers keep their personal scratchpad tasks private until they choose to triage and route them to a shared Team Sprint Board with story points and an epic assignment.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-[#CBD6E2]">
                <h4 className="font-bold text-sm text-[#0D2440] mb-1">
                  What happens when a sprint encounters unexpected blockers?
                </h4>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  SprintDesk automatically flags blocked dependencies on the Manager Command Center and recalculates delivery forecasts without waiting for Friday reviews.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-[#CBD6E2]">
                <h4 className="font-bold text-sm text-[#0D2440] mb-1">
                  Can we customize sprint lengths and story point scales?
                </h4>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Yes, SprintDesk supports 1-week, 2-week, or custom timeboxes, along with Fibonacci (1, 2, 3, 5, 8, 13) or T-shirt sizing.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#0D2440] text-white text-center">
          <Container size="narrow">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4 text-white">
              Plan clearly. Execute together.
            </h2>
            <p className="text-sm sm:text-base text-[#CBD6E2] mb-8 max-w-xl mx-auto">
              Empower your engineering team with calibrated velocity, transparent sprint boards, and zero status chasing.
            </p>
            <Button
              variant="pill-primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="bg-[#2E5E99] hover:bg-[#3D78BE] text-white px-8 font-bold"
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
