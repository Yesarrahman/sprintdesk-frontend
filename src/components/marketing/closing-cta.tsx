import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/utils";
import { GsapReveal } from "@/components/marketing/gsap-effects";

export function ClosingCta() {
  return (
    <section className="py-20 sm:py-28 bg-[#0D2440] text-white text-center relative overflow-hidden">
      <Container size="narrow">
        <GsapReveal className="max-w-2xl mx-auto space-y-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0]">
            READY TO SHIP FASTER?
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Capture less chaos. <br />
            Move more work forward.
          </h2>
          <p className="text-base text-[#CBD6E2] leading-relaxed">
            Bring personal focus and team execution into one workspace. No credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              variant="pill-primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="w-full sm:w-auto px-8 text-base bg-[#2E5E99] hover:bg-[#1E3A5F] text-white shadow-sm"
            >
              Start Free — No Credit Card
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/how-it-works"
              className="w-full sm:w-auto text-base border-[#1E3A5F] text-[#CBD6E2] hover:text-white hover:bg-[#163359]"
            >
              See How It Works
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-xs text-[#7BA4D0] pt-4">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#23865A]" /> Instant setup
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#23865A]" /> Full personal workspace free
            </span>
          </div>
        </GsapReveal>
      </Container>
    </section>
  );
}
