"use client";

import * as React from "react";
import Link from "next/link";
import {
  Globe,
  Clock,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  MessageSquareOff,
  Radio,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";

export default function RemoteTeamTaskManagementPage() {
  const [activeZone, setActiveZone] = React.useState<"sf" | "london" | "tokyo">("london");

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero */}
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Globe className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>Remote Team Task Management</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Keep remote work visible — and everyone aligned.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8">
                SprintDesk gives distributed teams a shared place to organize work, track progress, identify blockers, and stay aligned without endless status meetings.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")}>
                  Start Free Remote Workspace →
                </Button>
                <Button variant="outline" size="lg" href="/how-it-works">
                  See Async Workflows
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
                What is Remote Team Task Management?
              </h2>
              <p className="mb-3">
                <strong>Remote team task management</strong> is the architecture and tooling used by geographically distributed squads to coordinate deliverables asynchronously across timezones. Rather than relying on synchronous standup meetings or intrusive employee surveillance software, effective remote task management relies on transparent sprint boards, explicit task ownership, automated handoffs, and clear progress milestones.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[#5F7083] pt-2 border-t border-[#CBD6E2]/50">
                <span>Key focus: High-trust autonomy</span>
                <span>•</span>
                <span>Async handoffs</span>
                <span>•</span>
                <span>Zero micromanagement</span>
              </div>
            </div>
          </Container>
        </section>

        {/* Interactive Timezone Async Handoff Simulator */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="max-w-4xl mx-auto rounded-2xl border border-[#CBD6E2] bg-[#0D2440] text-white p-6 sm:p-10 shadow-2xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E3A5F]">
                <div>
                  <span className="text-xs font-mono uppercase font-bold text-[#7BA4D0]">
                    24-Hour Follow-The-Sun Engine
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-white">
                    Async Sprint Handoff Simulator
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveZone("sf")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activeZone === "sf" ? "bg-[#2E5E99] text-white" : "bg-[#163359] text-[#7BA4D0]"
                    }`}
                  >
                    San Francisco (UTC-7)
                  </button>
                  <button
                    onClick={() => setActiveZone("london")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activeZone === "london" ? "bg-[#2E5E99] text-white" : "bg-[#163359] text-[#7BA4D0]"
                    }`}
                  >
                    London (UTC+1)
                  </button>
                  <button
                    onClick={() => setActiveZone("tokyo")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                      activeZone === "tokyo" ? "bg-[#2E5E99] text-white" : "bg-[#163359] text-[#7BA4D0]"
                    }`}
                  >
                    Tokyo (UTC+9)
                  </button>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[#081728] border border-[#1E3A5F] space-y-4">
                <div className="flex items-center justify-between text-xs text-[#7BA4D0]">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    Active Timezone Hub:{" "}
                    <strong className="text-white">
                      {activeZone === "sf"
                        ? "Americas Engineering Hub (10:00 AM PST)"
                        : activeZone === "london"
                        ? "EMEA Product & Core Hub (3:00 PM BST)"
                        : "APAC Infrastructure Hub (11:00 PM JST)"}
                    </strong>
                  </span>
                  <Badge variant="sapphire" className="text-[10px]">Async Synced</Badge>
                </div>

                <div className="p-4 rounded-lg bg-[#0E2540] border border-[#2E5E99]/60">
                  <div className="text-xs font-bold text-white mb-1">
                    {activeZone === "sf"
                      ? "Alex Morgan (SF) picked up: 'Checkout flow mobile edge cases'"
                      : activeZone === "london"
                      ? "Sarah Chen (London) submitted PR #182: 'Database replica failover'"
                      : "Kenji Sato (Tokyo) finalized: 'Serverless warm-up cron automation'"}
                  </div>
                  <p className="text-xs text-[#CBD6E2] leading-relaxed">
                    {activeZone === "sf"
                      ? "Code review was performed overnight by EMEA team. Zero waiting time, zero morning video meetings."
                      : activeZone === "london"
                      ? "Automatic handoff generated in SprintDesk with test URLs, acceptance criteria, and updated story points."
                      : "Deployed directly to staging with automatic status transition to Released. Americas squad wakes up to clean release."}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1E3A5F] flex items-center justify-between text-xs text-[#7BA4D0]">
                <span>Async productivity without surveillance software or keystroke tracking</span>
                <span className="text-emerald-400 font-semibold">100% Trust & Output-Driven</span>
              </div>
            </div>
          </Container>
        </section>

        {/* 3 Core Problems of Remote Work Solved */}
        <section className="py-20 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D2440] tracking-tight mb-3">
                Built for distributed output, not surveillance.
              </h2>
              <p className="text-sm text-[#5F7083]">
                Remote teams need clarity on deliverables, not clock-in surveillance or artificial green Slack dots.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <div className="w-8 h-8 rounded-lg bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center font-bold mb-4">
                  <MessageSquareOff className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  No More Status Chasing
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Card status, story points, and commit history update automatically. Teammates never need to ask "what's the progress on this?" across timezones.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <div className="w-8 h-8 rounded-lg bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center font-bold mb-4">
                  <Radio className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  Immediate Blocker Signals
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  When a remote engineer is blocked by an architectural question, flagging the card instantly highlights it on the Command Center and notifies the lead.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-white border border-[#CBD6E2]">
                <div className="w-8 h-8 rounded-lg bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center font-bold mb-4">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2">
                  Async Standups That Work
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Engineers record what was shipped and what's next directly on their cards. Managers scan the 30-second activity stream with zero calendar conflicts.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-[#0D2440] text-white text-center">
          <Container size="default" className="max-w-3xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Less status chasing. More progress.
            </h2>
            <p className="text-sm text-[#CBD6E2] mb-8 leading-relaxed">
              Empower your distributed team with true async execution and complete sprint predictability.
            </p>
            <Button
              variant="primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white"
            >
              Start Free Remote Team Workspace →
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
