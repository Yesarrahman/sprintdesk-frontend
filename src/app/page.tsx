import { Navbar } from "@/components/marketing/navbar";
import { Hero } from "@/components/marketing/hero";
import { ProofStrip } from "@/components/marketing/proof-strip";
import { Continuum } from "@/components/marketing/continuum";
import { ProblemGrid } from "@/components/marketing/problem-grid";
import { DualFlows } from "@/components/marketing/dual-flows";
import { Predictability } from "@/components/marketing/predictability";
import { AutomationSection } from "@/components/marketing/automation-section";
import { AudienceSection } from "@/components/marketing/audience-section";
import { SplitPricingCard } from "@/components/marketing/split-pricing-card";
import { ClosingCta } from "@/components/marketing/closing-cta";
import { Footer } from "@/components/marketing/footer";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "SprintDesk — Where Personal Focus Meets Team Velocity",
  description:
    "Stop switching between scattered notebooks and complex project boards. SprintDesk lets you capture ideas instantly, manage personal tasks, and run team sprints in one unified, automated workspace.",
  canonicalUrl: "/",
});

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 1. Quiet, high-contrast Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero with grounded 3-column browser mockup (No floating badges) */}
        <Hero />

        {/* 3. Product Proof Strip (Capture thoughts -> Triage tasks -> Run sprints...) */}
        <ProofStrip />

        {/* 4. The 5 Continuum (Deep Navy #0D2440 section with 5-tab switcher) */}
        <Continuum />

        {/* 5. Problem Section (White background with 6-card grid including Solution 06 dark card) */}
        <ProblemGrid />

        {/* 6. Dual Flows (Deep Navy #0D2440 section matching real kanban-board.tsx logic) */}
        <DualFlows />

        {/* 7. Predictability / Delivery Forecast (White background) */}
        <Predictability />

        {/* 8. Event-Driven No-Code Automations (White background) */}
        <AutomationSection />

        {/* 9. Audience Split (Founders & Team Leads vs Individual Contributors) */}
        <AudienceSection />

        {/* 10. Real Pricing Tiers ($0 Free, $15 Pro, $29 Agency from Stripe billing-client.tsx) */}
        <SplitPricingCard />

        {/* 11. Final Call to Action (Deep Navy #0D2440 section) */}
        <ClosingCta />
      </main>

      {/* 12. Footer (Deep Navy #0D2440 background) */}
      <Footer />
    </div>
  );
}
