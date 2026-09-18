import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";

const footerSections = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Kanban Board", href: "/kanban-board" },
    { label: "Personal Task Flow", href: "/personal-task-management" },
    { label: "Team Sprint Board", href: "/sprint-management" },
    { label: "Workflow Automations", href: "/workflow-automation" },
  ],
  Solutions: [
    { label: "Small Teams", href: "/team-task-management" },
    { label: "For Managers", href: "/team-task-management" },
    { label: "For Individuals", href: "/personal-task-management" },
    { label: "For Remote Teams", href: "/remote-team-task-management" },
    { label: "Team Workload", href: "/team-workload-management" },
  ],
  Resources: [
    { label: "Productivity Blog", href: "/blog" },
    { label: "Agile Guides", href: "/guides" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Competitor Comparisons", href: "/compare" },
    { label: "Workflow Templates", href: "/guides#templates" },
  ],
  Company: [
    { label: "About SprintDesk", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  Comparisons: [
    { label: "SprintDesk vs Trello", href: "/compare/sprintdesk-vs-trello" },
    { label: "SprintDesk vs Asana", href: "/compare/sprintdesk-vs-asana" },
    { label: "SprintDesk vs ClickUp", href: "/compare/sprintdesk-vs-clickup" },
    { label: "All Comparisons", href: "/compare" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0D2440] text-white border-t border-[#1E3A5F] pt-16 pb-12">
      <Container size="default">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-12">
          {/* Brand Info (3 cols) */}
          <div className="col-span-2 md:col-span-3 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2 group" aria-label="SprintDesk Home">
              <Image
                src="/brand/sprintdesk-logo.png"
                alt="SprintDesk"
                width={150}
                height={32}
                className="h-8 w-auto object-contain brightness-0 invert transition-opacity duration-200 group-hover:opacity-90"
              />
            </Link>
            <p className="text-xs text-[#CBD6E2] max-w-sm leading-relaxed">
              SprintDesk bridges personal task management and team sprint execution in one unified, automated workspace.
            </p>
            <div className="text-[11px] font-mono text-[#7BA4D0]">
              Where Personal Focus Meets Team Velocity.
            </div>
          </div>

          {/* Links Columns (9 cols across 5 columns) */}
          <div className="col-span-2 md:col-span-9 grid grid-cols-2 sm:grid-cols-5 gap-6">
            {Object.entries(footerSections).map(([category, links]) => (
              <div key={category}>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7BA4D0] mb-3">
                  {category}
                </div>
                <ul className="space-y-2 text-xs text-[#CBD6E2]">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright row - INC & DUPLICATE CONTACT REMOVED */}
        <div className="pt-8 border-t border-[#1E3A5F] flex flex-col sm:flex-row items-center justify-between text-xs text-[#7BA4D0] gap-4">
          <div>
            &copy; {new Date().getFullYear()} SprintDesk. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/security" className="hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
