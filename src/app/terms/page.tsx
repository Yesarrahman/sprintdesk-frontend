import { Metadata } from "next";
import Link from "next/link";
import { FileText, CheckCircle, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service — SprintDesk",
  description:
    "Review SprintDesk's Terms of Service governing the use of our personal task flow, team sprint management, and automation platform.",
  canonicalUrl: "/terms",
});

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        <Container size="narrow">
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2E5E99] hover:underline mb-6"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7F0FA] text-xs font-mono font-bold text-[#2E5E99] mb-4">
              <FileText className="w-3.5 h-3.5" /> Legal Terms
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-3">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-[#5F7083]">
              Last Updated: September 18, 2026 • Version 2.4
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-[#162538] leading-relaxed space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#0D2440] mb-2">1. Agreement to Terms</h2>
              <p>
                By accessing or using SprintDesk, you agree to be bound by these Terms of Service. If you are entering into these terms on behalf of a company or legal entity, you represent that you have the legal authority to bind that entity.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D2440] mb-2">2. Acceptable Use of Services</h2>
              <p>SprintDesk is built to facilitate team productivity and task management. You agree not to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F7083]">
                <li>Reverse-engineer, decompile, or extract the source code of our platform.</li>
                <li>Use SprintDesk to store or transmit malicious payloads, malware, or unlawful content.</li>
                <li>Attempt to bypass access controls, API rate limits, or workspace security boundaries.</li>
                <li>Interfere with or disrupt the integrity or performance of the service for other users.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D2440] mb-2">3. Subscription Tiers & Billing</h2>
              <p>
                SprintDesk provides Free, Pro ($8/user/mo), and Enterprise ($20/user/mo) plans as detailed on our <Link href="/pricing" className="text-[#2E5E99] underline font-semibold">Pricing</Link> page. You may upgrade, downgrade, or cancel your subscription at any time. Paid subscriptions renew automatically unless cancelled prior to the billing date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D2440] mb-2">4. Service Availability & SLA</h2>
              <p>
                We strive for 99.9% uptime across all production regions. Planned maintenance windows are announced at least 48 hours in advance through our system status page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D2440] mb-2">5. Questions & Legal Inquiries</h2>
              <p>
                For questions regarding these Terms, contact our legal team at <a href="mailto:legal@sprintdesk.com" className="text-[#2E5E99] font-semibold underline">legal@sprintdesk.com</a>.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
