import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, FileText, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy — SprintDesk",
  description:
    "SprintDesk's Privacy Policy describes how we collect, use, protect, and handle your data across our personal and team task management workspaces.",
  canonicalUrl: "/privacy",
});

export default function PrivacyPage() {
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
              <ShieldCheck className="w-3.5 h-3.5" /> Data Protection & Privacy
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-3">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-[#5F7083]">
              Last Updated: September 18, 2026 • Effective Date: January 1, 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-[#162538] leading-relaxed space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#0D2440] mb-2">1. Overview & Commitment</h2>
              <p>
                SprintDesk (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to respecting your privacy. We design our software around the principle that your personal task notes, scratchpad ideas, and sprint data belong exclusively to you and your authorized team members.
              </p>
              <p>
                We do not sell personal data, display third-party advertisements, or train generic artificial intelligence models on your private tasks.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D2440] mb-2">2. Information We Collect</h2>
              <p>We collect information you provide directly when you interact with our platform:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F7083]">
                <li><strong>Account Information:</strong> Name, work email address, and authentication credentials.</li>
                <li><strong>Workspace Data:</strong> Task titles, descriptions, story points, due dates, checklists, and sprint milestones created in your workspaces.</li>
                <li><strong>Usage & Performance Metrics:</strong> Technical telemetry, error diagnostics, and feature latency to ensure sub-50ms sync reliability.</li>
                <li><strong>Billing Data:</strong> For paid tiers, transaction data processed securely via PCI-compliant payment gateways. We never store raw credit card numbers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D2440] mb-2">3. Personal Flow vs. Team Workspace Isolation</h2>
              <p>
                A core architecture feature of SprintDesk is the strict isolation of your <strong>Personal Task Flow</strong>. Tasks created in your personal scratchpad are completely invisible to team administrators, managers, and teammates until you explicitly choose to promote or route them to a shared Team Sprint Board.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D2440] mb-2">4. Data Retention & Deletion</h2>
              <p>
                You retain full ownership of your data at all times. If you choose to delete your account or any specific workspace, all associated tasks, comments, and telemetry are permanently deleted from our active databases within 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#0D2440] mb-2">5. Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy or your data rights, contact our security and privacy team at <a href="mailto:privacy@sprintdesk.com" className="text-[#2E5E99] font-semibold underline">privacy@sprintdesk.com</a>.
              </p>
            </section>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
