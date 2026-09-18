import { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare, MapPin, ArrowRight, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Contact Us — SprintDesk",
  description:
    "Get in touch with the SprintDesk team for sales inquiries, technical support, enterprise security reviews, or product feedback.",
  canonicalUrl: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#CBD6E2] text-xs font-mono font-bold uppercase tracking-wider text-[#2E5E99] mb-6">
                <MessageSquare className="w-3.5 h-3.5" /> Support & Inquiries
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                We&apos;re here to help your team move faster.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed max-w-2xl mx-auto">
                Have a question about personal-to-sprint triage, enterprise integrations, or custom team migration? Reach out to our technical team directly.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Cards */}
        <section className="py-12 bg-white">
          <Container size="default">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Card 1: Product Support */}
              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-[#F8FAFC] flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                    Customer Support
                  </h3>
                  <p className="text-xs text-[#5F7083] leading-relaxed mb-4">
                    Need technical help with your workspace, GitHub webhooks, or automation triggers?
                  </p>
                </div>
                <a
                  href="mailto:support@sprintdesk.com"
                  className="text-xs font-bold text-[#2E5E99] hover:underline inline-flex items-center gap-1"
                >
                  support@sprintdesk.com <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Card 2: Sales & Enterprise */}
              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-[#F8FAFC] flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                    Enterprise Sales
                  </h3>
                  <p className="text-xs text-[#5F7083] leading-relaxed mb-4">
                    Explore custom seat tiers, dedicated instances, and SOC 2 security compliance reviews.
                  </p>
                </div>
                <a
                  href="mailto:sales@sprintdesk.com"
                  className="text-xs font-bold text-[#2E5E99] hover:underline inline-flex items-center gap-1"
                >
                  sales@sprintdesk.com <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Card 3: Security Team */}
              <div className="p-6 rounded-2xl border border-[#CBD6E2] bg-[#F8FAFC] flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                    Security & Privacy
                  </h3>
                  <p className="text-xs text-[#5F7083] leading-relaxed mb-4">
                    Responsible disclosure, privacy requests, and security whitepaper inquiries.
                  </p>
                </div>
                <a
                  href="mailto:security@sprintdesk.com"
                  className="text-xs font-bold text-[#2E5E99] hover:underline inline-flex items-center gap-1"
                >
                  security@sprintdesk.com <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
