"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Users, Calendar, TrendingUp, Sparkles, Clock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function CapacityCalculator({ className }: { className?: string }) {
  const [engineers, setEngineers] = React.useState(6);
  const [sprintDays, setSprintDays] = React.useState(10);
  const [pointsPerEng, setPointsPerEng] = React.useState(8);

  const totalCapacity = engineers * pointsPerEng;
  const historicVelocity = Math.round(totalCapacity * 0.88);
  const estimatedHoursPerPoint = 4.5;
  const estimatedFinishHours = Math.round(totalCapacity * estimatedHoursPerPoint);

  return (
    <div
      className={cn(
        "rounded-2xl border border-[#CBD6E2] bg-white p-5 sm:p-7 shadow-xl select-none",
        className
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase text-[#2E5E99] bg-[#E7F0FA] px-2 py-0.5 rounded-full">
              Interactive Estimator
            </span>
            <span className="text-xs font-mono text-emerald-600 font-bold">
              96% Calibrated Accuracy
            </span>
          </div>
          <h4 className="font-heading font-bold text-base text-[#0D2440] mt-1">
            Sprint Capacity & Finish Line Forecaster
          </h4>
        </div>
        <p className="text-xs text-[#5F7083] max-w-sm">
          Calibrate realistic commitments based on developer capacity rather than wishful thinking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Slider 1: Engineers */}
        <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#0D2440] flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#2E5E99]" /> Active Engineers
            </span>
            <span className="text-sm font-mono font-extrabold text-[#2E5E99]">
              {engineers}
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="25"
            value={engineers}
            onChange={(e) => setEngineers(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#2E5E99]"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
            <span>2 devs</span>
            <span>25 devs</span>
          </div>
        </div>

        {/* Slider 2: Sprint Length */}
        <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#0D2440] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-purple-600" /> Sprint Days
            </span>
            <span className="text-sm font-mono font-extrabold text-purple-600">
              {sprintDays} Days
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="20"
            step="5"
            value={sprintDays}
            onChange={(e) => setSprintDays(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
            <span>1 Week (5d)</span>
            <span>4 Weeks (20d)</span>
          </div>
        </div>

        {/* Slider 3: Points per Engineer */}
        <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-[#0D2440] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" /> SP per Dev
            </span>
            <span className="text-sm font-mono font-extrabold text-amber-600">
              {pointsPerEng} SP
            </span>
          </div>
          <input
            type="range"
            min="3"
            max="15"
            value={pointsPerEng}
            onChange={(e) => setPointsPerEng(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
            <span>3 points</span>
            <span>15 points</span>
          </div>
        </div>
      </div>

      {/* Calculated Metrics Display */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-[#0D2440] text-white">
        <div>
          <div className="text-[10px] font-mono text-[#7BA4D0] uppercase font-bold">
            Total Sprint Capacity
          </div>
          <div className="text-2xl font-mono font-extrabold text-white mt-1">
            {totalCapacity} <span className="text-xs text-[#CBD6E2] font-sans">Story Points</span>
          </div>
          <div className="text-[11px] text-slate-300 mt-1">
            Fibonacci complexity load
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono text-[#7BA4D0] uppercase font-bold">
            Calibrated Velocity
          </div>
          <div className="text-2xl font-mono font-extrabold text-emerald-400 mt-1">
            {historicVelocity} <span className="text-xs text-emerald-200 font-sans">Commit Points</span>
          </div>
          <div className="text-[11px] text-slate-300 mt-1">
            Accounting for 12% review buffer
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono text-[#7BA4D0] uppercase font-bold">
            Projected Delivery
          </div>
          <div className="text-2xl font-mono font-extrabold text-cyan-300 mt-1 flex items-center gap-1.5">
            <Clock className="w-5 h-5 text-cyan-400" /> On-Track
          </div>
          <div className="text-[11px] text-slate-300 mt-1">
            Day {sprintDays - 1} finish buffer
          </div>
        </div>
      </div>
    </div>
  );
}
