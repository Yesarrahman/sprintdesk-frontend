"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
  MoveHorizontal,
  User,
  Flame,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface KanbanTask {
  id: string;
  title: string;
  points: number;
  assignee: string;
  avatarBg: string;
  tag: string;
  column: "todo" | "in_progress" | "review" | "completed";
}

const INITIAL_TASKS: KanbanTask[] = [
  {
    id: "SD-104",
    title: "Implement OAuth token auto-rotation",
    points: 3,
    assignee: "Alex Morgan",
    avatarBg: "bg-blue-600",
    tag: "Security",
    column: "todo",
  },
  {
    id: "SD-108",
    title: "Build assignee swimlane grouping",
    points: 5,
    assignee: "Sarah Chen",
    avatarBg: "bg-purple-600",
    tag: "Sprint Board",
    column: "in_progress",
  },
  {
    id: "SD-112",
    title: "Workday Finish Line calculation engine",
    points: 8,
    assignee: "David Kim",
    avatarBg: "bg-amber-600",
    tag: "Core Algorithm",
    column: "in_progress",
  },
  {
    id: "SD-115",
    title: "GitHub Webhook real-time PR sync",
    points: 2,
    assignee: "Maria Lopez",
    avatarBg: "bg-emerald-600",
    tag: "Integrations",
    column: "review",
  },
  {
    id: "SD-98",
    title: "Capture Inbox global keyboard shortcuts",
    points: 3,
    assignee: "Alex Morgan",
    avatarBg: "bg-blue-600",
    tag: "Personal Flow",
    column: "completed",
  },
];

const COLUMNS = [
  { id: "todo", label: "To Do", countColor: "bg-slate-200 text-slate-700" },
  { id: "in_progress", label: "In Progress", countColor: "bg-blue-100 text-blue-700" },
  { id: "review", label: "In Review", countColor: "bg-amber-100 text-amber-700" },
  { id: "completed", label: "Completed", countColor: "bg-emerald-100 text-emerald-700" },
] as const;

export function KanbanMotionBoard({ className }: { className?: string }) {
  const [tasks, setTasks] = React.useState<KanbanTask[]>(INITIAL_TASKS);
  const [activeTask, setActiveTask] = React.useState<string | null>(null);

  // Auto-progression demo: every 4 seconds advance a task to illustrate active motion
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTasks((prev) => {
        const inProgress = prev.find((t) => t.column === "in_progress");
        if (inProgress) {
          return prev.map((t) =>
            t.id === inProgress.id ? { ...t, column: "review" } : t
          );
        }
        const review = prev.find((t) => t.column === "review");
        if (review) {
          return prev.map((t) =>
            t.id === review.id ? { ...t, column: "completed" } : t
          );
        }
        const todo = prev.find((t) => t.column === "todo");
        if (todo) {
          return prev.map((t) =>
            t.id === todo.id ? { ...t, column: "in_progress" } : t
          );
        }
        // Reset cycle
        return INITIAL_TASKS;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const moveTask = (taskId: string, targetCol: KanbanTask["column"]) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, column: targetCol } : t))
    );
  };

  const totalPoints = tasks.reduce((sum, t) => sum + t.points, 0);
  const completedPoints = tasks
    .filter((t) => t.column === "completed")
    .reduce((sum, t) => sum + t.points, 0);
  const percentDone = Math.round((completedPoints / totalPoints) * 100);

  return (
    <div
      className={cn(
        "rounded-2xl border border-[#CBD6E2] bg-white p-4 sm:p-6 shadow-xl select-none",
        className
      )}
    >
      {/* Board Header Status Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#E7F0FA] flex items-center justify-center text-[#2E5E99]">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-heading font-bold text-sm text-[#0D2440]">
                Sprint 24 — Core Platform Velocity
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-bold">
                Active Sprint
              </span>
            </div>
            <p className="text-xs text-[#5F7083]">
              Drag or click tasks to test live Kanban state transitions.
            </p>
          </div>
        </div>

        {/* Progress & Points Gauge */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-xs font-mono font-bold text-[#0D2440]">
              {completedPoints} / {totalPoints} Story Points
            </div>
            <div className="text-[10px] text-[#5F7083] font-mono">
              Velocity: {percentDone}% Completed
            </div>
          </div>
          <div className="w-24 h-2.5 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
            <motion.div
              className="h-full bg-gradient-to-r from-[#2E5E99] to-[#7BA4D0] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${percentDone}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* 4 Kanban Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {COLUMNS.map((col) => {
          const colTasks = tasks.filter((t) => t.column === col.id);

          return (
            <div
              key={col.id}
              className="rounded-xl border border-slate-200/80 bg-[#F8FAFC] p-3 flex flex-col min-h-[300px]"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/70">
                <span className="text-xs font-bold text-[#0D2440]">{col.label}</span>
                <span
                  className={cn(
                    "px-1.5 py-0.5 rounded-md text-[10px] font-mono font-bold",
                    col.countColor
                  )}
                >
                  {colTasks.length}
                </span>
              </div>

              {/* Tasks List with Layout Animation */}
              <div className="flex-1 flex flex-col gap-2">
                <AnimatePresence mode="popLayout">
                  {colTasks.map((task) => (
                    <motion.div
                      layout
                      key={task.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      className={cn(
                        "group relative rounded-xl border border-slate-200 bg-white p-3 shadow-xs hover:shadow-md transition-all cursor-grab active:cursor-grabbing",
                        task.column === "completed" && "bg-emerald-50/40 border-emerald-200"
                      )}
                      onClick={() => {
                        // Cycle to next column on click
                        const nextIdx =
                          (COLUMNS.findIndex((c) => c.id === task.column) + 1) %
                          COLUMNS.length;
                        moveTask(task.id, COLUMNS[nextIdx].id);
                      }}
                    >
                      {/* Card Metadata */}
                      <div className="flex items-center justify-between gap-1 mb-1.5">
                        <span className="text-[9.5px] font-mono font-bold text-[#2E5E99] bg-[#E7F0FA] px-1.5 py-0.5 rounded">
                          {task.id}
                        </span>
                        <span className="text-[9px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                          {task.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <p className="text-xs font-semibold text-[#0D2440] leading-snug line-clamp-2 mb-2.5">
                        {task.title}
                      </p>

                      {/* Card Footer: Assignee & Story Points */}
                      <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-100">
                        <div className="flex items-center gap-1.5">
                          <div
                            className={cn(
                              "w-4 h-4 rounded-full text-white text-[8px] font-bold flex items-center justify-center",
                              task.avatarBg
                            )}
                          >
                            {task.assignee.charAt(0)}
                          </div>
                          <span className="text-[9.5px] truncate max-w-[80px]">
                            {task.assignee}
                          </span>
                        </div>
                        <span className="font-mono font-bold text-[#0D2440] bg-slate-100 px-1 rounded">
                          {task.points} SP
                        </span>
                      </div>

                      {/* Interactive Hover Advance Arrow */}
                      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded p-0.5 shadow-xs text-[#2E5E99]">
                        <MoveHorizontal className="w-3 h-3" />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {colTasks.length === 0 && (
                  <div className="flex-1 flex items-center justify-center border border-dashed border-slate-200 rounded-lg p-4 text-center">
                    <span className="text-[11px] font-mono text-slate-400">
                      Empty stage
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
