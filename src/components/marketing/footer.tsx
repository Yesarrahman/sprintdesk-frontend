import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { getAppUrl } from "@/lib/utils";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features Overview", href: "/features" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Personal Task Flow", href: "/personal-task-management" },
      { label: "Team Sprint Board", href: "/sprint-management" },
      { label: "Team Workload", href: "/team-workload-management" },
      { label: "No-Code Automations", href: "/workflow-automation" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Managers & Leads", href: "/team-task-management" },
      { label: "For Remote Teams", href: "/remote-team-task-management" },
      { label: "For Individual Focus", href: "/personal-task-management" },
      { label: "For Growing Teams", href: "/how-it-works" },
      { label: "Interactive Kanban", href: "/kanban-board" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Productivity Blog", href: "/blog" },
      { label: "Sprint Planning Guides", href: "/guides" },
      { label: "Workflow Templates", href: "/templates" },
      { label: "Compare Alternatives", href: "/compare" },
      { label: "SprintDesk vs Trello", href: "/compare/sprintdesk-vs-trello" },
      { label: "SprintDesk vs Asana", href: "/compare/sprintdesk-vs-asana" },
      { label: "SprintDesk vs ClickUp", href: "/compare/sprintdesk-vs-clickup" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About SprintDesk", href: "/how-it-works" },
      { label: "Security Architecture", href: "/pricing" },
      { label: "Log In", href: getAppUrl("/login") },
      { label: "Sign Up", href: getAppUrl("/signup") },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#0D2440] text-white border-t border-[#1E3A5F]">
      <Container size="default" className="pt-16 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1 pr-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-[#163359] border border-[#2E5E99]/60">
                <Image
                  src="/sd-logo.png"
                  alt="SprintDesk"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Sprint<span className="text-[#7BA4D0]">Desk</span>
              </span>
            </Link>
            <p className="text-xs text-[#7BA4D0] leading-relaxed mb-4">
              Where personal focus meets team velocity. Capture ideas instantly, eliminate status chasing, and deliver sprints with predictable clarity.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#163359] border border-[#2E5E99]/40 text-[11px] text-[#E7F0FA]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </div>
          </div>

          {/* Nav Columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs text-slate-300 hover:text-white hover:underline transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1E3A5F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7BA4D0]">
          <p>© {new Date().getFullYear()} SprintDesk Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>SOC-2 Type II Certified</span>
            <span>256-bit AES Encryption</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
