import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/utils";

export function ClosingCta() {
  return (
    <section className="py-24 sm:py-32 bg-[#0D2440] text-white relative overflow-hidden border-t border-[#1E3A5F]">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#2E5E99]/25 rounded-full blur-[120px] pointer-events-none" />

      <Container size="default" className="relative text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#163359] border border-[#2E5E99]/60 text-xs font-semibold text-[#7BA4D0] uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-white" />
          <span>Sprint Faster Today</span>
        </div>

        <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6">
          Capture less chaos. <br />
          Move more work forward.
        </h2>

        <p className="text-base sm:text-lg text-[#CBD6E2] max-w-2xl mx-auto leading-relaxed mb-10">
          Bring personal focus and team execution into one connected workspace. Eliminate status chasing, protect your flow, and calculate your finish line with clarity.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            variant="primary"
            size="lg"
            href={getAppUrl("/signup")}
            className="w-full sm:w-auto px-8 bg-[#2E5E99] hover:bg-[#3d72b5] text-white shadow-xl shadow-[#2E5E99]/40 font-semibold"
          >
            Start Free — No Credit Card <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/how-it-works"
            className="w-full sm:w-auto bg-transparent border-[#7BA4D0] text-white hover:bg-[#163359]"
          >
            Deploy For Your Team
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#7BA4D0]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> SOC-2 Type II Certified
          </span>
          <span>•</span>
          <span>99.99% Uptime Guarantee</span>
          <span>•</span>
          <span>Instant 2-Minute Onboarding</span>
        </div>
      </Container>
    </section>
  );
}
