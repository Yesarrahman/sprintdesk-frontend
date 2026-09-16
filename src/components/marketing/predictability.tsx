import { TrendingUp, AlertTriangle, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/utils";

export function Predictability() {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF]">
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-3">
            Realtime Delivery Intelligence
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-5">
            See the sprint before it becomes a deadline.
          </h2>
          <p className="text-base text-[#5F7083] leading-relaxed">
            Predictable velocity, automated burnup analytics, and immediate bottleneck detection keep your team shipping calmly ahead of target release dates.
          </p>
        </div>

        {/* Predictability Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Main Burnup & Velocity Visual (8 cols) */}
          <div className="lg:col-span-8 rounded-2xl border border-[#CBD6E2] bg-[#F5F8FB] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D2440]">
                  Sprint 42 Health Forecast
                </span>
                <div className="text-2xl font-bold text-[#0D2440]">
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
                <span className="font-semibold text-[#0D2440]">Day 8 (Today: 81% Complete)</span>
                <span>Day 10 (Target Release)</span>
              </div>
              <div className="w-full h-4 bg-[#E7F0FA] rounded-full overflow-hidden p-0.5 border border-[#CBD6E2]">
                <div
                  className="h-full bg-gradient-to-r from-[#2E5E99] to-[#7BA4D0] rounded-full transition-all duration-700"
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
                <div className="text-[11px] uppercase font-bold text-[#5F7083]">Cycle Time</div>
                <div className="text-base font-bold text-[#0D2440]">1.4 Days Avg</div>
              </div>
              <div>
                <div className="text-[11px] uppercase font-bold text-[#5F7083]">Release Confidence</div>
                <div className="text-base font-bold text-[#23865A]">96% (High)</div>
              </div>
            </div>
          </div>

          {/* Right Alert Card (4 cols) */}
          <div className="lg:col-span-4 rounded-2xl border border-[#CBD6E2] bg-[#0D2440] text-white p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0]">
                  Blocker Radar
                </span>
                <span className="px-2 py-0.5 rounded bg-rose-900/60 border border-rose-500/40 text-[11px] font-bold text-rose-300">
                  ACTION TAKEN
                </span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                Staging Database Migration Blocked
              </h3>
              <p className="text-xs text-[#CBD6E2] leading-relaxed mb-4">
                Task #481 flagged an environment dependency. SprintDesk automatically escalated to DevOps lead Alex Morgan.
              </p>
              <div className="p-3 rounded-lg bg-[#163359] border border-[#2E5E99]/60 text-xs text-[#E7F0FA]">
                Status: <strong className="text-emerald-400">Resolved</strong> in 28 mins without calling an emergency meeting.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E3A5F]">
              <span className="text-xs text-[#7BA4D0]">
                Zero surprise sprint retrospectives.
              </span>
            </div>
          </div>
        </div>

        {/* Dual Value Cards matching uploaded design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-[#CBD6E2] p-6 bg-white hover:border-[#7BA4D0] transition-colors">
            <h4 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
              Full sprint predictability without policing your team.
            </h4>
            <p className="text-xs text-[#5F7083] leading-relaxed mb-4">
              Eliminate invasive check-ins and passive-aggressive Slack pings. SprintDesk models progress continuously from active cards and pull requests so leaders have total visibility without micromanagement.
            </p>
            <Button variant="ghost" size="sm" href="/team-workload-management" className="text-xs font-semibold text-[#2E5E99] px-0 hover:bg-transparent">
              Explore Workload Analytics →
            </Button>
          </div>

          <div className="rounded-xl border border-[#CBD6E2] p-6 bg-white hover:border-[#7BA4D0] transition-colors">
            <h4 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
              Total sanctuary to code without ticket administration.
            </h4>
            <p className="text-xs text-[#5F7083] leading-relaxed mb-4">
              Engineers stay locked in deep flow. Update status with a git branch, capture ideas in half a second, and never fill out multi-field ticket forms just to move work into progress.
            </p>
            <Button variant="ghost" size="sm" href="/personal-task-management" className="text-xs font-semibold text-[#2E5E99] px-0 hover:bg-transparent">
              See Developer Focus Flow →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
