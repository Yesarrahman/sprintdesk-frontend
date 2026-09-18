"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { animate } from "framer-motion";
import {
  Sparkles,
  Layers,
  Kanban,
  Zap,
  BarChart3,
  Clock,
  Users,
  Globe,
  Brain,
  BookOpen,
  FileText,
  GraduationCap,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getAppUrl, cn } from "@/lib/utils";

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

const NAV_TABS: NavItem[] = [
  { id: "features", label: "Features", hasDropdown: true },
  { id: "solutions", label: "Solutions", hasDropdown: true },
  { id: "resources", label: "Resources", hasDropdown: true },
  { id: "pricing", label: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<string>("features");
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);
  const [hoverX, setHoverX] = React.useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [mobileSection, setMobileSection] = React.useState<string | null>(null);

  const pathname = usePathname();
  const navTrackRef = React.useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const spotlightX = React.useRef(0);
  const ambienceX = React.useRef(0);

  // Scroll detection for sticky navbar background
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  React.useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    setMobileSection(null);
  }, [pathname]);

  // Handle active ambience positioning
  React.useEffect(() => {
    if (!navTrackRef.current) return;
    const track = navTrackRef.current;
    const activeEl = track.querySelector(`[data-tab-id="${activeTab}"]`);

    if (activeEl) {
      const trackRect = track.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      const targetX = itemRect.left - trackRect.left + itemRect.width / 2;

      animate(ambienceX.current, targetX, {
        type: "spring",
        stiffness: 220,
        damping: 22,
        onUpdate: (val) => {
          ambienceX.current = val;
          track.style.setProperty("--ambience-x", `${val}px`);
        },
      });
    }
  }, [activeTab]);

  // Spotlight mouse tracker
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!navTrackRef.current) return;
    const track = navTrackRef.current;
    const rect = track.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setHoverX(x);
    spotlightX.current = x;
    track.style.setProperty("--spotlight-x", `${x}px`);
  };

  const handleMouseLeave = () => {
    setHoverX(null);
    if (!navTrackRef.current) return;
    const track = navTrackRef.current;
    const activeEl = track.querySelector(`[data-tab-id="${activeTab}"]`);
    if (activeEl) {
      const trackRect = track.getBoundingClientRect();
      const itemRect = activeEl.getBoundingClientRect();
      const targetX = itemRect.left - trackRect.left + itemRect.width / 2;

      animate(spotlightX.current, targetX, {
        type: "spring",
        stiffness: 200,
        damping: 20,
        onUpdate: (v) => {
          spotlightX.current = v;
          track.style.setProperty("--spotlight-x", `${v}px`);
        },
      });
    }
  };

  // Safe dropdown hover handlers (prevents flicker with hover bridge)
  const handleMouseEnterTab = (tabId: string, hasDropdown?: boolean) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveTab(tabId);
    if (hasDropdown) {
      setOpenDropdown(tabId);
    } else {
      setOpenDropdown(null);
    }
  };

  const handleMouseLeaveTabArea = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const toggleMobileAccordion = (section: string) => {
    setMobileSection((prev) => (prev === section ? null : section));
  };

  return (
    <header className="fixed top-3.5 sm:top-5 inset-x-0 mx-auto z-50 w-[94%] max-w-6xl transition-all duration-300 pointer-events-none">
      <div
        className={cn(
          "pointer-events-auto w-full flex items-center justify-between px-4 sm:px-6 py-2 rounded-full border border-[#CBD6E2] bg-white/95 backdrop-blur-md",
          "shadow-[0_8px_30px_rgba(13,36,64,0.08),0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300",
          isScrolled ? "shadow-lg border-[#CBD6E2] py-1.5" : "py-2"
        )}
      >
        {/* Brand Logo - CLEAN, ZERO REPETITION */}
        <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="SprintDesk Home">
          <Image
            src="/brand/sprintdesk-logo.png"
            alt="SprintDesk"
            width={145}
            height={32}
            className="h-7 sm:h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            priority
          />
        </Link>

        {/* Desktop Center Navigation - SPOTLIGHT NAVBAR TRACK */}
        <div
          className="hidden md:flex items-center relative"
          onMouseLeave={handleMouseLeaveTabArea}
        >
          <nav
            ref={navTrackRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "relative flex items-center h-11 px-1.5 rounded-full border border-[#CBD6E2]/80 bg-white/90 backdrop-blur-md",
              "shadow-[0_2px_8px_rgba(13,36,64,0.04),inset_0_1px_0_rgba(255,255,255,0.8)]",
              "transition-all duration-200"
            )}
            style={
              {
                "--spotlight-x": "0px",
                "--ambience-x": "0px",
              } as React.CSSProperties
            }
          >
            {/* Nav Tabs */}
            <ul className="relative flex items-center h-full gap-0.5 z-10">
              {NAV_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                const isMenuOpen = openDropdown === tab.id;

                return (
                  <li key={tab.id} className="relative h-full flex items-center">
                    {tab.hasDropdown ? (
                      <button
                        type="button"
                        data-tab-id={tab.id}
                        onMouseEnter={() => handleMouseEnterTab(tab.id, true)}
                        onClick={() => setOpenDropdown(isMenuOpen ? null : tab.id)}
                        className={cn(
                          "flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200",
                          isActive || isMenuOpen
                            ? "text-[#0D2440] font-bold"
                            : "text-[#5F7083] hover:text-[#0D2440]"
                        )}
                        aria-expanded={isMenuOpen}
                      >
                        <span>{tab.label}</span>
                        <ChevronDown
                          className={cn(
                            "w-3.5 h-3.5 transition-transform duration-200 opacity-70",
                            isMenuOpen && "rotate-180 text-[#2E5E99] opacity-100"
                          )}
                        />
                      </button>
                    ) : (
                      <Link
                        href={tab.href || "#"}
                        data-tab-id={tab.id}
                        onMouseEnter={() => handleMouseEnterTab(tab.id, false)}
                        className={cn(
                          "px-3.5 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200",
                          isActive
                            ? "text-[#0D2440] font-bold"
                            : "text-[#5F7083] hover:text-[#0D2440]"
                        )}
                      >
                        {tab.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Moving Spotlight Glow (Follows Mouse Cursor) */}
            <div
              className="pointer-events-none absolute inset-0 w-full h-full rounded-full transition-opacity duration-300"
              style={{
                opacity: hoverX !== null ? 1 : 0,
                background:
                  "radial-gradient(110px circle at var(--spotlight-x) 100%, rgba(46,94,153,0.12) 0%, transparent 65%)",
              }}
            />

            {/* Active Ambience Underline Glow (Centers on active item) */}
            <div
              className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px]"
              style={{
                background:
                  "radial-gradient(45px circle at var(--ambience-x) 0%, #2E5E99 0%, transparent 100%)",
              }}
            />
          </nav>

          {/* ─────────────────────────────────────────────────────────────
              MEGA MENU DROPDOWNS (Mega Menu Navbar Style)
              Connected via top padding (pt-3) to create continuous hover bridge
          ───────────────────────────────────────────────────────────── */}
          {/* 1. FEATURES MEGA MENU */}
          <div
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleMouseLeaveTabArea}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 transition-all duration-200",
              openDropdown === "features"
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0 pointer-events-none"
            )}
          >
            <div className="w-[660px] rounded-2xl border border-[#CBD6E2] bg-white p-5 shadow-2xl">
              <div className="text-[11px] font-bold font-mono uppercase tracking-wider text-[#7BA4D0] mb-3 px-1">
                Core Capabilities
              </div>
              <div className="grid grid-cols-2 gap-2">
                <DropdownCard
                  href="/personal-task-management"
                  icon={Sparkles}
                  iconColor="text-blue-600"
                  iconBg="bg-blue-50 border-blue-100"
                  title="Personal Task Flow"
                  badge="Zero Friction"
                  description="Private scratchpad to capture thoughts and promote tasks instantly."
                />
                <DropdownCard
                  href="/sprint-management"
                  icon={Layers}
                  iconColor="text-indigo-600"
                  iconBg="bg-indigo-50 border-indigo-100"
                  title="Team Sprint Board"
                  badge="High Velocity"
                  description="Real-time sprint tracker with automated points velocity."
                />
                <DropdownCard
                  href="/kanban-board"
                  icon={Kanban}
                  iconColor="text-emerald-600"
                  iconBg="bg-emerald-50 border-emerald-100"
                  title="Kanban Board"
                  description="Visual multi-swimlane workflow with WIP safeguards."
                />
                <DropdownCard
                  href="/workflow-automation"
                  icon={Zap}
                  iconColor="text-amber-600"
                  iconBg="bg-amber-50 border-amber-100"
                  title="Workflow Automation"
                  description="No-code triggers that auto-move status and assign reviewers."
                />
                <DropdownCard
                  href="/team-workload-management"
                  icon={BarChart3}
                  iconColor="text-cyan-600"
                  iconBg="bg-cyan-50 border-cyan-100"
                  title="Workload Balance"
                  description="Prevent developer burnout with live capacity distribution."
                />
                <DropdownCard
                  href="/personal-task-management#finish-time"
                  icon={Clock}
                  iconColor="text-purple-600"
                  iconBg="bg-purple-50 border-purple-100"
                  title="Estimated Finish Time"
                  badge="Algorithmic"
                  description="Predicts workday and sprint completion times based on velocity and active hours."
                />
              </div>

              {/* Bottom Featured Callout Banner */}
              <div className="mt-4 rounded-xl border border-[#E7F0FA] bg-[#F5F8FB] p-3.5 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0D2440]">
                    Interactive Sprint Simulator
                  </div>
                  <div className="text-[11px] text-[#5F7083]">
                    Experience how personal scratchpad tasks automatically link into team sprints.
                  </div>
                </div>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E5E99] hover:text-[#0D2440] transition-colors"
                >
                  <span>Explore Demo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* 2. SOLUTIONS MEGA MENU */}
          <div
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleMouseLeaveTabArea}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 transition-all duration-200",
              openDropdown === "solutions"
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0 pointer-events-none"
            )}
          >
            <div className="w-[480px] rounded-2xl border border-[#CBD6E2] bg-white p-5 shadow-2xl">
              <div className="text-[11px] font-bold font-mono uppercase tracking-wider text-[#7BA4D0] mb-3 px-1">
                Built For Modern Teams
              </div>
              <div className="flex flex-col gap-2">
                <DropdownCard
                  href="/team-task-management"
                  icon={Users}
                  iconColor="text-blue-600"
                  iconBg="bg-blue-50 border-blue-100"
                  title="For Engineering Leads & Managers"
                  description="Get realistic finish times and remove standup status churn."
                />
                <DropdownCard
                  href="/remote-team-task-management"
                  icon={Globe}
                  iconColor="text-teal-600"
                  iconBg="bg-teal-50 border-teal-100"
                  title="For Distributed & Remote Teams"
                  description="Coordinate asynchronously with automated sprint handoffs."
                />
                <DropdownCard
                  href="/personal-task-management"
                  icon={Brain}
                  iconColor="text-indigo-600"
                  iconBg="bg-indigo-50 border-indigo-100"
                  title="For Individual Software Engineers"
                  description="Maintain deep focus without public board micromanagement."
                />
              </div>

              {/* Bottom Testimonial Snippet */}
              <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50/80 p-3 text-xs text-[#5F7083]">
                <span className="font-semibold text-[#0D2440]">&ldquo;SprintDesk eliminated 3 hours</span> of weekly status meetings while improving our sprint accuracy by 40%.&rdquo;
              </div>
            </div>
          </div>

          {/* 3. RESOURCES MEGA MENU */}
          <div
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleMouseLeaveTabArea}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 transition-all duration-200",
              openDropdown === "resources"
                ? "visible translate-y-0 opacity-100"
                : "invisible -translate-y-2 opacity-0 pointer-events-none"
            )}
          >
            <div className="w-[620px] rounded-2xl border border-[#CBD6E2] bg-white p-5 shadow-2xl">
              <div className="grid grid-cols-12 gap-5">
                {/* Left Report Highlight */}
                <div className="col-span-5 rounded-xl border border-[#E7F0FA] bg-gradient-to-b from-[#F5F8FB] to-white p-4 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-[#2E5E99]/10 border border-[#2E5E99]/20 flex items-center justify-center text-[#2E5E99] mb-3">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div className="text-sm font-bold text-[#0D2440] mb-1">
                      2026 Agile Benchmark
                    </div>
                    <div className="text-xs text-[#5F7083] leading-relaxed">
                      How 450+ high-growth engineering teams eliminated sprint fatigue.
                    </div>
                  </div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#2E5E99] hover:underline mt-4"
                  >
                    Read Guide <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                {/* Right Links List */}
                <div className="col-span-7 flex flex-col gap-1 justify-center">
                  <div className="text-[11px] font-bold font-mono uppercase tracking-wider text-[#7BA4D0] mb-2 px-2">
                    Learning Center
                  </div>
                  <DropdownResourceLink
                    href="/blog"
                    icon={FileText}
                    title="Productivity Blog"
                    subtitle="Tactical articles on sprint velocity and async work"
                  />
                  <DropdownResourceLink
                    href="/guides"
                    icon={GraduationCap}
                    title="Agile Playbooks & Guides"
                    subtitle="Best practices for sprint planning and estimations"
                  />
                  <DropdownResourceLink
                    href="/how-it-works"
                    icon={Sparkles}
                    title="How SprintDesk Works"
                    subtitle="Tour the architecture connecting personal to team flow"
                  />
                  <DropdownResourceLink
                    href="/compare"
                    icon={Layers}
                    title="Competitor Comparisons"
                    subtitle="See how SprintDesk compares to Jira, Linear, and Trello"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Right Action CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href={getAppUrl("/login")}
            className="text-xs font-bold text-[#0D2440] hover:text-[#2E5E99] transition-colors"
          >
            Log in
          </Link>
          <Button
            variant="pill-primary"
            size="sm"
            href={getAppUrl("/signup")}
            className="px-5 py-2 text-xs font-bold bg-[#0D2440] hover:bg-[#163359] text-white rounded-full shadow-xs transition-all hover:shadow-md"
          >
            Start Free
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="pill-primary"
            size="sm"
            href={getAppUrl("/signup")}
            className="px-3.5 py-1.5 text-xs font-bold bg-[#0D2440] text-white rounded-full"
          >
            Start Free
          </Button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#0D2440] hover:bg-[#F5F8FB] rounded-lg transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MOBILE SLIDE-DOWN DRAWER & ACCORDION
      ───────────────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div className="md:hidden pointer-events-auto fixed inset-x-4 top-[72px] bg-white border border-[#CBD6E2] rounded-2xl shadow-2xl p-5 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-1 mb-6">
            {/* Features Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("features")}
                className="flex items-center justify-between w-full py-2.5 text-sm font-bold text-[#0D2440]"
              >
                <span>Features</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 text-[#5F7083]",
                    mobileSection === "features" && "rotate-180 text-[#2E5E99]"
                  )}
                />
              </button>
              {mobileSection === "features" && (
                <div className="flex flex-col gap-2 pl-3 pt-1 pb-2">
                  <Link
                    href="/personal-task-management"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    Personal Task Flow
                  </Link>
                  <Link
                    href="/sprint-management"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    Team Sprint Board
                  </Link>
                  <Link
                    href="/kanban-board"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    Kanban Board
                  </Link>
                  <Link
                    href="/workflow-automation"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    Workflow Automation
                  </Link>
                  <Link
                    href="/team-workload-management"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    Workload Balancing
                  </Link>
                  <Link
                    href="/personal-task-management#finish-time"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    Estimated Finish Time
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("solutions")}
                className="flex items-center justify-between w-full py-2.5 text-sm font-bold text-[#0D2440]"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 text-[#5F7083]",
                    mobileSection === "solutions" && "rotate-180 text-[#2E5E99]"
                  )}
                />
              </button>
              {mobileSection === "solutions" && (
                <div className="flex flex-col gap-2 pl-3 pt-1 pb-2">
                  <Link
                    href="/team-task-management"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    For Engineering Leads
                  </Link>
                  <Link
                    href="/remote-team-task-management"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    For Remote Teams
                  </Link>
                  <Link
                    href="/personal-task-management"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    For Individual Builders
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => toggleMobileAccordion("resources")}
                className="flex items-center justify-between w-full py-2.5 text-sm font-bold text-[#0D2440]"
              >
                <span>Resources</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200 text-[#5F7083]",
                    mobileSection === "resources" && "rotate-180 text-[#2E5E99]"
                  )}
                />
              </button>
              {mobileSection === "resources" && (
                <div className="flex flex-col gap-2 pl-3 pt-1 pb-2">
                  <Link
                    href="/blog"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    Productivity Blog
                  </Link>
                  <Link
                    href="/guides"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    Agile Guides
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    How It Works
                  </Link>
                  <Link
                    href="/compare"
                    className="text-xs text-[#5F7083] hover:text-[#0D2440] py-1"
                  >
                    Competitor Comparisons
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Pricing Link */}
            <Link
              href="/pricing"
              className="py-2.5 text-sm font-bold text-[#0D2440] border-b border-slate-100"
            >
              Pricing
            </Link>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              href={getAppUrl("/login")}
              className="text-center py-2.5 text-xs font-bold text-[#0D2440] border border-[#CBD6E2] rounded-xl"
            >
              Log in to SprintDesk
            </Link>
            <Button
              variant="pill-primary"
              href={getAppUrl("/signup")}
              className="w-full justify-center text-xs font-bold bg-[#0D2440] text-white py-3 rounded-xl"
            >
              Start Free Today
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

// Micro-component for Features & Solutions Mega Menu Cards
function DropdownCard({
  href,
  icon: Icon,
  iconColor = "text-[#2E5E99]",
  iconBg = "bg-[#E7F0FA] border-[#CBD6E2]/60",
  title,
  badge,
  description,
}: {
  href: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  title: string;
  badge?: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-[#F5F8FB]"
    >
      <div
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 group-hover:scale-105",
          iconBg
        )}
      >
        <Icon className={cn("size-4", iconColor)} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-bold text-[#0D2440] group-hover:text-[#2E5E99] transition-colors">
            {title}
          </span>
          {badge ? (
            <span className="rounded-full bg-[#E7F0FA] px-1.5 py-0.5 text-[9px] font-mono font-bold text-[#2E5E99]">
              {badge}
            </span>
          ) : null}
        </div>
        <p className="mt-0.5 text-[11px] leading-snug text-[#5F7083] line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}

// Micro-component for Resources Dropdown Rows
function DropdownResourceLink({
  href,
  icon: Icon,
  title,
  subtitle,
}: {
  href: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-[#F5F8FB]"
    >
      <div className="w-7 h-7 rounded-md border border-slate-200 bg-white flex items-center justify-center text-[#5F7083] group-hover:text-[#2E5E99] group-hover:border-[#7BA4D0] transition-colors shrink-0">
        <Icon className="w-3.5 h-3.5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-semibold text-[#0D2440] group-hover:text-[#2E5E99] transition-colors">
          {title}
        </div>
        <div className="text-[10px] text-[#5F7083] truncate">{subtitle}</div>
      </div>
    </Link>
  );
}
