"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Sparkles } from "lucide-react";
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

// ─── Sub-Component: Left Page Visual Price Ticket ──────────────────────────────

interface TicketProps {
  plan: Plan;
  billing: Billing;
  roundedLeft?: boolean;
}

function TicketCardContent({ plan, billing, roundedLeft = true }: TicketProps) {
  const currentPrice =
    plan.monthlyPrice === 0
      ? 0
      : billing === "annual"
      ? plan.annualMonthlyPrice
      : plan.monthlyPrice;

  return (
    <div
      className={`w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br ${plan.accentBg} relative overflow-hidden select-none border border-slate-200/80 ${
        roundedLeft ? "rounded-2xl md:rounded-l-2xl md:rounded-r-none" : "rounded-2xl"
      }`}
    >
      {/* Top-Left Ticket Fold Corner Accent */}
      <div className="absolute -top-3 -left-3 w-7 h-7 bg-white rotate-45 border-b border-r border-slate-300/80 shadow-xs pointer-events-none z-10" />

      {/* Bottom-Right Ticket Fold Corner Accent */}
      <div className="absolute -bottom-3 -right-3 w-7 h-7 bg-white rotate-45 border-t border-l border-slate-300/80 shadow-xs pointer-events-none z-10" />

      {/* Stylized Brand Watermark */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.07] font-black text-[130px] tracking-tighter text-slate-900 leading-none">
        SD
      </div>

      {/* Barcode styling dashes on the bottom right */}
      <div className="absolute right-4 bottom-8 flex flex-col gap-1 opacity-25 pointer-events-none z-0">
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
        <p className="text-xs sm:text-sm text-slate-600 max-w-[220px] leading-relaxed">
          {plan.subtitle}
        </p>
      </div>

      {/* Ticket Price Section */}
      <div className="relative z-10 pt-8">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl sm:text-4xl font-extrabold text-[#EF4444] font-heading">
            $
          </span>
          <span className="text-5xl sm:text-6xl font-black text-slate-900 font-heading tracking-tight">
            {currentPrice === 0
              ? "0"
              : currentPrice.toFixed(
                  billing === "annual" && plan.monthlyPrice > 0 ? 2 : 0
                )}
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
    </div>
  );
}

// ─── Sub-Component: Right Page Features & CTA ─────────────────────────────────

interface FeaturesProps {
  plan: Plan;
  billing: Billing;
  roundedRight?: boolean;
}

function FeaturesCardContent({ plan, billing, roundedRight = true }: FeaturesProps) {
  return (
    <div
      className={`w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-white border border-slate-200/80 ${
        roundedRight ? "rounded-2xl md:rounded-r-2xl md:rounded-l-none" : "rounded-2xl"
      }`}
    >
      <div>
        {/* "What's Included" badge */}
        <div className="mb-6">
          <span className="inline-block px-3.5 py-1 rounded-full border border-slate-900/80 text-xs font-bold text-slate-900 tracking-tight">
            What&apos;s Included
          </span>
        </div>

        {/* Features List with dashed dividers */}
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

      {/* Dark CTA Button */}
      <a
        href={plan.ctaHref}
        className="group w-full py-4 px-6 rounded-2xl bg-[#0F172A] hover:bg-black text-white font-bold text-sm flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg shadow-slate-900/10 hover:shadow-xl active:scale-[0.99] cursor-pointer"
      >
        <span>{plan.ctaLabel(billing)}</span>
        <ArrowRight className="w-4 h-4 text-[#EF4444] transition-transform duration-200 group-hover:translate-x-1.5" />
      </a>
    </div>
  );
}

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

  // Book Page Flip animation state
  const [isFlipping, setIsFlipping] = React.useState<boolean>(false);
  const [flipDirection, setFlipDirection] = React.useState<1 | -1>(1); // 1 = forward (right->left), -1 = backward (left->right)
  const [animatingFromPlan, setAnimatingFromPlan] = React.useState<Plan>(PLANS[0]);
  const [animatingToPlan, setAnimatingToPlan] = React.useState<Plan>(PLANS[0]);

  const activeIndex = PLANS.findIndex((p) => p.id === activePlanId);
  const plan = PLANS[activeIndex];

  const handlePlanChange = (newPlanId: PlanId) => {
    if (newPlanId === activePlanId || isFlipping) return;

    const currentIndex = PLANS.findIndex((p) => p.id === activePlanId);
    const targetIndex = PLANS.findIndex((p) => p.id === newPlanId);
    const direction: 1 | -1 = targetIndex > currentIndex ? 1 : -1;

    setAnimatingFromPlan(PLANS[currentIndex]);
    setAnimatingToPlan(PLANS[targetIndex]);
    setFlipDirection(direction);
    setIsFlipping(true);
    setActivePlanId(newPlanId);
  };

  const onFlipComplete = () => {
    setIsFlipping(false);
  };

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
                  disabled={isFlipping}
                  onClick={() => handlePlanChange(p.id)}
                  className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap outline-none disabled:opacity-80 ${
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

        {/* ── Main Book Spread Outer Frame ── */}
        <div className="max-w-4xl mx-auto">
          {/* Outer Book Cover Container with 3D Perspective */}
          <div
            className="rounded-[32px] border border-slate-200/90 bg-slate-100/60 p-3 sm:p-5 md:p-6 relative overflow-hidden"
            style={{
              perspective: 2000,
              boxShadow:
                "0 24px 60px -15px rgba(15, 23, 42, 0.1), 0 0 1px 1px rgba(15, 23, 42, 0.04)",
            }}
          >
            {/* ══════════════════════════════════════════════════════════════════
                DESKTOP OPEN BOOK SPREAD (md and up)
                Two equal 50% panels with a central spine and single-leaf flip
            ══════════════════════════════════════════════════════════════════ */}
            <div
              className="hidden md:grid grid-cols-2 relative w-full min-h-[490px] items-stretch"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* ── Spine Center Crease & Subtle Shadow ── */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 z-15 pointer-events-none bg-slate-200/90"
                style={{
                  boxShadow:
                    "-2px 0 6px rgba(0,0,0,0.04), 2px 0 6px rgba(0,0,0,0.04)",
                }}
              />

              {/* ── LEFT BASE PANEL ── */}
              <div className="relative w-full h-full z-0 overflow-hidden rounded-l-2xl">
                <TicketCardContent
                  plan={isFlipping && flipDirection === 1 ? animatingFromPlan : isFlipping && flipDirection === -1 ? animatingToPlan : plan}
                  billing={billing}
                  roundedLeft={true}
                />
              </div>

              {/* ── RIGHT BASE PANEL ── */}
              <div className="relative w-full h-full z-0 overflow-hidden rounded-r-2xl">
                <FeaturesCardContent
                  plan={isFlipping && flipDirection === 1 ? animatingToPlan : isFlipping && flipDirection === -1 ? animatingFromPlan : plan}
                  billing={billing}
                  roundedRight={true}
                />
              </div>

              {/* ── 3D FLIPPING LEAF (Turns across the spine) ── */}
              {isFlipping && flipDirection === 1 && (
                /* FORWARD FLIP: Right features page flips 180° to the Left */
                <motion.div
                  key={`leaf-forward-${animatingToPlan.id}`}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -180 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  onAnimationComplete={onFlipComplete}
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "50%",
                    height: "100%",
                    transformOrigin: "left center",
                    transformStyle: "preserve-3d",
                    zIndex: 25,
                  }}
                  className="pointer-events-none"
                >
                  {/* Front Face: Previous Plan Features (facing viewer initially) */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    className="overflow-hidden rounded-r-2xl shadow-xl border border-slate-200/80 bg-white"
                  >
                    <FeaturesCardContent
                      plan={animatingFromPlan}
                      billing={billing}
                      roundedRight={true}
                    />
                    {/* Dynamic realistic darkening gradient during page lift */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-black/0 to-transparent pointer-events-none" />
                  </div>

                  {/* Back Face: New Plan Ticket (revealed as leaf turns past 90° and lands on left) */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    className="overflow-hidden rounded-l-2xl shadow-2xl border border-slate-200/80"
                  >
                    <TicketCardContent
                      plan={animatingToPlan}
                      billing={billing}
                      roundedLeft={true}
                    />
                    {/* Page landing highlight */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              )}

              {isFlipping && flipDirection === -1 && (
                /* BACKWARD FLIP: Left ticket page flips 180° back to the Right */
                <motion.div
                  key={`leaf-backward-${animatingToPlan.id}`}
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 180 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  onAnimationComplete={onFlipComplete}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "50%",
                    height: "100%",
                    transformOrigin: "right center",
                    transformStyle: "preserve-3d",
                    zIndex: 25,
                  }}
                  className="pointer-events-none"
                >
                  {/* Front Face: Previous Plan Ticket (facing viewer initially on left) */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    className="overflow-hidden rounded-l-2xl shadow-xl border border-slate-200/80"
                  >
                    <TicketCardContent
                      plan={animatingFromPlan}
                      billing={billing}
                      roundedLeft={true}
                    />
                    {/* Dynamic shadow on lift */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-black/0 to-transparent pointer-events-none" />
                  </div>

                  {/* Back Face: New Plan Features (revealed as leaf turns past 90° and lands on right) */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                    }}
                    className="overflow-hidden rounded-r-2xl shadow-2xl border border-slate-200/80 bg-white"
                  >
                    <FeaturesCardContent
                      plan={animatingToPlan}
                      billing={billing}
                      roundedRight={true}
                    />
                    {/* Landing highlight */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/5 via-transparent to-transparent pointer-events-none" />
                  </div>
                </motion.div>
              )}
            </div>

            {/* ══════════════════════════════════════════════════════════════════
                MOBILE / TABLET STACKED SPREAD (< md)
                Vertical stack with clean 3D fold & crossfade
            ══════════════════════════════════════════════════════════════════ */}
            <div className="flex md:hidden flex-col gap-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`mobile-ticket-${plan.id}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="min-h-[340px]"
                >
                  <TicketCardContent
                    plan={plan}
                    billing={billing}
                    roundedLeft={false}
                  />
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`mobile-features-${plan.id}`}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.3, ease: "easeOut", delay: 0.05 }}
                >
                  <FeaturesCardContent
                    plan={plan}
                    billing={billing}
                    roundedRight={false}
                  />
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
