import { ArrowRight, Inbox, CheckSquare, Kanban, Calendar, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { GsapReveal } from "@/components/marketing/gsap-effects";

const steps = [
  { icon: Inbox, label: "Capture thoughts" },
  { icon: CheckSquare, label: "Triage tasks" },
  { icon: Kanban, label: "Run sprints" },
  { icon: Calendar, label: "See deadlines" },
  { icon: Zap, label: "Automate work" },
];

export function ProofStrip() {
  return (
    <div className="border-y border-[#CBD6E2] bg-white py-4 overflow-x-auto">
      <Container size="default">
        <GsapReveal duration={0.6} y={15}>
          <div className="flex items-center justify-between min-w-[680px] text-xs font-semibold text-[#162538]">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-[#E7F0FA] text-[#2E5E99] flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span>{step.label}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#CBD6E2] ml-4 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </GsapReveal>
      </Container>
    </div>
  );
}
