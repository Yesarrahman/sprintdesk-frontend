"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Play, CheckCircle2, ArrowRight, Sparkles, Filter, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AutomationRuleBuilder({ className }: { className?: string }) {
  const [triggerStatus, setTriggerStatus] = React.useState("In Review");
  const [actionPriority, setActionPriority] = React.useState("Urgent (P0)");
  const [assignee, setAssignee] = React.useState("Lead Reviewer");
  const [isRunning, setIsRunning] = React.useState(false);
  const [executedCount, setExecutedCount] = React.useState(14);
  const [lastExecutedTask, setLastExecutedTask] = React.useState("PR #104: Payment Webhooks");

  const runSimulation = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setExecutedCount((prev) => prev + 1);
      setLastExecutedTask("SD-128: OAuth Auto-Rotation");
    }, 1200);
  };

  return (
    <div
      className={cn(
        "rounded-2xl border border-[#CBD6E2] bg-white p-5 sm:p-7 shadow-xl select-none",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-[#0D2440]">
              Visual If-This-Then-That Automation Engine
            </h4>
            <p className="text-xs text-[#5F7083]">
              Define rules once. SprintDesk updates priorities and routes tasks automatically.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active Rule
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={runSimulation}
            disabled={isRunning}
            className="text-xs font-bold gap-1 text-[#0D2440] border-[#CBD6E2]"
          >
            <Play className={cn("w-3 h-3", isRunning && "animate-spin")} />
            {isRunning ? "Simulating..." : "Test Rule"}
          </Button>
        </div>
      </div>

      {/* 3-Step Rule Sequence */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Step 1: TRIGGER */}
        <div className="p-4 rounded-xl border border-blue-200 bg-blue-50/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold uppercase text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded">
                WHEN (TRIGGER)
              </span>
              <Filter className="w-3.5 h-3.5 text-blue-500" />
            </div>
            <div className="text-xs font-bold text-[#0D2440] mb-1">
              Task Status Changes To
            </div>
            <p className="text-[11px] text-slate-500 mb-3">
              Fires the instant a task card moves across the sprint board.
            </p>
          </div>
          <select
            value={triggerStatus}
            onChange={(e) => setTriggerStatus(e.target.value)}
            className="w-full bg-white border border-blue-200 text-xs font-semibold text-[#0D2440] rounded-lg p-2 focus:ring-2 focus:ring-[#2E5E99] outline-none"
          >
            <option value="In Review">In Review</option>
            <option value="Completed">Completed</option>
            <option value="Blocked">Blocked</option>
            <option value="In Progress">In Progress</option>
          </select>
        </div>

        {/* Step 2: CONDITION / ACTION 1 */}
        <div className="p-4 rounded-xl border border-purple-200 bg-purple-50/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold uppercase text-purple-700 bg-purple-100 px-1.5 py-0.5 rounded">
                THEN (ACTION 1)
              </span>
              <Zap className="w-3.5 h-3.5 text-purple-500" />
            </div>
            <div className="text-xs font-bold text-[#0D2440] mb-1">
              Auto-Set Priority
            </div>
            <p className="text-[11px] text-slate-500 mb-3">
              Escalates ticket urgency so blockers never linger unattended.
            </p>
          </div>
          <select
            value={actionPriority}
            onChange={(e) => setActionPriority(e.target.value)}
            className="w-full bg-white border border-purple-200 text-xs font-semibold text-[#0D2440] rounded-lg p-2 focus:ring-2 focus:ring-[#2E5E99] outline-none"
          >
            <option value="Urgent (P0)">Urgent (P0)</option>
            <option value="High (P1)">High (P1)</option>
            <option value="Medium (P2)">Medium (P2)</option>
            <option value="Low (P3)">Low (P3)</option>
          </select>
        </div>

        {/* Step 3: ACTION 2 */}
        <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono font-bold uppercase text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                AND (ACTION 2)
              </span>
              <Bell className="w-3.5 h-3.5 text-emerald-500" />
            </div>
            <div className="text-xs font-bold text-[#0D2440] mb-1">
              Auto-Reassign Owner
            </div>
            <p className="text-[11px] text-slate-500 mb-3">
              Notifies and assigns the required engineer without a meeting.
            </p>
          </div>
          <select
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            className="w-full bg-white border border-emerald-200 text-xs font-semibold text-[#0D2440] rounded-lg p-2 focus:ring-2 focus:ring-[#2E5E99] outline-none"
          >
            <option value="Lead Reviewer">Lead Reviewer (Sarah)</option>
            <option value="Product Manager">Product Manager (David)</option>
            <option value="QA Engineer">QA Engineer (Maria)</option>
            <option value="Original Reporter">Original Reporter</option>
          </select>
        </div>
      </div>

      {/* Live Execution Output Preview */}
      <div className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
            ✓
          </div>
          <div>
            <span className="font-bold text-[#0D2440]">Live Status: </span>
            <span className="text-slate-600">
              Rule has successfully executed <strong>{executedCount} times</strong> this sprint.
            </span>
          </div>
        </div>
        <div className="text-[11px] font-mono text-[#5F7083]">
          Last task processed: <span className="font-bold text-[#2E5E99]">{lastExecutedTask}</span>
        </div>
      </div>
    </div>
  );
}
