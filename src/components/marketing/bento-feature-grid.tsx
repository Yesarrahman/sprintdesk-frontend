"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Kanban, 
  Calendar as CalendarIcon, 
  Target, 
  Users2, 
  LineChart,
  Clock,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/utils";

const bentoItems = [
  {
    title: "Daily Command Center",
    category: "CORE WORKSPACE",
    description: "See tasks, deadlines, progress, activity, and estimated finish time in one unified cockpit.",
    colSpan: "lg:col-span-8",
    icon: LayoutDashboard,
    visual: (
      <div className="mt-4 p-4 rounded-xl bg-white border border-[#CBD6E2] shadow-sm flex flex-col justify-between h-44">
        <div className="flex items-center justify-between pb-2 border-b border-[#F5F8FB]">
          <span className="text-xs font-bold text-[#0D2440] flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#2E5E99]" /> Active Focus Queue
          </span>
          <span className="text-[10px] font-mono bg-[#E7F0FA] text-[#2E5E99] px-2 py-0.5 rounded font-semibold">
            Finish: 5:40 PM
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-auto">
          <div className="p-2.5 rounded-lg bg-[#F5F8FB] border border-[#CBD6E2]/40">
            <div className="text-[10px] text-[#5F7083] uppercase font-bold">Completed</div>
            <div className="text-base font-extrabold text-[#0D2440] mt-0.5">8 / 12</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#F5F8FB] border border-[#CBD6E2]/40">
            <div className="text-[10px] text-[#5F7083] uppercase font-bold">Velocity</div>
            <div className="text-base font-extrabold text-emerald-600 mt-0.5">+18%</div>
          </div>
          <div className="p-2.5 rounded-lg bg-[#F5F8FB] border border-[#CBD6E2]/40">
            <div className="text-[10px] text-[#5F7083] uppercase font-bold">Blockers</div>
            <div className="text-base font-extrabold text-[#2E5E99] mt-0.5">0 Active</div>
          </div>
        </div>
        <div className="w-full bg-[#E7F0FA] h-2 rounded-full overflow-hidden">
          <div className="bg-[#2E5E99] h-full w-2/3" />
        </div>
      </div>
    ),
  },
  {
    title: "Drag. Drop. Done.",
    category: "INTERACTIVE KANBAN",
    description: "Interactive Kanban workflow with customizable swimlanes, story point sizing, and lightning-fast card movement.",
    colSpan: "lg:col-span-4",
    icon: Kanban,
    visual: (
      <div className="mt-4 p-4 rounded-xl bg-white border border-[#CBD6E2] shadow-sm flex flex-col justify-between h-44">
        <div className="flex gap-2">
          <div className="flex-1 bg-[#F5F8FB] p-2 rounded border border-[#CBD6E2]/50 text-left">
            <span className="text-[10px] font-bold text-[#5F7083]">IN PROGRESS</span>
            <div className="bg-white p-2 rounded border border-[#CBD6E2] shadow-xs text-xs font-semibold text-[#0D2440] mt-1">
              Auth Tokens
            </div>
          </div>
          <div className="flex-1 bg-[#F5F8FB] p-2 rounded border border-[#CBD6E2]/50 text-left">
            <span className="text-[10px] font-bold text-emerald-600">DONE</span>
            <div className="bg-white p-2 rounded border border-emerald-200 shadow-xs text-xs font-semibold text-[#0D2440] mt-1 line-through opacity-70">
              API Docs
            </div>
          </div>
        </div>
        <div className="text-[11px] text-[#5F7083] text-center pt-2">
          Zero friction card triage
        </div>
      </div>
    ),
  },
  {
    title: "Your schedule at a glance",
    category: "CALENDAR PLANNING",
    description: "Visual deadline planning that syncs bi-directionally with your active sprint tasks.",
    colSpan: "lg:col-span-4",
    icon: CalendarIcon,
    visual: (
      <div className="mt-4 p-4 rounded-xl bg-white border border-[#CBD6E2] shadow-sm h-40 flex flex-col justify-between">
        <div className="flex justify-between items-center text-xs font-bold text-[#0D2440]">
          <span>September 2026</span>
          <span className="text-[10px] text-[#2E5E99] bg-[#E7F0FA] px-1.5 py-0.5 rounded">Sprint 42</span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 text-center text-xs font-medium">
          <div className="p-1.5 rounded bg-[#F5F8FB]">Mon 14</div>
          <div className="p-1.5 rounded bg-[#2E5E99] text-white font-bold">Tue 15</div>
          <div className="p-1.5 rounded bg-[#F5F8FB]">Wed 16</div>
          <div className="p-1.5 rounded bg-[#F5F8FB]">Thu 17</div>
        </div>
        <div className="text-[11px] text-[#5F7083] truncate">
          • Release v2.4 scheduled for Thursday
        </div>
      </div>
    ),
  },
  {
    title: "Smart priorities",
    category: "TRIAGE ENGINE",
    description: "Urgent, High, Medium, Low—calibrated so that high-leverage deliverables always stand out.",
    colSpan: "lg:col-span-4",
    icon: Target,
    visual: (
      <div className="mt-4 p-4 rounded-xl bg-white border border-[#CBD6E2] shadow-sm h-40 flex flex-col justify-center space-y-2">
        <div className="flex items-center justify-between text-xs p-1.5 rounded bg-rose-50 border border-rose-100 text-rose-700 font-semibold">
          <span>Urgent (P0)</span>
          <span>1 Issue</span>
        </div>
        <div className="flex items-center justify-between text-xs p-1.5 rounded bg-amber-50 border border-amber-100 text-amber-700 font-semibold">
          <span>High Priority (P1)</span>
          <span>3 Issues</span>
        </div>
        <div className="flex items-center justify-between text-xs p-1.5 rounded bg-[#F5F8FB] text-[#5F7083]">
          <span>Normal Workload</span>
          <span>8 Issues</span>
        </div>
      </div>
    ),
  },
  {
    title: "Progress you can understand",
    category: "VELOCITY ANALYTICS",
    description: "Clear completion charts and productivity metrics without complex enterprise query languages.",
    colSpan: "lg:col-span-4",
    icon: LineChart,
    visual: (
      <div className="mt-4 p-4 rounded-xl bg-white border border-[#CBD6E2] shadow-sm h-40 flex flex-col justify-between">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-[#0D2440]">Sprint Velocity</span>
          <span className="text-emerald-600 font-bold text-xs">+24 pts</span>
        </div>
        <div className="flex items-end gap-2 h-20 pt-2">
          <div className="flex-1 bg-[#CBD6E2]/40 rounded-t h-1/3" />
          <div className="flex-1 bg-[#7BA4D0]/50 rounded-t h-1/2" />
          <div className="flex-1 bg-[#2E5E99] rounded-t h-4/5" />
          <div className="flex-1 bg-[#0D2440] rounded-t h-full" />
        </div>
        <div className="text-[10px] text-[#5F7083] text-center">Consistent upward velocity trend</div>
      </div>
    ),
  },
];

export function BentoFeatureGrid() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <Container size="default">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-3">
            Bento Feature Matrix
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-4">
            Everything your team needs to execute cleanly.
          </h2>
          <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed">
            Built with modern precision, replacing cluttered enterprise clutter with structured clarity.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`${item.colSpan} p-6 sm:p-8 rounded-2xl bg-[#F5F8FB] border border-[#CBD6E2] hover:border-[#2E5E99]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#CBD6E2] flex items-center justify-center text-[#2E5E99]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#7BA4D0]">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0D2440] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F7083] leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {item.visual}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
