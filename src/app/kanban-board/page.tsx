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
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";

interface KanbanCard {
  id: string;
  title: string;
  tag: string;
  pts: number;
  assignee: string;
  column: "todo" | "inProgress" | "done";
}

export default function KanbanBoardPage() {
  const [cards, setCards] = React.useState<KanbanCard[]>([
    { id: "1", title: "Refactor auth token cache", tag: "Backend", pts: 5, assignee: "Sarah Chen", column: "inProgress" },
    { id: "2", title: "Design settings dark theme", tag: "Design", pts: 3, assignee: "Alex Morgan", column: "todo" },
    { id: "3", title: "Add Stripe webhook retry logic", tag: "Billing", pts: 8, assignee: "David Kim", column: "done" },
  ]);

  const moveCard = (id: string, targetCol: "todo" | "inProgress" | "done") => {
    setCards((prev) =>
      prev.map((c) => (c.id === id ? { ...c, column: targetCol } : c))
    );
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero */}
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Kanban className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>Modern Agile Kanban Software</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Drag. Drop. Done. <br />
                The Kanban board built for velocity.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8">
                Move work seamlessly from Backlog to Released without the clunkiness of legacy corporate project software. Powered by story points, WIP limits, and real-time velocity models.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")}>
                  Start Free Kanban Board →
                </Button>
                <Button variant="outline" size="lg" href="/how-it-works">
                  See Kanban Flow
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
                What is an Agile Kanban Board?
              </h2>
              <p className="mb-3">
                A <strong>Kanban board</strong> is a visual project management framework that maps workflow stages as vertical columns (e.g. Backlog, In Progress, In Review, Done) and deliverables as movable cards. By enforcing Work-In-Progress (WIP) limits and visualizing bottlenecks, technical squads optimize cycle time, eliminate context switching, and maintain predictable delivery velocity.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#5F7083] pt-2 border-t border-[#CBD6E2]/50">
                <span>Key mechanisms: WIP Limits</span>
                <span>•</span>
                <span>Story Point Estimation</span>
                <span>•</span>
                <span>Assignee Swimlanes</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Interactive Kanban Simulator */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="max-w-5xl mx-auto rounded-2xl border border-[#CBD6E2] bg-[#0D2440] text-white p-6 sm:p-10 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E3A5F]">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-[#7BA4D0]">
                    Interactive Sandbox
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Live SprintDesk Kanban Board
                  </h3>
                </div>
                <div className="text-xs text-[#7BA4D0] font-mono">
                  Click 'Advance →' to simulate real-time status transitions
                </div>
              </div>

              {/* 3 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Column 1: Todo */}
                <div className="rounded-xl bg-[#081728] border border-[#1E3A5F] p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#7BA4D0] mb-3 pb-2 border-b border-[#1E3A5F]">
                      <span>TODO ({cards.filter((c) => c.column === "todo").length})</span>
                      <span className="w-2 h-2 rounded-full bg-[#2E5E99]" />
                    </div>
                    <div className="space-y-3">
                      {cards
                        .filter((c) => c.column === "todo")
                        .map((card) => (
                          <div key={card.id} className="p-3.5 rounded-lg bg-[#0E2540] border border-[#2E5E99]/60">
                            <div className="flex justify-between text-[10px] text-[#7BA4D0] mb-1.5">
                              <span className="px-1.5 py-0.5 rounded bg-[#163359] text-white">{card.tag}</span>
                              <span className="font-bold text-white font-mono">{card.pts} pts</span>
                            </div>
                            <div className="text-xs font-semibold text-white mb-2">{card.title}</div>
                            <div className="flex items-center justify-between pt-2 border-t border-[#1E3A5F] text-[10px]">
                              <span className="text-[#CBD6E2]">{card.assignee}</span>
                              <button
                                onClick={() => moveCard(card.id, "inProgress")}
                                className="text-xs font-bold text-amber-400 hover:underline cursor-pointer"
                              >
                                Start →
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Column 2: In Progress */}
                <div className="rounded-xl bg-[#081728] border border-[#1E3A5F] p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#7BA4D0] mb-3 pb-2 border-b border-[#1E3A5F]">
                      <span>IN PROGRESS ({cards.filter((c) => c.column === "inProgress").length})</span>
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    </div>
                    <div className="space-y-3">
                      {cards
                        .filter((c) => c.column === "inProgress")
                        .map((card) => (
                          <div key={card.id} className="p-3.5 rounded-lg bg-[#0E2540] border border-amber-500/40 shadow-xs">
                            <div className="flex justify-between text-[10px] text-[#7BA4D0] mb-1.5">
                              <span className="px-1.5 py-0.5 rounded bg-[#163359] text-white">{card.tag}</span>
                              <span className="font-bold text-amber-400 font-mono">{card.pts} pts</span>
                            </div>
                            <div className="text-xs font-semibold text-white mb-2">{card.title}</div>
                            <div className="flex items-center justify-between pt-2 border-t border-[#1E3A5F] text-[10px]">
                              <span className="text-[#CBD6E2]">{card.assignee}</span>
                              <button
                                onClick={() => moveCard(card.id, "done")}
                                className="text-xs font-bold text-emerald-400 hover:underline cursor-pointer"
                              >
                                Complete ✓
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Column 3: Done */}
                <div className="rounded-xl bg-[#081728] border border-[#1E3A5F] p-4 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs font-bold text-[#7BA4D0] mb-3 pb-2 border-b border-[#1E3A5F]">
                      <span>COMPLETED ({cards.filter((c) => c.column === "done").length})</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    </div>
                    <div className="space-y-3">
                      {cards
                        .filter((c) => c.column === "done")
                        .map((card) => (
                          <div key={card.id} className="p-3.5 rounded-lg bg-[#0E2540] border border-emerald-500/30">
                            <div className="flex justify-between text-[10px] text-[#7BA4D0] mb-1.5">
                              <span className="px-1.5 py-0.5 rounded bg-[#163359] text-white">{card.tag}</span>
                              <span className="font-bold text-emerald-400 font-mono">{card.pts} pts</span>
                            </div>
                            <div className="text-xs font-semibold text-white mb-2 line-through opacity-80">
                              {card.title}
                            </div>
                            <div className="flex items-center justify-between pt-2 border-t border-[#1E3A5F] text-[10px]">
                              <span className="text-emerald-400">Shipped</span>
                              <button
                                onClick={() => moveCard(card.id, "todo")}
                                className="text-xs text-[#7BA4D0] hover:underline cursor-pointer"
                              >
                                Reopen
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#1E3A5F] flex flex-wrap items-center justify-between text-xs text-[#7BA4D0]">
                <span>Zero page reloads • Drag-and-drop instant persistence • Real-time WebSockets</span>
                <span className="text-white font-semibold">SprintDesk Kanban Engine</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#0D2440] text-white text-center">
          <Container size="default" className="max-w-3xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              The fastest Kanban board for high-velocity teams.
            </h2>
            <p className="text-sm text-[#CBD6E2] mb-8 leading-relaxed">
              Start free today with no credit card required. Experience fluid sprint boards engineered for modern builders.
            </p>
            <Button
              variant="primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white"
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
