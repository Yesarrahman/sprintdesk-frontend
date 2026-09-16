"use client";

import * as React from "react";
import { Check, HelpCircle, Sparkles, ArrowRight, ShieldCheck, X } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";

const faqs = [
  {
    question: "Can I use SprintDesk for free indefinitely?",
    answer:
      "Yes. Our Free tier provides 1 Personal Workspace and up to 3 Team Workspaces with full access to the Capture Inbox, Kanban board, and our signature Estimated Finish Time predictor. It is completely free forever with no credit card required.",
  },
  {
    question: "What happens when my team grows beyond 5 members?",
    answer:
      "You can upgrade to Pro Velocity for $8 per seat per month (billed annually) or $10 billed monthly. This unlocks unlimited team workspaces, advanced agile swimlanes, story point estimation, and real-time velocity tracking.",
  },
  {
    question: "Which plan includes the No-Code Automation Engine?",
    answer:
      "Automations are included on the Enterprise plan ($20 per seat per month). Enterprise also provides Client Portals, timesheet compliance exports, dedicated Slack support, and SOC-2 Type II documentation.",
  },
  {
    question: "Can I keep my personal tasks confidential from my employer or team?",
    answer:
      "Absolutely. SprintDesk was engineered specifically for dual-workspace privacy. Personal Task Flow tasks remain 100% private to your account and are never visible on team boards or manager dashboards unless you explicitly triage them to a team board.",
  },
  {
    question: "Do you offer discounts for open-source projects or non-profits?",
    answer:
      "Yes! We offer a 50% discount on Pro and Enterprise tiers for qualified open-source maintainers, non-profit institutions, and educational teams. Reach out to support to claim your coupon.",
  },
];

const comparisonMatrix = [
  {
    category: "Workspaces & Privacy",
    features: [
      { name: "Personal Workspaces", free: "1 Workspace", pro: "Unlimited", ent: "Unlimited" },
      { name: "Team Workspaces", free: "Up to 3", pro: "Unlimited", ent: "Unlimited" },
      { name: "Dual-Workspace Private Isolation", free: true, pro: true, ent: true },
      { name: "Quick Capture Inbox", free: true, pro: true, ent: true },
    ],
  },
  {
    category: "Agile & Sprint Execution",
    features: [
      { name: "Interactive Kanban Boards", free: true, pro: true, ent: true },
      { name: "Estimated Finish Time Engine", free: true, pro: true, ent: true },
      { name: "Story Points & Effort Sizing", free: false, pro: true, ent: true },
      { name: "Assignee & Epic Swimlanes", free: false, pro: true, ent: true },
      { name: "Sprint Velocity & Burndown Analytics", free: false, pro: true, ent: true },
    ],
  },
  {
    category: "Automations & Scalability",
    features: [
      { name: "No-Code Event Automation Engine", free: false, pro: false, ent: true },
      { name: "Custom Client Read-Only Portals", free: false, pro: false, ent: true },
      { name: "Timesheet & Compliance Exports", free: false, pro: "Basic CSV", ent: "Full Audit Logs" },
      { name: "GitHub & Slack Webhook Sync", free: "Basic", pro: "Unlimited", ent: "Unlimited" },
    ],
  },
  {
    category: "Security & Governance",
    features: [
      { name: "Data Encryption at Rest (AES-256)", free: true, pro: true, ent: true },
      { name: "SOC-2 Type II Compliance Reports", free: false, pro: false, ent: true },
      { name: "Dedicated Slack Support Channel", free: false, pro: false, ent: true },
      { name: "Uptime Service Level Agreement (SLA)", free: "Standard", pro: "99.9%", ent: "99.99%" },
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
                    SAVE 20%
                  </span>
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* Pricing Tiers Grid */}
        <section className="pb-24">
          <Container size="default">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Free Tier */}
              <div className="rounded-2xl border border-[#CBD6E2] bg-white p-8 shadow-sm hover:border-[#7BA4D0] flex flex-col justify-between">
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#0D2440] mb-2">
                    Free Forever
                  </div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-extrabold text-[#0D2440] font-heading">$0</span>
                    <span className="text-xs text-[#5F7083] font-medium">forever</span>
                  </div>
                  <p className="text-xs text-[#5F7083] leading-relaxed mb-6">
                    Ideal for individual software engineers, designers, and solo professionals organizing daily focus.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-[#CBD6E2]/60 mb-8">
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>1 Personal Workspace (100% Private)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Up to 3 Team Workspaces (Max 5 members)</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Core Kanban Boards & Checklists</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Estimated Workday Finish Time Engine</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Frictionless Global Quick Capture</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="md"
                  href={getAppUrl("/signup")}
                  className="w-full justify-center text-xs font-semibold"
                >
                  Start Free — No Credit Card
                </Button>
              </div>

              {/* Pro Velocity Tier */}
              <div className="rounded-2xl border-2 border-[#2E5E99] bg-white p-8 shadow-2xl relative flex flex-col justify-between lg:-translate-y-3">
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full bg-[#2E5E99] text-white text-xs font-bold tracking-wider uppercase shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </span>
                </div>

                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#0D2440] mb-2">
                    Pro Velocity
                  </div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-extrabold text-[#0D2440] font-heading">
                      {annualBilling ? "$8" : "$10"}
                    </span>
                    <span className="text-xs text-[#5F7083] font-medium">
                      / seat / month
                    </span>
                  </div>
                  <p className="text-xs text-[#5F7083] leading-relaxed mb-6">
                    Engineered for growing engineering squads and product teams shipping fast, predictable sprints.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-[#CBD6E2]/60 mb-8">
                    <div className="flex items-center gap-2 text-xs text-[#0D2440] font-semibold">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Everything in Free, plus:</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Unlimited Team Workspaces & Seats</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Story Points & Sizing Estimation</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Advanced Assignee & Epic Swimlanes</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Real-time Velocity Burnup & Radar</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>GitHub & GitLab PR Sync Webhooks</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="md"
                  href={getAppUrl("/signup?plan=pro")}
                  className="w-full justify-center text-xs font-semibold bg-[#2E5E99] hover:bg-[#386eb0] text-white shadow-md"
                >
                  Start 14-Day Free Pro Trial
                </Button>
              </div>

              {/* Enterprise Tier */}
              <div className="rounded-2xl border border-[#CBD6E2] bg-white p-8 shadow-sm hover:border-[#7BA4D0] flex flex-col justify-between">
                <div>
                  <div className="text-sm font-bold uppercase tracking-wider text-[#0D2440] mb-2">
                    Enterprise
                  </div>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-extrabold text-[#0D2440] font-heading">
                      {annualBilling ? "$20" : "$25"}
                    </span>
                    <span className="text-xs text-[#5F7083] font-medium">
                      / seat / month
                    </span>
                  </div>
                  <p className="text-xs text-[#5F7083] leading-relaxed mb-6">
                    For high-scale engineering organizations requiring automation, custom client access, and compliance.
                  </p>
                  <div className="space-y-3 pt-4 border-t border-[#CBD6E2]/60 mb-8">
                    <div className="flex items-center gap-2 text-xs text-[#0D2440] font-semibold">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Everything in Pro, plus:</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>No-Code Event Automation Engine</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Custom Read-Only Client Portals</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Timesheet & Billing Compliance Exports</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>SOC-2 Type II & Audit Log Access</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                      <span>Dedicated Slack Support & 99.99% SLA</span>
                    </div>
                  </div>
                </div>

                <Button
                  variant="dark"
                  size="md"
                  href={getAppUrl("/signup?plan=enterprise")}
                  className="w-full justify-center text-xs font-semibold"
                >
                  Choose Enterprise
                </Button>
              </div>
            </div>
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
                <div className="col-span-2 sm:col-span-3 text-center text-[#7BA4D0]">Pro Velocity</div>
                <div className="col-span-2 text-center">Enterprise</div>
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
