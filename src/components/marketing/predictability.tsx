import { TrendingUp, AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GsapReveal, GsapScale } from "@/components/marketing/gsap-effects";

export function Predictability() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <Container size="default">
        {/* Header */}
        <GsapReveal className="max-w-3xl mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-2">
            DELIVERY FORECAST
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-4">
            See the sprint before it becomes a deadline.
          </h2>
          <p className="text-base text-[#5F7083] leading-relaxed">
            Predictable velocity, automated burnup analytics, and immediate bottleneck detection keep your team shipping calmly ahead of target release dates.
          </p>
        </GsapReveal>

        {/* Predictability Visual Row matching screenshot */}
        <GsapScale className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Burnup & Velocity Visual (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl border border-[#CBD6E2] bg-[#F5F8FB] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D2440]">
                  Sprint 42 Health Forecast
                </span>
                <div className="text-2xl font-extrabold text-[#0D2440] mt-1">
                  34 / 42 Story Points Completed
                </div>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#23865A] flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5" /> +18% Above Historical Velocity
              </div>
            </div>

            {/* Visual Progress Timeline */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs font-medium text-[#5F7083]">
                <span>Day 1 (Kickoff)</span>
                <span className="font-bold text-[#0D2440]">Day 8 (Today: 81% Complete)</span>
                <span>Day 10 (Target Release)</span>
              </div>
              <div className="w-full h-3.5 bg-[#E7F0FA] rounded-full overflow-hidden p-0.5 border border-[#CBD6E2]">
                <div
                  className="h-full bg-gradient-to-r from-[#2E5E99] to-[#7BA4D0] rounded-full"
                  style={{ width: "81%" }}
                />
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#CBD6E2]/70 text-center sm:text-left">
              <div>
                <div className="text-[11px] uppercase font-bold text-[#5F7083]">Scope Creep</div>
                <div className="text-base font-bold text-[#0D2440]">0 pts (Locked)</div>
              </div>
              <div>
                <div className="text-[11px] uppercase font-bold text-[#5F7083]">Est. Completion</div>
                <div className="text-base font-bold text-[#23865A]">Thursday 4 PM</div>
              </div>
              <div>
                <div className="text-[11px] uppercase font-bold text-[#5F7083]">On-Track Probability</div>
                <div className="text-base font-bold text-[#2E5E99]">96% Confidence</div>
              </div>
            </div>
          </div>

          {/* Right Dark Card matching UI screenshot (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl border border-[#0D2440] bg-[#0D2440] p-6 sm:p-8 text-white flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-3">
                <span>RADAR STATUS</span>
                <span className="text-[#23865A] bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                  HEALTHY
                </span>
              </div>
              <div className="text-2xl font-extrabold text-white mb-2">
                0 Active Blockers
              </div>
              <p className="text-xs text-[#CBD6E2] leading-relaxed">
                When tickets stall or dependencies arise, SprintDesk highlights cards automatically so leads can clear paths before sprint review.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E3A5F] flex items-center justify-between text-xs text-[#7BA4D0]">
              <span>Cycle Time: <strong className="text-white">1.8 Days</strong></span>
              <span>Review Buffer: <strong className="text-white">Optimal</strong></span>
            </div>
          </div>
        </GsapScale>
      </Container>
    </section>
  );
}
