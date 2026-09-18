import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Users, Target, Shield, Heart, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/seo";
import { getAppUrl } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "About SprintDesk — Where Personal Focus Meets Team Velocity",
  description:
    "Learn about SprintDesk's mission: bridging the divide between individual deep work and team agile execution without micromanagement or status fatigue.",
  canonicalUrl: "/about",
});

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Hero Section */}
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#CBD6E2] text-xs font-mono font-bold uppercase tracking-wider text-[#2E5E99] mb-6">
                <Target className="w-3.5 h-3.5" /> Our Mission & Story
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Built to protect deep work while accelerating team velocity.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed max-w-2xl mx-auto">
                Modern software teams shouldn&apos;t have to choose between cluttered team boards that destroy personal focus and disconnected note apps that leave teammates in the dark.
              </p>
            </div>
          </Container>
        </section>

        {/* Narrative Section */}
        <section className="py-16 bg-[#F8FAFC] border-t border-b border-[#CBD6E2]/70">
          <Container size="narrow">
            <div className="space-y-8 text-base text-[#162538] leading-relaxed">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440]">
                The Problem We Set Out to Solve
              </h2>
              <p>
                Every engineering and product team faces the same paradox: individual contributors do their best thinking when they have calm, unmonitored scratchpad spaces to capture half-formed ideas, prioritize daily tasks, and calculate when their workday will realistically finish.
              </p>
              <p>
                Meanwhile, engineering leads, project managers, and remote teams need instant transparency into sprint velocity, story points, and blockers — without having to schedule 3 P.M. &ldquo;quick sync&rdquo; meetings that break flow state.
              </p>
              <p>
                Traditional project management platforms forced teams into an unnatural compromise: either force every single raw note onto a public Jira or Linear board, or let work get lost in private Apple Notes and Slack DMs.
              </p>
              <div className="p-6 rounded-2xl bg-white border border-[#CBD6E2] shadow-sm">
                <div className="text-xs font-mono uppercase font-bold text-[#2E5E99] mb-2">Our Core Philosophy</div>
                <blockquote className="text-lg font-bold text-[#0D2440] italic">
                  &ldquo;Capture personally. Organize intelligently. Execute together.&rdquo;
                </blockquote>
              </div>
            </div>
          </Container>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <Container size="default">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <h2 className="font-heading font-extrabold text-3xl text-[#0D2440] mb-3">
                The Values Guiding SprintDesk
              </h2>
              <p className="text-sm text-[#5F7083]">
                Principles engineered into our software architecture and product design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-white hover:border-[#7BA4D0] hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Zero Capture Friction
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Ideas arrive at unexpected moments. If logging a task requires 6 dropdowns and mandatory fields, people write it in a notepad where it dies.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-white hover:border-[#7BA4D0] hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Autonomy Over Surveillance
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  We don&apos;t build keystroke trackers or invasive activity monitors. We build automated finish-line indicators that build team trust through output clarity.
                </p>
              </div>

              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-white hover:border-[#7BA4D0] hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Speed & Reliability
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Sub-50ms task interactions, real-time sync, and enterprise security ensure your sprint command center never slows down high-velocity teams.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0D2440] text-white text-center">
          <Container size="narrow">
            <h2 className="font-heading font-extrabold text-3xl mb-4 text-white">
              Ready to bring clarity to your sprint?
            </h2>
            <p className="text-sm text-[#CBD6E2] mb-8 max-w-md mx-auto">
              Join thousands of engineers and product teams using SprintDesk to bridge personal focus and team execution.
            </p>
            <Button
              variant="pill-primary"
              size="lg"
              href={getAppUrl("/signup")}
              className="bg-[#2E5E99] hover:bg-[#3D78BE] text-white px-8 font-bold"
            >
              Start Free Today <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
