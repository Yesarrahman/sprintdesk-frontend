"use client";

import * as React from "react";
import { Zap, Check, ArrowRight, Play, RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function AutomationSection() {
  const [isTriggered, setIsTriggered] = React.useState(false);
  const [status, setStatus] = React.useState("Todo");
  const [priority, setPriority] = React.useState("Medium");
  const [assignee, setAssignee] = React.useState("Alex Morgan");

  const runTest = () => {
    setIsTriggered(true);
    setStatus("In Review");
    setTimeout(() => {
      setPriority("High");
      setAssignee("Engineering Lead");
    }, 400);
  };

  const resetTest = () => {
    setIsTriggered(false);
    setStatus("Todo");
    setPriority("Medium");
    setAssignee("Alex Morgan");
  };

  return (
    <section className="py-24 sm:py-32 bg-[#F5F8FB] border-t border-[#CBD6E2]/70">
      <Container size="default">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-3">
            Event-Driven Engine
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-5">
            Let your workflow handle the repetitive work.
          </h2>
          <p className="text-base text-[#5F7083] leading-relaxed">
            Eliminate mundane ticket bureaucracy. Build deterministic no-code rules that automatically route tasks, escalate blockers, and ping stakeholders when conditions trigger.
          </p>
        </div>

        {/* Interactive Automation Builder UI */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-[#CBD6E2] bg-white p-6 sm:p-10 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#CBD6E2]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center font-bold">
                <Zap className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm text-[#0D2440]">
                Rule: Auto-Triage Critical Reviews
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="success" className="text-xs">
                AUTOMATION ACTIVE ✓
              </Badge>
            </div>
          </div>

          {/* Rule Flow Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {/* Block 1: WHEN */}
            <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[#CBD6E2] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#2E5E99] tracking-wider">
                  01 • TRIGGER
                </span>
                <div className="text-xs font-bold text-[#0D2440] mt-1 mb-2">WHEN Task Status</div>
                <div className="p-2 rounded bg-white border border-[#CBD6E2] text-xs font-mono text-[#0D2440]">
                  changes to <strong className="text-[#2E5E99]">In Review</strong>
                </div>
              </div>
            </div>

            {/* Block 2: THEN */}
            <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[#CBD6E2] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#7BA4D0] tracking-wider">
                  02 • ACTION
                </span>
                <div className="text-xs font-bold text-[#0D2440] mt-1 mb-2">THEN Set Priority</div>
                <div className="p-2 rounded bg-white border border-[#CBD6E2] text-xs font-mono text-[#0D2440]">
                  update to <strong className="text-rose-600">High (P1)</strong>
                </div>
              </div>
            </div>

            {/* Block 3: AND */}
            <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[#CBD6E2] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-[#7BA4D0] tracking-wider">
                  03 • ACTION
                </span>
                <div className="text-xs font-bold text-[#0D2440] mt-1 mb-2">AND Reassign</div>
                <div className="p-2 rounded bg-white border border-[#CBD6E2] text-xs font-mono text-[#0D2440]">
                  assign to <strong className="text-[#0D2440]">Engineering Lead</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Live Simulation Playground */}
          <div className="p-4 sm:p-6 rounded-xl bg-[#0D2440] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs text-[#7BA4D0] uppercase font-mono font-bold">
                Live State Result
              </div>
              <div className="text-sm font-semibold">
                Task #108: "Fix mobile navbar sticky transition"
              </div>
              <div className="flex flex-wrap items-center gap-3 text-xs pt-1">
                <span className="text-[#CBD6E2]">
                  Status: <strong className={isTriggered ? "text-amber-400" : "text-white"}>{status}</strong>
                </span>
                <span className="text-[#CBD6E2]">
                  Priority: <strong className={isTriggered ? "text-rose-400" : "text-white"}>{priority}</strong>
                </span>
                <span className="text-[#CBD6E2]">
                  Assignee: <strong className="text-[#7BA4D0]">{assignee}</strong>
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {!isTriggered ? (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={runTest}
                  className="bg-[#2E5E99] hover:bg-[#3b74b8] text-white text-xs font-semibold px-4"
                >
                  <Play className="w-3 h-3 mr-1.5 fill-current" /> Fire Trigger
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={resetTest}
                  className="bg-transparent text-white border-[#7BA4D0] hover:bg-[#163359] text-xs"
                >
                  <RefreshCw className="w-3 h-3 mr-1.5" /> Reset
                </Button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
