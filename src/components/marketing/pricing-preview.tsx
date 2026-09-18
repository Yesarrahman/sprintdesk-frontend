"use client";

import * as React from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/utils";
import { GsapReveal, GsapStagger } from "@/components/marketing/gsap-effects";

export function PricingPreview() {
  const [billingCycle, setBillingCycle] = React.useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white">
      <Container size="default">
        {/* Header */}
        <GsapReveal className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-2">
            TRANSPARENT PRICING
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-3">
            Simple, honest pricing.
          </h2>
          <p className="text-base text-[#5F7083] leading-relaxed mb-6">
            Start free individually, expand as your team velocity grows.
          </p>

          {/* Real Monthly / Yearly Toggle matching real Stripe setup */}
          <div className="inline-flex items-center p-1 rounded-full bg-[#F5F8FB] border border-[#CBD6E2]">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingCycle === "monthly"
                  ? "bg-[#0D2440] text-white shadow-xs"
                  : "text-[#5F7083] hover:text-[#0D2440]"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                billingCycle === "yearly"
                  ? "bg-[#0D2440] text-white shadow-xs"
                  : "text-[#5F7083] hover:text-[#0D2440]"
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-full font-extrabold">
                Save 10%
              </span>
            </button>
          </div>
        </GsapReveal>

        {/* 3 Real Pricing Cards from our actual app billing */}
        <GsapStagger className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch" stagger={0.12}>
          {/* 1. Free Plan */}
          <div className="rounded-2xl border border-[#CBD6E2] bg-white p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-2">
                FREE TIER
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#0D2440] mb-1">
                Free
              </h3>
              <p className="text-xs text-[#5F7083] mb-6">
                For individuals and small teams getting started.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-[#0D2440]">$0</span>
                <span className="text-xs text-[#5F7083] font-medium">/ forever</span>
              </div>

              <div className="space-y-3 pt-6 border-t border-[#F5F8FB] text-xs text-[#162538]">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Personal Space included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Up to 2 team workspaces</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Up to 3 members per workspace</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Task management &amp; Kanban board</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Calendar &amp; Capture Inbox</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Basic notifications</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="outline"
                size="md"
                href={getAppUrl("/signup")}
                className="w-full justify-center text-xs font-semibold border-[#CBD6E2] text-[#0D2440]"
              >
                Get Started Free
              </Button>
            </div>
          </div>

          {/* 2. SprintDesk Pro Plan (Highlighted as Most Popular) */}
          <div className="rounded-2xl border-2 border-[#2E5E99] bg-[#F5F8FB] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative scale-105 z-10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#2E5E99] text-white text-[11px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-xs">
              MOST POPULAR
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-2">
                PRO VELOCITY
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#0D2440] mb-1">
                SprintDesk Pro
              </h3>
              <p className="text-xs text-[#5F7083] mb-6">
                For growing teams needing reporting and analytics.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-[#0D2440]">
                  ${billingCycle === "monthly" ? "15" : "13.50"}
                </span>
                <span className="text-xs text-[#5F7083] font-medium">
                  / month
                </span>
              </div>

              <div className="space-y-3 pt-6 border-t border-[#CBD6E2]/60 text-xs text-[#162538]">
                <div className="flex items-center gap-2 font-semibold">
                  <Check className="w-4 h-4 text-[#2E5E99] shrink-0" />
                  <span>Everything in Free, plus:</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Up to 5 team workspaces</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Up to 10 members per workspace</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Team &amp; Individual PDF Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Custom date range reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Submit-to-Manager workflow</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Priority support</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="pill-primary"
                size="md"
                href={getAppUrl("/signup?plan=pro")}
                className="w-full justify-center text-xs font-semibold bg-[#2E5E99] hover:bg-[#1E3A5F] text-white shadow-sm"
              >
                Start Pro <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
            </div>
          </div>

          {/* 3. SprintDesk Agency Plan */}
          <div className="rounded-2xl border border-[#CBD6E2] bg-white p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-2">
                AGENCY &amp; SCALE
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#0D2440] mb-1">
                SprintDesk Agency
              </h3>
              <p className="text-xs text-[#5F7083] mb-6">
                For agencies and power teams needing automation.
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold text-[#0D2440]">
                  ${billingCycle === "monthly" ? "29" : "26.10"}
                </span>
                <span className="text-xs text-[#5F7083] font-medium">
                  / month
                </span>
              </div>

              <div className="space-y-3 pt-6 border-t border-[#F5F8FB] text-xs text-[#162538]">
                <div className="flex items-center gap-2 font-semibold">
                  <Check className="w-4 h-4 text-[#0D2440] shrink-0" />
                  <span>Everything in Pro, plus:</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Unlimited team workspaces</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Unlimited workspace members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>No-Code Automations Engine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Advanced time tracking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Client portals (Coming Soon)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#23865A] shrink-0" />
                  <span>Dedicated onboarding support</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Button
                variant="outline"
                size="md"
                href={getAppUrl("/signup?plan=agency")}
                className="w-full justify-center text-xs font-semibold border-[#CBD6E2] text-[#0D2440]"
              >
                Choose Agency Plan
              </Button>
            </div>
          </div>
        </GsapStagger>
      </Container>
    </section>
  );
}
