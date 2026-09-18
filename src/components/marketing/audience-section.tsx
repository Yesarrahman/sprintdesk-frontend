import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/utils";
import { GsapReveal, GsapStagger } from "@/components/marketing/gsap-effects";

export function AudienceSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F5F8FB] border-t border-[#CBD6E2]/50">
      <Container size="default">
        {/* Section Heading */}
        <GsapReveal className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-4">
            Built for the person doing the work — and the team moving it forward.
          </h2>
          <p className="text-base text-[#5F7083] leading-relaxed">
            Whether you are managing a 10-person squad or protecting your own focus hours, SprintDesk adapts to your workflow.
          </p>
        </GsapReveal>

        {/* 2 Large Editorial Panels matching screenshot */}
        <GsapStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto" stagger={0.15}>
          {/* Panel 1: Founders & Team Leads */}
          <div className="p-8 sm:p-10 rounded-2xl border border-[#CBD6E2] bg-white shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0]">
                FOR FOUNDERS &amp; TEAM LEADS
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440] leading-snug">
                Full sprint predictability without policing your team.
              </h3>
              <p className="text-sm text-[#5F7083] leading-relaxed">
                Monitor sprint velocity, identify overloaded members, and clear blockers before they delay your release—without interrupting developers with afternoon status syncs.
              </p>

              <div className="space-y-2 pt-2 text-xs text-[#0D2440]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Real-time sprint velocity and burndown forecast</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Workload distribution across team members</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Automated blocker escalation radar</span>
                </div>
              </div>
            </div>

            <div>
              <Button
                variant="pill-primary"
                size="md"
                href={getAppUrl("/signup")}
                className="w-full sm:w-auto px-6 bg-[#0D2440] hover:bg-[#163359] text-white font-semibold"
              >
                Run Engineering Delivery →
              </Button>
            </div>
          </div>

          {/* Panel 2: Individual Contributors */}
          <div className="p-8 sm:p-10 rounded-2xl border border-[#CBD6E2] bg-white shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0]">
                FOR INDIVIDUAL CONTRIBUTORS
              </div>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440] leading-snug">
                Total sanctuary to code without ticket administration.
              </h3>
              <p className="text-sm text-[#5F7083] leading-relaxed">
                Keep a distraction-free personal space for your daily focus, with instant scratchpad capture, private checklists, and an honest finish-line calculator.
              </p>

              <div className="space-y-2 pt-2 text-xs text-[#0D2440]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Private Capture Inbox with global shortcut triage</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Isolated Personal Flow away from team scrutiny</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Estimated finish time calibrated to your focus hours</span>
                </div>
              </div>
            </div>

            <div>
              <Button
                variant="outline"
                size="md"
                href={getAppUrl("/signup")}
                className="w-full sm:w-auto px-6 border-[#CBD6E2] text-[#0D2440] hover:bg-[#F5F8FB] font-semibold"
              >
                Start Your Focus Flow →
              </Button>
            </div>
          </div>
        </GsapStagger>
      </Container>
    </section>
  );
}
