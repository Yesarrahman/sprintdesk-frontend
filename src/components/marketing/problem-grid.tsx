import { FileQuestion, AlertOctagon, MessageSquareX, Shuffle, EyeOff, CheckCircle2, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { getAppUrl } from "@/lib/utils";
import Link from "next/link";

const problems = [
  {
    num: "PROBLEM 01",
    tag: "CAPTURE FRICTION",
    title: "The Notebook Mess",
    description:
      "You jot down brilliant ideas in Apple Notes, Slack DMs, or paper pads. But without a dedicated triage bridge, those thoughts never make it into sprint reality.",
    icon: FileQuestion,
  },
  {
    num: "PROBLEM 02",
    tag: "FOCUS DESTRUCTION",
    title: "The Priority Avalanche",
    description:
      "When everything on a shared corporate board is marked 'P0 Urgent', individual focus collapses. Developers end up working on whoever pinged them last.",
    icon: AlertOctagon,
  },
  {
    num: "PROBLEM 03",
    tag: "COMMUNICATION OVERHEAD",
    title: "3 P.M. Status Storms",
    description:
      "Endless afternoon 'quick syncs' and Slack threads ask: 'Are we on track?' because nobody has an automated, trustworthy finish-line estimate.",
    icon: MessageSquareX,
  },
  {
    num: "PROBLEM 04",
    tag: "COGNITIVE DRAIN",
    title: "Context-Switching Tax",
    description:
      "Jumping across six different tools just to log progress, read an issue, and update a calendar bleeds away up to 40% of productive engineering hours.",
    icon: Shuffle,
  },
  {
    num: "PROBLEM 05",
    tag: "DEADLINE BLINDSIDERS",
    title: "Silent Sprint Blockers",
    description:
      "Critical dependencies sit hidden in ticket comments until Friday sprint review, transforming predictable releases into weekend fire-drills.",
    icon: EyeOff,
  },
];

export function ProblemGrid() {
  return (
    <section className="py-24 sm:py-32 bg-[#FFFFFF]">
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#2E5E99] mb-3">
            Why Traditional Tools Fail
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#0D2440] mb-5">
            What's slowing your sprint down?
          </h2>
          <p className="text-base text-[#5F7083] leading-relaxed">
            High-output engineering and product teams don't suffer from a lack of hard work. They suffer from fragmented systems that split personal focus and team execution into conflicting silos.
          </p>
        </div>

        {/* 6-Card Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.num}
                className="rounded-xl border border-[#CBD6E2] bg-white p-6 hover:border-[#7BA4D0] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-bold tracking-wider mb-4">
                    <span className="text-[#5F7083]">{problem.num}</span>
                    <span className="text-[#2E5E99] bg-[#E7F0FA] px-2 py-0.5 rounded">
                      {problem.tag}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0D2440] mb-2.5">
                    {problem.title}
                  </h3>
                  <p className="text-xs text-[#5F7083] leading-relaxed">
                    {problem.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#CBD6E2]/40 text-[11px] font-semibold text-[#2E5E99] flex items-center gap-1">
                  <span>How SprintDesk solves this</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}

          {/* Card 06: The SprintDesk Solution (High-Contrast Navy Card) */}
          <div className="rounded-xl border border-[#1E3A5F] bg-[#0D2440] text-white p-6 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center justify-between text-[11px] font-bold tracking-wider mb-4">
                <span className="text-[#7BA4D0]">THE SPRINTDESK WAY</span>
                <span className="bg-[#2E5E99] text-white px-2 py-0.5 rounded">
                  UNIFIED
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                Capture privately. Execute collaboratively.
              </h3>
              <p className="text-xs text-[#CBD6E2] leading-relaxed mb-4">
                SprintDesk provides a private capture buffer for raw ideas, transforms them into structured personal flow, and rolls them into team sprint velocity only when ready.
              </p>
              <div className="space-y-2 text-xs text-[#E7F0FA]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7BA4D0]" />
                  <span>Real-time estimated finish time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7BA4D0]" />
                  <span>Zero-noise personal focus space</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7BA4D0]" />
                  <span>Automated blocker escalation</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#1E3A5F]">
              <Link
                href={getAppUrl("/signup")}
                className="text-xs font-bold text-[#7BA4D0] hover:text-white flex items-center justify-between"
              >
                <span>Experience the difference</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
