"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Sparkles, Layers, Users, Zap, Shield, BookOpen, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/utils";

const productLinks = [
  {
    title: "Capture Inbox",
    href: "/features#capture",
    description: "Catch thoughts, tasks, and ideas instantly without interruption.",
    icon: Sparkles,
  },
  {
    title: "Personal Task Flow",
    href: "/personal-task-management",
    description: "Sanctuary for your own focus, priorities, and daily finish line.",
    icon: Layers,
  },
  {
    title: "Team Sprint Board",
    href: "/sprint-management",
    description: "Turn personal tasks into team momentum with story points and swimlanes.",
    icon: Users,
  },
  {
    title: "Command Center",
    href: "/team-workload-management",
    description: "Real-time visibility into progress, blockers, and team workload.",
    icon: Shield,
  },
  {
    title: "No-Code Automations",
    href: "/workflow-automation",
    description: "Let the workflow handle ticket triage and status transitions.",
    icon: Zap,
  },
];

const solutionLinks = [
  {
    title: "For Managers & Leads",
    href: "/team-task-management",
    description: "Full sprint predictability without policing your team with meetings.",
  },
  {
    title: "For Remote Teams",
    href: "/remote-team-task-management",
    description: "Async task ownership and visibility across timezones.",
  },
  {
    title: "For Individual Contributors",
    href: "/personal-task-management",
    description: "Protect your deep work without disconnecting from team sprints.",
  },
  {
    title: "For Growing Startups",
    href: "/how-it-works",
    description: "Scale from 3 to 50 engineers without rebuilding your process.",
  },
];

const resourceLinks = [
  {
    title: "Productivity Blog",
    href: "/blog",
    description: "Insights on sprint velocity, cognitive focus, and async teamwork.",
    icon: BookOpen,
  },
  {
    title: "Pillar Guides",
    href: "/guides",
    description: "Comprehensive blueprints for agile sprint planning.",
    icon: FileText,
  },
  {
    title: "Sprint Templates",
    href: "/templates",
    description: "Ready-to-use workflows for engineering, product, and design.",
    icon: Layers,
  },
  {
    title: "Competitor Comparisons",
    href: "/compare",
    description: "Honest breakdowns: SprintDesk vs Trello, Jira, and Asana.",
    icon: Shield,
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on path change
  React.useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#CBD6E2]/50 shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <Container size="default" className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-[#0D2440] shadow-sm">
            <Image
              src="/sd-logo.png"
              alt="SprintDesk Logo"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <span className="font-heading font-bold text-xl tracking-tight text-[#0D2440]">
            Sprint<span className="text-[#2E5E99]">Desk</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5" onMouseLeave={() => setActiveDropdown(null)}>
          {/* Product Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("product")}>
            <button
              onClick={() => setActiveDropdown(activeDropdown === "product" ? null : "product")}
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                activeDropdown === "product"
                  ? "text-[#0D2440] bg-[#F5F8FB]"
                  : "text-[#5F7083] hover:text-[#0D2440] hover:bg-[#F5F8FB]/70"
              }`}
            >
              Product
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "product" ? "rotate-180 text-[#2E5E99]" : ""}`} />
            </button>

            {activeDropdown === "product" && (
              <div className="absolute top-full left-0 mt-2 w-[340px] rounded-xl bg-white border border-[#CBD6E2]/70 shadow-xl p-3 grid gap-1.5 animate-in fade-in-50 zoom-in-95 duration-150">
                {productLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F5F8FB] transition-colors group"
                    >
                      <div className="mt-0.5 w-7 h-7 rounded-md bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] group-hover:bg-[#2E5E99] group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#0D2440] group-hover:text-[#2E5E99]">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-[#5F7083] leading-snug">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("solutions")}>
            <button
              onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                activeDropdown === "solutions"
                  ? "text-[#0D2440] bg-[#F5F8FB]"
                  : "text-[#5F7083] hover:text-[#0D2440] hover:bg-[#F5F8FB]/70"
              }`}
            >
              Solutions
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-[#2E5E99]" : ""}`} />
            </button>

            {activeDropdown === "solutions" && (
              <div className="absolute top-full left-0 mt-2 w-[320px] rounded-xl bg-white border border-[#CBD6E2]/70 shadow-xl p-3 grid gap-1.5 animate-in fade-in-50 zoom-in-95 duration-150">
                {solutionLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block p-2.5 rounded-lg hover:bg-[#F5F8FB] transition-colors group"
                  >
                    <div className="text-xs font-semibold text-[#0D2440] group-hover:text-[#2E5E99]">
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#5F7083] leading-snug mt-0.5">
                      {item.description}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative" onMouseEnter={() => setActiveDropdown("resources")}>
            <button
              onClick={() => setActiveDropdown(activeDropdown === "resources" ? null : "resources")}
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                activeDropdown === "resources"
                  ? "text-[#0D2440] bg-[#F5F8FB]"
                  : "text-[#5F7083] hover:text-[#0D2440] hover:bg-[#F5F8FB]/70"
              }`}
            >
              Resources
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180 text-[#2E5E99]" : ""}`} />
            </button>

            {activeDropdown === "resources" && (
              <div className="absolute top-full left-0 mt-2 w-[320px] rounded-xl bg-white border border-[#CBD6E2]/70 shadow-xl p-3 grid gap-1.5 animate-in fade-in-50 zoom-in-95 duration-150">
                {resourceLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#F5F8FB] transition-colors group"
                    >
                      <div className="mt-0.5 w-7 h-7 rounded-md bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99] group-hover:bg-[#2E5E99] group-hover:text-white transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[#0D2440] group-hover:text-[#2E5E99]">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-[#5F7083] leading-snug">
                          {item.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Pricing Link */}
          <Link
            href="/pricing"
            className="px-3.5 py-2 text-sm font-medium text-[#5F7083] hover:text-[#0D2440] hover:bg-[#F5F8FB]/70 rounded-md transition-colors"
          >
            Pricing
          </Link>
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            href={getAppUrl("/login")}
            className="text-sm font-semibold text-[#0D2440]"
          >
            Log in
          </Button>
          <Button
            variant="pill-primary"
            size="sm"
            href={getAppUrl("/signup")}
            className="px-5 text-sm font-semibold"
          >
            Start free →
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="pill-primary"
            size="sm"
            href={getAppUrl("/signup")}
            className="px-3.5 text-xs py-1"
          >
            Start free
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0D2440] hover:bg-[#F5F8FB] rounded-lg transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-[#CBD6E2] shadow-xl p-5 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="space-y-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-2">Product</div>
              <div className="grid gap-2 pl-2">
                {productLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-sm font-medium text-[#0D2440] hover:text-[#2E5E99] py-1 block"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-2">Solutions</div>
              <div className="grid gap-2 pl-2">
                {solutionLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-sm font-medium text-[#0D2440] hover:text-[#2E5E99] py-1 block"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-2">Resources</div>
              <div className="grid gap-2 pl-2">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-sm font-medium text-[#0D2440] hover:text-[#2E5E99] py-1 block"
                  >
                    {item.title}
                  </Link>
                ))}
                <Link
                  href="/pricing"
                  className="text-sm font-medium text-[#0D2440] hover:text-[#2E5E99] py-1 block"
                >
                  Pricing Plans
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-[#CBD6E2]/60 flex flex-col gap-2">
              <Button
                variant="outline"
                size="md"
                href={getAppUrl("/login")}
                className="w-full justify-center text-sm font-semibold"
              >
                Log in to SprintDesk
              </Button>
              <Button
                variant="primary"
                size="md"
                href={getAppUrl("/signup")}
                className="w-full justify-center text-sm font-semibold"
              >
                Start free today <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
