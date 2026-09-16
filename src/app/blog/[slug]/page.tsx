import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Share2, Sparkles, CheckCircle2 } from "lucide-react";
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
    title: article.title,
    description: article.excerpt,
    canonicalUrl: `/blog/${article.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

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
      logo: "https://sprintdesk.com/logo.png",
    },
    datePublished: "2026-09-14",
  };

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

              <div className="my-10 p-6 rounded-2xl bg-[#E7F0FA] border border-[#7BA4D0]/40">
                <div className="flex items-center gap-2 text-xs font-bold text-[#2E5E99] uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" /> The SprintDesk Takeaway
                </div>
                <p className="text-xs sm:text-sm text-[#0D2440] leading-relaxed font-medium">
                  High-velocity teams operate at their best when personal focus is protected as a private sanctuary, while shared sprint boards reflect realistic complexity and automated blocker detection.
                </p>
              </div>
            </div>

            {/* Contextual CTA */}
            <div className="mt-16 p-8 rounded-2xl bg-[#0D2440] text-white text-center">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                Experience the difference in SprintDesk.
              </h3>
              <p className="text-xs sm:text-sm text-[#CBD6E2] max-w-xl mx-auto mb-6">
                Organize your personal tasks privately and manage team velocity in one connected workspace.
              </p>
              <Button
                variant="primary"
                size="md"
                href={getAppUrl("/signup")}
                className="bg-[#2E5E99] hover:bg-[#3d72b5] text-white text-xs font-semibold"
              >
                Start Free Workspace →
              </Button>
            </div>
          </Container>
        </article>
      </main>

      <Footer />
    </div>
  );
}
