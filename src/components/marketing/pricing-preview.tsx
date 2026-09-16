import Link from "next/link";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getAppUrl } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For individual professionals organizing their own daily focus.",
    popular: false,
    features: [
      "1 Personal Workspace",
      "Up to 3 Team Workspaces",
      "Core Kanban functionality",
      "Capture Inbox shortcut",
      "Daily estimated finish time calculator",
    ],
    cta: "Start Free",
    href: getAppUrl("/signup"),
    variant: "outline" as const,
  },
  {
    name: "Pro Velocity",
    price: "$8",
    period: "/ seat / month",
    description: "For growing engineering and product teams shipping fast.",
    popular: true,
    features: [
      "Everything in Free",
      "Story Points & estimation",
      "Unlimited team workspaces",
      "Advanced sprint swimlanes",
      "Real-time velocity burnup",
      "Time tracking & buffer analytics",
    ],
    cta: "Start Pro Free Trial",
    href: getAppUrl("/signup?plan=pro"),
    variant: "primary" as const,
  },
  {
    name: "Enterprise",
    price: "$20",
    period: "/ seat / month",
    description: "For scaling organizations requiring automation and security.",
    popular: false,
    features: [
      "Everything in Pro",
      "No-Code Automation Engine",
      "Timesheet exports & CSV sync",
      "Custom Client Portals",
      "SOC-2 Type II Compliance reports",
      "Dedicated Slack support channel",
    ],
    cta: "Choose Enterprise",
    href: getAppUrl("/signup?plan=enterprise"),
    variant: "outline" as const,
  },
];

export function PricingPreview() {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF]">
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-3">
            Predictable Investment
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-5">
            Simple, honest pricing.
          </h2>
          <p className="text-base text-[#5F7083] leading-relaxed">
            Start with individuals, expand to your team when momentum accelerates. No hidden seat fees, no surprise tier gates.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? "border-2 border-[#2E5E99] bg-white shadow-2xl lg:-translate-y-2"
                  : "border border-[#CBD6E2] bg-white hover:border-[#7BA4D0] shadow-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-3.5 py-1 rounded-full bg-[#2E5E99] text-white text-xs font-bold tracking-wider uppercase shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </span>
                </div>
              )}

              <div>
                <div className="text-sm font-bold uppercase tracking-wider text-[#0D2440] mb-2">
                  {plan.name}
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-extrabold text-[#0D2440] font-heading">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#5F7083] font-medium">{plan.period}</span>
                </div>
                <p className="text-xs text-[#5F7083] leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-[#CBD6E2]/50 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#0D2440]">
                      <Check className="w-4 h-4 text-[#2E5E99] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Button
                  variant={plan.variant}
                  size="md"
                  href={plan.href}
                  className="w-full justify-center text-xs font-semibold"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="text-xs font-bold text-[#2E5E99] hover:underline inline-flex items-center gap-1"
          >
            <span>Compare full plan features & FAQs</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
