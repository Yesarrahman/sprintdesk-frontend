import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Server, Key, CheckCircle2, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { constructMetadata } from "@/lib/seo";
import { getAppUrl } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Security Architecture & Compliance — SprintDesk",
  description:
    "Learn about SprintDesk's enterprise security posture: AES-256 encryption, TLS 1.3 transit, SOC 2 compliance readiness, and strict workspace data boundaries.",
  canonicalUrl: "/security",
});

export default function SecurityPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        <section className="pb-16 text-center">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#CBD6E2] text-xs font-mono font-bold uppercase tracking-wider text-[#2E5E99] mb-6">
                <ShieldCheck className="w-3.5 h-3.5" /> Enterprise-Grade Security
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Engineered with security at every layer.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed max-w-2xl mx-auto">
                We protect your code snippets, sprint roadmaps, and sensitive engineering tasks with bank-grade encryption, rigorous access boundaries, and continuous compliance monitoring.
              </p>
            </div>
          </Container>
        </section>

        {/* Core Security Pillars */}
        <section className="py-16 bg-[#F8FAFC] border-t border-b border-[#CBD6E2]/70">
          <Container size="default">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="p-6 rounded-2xl bg-white border border-[#CBD6E2] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Encryption at Rest & In Transit
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  All customer data is encrypted using AES-256 at rest and TLS 1.3 in transit with perfect forward secrecy. Encryption keys are rotated automatically.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#CBD6E2] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Role-Based Access (RBAC)
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Granular role permissions (Owner, Admin, Member, Guest) and SAML SSO support ensure team members only access what they are explicitly assigned to.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#CBD6E2] shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] mb-4">
                  <Server className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2">
                  Isolated Workspaces
                </h3>
                <p className="text-xs text-[#5F7083] leading-relaxed">
                  Strict tenant isolation prevents accidental data cross-contamination between personal scratchpads, team sprint boards, and distinct organizations.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Compliance Checklist */}
        <section className="py-20 bg-white">
          <Container size="narrow">
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0D2440] mb-8 text-center">
              Compliance & Operational Safeguards
            </h2>
            <div className="space-y-4">
              {[
                { title: "SOC 2 Type II Alignment", desc: "Third-party audited controls covering system security, availability, and confidentiality." },
                { title: "GDPR & CCPA Compliant", desc: "Full data portability and automated user deletion pipelines respecting your privacy rights." },
                { title: "Automated Daily Backups", desc: "Point-in-time recovery with geo-replicated redundancy across multi-region data centers." },
                { title: "Zero Data Training", desc: "Your private tasks, code commits, and PR descriptions are never used to train third-party AI models." },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl border border-[#CBD6E2] bg-[#F5F8FB]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#0D2440]">{item.title}</h4>
                    <p className="text-xs text-[#5F7083] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0D2440] text-white text-center">
          <Container size="narrow">
            <h2 className="font-heading font-extrabold text-3xl mb-4 text-white">
              Questions about enterprise security?
            </h2>
            <p className="text-sm text-[#CBD6E2] mb-8 max-w-md mx-auto">
              Request our security whitepaper, compliance report, or discuss custom deployment requirements with our engineering team.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                variant="pill-primary"
                size="lg"
                href="mailto:security@sprintdesk.com"
                className="bg-[#2E5E99] hover:bg-[#3D78BE] text-white px-8 font-bold"
              >
                Contact Security Team
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={getAppUrl("/signup")}
                className="border-white/20 text-white hover:bg-white/10"
              >
                Start Free Workspace
              </Button>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
