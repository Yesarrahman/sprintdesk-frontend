import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { Continuum } from "@/components/marketing/continuum";
import { ProblemGrid } from "@/components/marketing/problem-grid";
import { DualFlows } from "@/components/marketing/dual-flows";
import { Predictability } from "@/components/marketing/predictability";
import { AutomationSection } from "@/components/marketing/automation-section";
import { PricingPreview } from "@/components/marketing/pricing-preview";
import { ClosingCta } from "@/components/marketing/closing-cta";
import { Footer } from "@/components/marketing/footer";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "SprintDesk — Where Personal Focus Meets Team Velocity",
  description:
    "SprintDesk brings personal task management and team sprint execution into one connected workspace. Capture ideas instantly, eliminate status chasing, and know your daily finish time.",
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* 1. Hero with live interactive dashboard mockup */}
        <Hero />

        {/* 2. The 5 Continuum (Deep Sapphire interactive step switcher) */}
        <Continuum />

        {/* 3. Problem Section (6-card editorial grid) */}
        <ProblemGrid />

        {/* 4. One Platform. Two Distinct Flows (Personal vs Team board toggle) */}
        <DualFlows />

        {/* 5. Real-time Sprint Predictability & Velocity */}
        <Predictability />

        {/* 6. Event-Driven No-Code Automations */}
        <AutomationSection />

        {/* 7. Transparent 3-Tier Pricing Preview */}
        <PricingPreview />

        {/* 8. Closing High-Impact Call to Action */}
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
