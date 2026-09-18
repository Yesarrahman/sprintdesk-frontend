import { Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GsapReveal, GsapScale } from "@/components/marketing/gsap-effects";

export function AutomationSection() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#CBD6E2]/40">
      <Container size="default">
        {/* Section Header */}
        <GsapReveal className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-2">
            NO-CODE AUTOMATIONS
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-4">
            Let your workflow handle the repetitive work.
          </h2>
          <p className="text-base text-[#5F7083] leading-relaxed">
            Eliminate manual status chasing. Create simple trigger-based rules that automatically route tasks, escalate priorities, and assign leads when conditions are met.
          </p>
        </GsapReveal>

        {/* Real Rule Builder Visual matching screenshot & app automations */}
        <GsapScale className="max-w-4xl mx-auto rounded-2xl border border-[#CBD6E2] bg-[#F5F8FB] p-6 sm:p-10 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-[#CBD6E2]/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#23865A]" />
              <span className="text-xs font-bold text-[#0D2440]">Sprint Rule #04 • Active</span>
            </div>
            <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white text-[#5F7083] border border-[#CBD6E2]">
              Auto-Execute
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            {/* Step 1: WHEN */}
            <div className="p-4 rounded-xl bg-white border border-[#CBD6E2] shadow-2xs space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#7BA4D0]">
                1. TRIGGER
              </div>
              <div className="text-xs font-bold text-[#0D2440]">
                Task Status moves to:
              </div>
              <div className="inline-block px-2.5 py-1 rounded bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-700">
                In Review
              </div>
            </div>

            {/* Step 2: THEN */}
            <div className="p-4 rounded-xl bg-white border border-[#CBD6E2] shadow-2xs space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#7BA4D0]">
                2. CONDITION
              </div>
              <div className="text-xs font-bold text-[#0D2440]">
                Change Priority:
              </div>
              <div className="inline-block px-2.5 py-1 rounded bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700">
                High Priority (P1)
              </div>
            </div>

            {/* Step 3: AND */}
            <div className="p-4 rounded-xl bg-white border border-[#CBD6E2] shadow-2xs space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#7BA4D0]">
                3. ACTION
              </div>
              <div className="text-xs font-bold text-[#0D2440]">
                Assign Team Member:
              </div>
              <div className="inline-block px-2.5 py-1 rounded bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold text-[#2E5E99]">
                Project Manager
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-[#CBD6E2]/60 text-center text-xs text-[#5F7083] flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#23865A]" />
            <span>Executed seamlessly across active team workspaces without writing code</span>
          </div>
        </GsapScale>
      </Container>
    </section>
  );
}
