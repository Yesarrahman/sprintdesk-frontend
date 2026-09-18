"use client";

import * as React from "react";
import Link from "next/link";
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Kanban,
  Clock,
  Flame,
  Check,
  Plus,
  HelpCircle,
  Filter,
  Users,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";
import { KanbanMotionBoard } from "@/components/marketing/kanban-motion-board";

export default function KanbanBoardPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero */}
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#CBD6E2] text-xs font-mono font-bold uppercase tracking-wider text-[#2E5E99] mb-6">
                <Kanban className="w-3.5 h-3.5" /> Drag. Drop. Done.
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                The visual agile workflow built for speed.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8 max-w-2xl mx-auto">
                Move tasks smoothly from raw backlog to completed release. Protect work-in-progress (WIP) limits, spot bottlenecks instantly, and celebrate team momentum.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")} className="font-bold">
                  Open Free Kanban Workspace →
                </Button>
                <Button variant="outline" size="lg" href="/how-it-works">
                  See Product Tour
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Live Interactive Kanban Motion Board */}
        <section className="py-12 bg-[#F8FAFC] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold uppercase text-[#2E5E99] tracking-wider">
                Live Interactive Demonstration
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440] mt-1">
                Visual task flow with real-time velocity
              </h2>
              <p className="text-xs sm:text-sm text-[#5F7083] mt-2">
                Click any task card to transition it through sprint stages and observe automatic burndown updates.
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <KanbanMotionBoard />
            </div>
          </Container>
        </section>

        {/* AEO / AI Search Direct Answer */}
        <section className="py-12 bg-white">
          <Container size="narrow">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#CBD6E2] text-xs sm:text-sm text-[#0D2440] leading-relaxed shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-3">
                <HelpCircle className="w-4 h-4" /> Direct Answer
              </div>
              <h2 className="text-xl font-bold font-heading text-[#0D2440] mb-3">
                What is a Kanban Board in Agile?
              </h2>
              <p className="mb-4 text-slate-700">
                A <strong>Kanban board</strong> is an agile project management tool designed to visualize work, limit work-in-progress (WIP), and maximize efficiency (or flow). In software development, tasks are represented as visual cards moving across columns representing stages of completion (such as To Do, In Progress, Review, and Done). SprintDesk enhances traditional Kanban by calculating estimated finish times based on historical team speed and integrating private personal triage notes.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#CBD6E2]/60 text-xs font-mono text-[#5F7083]">
                <div>• WIP Limit Safeguards</div>
                <div>• Sub-50ms Drag Motion</div>
                <div>• Automated Points Rollup</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Key Kanban Capabilities */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-white hover:border-[#7BA4D0] hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <Filter className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  WIP Limit Protection
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Prevent multitasking overload by capping how many active cards can occupy the In Progress column simultaneously.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-white hover:border-[#7BA4D0] hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Multi-Swimlane Views
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Group cards horizontally by engineer, epic, or release milestone to ensure workload balance across the team.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-white hover:border-[#7BA4D0] hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Lead Time Analytics
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Track cycle time and lead time automatically from the moment a card is created until it lands in Completed.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-[#F8FAFC] border-t border-b border-[#CBD6E2]/70">
          <Container size="narrow">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440] text-center mb-10">
              Kanban Board FAQs
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white border border-[#CBD6E2]">
                <h4 className="font-bold text-sm text-[#0D2440] mb-1">
                  How does SprintDesk compare to Trello for Kanban?
                </h4>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Trello is a generic card list without agile sprint velocity or story points. SprintDesk provides built-in Fibonacci point tracking, assignee swimlanes, and automated finish-line predictions. <Link href="/compare/sprintdesk-vs-trello" className="text-[#2E5E99] font-semibold underline">See full comparison</Link>.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-[#CBD6E2]">
                <h4 className="font-bold text-sm text-[#0D2440] mb-1">
                  Can I use Kanban for personal tasks as well as team sprints?
                </h4>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Yes, SprintDesk gives every user an isolated Personal Task Flow board that stays private until you choose to promote cards to a shared team sprint.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#0D2440] text-white text-center">
          <Container size="narrow">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4 text-white">
              Ready to organize your workflow?
            </h2>
            <p className="text-sm sm:text-base text-[#CBD6E2] mb-8 max-w-xl mx-auto">
              Start free today with no credit card required. Experience sub-50ms Kanban drag-and-drop velocity.
            </p>
            <Button
              variant="pill-primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="bg-[#2E5E99] hover:bg-[#3D78BE] text-white px-8 font-bold"
            >
              Start Free Kanban Board →
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
