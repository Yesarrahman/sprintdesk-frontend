"use client";

import * as React from "react";
import { Check, HelpCircle, Sparkles, ArrowRight, ShieldCheck, X } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";
import { GsapReveal, GsapStagger } from "@/components/marketing/gsap-effects";

const faqs = [
  {
    question: "Can I use SprintDesk for free indefinitely?",
    answer:
      "Yes. Our Free tier provides 1 Personal Workspace and up to 2 Team Workspaces (up to 3 members per workspace) with full access to the Capture Inbox, Kanban board, and our signature Estimated Finish Time predictor. It is completely free forever with no credit card required.",
  },
  {
    question: "What does the Pro plan include?",
    answer:
      "SprintDesk Pro is $15 per month (or $13.50/mo billed annually with 10% discount). It unlocks up to 5 team workspaces, up to 10 members per workspace, Team & Individual PDF reports, custom date range reporting, the Submit-to-Manager workflow, and priority support.",
  },
  {
    question: "Which plan includes the No-Code Automation Engine?",
    answer:
      "Automations are included on the SprintDesk Agency plan ($29 per month or $26.10/mo billed annually with 10% discount). Agency provides unlimited team workspaces, unlimited workspace members, the Automations engine, advanced time tracking, client portals (Coming Soon), and dedicated onboarding support.",
  },
  {
    question: "Can I keep my personal tasks confidential from my employer or team?",
    answer:
      "Absolutely. SprintDesk was engineered specifically for dual-workspace privacy. Personal Task Flow tasks remain 100% private to your account and are never visible on team boards or manager dashboards unless you explicitly triage them to a team board.",
  },
  {
    question: "Can I switch between monthly and annual billing anytime?",
    answer:
      "Yes. You can switch between monthly and annual billing or upgrade/downgrade tiers at any point directly from your workspace billing settings.",
  },
];

const comparisonMatrix = [
  {
    category: "Workspaces & Privacy",
    features: [
      { name: "Personal Space (100% Private)", free: "Included", pro: "Included", ent: "Included" },
      { name: "Team Workspaces", free: "Up to 2", pro: "Up to 5", ent: "Unlimited" },
      { name: "Members per Workspace", free: "Up to 3", pro: "Up to 10", ent: "Unlimited" },
      { name: "Dual-Workspace Private Isolation", free: true, pro: true, ent: true },
      { name: "Calendar & Capture Inbox", free: true, pro: true, ent: true },
    ],
  },
  {
    category: "Task & Sprint Execution",
    features: [
      { name: "Task Management & Kanban Board", free: true, pro: true, ent: true },
      { name: "Estimated Finish Time Engine", free: true, pro: true, ent: true },
      { name: "Story Points & Fibonacci Sizing", free: false, pro: true, ent: true },
      { name: "Assignee & Epic Swimlanes", free: false, pro: true, ent: true },
      { name: "Submit-to-Manager Workflow", free: false, pro: true, ent: true },
    ],
  },
  {
    category: "Reporting & Automation",
    features: [
      { name: "Team & Individual PDF Reports", free: false, pro: true, ent: true },
      { name: "Custom Date Range Reporting", free: false, pro: true, ent: true },
      { name: "Automations Engine", free: false, pro: false, ent: true },
      { name: "Advanced Time Tracking", free: false, pro: false, ent: true },
      { name: "Client Portals (Coming Soon)", free: false, pro: false, ent: true },
    ],
  },
  {
    category: "Security & Support",
    features: [
      { name: "Data Encryption at Rest (AES-256)", free: true, pro: true, ent: true },
      { name: "Basic Notifications", free: true, pro: true, ent: true },
      { name: "Priority Support", free: false, pro: true, ent: true },
      { name: "Dedicated Onboarding Support", free: false, pro: false, ent: true },
    ],
  },
];

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = React.useState(true);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Header */}
        <section className="text-center pb-16">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Sparkles className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>Transparent & Predictable</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Start simple. Scale when the work does.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-8">
                Choose the SprintDesk plan tailored for your output today. Upgrade or downgrade anytime with zero lock-in contracts.
              </p>

              {/* Billing Cycle Switcher */}
              <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-[#F5F8FB] border border-[#CBD6E2]">
                <button
                  onClick={() => setAnnualBilling(false)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    !annualBilling
                      ? "bg-[#2E5E99] text-white shadow-xs"
                      : "text-[#5F7083] hover:text-[#0D2440]"
                  }`}
                >
                  Monthly Billing
                </button>
                <button
                  onClick={() => setAnnualBilling(true)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    annualBilling
                      ? "bg-[#2E5E99] text-white shadow-xs"
                      : "text-[#5F7083] hover:text-[#0D2440]"
                  }`}
                >
                  Annual Billing
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold">
                    10% OFF
                  </span>
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* Pricing Tiers Grid */}
        <section className="pb-24">
          <Container size="default">
            <GsapStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" stagger={0.15}>
              {/* Free Tier */}
              <div className="rounded-2xl border border-[#CBD6E2] bg-white p-8 shadow-sm hover:border-[#7BA4D0] flex flex-col justify-between">
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#0D2440] mb-2">
                    Free
                  </div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-extrabold text-[#0D2440] font-heading">$0</span>
                    <span className="text-xs text-[#5F7083] font-medium">/forever</span>
                  </div>
                  <p className="text-xs text-[#5F7083] leading-relaxed mb-6">
                    For individuals and small teams getting started.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-[#CBD6E2]/60 mb-8">
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Personal Space included</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Create up to 2 team workspaces</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Invite up to 3 members per workspace</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Task management & Kanban board</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Calendar & Capture Inbox</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Basic notifications</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Estimated Workday Finish Time</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="md"
                  href={getAppUrl("/signup")}
                  className="w-full justify-center text-xs font-semibold"
                >
                  Free Forever — Start Now
                </Button>
              </div>

              {/* Pro Tier */}
              <div className="rounded-2xl border-2 border-[#2E5E99] bg-white p-8 shadow-2xl relative flex flex-col justify-between lg:-translate-y-3">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full bg-[#2E5E99] text-white text-xs font-bold tracking-wider uppercase shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </span>
                </div>

                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#0D2440] mb-2">
                    SprintDesk Pro
                  </div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-extrabold text-[#0D2440] font-heading">
                      {annualBilling ? "$13.50" : "$15"}
                    </span>
                    <span className="text-xs text-[#5F7083] font-medium">
                      / month
                    </span>
                  </div>
                  <p className="text-xs text-[#5F7083] leading-relaxed mb-6">
                    For growing teams needing reporting and analytics.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-[#CBD6E2]/60 mb-8">
                    <div className="flex items-center gap-2 text-xs text-[#0D2440] font-semibold">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Everything in Free, plus:</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Create up to 5 team workspaces</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Invite up to 10 members per workspace</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Team & Individual PDF Reports</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Custom date range reporting</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Submit-to-Manager workflow</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Priority support</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  href={getAppUrl("/signup?plan=pro")}
                  className="w-full justify-center text-xs font-semibold bg-[#2E5E99] hover:bg-[#386eb0] text-white shadow-md"
                >
                  Start Pro
                </Button>
              </div>

              {/* Agency Tier */}
              <div className="rounded-2xl border border-[#CBD6E2] bg-white p-8 shadow-sm hover:border-[#7BA4D0] flex flex-col justify-between">
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#0D2440] mb-2">
                    SprintDesk Agency
                  </div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-extrabold text-[#0D2440] font-heading">
                      {annualBilling ? "$26.10" : "$29"}
                    </span>
                    <span className="text-xs text-[#5F7083] font-medium">
                      / month
                    </span>
                  </div>
                  <p className="text-xs text-[#5F7083] leading-relaxed mb-6">
                    For agencies and power teams needing automation.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-[#CBD6E2]/60 mb-8">
                    <div className="flex items-center gap-2 text-xs text-[#0D2440] font-semibold">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Everything in Pro, plus:</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Unlimited team workspaces</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Unlimited workspace members</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Automations engine</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Advanced time tracking</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Client portals (Coming Soon)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Dedicated onboarding support</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="dark"
                  size="md"
                  href={getAppUrl("/signup?plan=agency")}
                  className="w-full justify-center text-xs font-semibold"
                >
                  Choose Agency
                </Button>
              </div>
            </GsapStagger>
          </Container>
        </section>

        {/* Feature Comparison Matrix */}
        <section className="py-20 bg-[#F5F8FB] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D2440] tracking-tight mb-3">
                Compare Plan Features
              </h2>
              <p className="text-sm text-[#5F7083]">
                Comprehensive breakdown of capabilities across all tiers.
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-[#CBD6E2] overflow-hidden shadow-sm">
              {/* Header row */}
              <div className="grid grid-cols-12 bg-[#0D2440] text-white p-4 font-heading font-bold text-xs">
                <div className="col-span-6 sm:col-span-5">Feature Breakdown</div>
                <div className="col-span-2 text-center">Free</div>
                <div className="col-span-2 sm:col-span-3 text-center text-[#7BA4D0]">Pro</div>
                <div className="col-span-2 text-center">Agency</div>
              </div>

              {comparisonMatrix.map((section, idx) => (
                <div key={idx}>
                  <div className="bg-[#E7F0FA] px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[#0D2440] border-t border-b border-[#CBD6E2]">
                    {section.category}
                  </div>
                  {section.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="grid grid-cols-12 p-3.5 text-xs border-b border-[#CBD6E2]/40 hover:bg-[#F5F8FB] transition-colors items-center"
                    >
                      <div className="col-span-6 sm:col-span-5 font-medium text-[#0D2440]">
                        {feat.name}
                      </div>

                      <div className="col-span-2 text-center text-[#5F7083]">
                        {typeof feat.free === "boolean" ? (
                          feat.free ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-[#CBD6E2] mx-auto" />
                          )
                        ) : (
                          feat.free
                        )}
                      </div>

                      <div className="col-span-2 sm:col-span-3 text-center font-semibold text-[#2E5E99]">
                        {typeof feat.pro === "boolean" ? (
                          feat.pro ? (
                            <Check className="w-4 h-4 text-[#2E5E99] mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-[#CBD6E2] mx-auto" />
                          )
                        ) : (
                          feat.pro
                        )}
                      </div>

                      <div className="col-span-2 text-center text-[#0D2440] font-semibold">
                        {typeof feat.ent === "boolean" ? (
                          feat.ent ? (
                            <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                          ) : (
                            <X className="w-4 h-4 text-[#CBD6E2] mx-auto" />
                          )
                        ) : (
                          feat.ent
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQs Section */}
        <section className="py-24 bg-white">
          <Container size="narrow">
            <div className="text-center mb-16">
              <div className="text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-3">
                Got Questions?
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0D2440] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#CBD6E2] p-6 hover:border-[#7BA4D0] transition-colors"
                >
                  <h3 className="font-heading font-bold text-base text-[#0D2440] mb-2.5 flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#2E5E99] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F7083] leading-relaxed pl-6.5">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-[#0D2440] text-white">
          <Container size="default" className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
              Start with the work you have today.
            </h2>
            <p className="text-sm text-[#CBD6E2] mb-8 leading-relaxed">
              No credit card required. Experience why high-velocity teams choose SprintDesk.
            </p>
            <Button
              variant="primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white"
            >
              Start Free Trial →
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
