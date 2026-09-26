"use client";

import * as React from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Check, ArrowRight, Sparkles, Building2, User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { getAppUrl } from "@/lib/utils";

// ─── Plan Data & Types ────────────────────────────────────────────────────────

export type PlanId = "free" | "pro" | "agency";
export type Billing = "monthly" | "annual";

export interface Plan {
  id: PlanId;
  tabLabel: string;
  tabPrice: string;
  title: string;
  subtitle: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  pricePer: string;
  billedNote: (billing: Billing) => string;
  badge?: string;
  accentBg: string;
  features: string[];
  ctaLabel: (billing: Billing) => string;
  ctaHref: string;
}

const PLANS: Plan[] = [
  {
    id: "free",
    tabLabel: "Free",
    tabPrice: "$0",
    title: "Free Space",
    subtitle: "Personal focus & light collaboration",
    monthlyPrice: 0,
    annualMonthlyPrice: 0,
    pricePer: "Forever free",
    billedNote: () => "No credit card required",
    accentBg: "from-slate-100 to-slate-200/80",
    features: [
      "1 Personal Workspace (100% private)",
      "Up to 2 team workspaces included",
      "Up to 3 members per workspace",
      "Kanban board & Calendar triage",
      "Capture Inbox for fast note taking",
      "Estimated Workday Finish Time engine",
      "Standard notification delivery",
    ],
    ctaLabel: () => "Get started free",
    ctaHref: getAppUrl("/signup"),
  },
  {
    id: "pro",
    tabLabel: "SprintDesk Pro",
    tabPrice: "$15/mo",
    title: "SprintDesk Pro",
    subtitle: "For scaling teams & manager workflows",
    monthlyPrice: 15,
    annualMonthlyPrice: 13.5,
    pricePer: "Per month",
    billedNote: (billing) =>
      billing === "annual" ? "Billed annually ($162/yr, save 10%)" : "Billed monthly",
    badge: "Most Popular",
    accentBg: "from-indigo-50/70 via-slate-100 to-indigo-100/60",
    features: [
      "Everything included in Free plan",
      "Up to 5 team workspaces",
      "Up to 10 members per workspace",
      "Team & Individual PDF report generator",
      "Custom date range reporting & exports",
      "Submit-to-Manager review workflow",
      "Priority customer & technical support",
    ],
    ctaLabel: (billing) =>
      billing === "annual" ? "Subscribe annual ($13.50/mo)" : "Subscribe monthly ($15/mo)",
    ctaHref: getAppUrl("/signup?plan=pro"),
  },
  {
    id: "agency",
    tabLabel: "SprintDesk Agency",
    tabPrice: "$29/mo",
    title: "SprintDesk Agency",
    subtitle: "Unlimited capacity & automations engine",
    monthlyPrice: 29,
    annualMonthlyPrice: 26.1,
    pricePer: "Per month",
    billedNote: (billing) =>
      billing === "annual" ? "Billed annually ($313/yr, save 10%)" : "Billed monthly",
    accentBg: "from-purple-50/70 via-slate-100 to-purple-100/60",
    features: [
      "Everything included in Pro plan",
      "Unlimited team workspaces",
      "Unlimited workspace members",
      "No-Code Event Automation engine",
      "Advanced sprint velocity & time tracking",
      "Client portals & guest access (Coming Soon)",
      "Dedicated onboarding & workflow setup",
    ],
    ctaLabel: (billing) =>
      billing === "annual" ? "Subscribe annual ($26.10/mo)" : "Subscribe monthly ($29/mo)",
    ctaHref: getAppUrl("/signup?plan=agency"),
  },
];

// ─── 3D Book Page Flip Animation Variants ──────────────────────────────────────

const bookFlipVariants: Variants = {
  initial: (direction: number) => ({
    rotateY: direction > 0 ? 80 : -80,
    opacity: 0,
    scale: 0.96,
  }),
  animate: {
    rotateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1] as const,
    },
  },
  exit: (direction: number) => ({
    rotateY: direction > 0 ? -80 : 80,
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.35,
      ease: [0.5, 0, 0.75, 0] as const,
    },
  }),
};

const rightContentVariants: Variants = {
  initial: { opacity: 0, x: 12 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut", delay: 0.08 },
  },
  exit: {
    opacity: 0,
    x: -8,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// ─── Component Props ───────────────────────────────────────────────────────────

export interface SplitPricingCardProps {
  tagline?: string;
  title?: string;
  description?: string;
  showHeader?: boolean;
  className?: string;
}

export function SplitPricingCard({
  tagline = "TRANSPARENT PRICING",
  title = "Simple, honest pricing.",
  description = "Start free individually, expand as your team velocity grows.",
  showHeader = true,
  className = "py-20 sm:py-28 bg-white",
}: SplitPricingCardProps = {}) {
  const [activePlanId, setActivePlanId] = React.useState<PlanId>("free");
  const [billing, setBilling] = React.useState<Billing>("monthly");
  const [direction, setDirection] = React.useState<number>(1);

  const activeIndex = PLANS.findIndex((p) => p.id === activePlanId);
  const plan = PLANS[activeIndex];

  const handlePlanChange = (newPlanId: PlanId) => {
    if (newPlanId === activePlanId) return;
    const newIndex = PLANS.findIndex((p) => p.id === newPlanId);
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActivePlanId(newPlanId);
  };

  const currentPrice =
    plan.monthlyPrice === 0
      ? 0
      : billing === "annual"
      ? plan.annualMonthlyPrice
      : plan.monthlyPrice;

  return (
    <section id="pricing" className={className}>
      <Container size="default">
        {/* Optional Header */}
        {showHeader && (
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-bold uppercase tracking-wider text-[#0D2440] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#2E5E99]" />
              <span>{tagline}</span>
            </div>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-3">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        )}

        {/* ── Outer Toggle Controls ── */}
        <div className="flex flex-col items-center gap-4 mb-10">
          {/* Segmented Plan Selector matching reference image */}
          <div
            className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-inner max-w-full overflow-x-auto"
            role="tablist"
          >
            {PLANS.map((p) => {
              const isSelected = p.id === activePlanId;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handlePlanChange(p.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap outline-none ${
                    isSelected
                      ? "bg-white text-slate-900 shadow-sm border border-slate-200/60"
                      : "text-slate-500 hover:text-slate-900"
                  }`}
                >
                  <span>{p.tabLabel}</span>
                  <span
                    className={`text-xs ${
                      isSelected ? "text-slate-900 font-bold" : "text-slate-400"
                    }`}
                  >
                    {p.tabPrice}
                  </span>
                  {p.badge && isSelected && (
                    <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-full text-[9px] font-extrabold bg-[#2E5E99] text-white uppercase tracking-wider">
                      Popular
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Monthly / Annual Billing Toggle (Only for paid plans) */}
          <div
            className={`transition-all duration-300 flex items-center justify-center ${
              plan.monthlyPrice === 0
                ? "opacity-40 pointer-events-none"
                : "opacity-100"
            }`}
          >
            <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  billing === "monthly"
                    ? "bg-[#0D2440] text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Monthly billing
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  billing === "annual"
                    ? "bg-[#0D2440] text-white shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                <span>Annual billing</span>
                <span className="px-1.5 py-0.2 rounded-full bg-emerald-500 text-white text-[10px] font-extrabold">
                  Save 10%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ── Main Split Card ── */}
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-[32px] border border-slate-200/90 bg-white p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch relative"
            style={{
              boxShadow:
                "0 20px 50px -15px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(15, 23, 42, 0.03)",
            }}
          >
            {/* ════════ LEFT PANEL: Visual Price Ticket (Book Page Flip) ════════ */}
            <div
              className="w-full md:w-[46%] min-h-[360px] sm:min-h-[400px] relative flex flex-col"
              style={{ perspective: 1200 }}
            >
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={plan.id}
                  custom={direction}
                  variants={bookFlipVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  style={{
                    transformOrigin: direction > 0 ? "left center" : "right center",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: "hidden",
                  }}
                  className={`w-full h-full flex-1 rounded-2xl bg-gradient-to-br ${plan.accentBg} border border-slate-200/80 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-xs`}
                >
                  {/* Top-Left Ticket Fold Corner Accent (Visual like reference image) */}
                  <div className="absolute -top-3 -left-3 w-7 h-7 bg-white rotate-45 border-b border-r border-slate-300/80 shadow-xs pointer-events-none" />

                  {/* Bottom-Right Ticket Fold Corner Accent */}
                  <div className="absolute -bottom-3 -right-3 w-7 h-7 bg-white rotate-45 border-t border-l border-slate-300/80 shadow-xs pointer-events-none" />

                  {/* Large Stylized Brand Watermark in background */}
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.07] font-black text-[130px] tracking-tighter text-slate-900 leading-none">
                    SD
                  </div>

                  {/* Right side barcode dashes (matching reference image) */}
                  <div className="absolute right-4 bottom-8 flex flex-col gap-1 opacity-25 pointer-events-none">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3.5 h-1 rounded-xs bg-slate-900 ${
                          i % 2 === 0 ? "opacity-100" : "opacity-60"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Ticket Header Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                        {plan.title}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-[210px] leading-relaxed">
                      {plan.subtitle}
                    </p>
                  </div>

                  {/* Ticket Price Section (Matching $ color styling in reference image) */}
                  <div className="relative z-10 pt-8">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#EF4444] font-heading">
                        $
                      </span>
                      <span className="text-5xl sm:text-6xl font-black text-slate-900 font-heading tracking-tight">
                        {currentPrice === 0 ? "0" : currentPrice.toFixed(billing === "annual" && plan.monthlyPrice > 0 ? 2 : 0)}
                      </span>
                    </div>
                    <div className="mt-1 space-y-0.5">
                      <p className="text-xs sm:text-sm font-semibold text-slate-700">
                        {plan.pricePer}
                      </p>
                      <p className="text-[11px] text-slate-500 font-medium">
                        {plan.billedNote(billing)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Vertical Divider Line on Desktop */}
            <div className="hidden md:block w-px bg-slate-200/90 self-stretch my-2" />

            {/* ════════ RIGHT PANEL: Included Features & CTA ════════ */}
            <div className="flex-1 flex flex-col justify-between py-2 sm:py-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={plan.id}
                  variants={rightContentVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    {/* "What's Included" badge matching reference image */}
                    <div className="mb-6">
                      <span className="inline-block px-3.5 py-1 rounded-full border border-slate-900/80 text-xs font-bold text-slate-900 tracking-tight">
                        What&apos;s Included
                      </span>
                    </div>

                    {/* Features List with dashed dividers and rounded checkmarks */}
                    <ul className="space-y-0 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx}>
                          <div className="flex items-start gap-3 py-2.5">
                            <div className="mt-0.5 w-4 h-4 rounded-full bg-slate-200/90 text-slate-700 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 stroke-[3]" />
                            </div>
                            <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                              {feature}
                            </span>
                          </div>
                          {idx < plan.features.length - 1 && (
                            <div className="border-b border-dashed border-slate-200/80" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Dark CTA Button with accent arrow matching reference image */}
                  <a
                    href={plan.ctaHref}
                    className="group w-full py-4 px-6 rounded-2xl bg-[#0F172A] hover:bg-black text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg shadow-slate-900/10 hover:shadow-xl active:scale-[0.99] cursor-pointer"
                  >
                    <span>{plan.ctaLabel(billing)}</span>
                    <ArrowRight className="w-4 h-4 text-[#EF4444] transition-transform duration-200 group-hover:translate-x-1.5" />
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Security / Trust Footnote */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span>✓ No credit card for free plan</span>
            <span>✓ Switch or cancel anytime</span>
            <span>✓ Instant activation</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
