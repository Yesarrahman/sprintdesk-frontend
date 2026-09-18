"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, AlertTriangle, ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getAppUrl } from "@/lib/utils";

export function EstimatedFinishSection() {
  const [tasks, setTasks] = React.useState([
    { id: 1, title: "Finalize high-fidelity component tokens", duration: "90 min", done: true },
    { id: 2, title: "Review pull request #142 (Stripe webhook sync)", duration: "45 min", done: true },
    { id: 3, title: "Audit team capacity & sprint story points", duration: "60 min", done: false },
    { id: 4, title: "Async standup update & blockers documentation", duration: "25 min", done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const doneCount = tasks.filter(t => t.done).length;

  return (
    <section className="py-24 sm:py-32 bg-[#0D2440] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2E5E99]/20 blur-[150px] rounded-full pointer-events-none" />

      <Container size="default" className="relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#163359] border border-[#2E5E99]/50 text-xs font-semibold uppercase tracking-wider text-[#7BA4D0] mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#7BA4D0]" />
            <span>Signature Capability</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white mb-5"
          >
            Stop wondering if your day is realistic.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#CBD6E2] leading-relaxed"
          >
            SprintDesk analyzes your planned workload, task estimates, progress, and work patterns to help you understand when your workday is likely to end.
          </motion.p>
        </div>

        {/* Interactive Feature Visual Container */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-[#2E5E99]/60 bg-[#081728]/90 backdrop-blur-md p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Today Task List */}
            <div className="md:col-span-6 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#1E3A5F]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0]">
                  Today&apos;s Active Workload
                </span>
                <span className="text-xs text-[#CBD6E2]">Click to complete</span>
              </div>
              <div className="space-y-2.5">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      task.done
                        ? "bg-[#0D2440]/60 border-[#1E3A5F] opacity-60"
                        : "bg-[#0D2440] border-[#2E5E99]/60 hover:border-[#7BA4D0]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold ${task.done ? "bg-emerald-500 text-white" : "border border-[#7BA4D0]/50"}`}>
                        {task.done && "✓"}
                      </div>
                      <span className={`text-xs font-medium ${task.done ? "line-through text-[#CBD6E2]" : "text-white"}`}>
                        {task.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#7BA4D0] shrink-0 ml-2">
                      {task.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Dramatic Estimated Finish Display */}
            <div className="md:col-span-6 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-gradient-to-br from-[#163359]/70 to-[#0D2440]/90 border border-[#2E5E99]/70">
              <Clock className="w-8 h-8 text-[#7BA4D0] mb-3 animate-pulse" />
              <div className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-1">
                Projected Finish Time
              </div>
              <div className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-2">
                {doneCount === 4 ? "Finished!" : doneCount === 3 ? "4:20 PM" : doneCount === 2 ? "5:40 PM" : "6:30 PM"}
              </div>
              <p className="text-xs text-[#CBD6E2] max-w-xs mb-4">
                {doneCount === 4 
                  ? "All 4 tasks completed! Your evening is 100% free." 
                  : "On track for a healthy workday conclusion without overtime."}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{Math.round((doneCount / tasks.length) * 100)}% Workday Complete</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
