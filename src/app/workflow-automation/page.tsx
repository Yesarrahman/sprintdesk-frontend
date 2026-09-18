"use client";

import * as React from "react";
import Link from "next/link";
import {
  Zap,
  CheckCircle2,
  Play,
  RefreshCw,
  ArrowRight,
  Sliders,
  Bell,
  GitPullRequest,
  Sparkles,
  HelpCircle,
  Filter,
} from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";
import { AutomationRuleBuilder } from "@/components/marketing/automation-rule-builder";

export default function WorkflowAutomationPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero */}
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#CBD6E2] text-xs font-mono font-bold uppercase tracking-wider text-[#2E5E99] mb-6">
                <Zap className="w-3.5 h-3.5" /> No-Code Workflow Automations
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Let your workflow handle the busywork.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8 max-w-2xl mx-auto">
                Create simple no-code rules that automatically update tasks, change priorities, and assign work when the right sprint conditions are met.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button variant="pill-primary" size="lg" href={getAppUrl("/signup")} className="font-bold">
                  Start Free Automation Workspace →
                </Button>
                <Button variant="outline" size="lg" href="/how-it-works">
                  See Product Tour
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Interactive Visual Rule Builder Showcase */}
        <section className="py-12 bg-[#F8FAFC] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold uppercase text-[#2E5E99] tracking-wider">
                Live Interactive Builder
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440] mt-1">
                Configure triggers & actions without code
              </h2>
              <p className="text-xs sm:text-sm text-[#5F7083] mt-2">
                Test the interactive rule builder below to see how SprintDesk executes automated task transitions.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <AutomationRuleBuilder />
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
                What is Workflow Automation in Project Management?
              </h2>
              <p className="mb-4 text-slate-700">
                <strong>Workflow automation</strong> is the mechanism of triggering pre-configured actions when defined project conditions occur — such as automatically assigning a lead engineer when a task enters &ldquo;In Review,&rdquo; adjusting priority to P0 when a blocker flag is raised, or updating team sprint velocity when a personal task is completed. SprintDesk provides a no-code rule builder designed specifically for software and product teams.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-[#CBD6E2]/60 text-xs font-mono text-[#5F7083]">
                <div>• Zero Manual Status Syncing</div>
                <div>• Automatic Priority Escalation</div>
                <div>• Deterministic Team Handoffs</div>
              </div>
            </div>
          </Container>
        </section>

        {/* Core Benefits */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-white hover:border-[#7BA4D0] hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <GitPullRequest className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  PR & Commit Triggers
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  When developers open a pull request on GitHub or GitLab, cards automatically advance to In Review without manual intervention.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-white hover:border-[#7BA4D0] hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Smart Blocker Escalation
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Ensure critical blockers never sit unnoticed. Rules automatically alert on-call leads and flag sprint dependencies.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-white hover:border-[#7BA4D0] hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Cross-Workspace Rollup
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  When an individual finishes their daily focus tasks, team sprint progress updates automatically without exposing private notes.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-[#F8FAFC] border-t border-b border-[#CBD6E2]/70">
          <Container size="narrow">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440] text-center mb-10">
              Workflow Automation FAQs
            </h2>
            <div className="space-y-4">
              <div className="p-5 rounded-xl bg-white border border-[#CBD6E2]">
                <h4 className="font-bold text-sm text-[#0D2440] mb-1">
                  Do I need programming or webhook knowledge to use automations?
                </h4>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  No, SprintDesk&apos;s automation engine is 100% visual and no-code. You simply choose a Trigger (e.g. status changes to In Review) and an Action (e.g. assign reviewer).
                </p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-[#CBD6E2]">
                <h4 className="font-bold text-sm text-[#0D2440] mb-1">
                  Which subscription tier includes automated rules?
                </h4>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Automations are included in our Enterprise tier and available as an add-on for Pro workspaces. <Link href="/pricing" className="text-[#2E5E99] font-semibold underline">View pricing details</Link>.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#0D2440] text-white text-center">
          <Container size="narrow">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-4 text-white">
              Build the rule once. Let the workflow repeat itself.
            </h2>
            <p className="text-sm sm:text-base text-[#CBD6E2] mb-8 max-w-xl mx-auto">
              Automate repetitive sprint updates and free your engineering team to focus on high-impact problem solving.
            </p>
            <Button
              variant="pill-primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="bg-[#2E5E99] hover:bg-[#3D78BE] text-white px-8 font-bold"
            >
              Start Free Automation Workspace →
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
