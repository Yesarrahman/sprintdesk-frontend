import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, Sparkles, CheckCircle2, ArrowRight, ExternalLink, BookOpen, Layers } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo";
import { articles } from "@/lib/content";
import { getAppUrl } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return constructMetadata({ title: "Article Not Found" });

  return constructMetadata({
    title: `${article.title} — SprintDesk Engineering Blog`,
    description: article.excerpt,
    canonicalUrl: `/blog/${article.slug}`,
  });
}

// Relevant internal links and citations mapped by slug
const articleMetaLinks: Record<
  string,
  {
    featureHref: string;
    featureTitle: string;
    featureDesc: string;
    citations: { title: string; url: string; author: string }[];
  }
> = {
  "why-traditional-story-points-fail": {
    featureHref: "/sprint-management",
    featureTitle: "Agile Sprint Management & Velocity Tracker",
    featureDesc: "Explore how SprintDesk isolates technical complexity with Fibonacci points and automated burndown trajectories.",
    citations: [
      { title: "The Scrum Guide: Definition of Sprints & Velocity", url: "https://scrumguides.org/", author: "Ken Schwaber & Jeff Sutherland, Scrum.org" },
      { title: "Principles behind the Agile Manifesto", url: "https://agilemanifesto.org/principles.html", author: "Agile Alliance" },
    ],
  },
  "the-context-switching-tax": {
    featureHref: "/personal-task-management",
    featureTitle: "Personal Task Flow & Focus Sanctuary",
    featureDesc: "Protect your deep work state with an isolated personal workspace that never exposes half-drafted notes to corporate boards.",
    citations: [
      { title: "The Cost of Interrupted Work: More Speed and Stress", url: "https://www.ics.uci.edu/~gmark/Home_page/Research.html", author: "Dr. Gloria Mark, Department of Informatics, UC Irvine" },
      { title: "Why is it so hard to do my work? The Challenge of Attention Residue", url: "https://www.jstor.org/stable/25749363", author: "Prof. Sophie Leroy, Organization Science" },
    ],
  },
  "your-workday-needs-a-finish-line": {
    featureHref: "/personal-task-management",
    featureTitle: "Estimated Finish Time Engine",
    featureDesc: "Calculate an honest daily finish line (e.g. 5:40 PM) based on task durations, personal velocity, and calendar meetings.",
    citations: [
      { title: "On Finished and Unfinished Tasks (The Zeigarnik Effect)", url: "https://psychclassics.yorku.ca/Zeigarnik/", author: "Dr. Bluma Zeigarnik, Psychologische Forschung" },
      { title: "Calibrated Estimation & Time Management in Knowledge Work", url: "https://agilemanifesto.org/", author: "Agile Alliance" },
    ],
  },
  "async-sprint-management-guide": {
    featureHref: "/remote-team-task-management",
    featureTitle: "Remote Team Task Management & Command Center",
    featureDesc: "Coordinate across timezones asynchronously with real-time blocker radar and automated finish forecasts.",
    citations: [
      { title: "Asynchronous Coordination in Distributed Software Engineering", url: "https://www.agilealliance.org/", author: "Agile Alliance Research" },
      { title: "Remote Work & Flow State Preservation", url: "https://scrumguides.org/", author: "Scrum.org" },
    ],
  },
  "team-workload-management-blueprint": {
    featureHref: "/team-workload-management",
    featureTitle: "Team Workload Management & Capacity Allocation",
    featureDesc: "Balance capacity across team members visually without intrusive keystroke surveillance software.",
    citations: [
      { title: "Sustainable Pace in High-Velocity Software Delivery", url: "https://agilemanifesto.org/principles.html", author: "Agile Alliance" },
    ],
  },
  "no-code-workflow-automation-agile": {
    featureHref: "/workflow-automation",
    featureTitle: "No-Code Workflow Automations",
    featureDesc: "Set deterministic If-This-Then-That rules that route tasks, escalate blockers, and update story points automatically.",
    citations: [
      { title: "Deterministic State Machines in Agile Workflows", url: "https://scrumguides.org/", author: "Scrum.org" },
    ],
  },
  "the-end-of-status-meetings": {
    featureHref: "/team-task-management",
    featureTitle: "Team Task Management & Command Center",
    featureDesc: "Give engineering leads complete heartbeat visibility without interrupting developers for status reports.",
    citations: [
      { title: "Attention Residue and the Hidden Cost of Morning Status Syncs", url: "https://www.ics.uci.edu/~gmark/", author: "Dr. Gloria Mark, UC Irvine" },
    ],
  },
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const metaLinks = articleMetaLinks[article.slug] || {
    featureHref: "/features",
    featureTitle: "SprintDesk Product Capabilities",
    featureDesc: "Discover how SprintDesk connects personal task management with team sprint velocity.",
    citations: [
      { title: "Agile Software Development Principles", url: "https://agilemanifesto.org/", author: "Agile Alliance" },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: {
      "@type": "Person",
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "SprintDesk",
      logo: "https://sprintdesk.com/brand/sprintdesk-logo.png",
    },
    datePublished: "2026-09-14",
  };

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        <article>
          <Container size="narrow">
            {/* Back link */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5F7083] hover:text-[#0D2440] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
              </Link>
            </div>

            {/* Header */}
            <div className="pb-8 mb-10 border-b border-[#CBD6E2]/60">
              <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                <Badge variant="sapphire">{article.category}</Badge>
                <span className="text-[#5F7083]">{article.publishedAt}</span>
                <span className="text-[#5F7083]">•</span>
                <span className="text-[#5F7083] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {article.readTime}
                </span>
              </div>

              <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0D2440] tracking-tight mb-6 leading-[1.15]">
                {article.title}
              </h1>

              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed mb-6 font-medium">
                {article.excerpt}
              </p>

              {/* Author bar */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#CBD6E2]/40">
                <div className="w-10 h-10 rounded-full bg-[#0D2440] text-white flex items-center justify-center font-bold text-xs">
                  {article.author.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0D2440]">{article.author.name}</div>
                  <div className="text-xs text-[#5F7083]">{article.author.role}</div>
                </div>
              </div>
            </div>

            {/* Body content */}
            <div className="space-y-6 text-sm sm:text-base text-[#162538] leading-relaxed">
              {article.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              {/* Internal Feature Showcase Callout */}
              <div className="my-10 p-6 rounded-2xl bg-[#E7F0FA] border border-[#7BA4D0]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2E5E99] uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" /> Related SprintDesk Capability
                  </div>
                  <h4 className="font-bold text-sm text-[#0D2440]">
                    {metaLinks.featureTitle}
                  </h4>
                  <p className="text-xs text-[#5F7083] mt-0.5 max-w-md">
                    {metaLinks.featureDesc}
                  </p>
                </div>
                <Link
                  href={metaLinks.featureHref}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2E5E99] text-white text-xs font-bold hover:bg-[#163359] transition-colors shrink-0"
                >
                  Explore Feature <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Authoritative External Citations Box */}
              <div className="my-10 p-5 rounded-xl bg-[#F8FAFC] border border-[#CBD6E2]">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#2E5E99] mb-3">
                  <BookOpen className="w-3.5 h-3.5" /> Academic & Industry References
                </div>
                <ul className="space-y-2 text-xs text-[#5F7083]">
                  {metaLinks.citations.map((c, ci) => (
                    <li key={ci} className="flex items-start gap-2">
                      <ExternalLink className="w-3.5 h-3.5 text-[#2E5E99] shrink-0 mt-0.5" />
                      <span>
                        <a
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#0D2440] hover:underline"
                        >
                          {c.title}
                        </a>{" "}
                        — {c.author}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-14 pt-8 border-t border-[#CBD6E2]/60">
              <h3 className="font-heading font-extrabold text-xl text-[#0D2440] mb-6">
                Related Articles & Playbooks
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}`}
                    className="p-4 rounded-xl border border-[#CBD6E2] bg-white hover:border-[#7BA4D0] hover:shadow-sm transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase text-[#2E5E99] bg-[#E7F0FA] px-1.5 py-0.5 rounded">
                        {rel.category}
                      </span>
                      <h4 className="font-heading font-bold text-sm text-[#0D2440] mt-2 line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold text-[#2E5E99] mt-3 inline-flex items-center gap-1">
                      Read Guide <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contextual CTA */}
            <div className="mt-14 p-8 rounded-2xl bg-[#0D2440] text-white text-center shadow-xl">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white mb-2">
                Experience the difference in SprintDesk.
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD6E2] max-w-xl mx-auto mb-6">
                Organize your personal tasks privately and manage team velocity in one connected workspace.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button
                  variant="pill-primary"
                  size="md"
                  href={getAppUrl("/signup")}
                  className="bg-[#2E5E99] hover:bg-[#3D78BE] text-white text-xs font-bold px-6"
                >
                  Start Free Workspace →
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="/features"
                  className="border-white/20 text-white hover:bg-white/10 text-xs font-bold"
                >
                  See All Features
                </Button>
              </div>
            </div>
          </Container>
        </article>
      </main>

      <Footer />
    </div>
  );
}
