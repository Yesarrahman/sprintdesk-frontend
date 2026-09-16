import { Metadata } from "next";
import Link from "next/link";
import { FileText, Sparkles, ArrowRight, CheckCircle2, Bookmark } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo";
import { getAppUrl } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Agile & Sprint Planning Guides — SprintDesk",
  description:
    "Comprehensive, step-by-step guides for engineering leads, scrum masters, and developers on sprint planning, story points, and workload estimation.",
  canonicalUrl: "/guides",
});

const guides = [
  {
    title: "The Comprehensive Guide to Sprint Capacity & Story Points",
    tag: "Agile Methodology",
    readTime: "12 min read",
    description:
      "A complete operational handbook for engineering leads on sizing tasks with Fibonacci story points, establishing historic velocity baselines, and accounting for personal meeting overhead.",
    chapters: ["1. The Math of Story Points", "2. Avoiding the 'Points = Hours' Trap", "3. Setting Up Assignee Swimlanes", "4. Real-time Burndown Tracking"],
    href: "/sprint-management",
  },
  {
    title: "The Architecture of Daily Finish Time Estimation",
    tag: "Productivity Science",
    readTime: "10 min read",
    description:
      "How to transform unbounded to-do lists into mathematically realistic daily work schedules using velocity modifiers and calendar buffer calculations.",
    chapters: ["1. The Cognitive Psychology of Finish Lines", "2. The 3-Bucket Capture Method", "3. Dynamic Velocity Adjusters", "4. Guilt-Free Log-Off Habits"],
    href: "/personal-task-management",
  },
  {
    title: "Building an Async Engineering Culture",
    tag: "Remote Leadership",
    readTime: "14 min read",
    description:
      "Step-by-step blueprint for eliminating synchronous status meetings, standardizing acceptance criteria, and leveraging event-driven automations across timezones.",
    chapters: ["1. The True Cost of Standups", "2. Designing Self-Documenting Cards", "3. Automated Blocker Escalation", "4. Multi-Zone Release Handoffs"],
    href: "/remote-team-task-management",
  },
];

export default function GuidesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        <section className="text-center pb-16">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <Bookmark className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>Pillar Engineering Handbooks</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Sprint planning guides built for modern builders.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed">
                In-depth blueprints for high-velocity teams looking to eliminate administrative bureaucracy and ship on schedule.
              </p>
            </div>
          </Container>
        </section>

        <section className="pb-24">
          <Container size="default">
            <div className="space-y-8 max-w-4xl mx-auto">
              {guides.map((guide, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#CBD6E2] bg-white p-6 sm:p-8 hover:border-[#2E5E99] hover:shadow-lg transition-all"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <Badge variant="sapphire">{guide.tag}</Badge>
                    <span className="text-xs text-[#5F7083]">{guide.readTime}</span>
                  </div>

                  <h2 className="font-heading font-bold text-2xl text-[#0D2440] mb-3">
                    {guide.title}
                  </h2>

                  <p className="text-sm text-[#5F7083] leading-relaxed mb-6">
                    {guide.description}
                  </p>

                  <div className="p-4 rounded-xl bg-[#F5F8FB] border border-[#CBD6E2]/50 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0D2440] block mb-2">
                      Guide Chapters Included:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#5F7083]">
                      {guide.chapters.map((ch, i) => (
                        <span key={i} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E5E99]" /> {ch}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#CBD6E2]/50">
                    <span className="text-xs text-[#7BA4D0]">Free Resource • No registration required</span>
                    <Button variant="primary" size="sm" href={guide.href} className="text-xs font-semibold">
                      Read Blueprint <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
