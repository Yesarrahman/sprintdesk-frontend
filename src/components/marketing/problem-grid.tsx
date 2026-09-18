"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Check,
  Clock,
  ArrowRight,
  TrendingDown,
  Sparkles,
  AlertCircle,
  MessageSquare,
  Zap,
  Activity,
  Calendar,
  Layers,
  CheckCircle2,
  Lock,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getAppUrl, cn } from "@/lib/utils";
import { GsapReveal } from "@/components/marketing/gsap-effects";

/* ─────────────────────────────────────────────────────────────
   FeatCard component following Vengeance UI Agent Bento Grid design
   Rounded 20px, light subtle shadow, internal 14px visual container
───────────────────────────────────────────────────────────── */
interface FeatCardProps {
  number: string;
  tag: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  isSolution?: boolean;
}

function FeatCard({
  number,
  tag,
  title,
  description,
  children,
  className,
  isSolution = false,
}: FeatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-[20px] p-4 sm:p-5",
        "transition-all duration-300",
        isSolution
          ? "bg-[#0D2440] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_10px_25px_rgba(13,36,64,0.3)] hover:shadow-[0_0_0_1px_rgba(123,164,208,0.4),0_12px_30px_rgba(13,36,64,0.4)]"
          : "bg-white text-slate-900 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] hover:shadow-[0_0_0_1px_rgba(46,94,153,0.35),0_8px_20px_rgba(46,94,153,0.08)]",
        className
      )}
    >
      {/* Top Header metadata */}
      <div className="z-10 flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "text-[10px] font-mono font-bold uppercase tracking-wider",
              isSolution ? "text-[#7BA4D0]" : "text-[#2E5E99]"
            )}
          >
            {tag}
          </span>
          <span
            className={cn(
              "text-[10px] font-mono",
              isSolution ? "text-slate-400" : "text-slate-400"
            )}
          >
            {number}
          </span>
        </div>
        <h3
          className={cn(
            "font-heading font-bold text-base sm:text-lg tracking-tight",
            isSolution ? "text-white" : "text-[#0D2440]"
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "text-xs leading-relaxed max-w-[95%]",
            isSolution ? "text-slate-300" : "text-slate-500"
          )}
        >
          {description}
        </p>
      </div>

      {/* Internal Interactive Visual Container */}
      <div
        className={cn(
          "relative mt-4 flex-1 w-full min-h-[165px] rounded-[14px] overflow-hidden border p-3 flex flex-col justify-center",
          isSolution
            ? "border-[#1E3A5F] bg-[#122A4A]/80"
            : "border-slate-200/80 bg-[#F5F8FB]/70"
        )}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card 1 Micro-Visualizer: The Notebook Mess (Capture Friction)
   Notes scraps with automated promotion into sprint ticket
───────────────────────────────────────────────────────────── */
function Card1Visualizer() {
  const [promoted, setPromoted] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setPromoted((prev) => !prev);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full relative flex flex-col justify-center gap-2 select-none">
      {/* Background dotted pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" aria-hidden>
        <defs>
          <pattern id="card1-dots" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.75" fill="#CBD6E2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#card1-dots)" />
      </svg>

      <AnimatePresence mode="wait">
        {!promoted ? (
          <motion.div
            key="unorganized"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col gap-2 z-10"
          >
            <div className="rounded-lg border border-amber-200 bg-amber-50/80 p-2 text-[10px] text-amber-900 shadow-xs flex items-center justify-between">
              <span className="font-mono truncate">📝 Scratchpad: &ldquo;Fix token expiry leak in auth&rdquo;</span>
              <span className="text-[8px] font-mono text-amber-600 uppercase">Untracked</span>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-2 text-[10px] text-slate-700 shadow-xs flex items-center justify-between">
              <span className="font-mono truncate">💬 Slack ping: &ldquo;Need dark mode toggles&rdquo;</span>
              <span className="text-[8px] font-mono text-rose-500 uppercase">Lost in chat</span>
            </div>
            <div className="flex items-center justify-center pt-0.5">
              <span className="text-[9px] font-mono text-[#2E5E99] font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3 animate-spin" /> Promoting to sprint ticket...
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="promoted"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="rounded-xl border border-[#CBD6E2] bg-white p-3 shadow-md z-10"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-1.5">
                <span className="px-1.5 py-0.5 rounded-sm bg-[#E7F0FA] text-[#2E5E99] font-mono font-bold text-[9px]">
                  SD-142
                </span>
                <span className="text-[10px] font-bold text-[#0D2440]">Fix auth token leak</span>
              </div>
              <span className="text-[9px] font-mono font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">
                Ready for Sprint
              </span>
            </div>
            <div className="flex items-center justify-between text-[9px] text-slate-500 font-mono mt-2 pt-2 border-t border-slate-100">
              <span>Points: 3 SP</span>
              <span>Assignee: Alex M.</span>
              <span className="text-[#2E5E99] font-semibold">Synced live</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card 2 Micro-Visualizer: The Priority Avalanche (Focus Destruction)
   All P0 overload collapsing vs calibrated load with sparkline
───────────────────────────────────────────────────────────── */
function Card2Visualizer() {
  const [mode, setMode] = React.useState<"overload" | "balanced">("overload");

  React.useEffect(() => {
    const timer = setInterval(() => {
      setMode((prev) => (prev === "overload" ? "balanced" : "overload"));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const isOverload = mode === "overload";

  return (
    <div className="w-full h-full flex flex-col justify-between py-1 select-none">
      <div className="flex items-center justify-between gap-2">
        {/* Metric 1 */}
        <div className="flex-1 rounded-xl border border-slate-200 bg-white p-2 shadow-xs">
          <div className="text-[8px] font-mono uppercase text-slate-400">Board Urgency</div>
          <div className="text-sm font-mono font-extrabold text-[#0D2440] flex items-center justify-between mt-0.5">
            <span>{isOverload ? "18 / 18 P0" : "3 Active Focus"}</span>
            <span
              className={cn(
                "text-[9px] font-mono font-bold px-1 rounded",
                isOverload ? "text-rose-600 bg-rose-50" : "text-emerald-600 bg-emerald-50"
              )}
            >
              {isOverload ? "100% Chaos" : "Optimal"}
            </span>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="w-20 rounded-xl border border-slate-200 bg-white p-2 shadow-xs text-right">
          <div className="text-[8px] font-mono uppercase text-slate-400">Context Loss</div>
          <div
            className={cn(
              "text-sm font-mono font-extrabold mt-0.5",
              isOverload ? "text-rose-600" : "text-emerald-600"
            )}
          >
            {isOverload ? "+68%" : "-42%"}
          </div>
        </div>
      </div>

      {/* Priority Distribution Bars */}
      <div className="flex items-end gap-1.5 h-16 pt-2">
        {[
          { label: "P0", h: isOverload ? 95 : 30, color: isOverload ? "bg-rose-500" : "bg-emerald-500" },
          { label: "P1", h: isOverload ? 90 : 60, color: isOverload ? "bg-rose-400" : "bg-[#2E5E99]" },
          { label: "P2", h: isOverload ? 85 : 45, color: isOverload ? "bg-rose-300" : "bg-[#7BA4D0]" },
          { label: "P3", h: isOverload ? 80 : 25, color: isOverload ? "bg-rose-200" : "bg-slate-300" },
        ].map((bar, i) => (
          <div key={bar.label} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
            <motion.div
              className={cn("w-full rounded-t-md transition-colors duration-300", bar.color)}
              initial={{ height: "20%" }}
              animate={{ height: `${bar.h}%` }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            />
            <span className="text-[8px] font-mono text-slate-400 font-semibold">{bar.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card 3 Micro-Visualizer: 3 P.M. Status Storms (Communication Overhead)
   Stacked infinite feed with automated finish-time resolution
───────────────────────────────────────────────────────────── */
function Card3Visualizer() {
  const [activeIdx, setActiveIdx] = React.useState(0);

  const logs = [
    {
      author: "Slack Sync",
      text: "“Are we still on track for today's release?”",
      status: "Interrupt",
      statusColor: "text-amber-600 bg-amber-50 border-amber-200",
      time: "3:02 PM",
    },
    {
      author: "SprintDesk Auto-Forecaster",
      text: "Finish time calibrated: 4:35 PM (96% on-schedule)",
      status: "Resolved",
      statusColor: "text-emerald-600 bg-emerald-50 border-emerald-200",
      time: "3:02 PM",
    },
    {
      author: "Standup Summary",
      text: "Async sprint digest sent to #eng-channel",
      status: "Automated",
      statusColor: "text-blue-600 bg-blue-50 border-blue-200",
      time: "3:03 PM",
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % logs.length);
    }, 2400);
    return () => clearInterval(timer);
  }, [logs.length]);

  return (
    <div className="w-full h-full relative flex items-center justify-center select-none overflow-hidden">
      {logs.map((item, i) => {
        const isActive = i === activeIdx;
        const isPrev = i === (activeIdx - 1 + logs.length) % logs.length;

        return (
          <motion.div
            key={item.author}
            className="absolute left-0 right-0"
            initial={false}
            animate={{
              y: isActive ? 0 : isPrev ? -36 : 36,
              scale: isActive ? 1 : 0.92,
              opacity: isActive ? 1 : 0.45,
              zIndex: isActive ? 20 : 10,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 26 }}
          >
            <div className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="font-mono font-bold text-[9px] text-[#0D2440]">
                  {item.author}
                </span>
                <span
                  className={cn(
                    "text-[8px] font-mono uppercase px-1.5 py-0.5 rounded-full border",
                    item.statusColor
                  )}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-[10px] text-slate-600 leading-tight truncate">{item.text}</p>
              <div className="text-[8px] font-mono text-slate-400 mt-1 flex justify-end">
                {item.time}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card 4 Micro-Visualizer: Context-Switching Tax (Cognitive Drain)
   Tool Latency Inspector showing fragmented stack vs unified speed
───────────────────────────────────────────────────────────── */
function Card4Visualizer() {
  const tools = [
    { name: "Jira Boards", latency: "1.8s delay", icon: Layers, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Slack Threads", latency: "38 unreads", icon: MessageSquare, color: "text-amber-500", bg: "bg-amber-50" },
    { name: "Scattered Notion", latency: "Doc drift", icon: FileText, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Google Calendar", latency: "3 overlaps", icon: Calendar, color: "text-teal-500", bg: "bg-teal-50" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between py-0.5 select-none">
      <div className="grid grid-cols-2 gap-1.5">
        {tools.map((t, idx) => {
          const Icon = t.icon;
          return (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              className="rounded-lg border border-slate-200/80 bg-white p-1.5 flex items-center justify-between gap-1 shadow-2xs"
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <div className={cn("size-5 rounded flex items-center justify-center shrink-0", t.bg)}>
                  <Icon className={cn("size-3", t.color)} />
                </div>
                <span className="text-[9px] font-mono font-medium text-slate-800 truncate">
                  {t.name}
                </span>
              </div>
              <span className="text-[7.5px] font-mono text-slate-400 shrink-0">{t.latency}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Comparison badge */}
      <div className="mt-2 rounded-lg bg-rose-50 border border-rose-200 p-2 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <TrendingDown className="w-3.5 h-3.5 text-rose-600" />
          <span className="text-[9px] font-bold text-rose-900">40% Cognitive Tax</span>
        </div>
        <span className="text-[8px] font-mono text-rose-700 font-semibold">Solved by SprintDesk</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card 5 Micro-Visualizer: Silent Sprint Blockers (Deadline Blindsiders)
   Interactive SVG node flow graph detecting blocked dependency
───────────────────────────────────────────────────────────── */
function Card5Visualizer() {
  const [blockedDetected, setBlockedDetected] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setBlockedDetected((prev) => !prev);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-full relative flex items-center justify-center select-none">
      {/* SVG Pipeline */}
      <svg className="w-full h-full" viewBox="0 0 260 120">
        {/* Connection Lines */}
        <line x1="50" y1="60" x2="130" y2="60" stroke="#CBD6E2" strokeWidth="2" strokeDasharray="3 3" />
        <line x1="130" y1="60" x2="210" y2="60" stroke="#CBD6E2" strokeWidth="2" strokeDasharray="3 3" />

        {/* Animated Flow Stroke */}
        <motion.line
          x1="50"
          y1="60"
          x2={blockedDetected ? "130" : "210"}
          y2="60"
          stroke={blockedDetected ? "#E11D48" : "#2E5E99"}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />

        {/* Node 1: PR #104 */}
        <g transform="translate(50, 60)">
          <circle r="18" fill="white" stroke="#CBD6E2" strokeWidth="2" />
          <text textAnchor="middle" dy="4" fontSize="8" fontFamily="monospace" fontWeight="bold" fill="#0D2440">
            API
          </text>
        </g>

        {/* Node 2: Dependency Gate */}
        <g transform="translate(130, 60)">
          <circle
            r="18"
            fill={blockedDetected ? "#FFE4E6" : "#E0F2FE"}
            stroke={blockedDetected ? "#E11D48" : "#0284C7"}
            strokeWidth="2"
          />
          <text
            textAnchor="middle"
            dy="4"
            fontSize="7"
            fontFamily="monospace"
            fontWeight="bold"
            fill={blockedDetected ? "#E11D48" : "#0284C7"}
          >
            {blockedDetected ? "BLOCK" : "FLOW"}
          </text>
        </g>

        {/* Node 3: Deployment */}
        <g transform="translate(210, 60)">
          <circle r="18" fill="white" stroke="#CBD6E2" strokeWidth="2" />
          <text textAnchor="middle" dy="4" fontSize="8" fontFamily="monospace" fontWeight="bold" fill="#0D2440">
            PROD
          </text>
        </g>
      </svg>

      {/* Floating Alert Tag */}
      <div className="absolute bottom-1.5 left-2 right-2 rounded-md bg-white/95 border border-slate-200 px-2 py-1 shadow-xs flex items-center justify-between">
        <span className="text-[8.5px] font-mono font-bold text-slate-800 flex items-center gap-1">
          <AlertCircle className="w-3 h-3 text-rose-500" />
          {blockedDetected ? "Dependency Flagged" : "Rerouted Automatically"}
        </span>
        <span className="text-[8px] font-mono text-[#2E5E99] font-bold">0 Friday Surprises</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Card 6 Micro-Visualizer: The SprintDesk Way (Solution Highlight)
   Unified Sprint Engine with live confidence score & direct CTA
───────────────────────────────────────────────────────────── */
function Card6Visualizer() {
  return (
    <div className="w-full h-full flex flex-col justify-between select-none py-1">
      <div className="rounded-lg bg-[#163359] border border-[#2E5E99]/60 p-2.5">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[9px] font-mono text-[#7BA4D0] uppercase font-bold">
            Unified Sprint Velocity
          </span>
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-1.5 py-0.5 rounded-full flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            98% On-Track
          </span>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full h-2 rounded-full bg-[#0D2440] overflow-hidden relative border border-white/10 my-1">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#2E5E99] to-[#7BA4D0] rounded-full"
            initial={{ width: "30%" }}
            animate={{ width: ["30%", "85%", "100%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </div>

        <div className="flex items-center justify-between text-[8px] font-mono text-slate-300 mt-1">
          <span>Private Notes: Synced</span>
          <span>Team Sprint: Unblocked</span>
        </div>
      </div>

      <Button
        variant="pill-primary"
        size="sm"
        href={getAppUrl("/signup")}
        className="w-full justify-center text-xs font-bold bg-[#2E5E99] hover:bg-[#3D78BE] text-white py-2 shadow-md group transition-all"
      >
        <span>Experience SprintDesk Free</span>
        <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
      </Button>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main ProblemGrid Section Component
───────────────────────────────────────────────────────────── */
export function ProblemGrid() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]">
      <Container size="default">
        {/* Section Header */}
        <GsapReveal className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E7F0FA] border border-[#CBD6E2] text-xs font-mono font-bold uppercase tracking-wider text-[#2E5E99] mb-4">
            <Zap className="w-3.5 h-3.5" /> Why Traditional Tools Fail
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-4">
            What&apos;s slowing your sprint down?
          </h2>
          <p className="text-sm sm:text-base text-[#5F7083] leading-relaxed max-w-2xl mx-auto">
            High-output engineering and product teams don&apos;t fail from lack of effort. They suffer from fragmented systems that split personal focus and team execution into conflicting silos.
          </p>
        </GsapReveal>

        {/* 6-Card Agent Bento Grid (5 Problem Cards + 1 Solution Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 w-full max-w-6xl mx-auto">
          {/* Card 1 */}
          <FeatCard
            number="01"
            tag="Capture Friction"
            title="The Notebook Mess"
            description="Ideas trapped in Apple Notes, Slack DMs, and paper scraps that never become executable sprint items."
          >
            <Card1Visualizer />
          </FeatCard>

          {/* Card 2 */}
          <FeatCard
            number="02"
            tag="Focus Destruction"
            title="The Priority Avalanche"
            description="When everything on a shared board is flagged P0 Urgent, team focus collapses into reactive chaos."
          >
            <Card2Visualizer />
          </FeatCard>

          {/* Card 3 */}
          <FeatCard
            number="03"
            tag="Communication Overhead"
            title="3 P.M. Status Storms"
            description="Endless afternoon 'quick syncs' and Slack pings asking 'Are we on track?' due to missing finish-line clarity."
          >
            <Card3Visualizer />
          </FeatCard>

          {/* Card 4 */}
          <FeatCard
            number="04"
            tag="Cognitive Drain"
            title="Context-Switching Tax"
            description="Jumping across 6 disconnected tools to check tickets, specs, and calendars bleeds up to 40% of productive hours."
          >
            <Card4Visualizer />
          </FeatCard>

          {/* Card 5 */}
          <FeatCard
            number="05"
            tag="Deadline Blindsiders"
            title="Silent Sprint Blockers"
            description="Critical dependencies hidden in ticket comments until Friday, transforming predictable releases into fire-drills."
          >
            <Card5Visualizer />
          </FeatCard>

          {/* Card 6 (Solution Highlight Card) */}
          <FeatCard
            number="06"
            tag="The SprintDesk Way"
            title="Capture Personally. Execute Together."
            description="One unified workspace that connects individual scratchpads directly to calibrated team sprint velocity."
            isSolution
          >
            <Card6Visualizer />
          </FeatCard>
        </div>
      </Container>
    </section>
  );
}
