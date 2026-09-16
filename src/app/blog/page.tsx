import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Sparkles, Clock, ArrowRight, User } from "lucide-react";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { constructMetadata } from "@/lib/seo";
import { articles } from "@/lib/content";

export const metadata: Metadata = constructMetadata({
  title: "SprintDesk Blog — Insights on Velocity, Focus, and Async Teamwork",
  description:
    "Practical engineering and agile leadership articles on sprint estimation, cognitive focus, estimated finish times, and remote collaboration.",
  canonicalUrl: "/blog",
});

export default function BlogPage() {
  const featuredArticle = articles[0];
  const remainingArticles = articles.slice(1);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        {/* Header */}
        <section className="text-center pb-16">
          <Container size="default">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7F0FA] border border-[#7BA4D0]/40 text-xs font-semibold uppercase tracking-wider text-[#0D2440] mb-6">
                <BookOpen className="w-3.5 h-3.5 text-[#2E5E99]" />
                <span>The SprintDesk Publication</span>
              </div>
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0D2440] mb-6">
                Insights for getting work moving.
              </h1>
              <p className="text-base sm:text-lg text-[#5F7083] leading-relaxed">
                Practical perspectives on agile estimation, focus psychology, remote team coordination, and the science of daily finish lines.
              </p>
            </div>
          </Container>
        </section>

        {/* Featured Article */}
        <section className="pb-16">
          <Container size="default">
            <div className="rounded-2xl border-2 border-[#CBD6E2] bg-[#F5F8FB] p-6 sm:p-10 hover:border-[#2E5E99] transition-all duration-300">
              <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
                <Badge variant="sapphire">{featuredArticle.category}</Badge>
                <span className="text-[#5F7083]">{featuredArticle.publishedAt}</span>
                <span className="text-[#5F7083]">•</span>
                <span className="text-[#5F7083] flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featuredArticle.readTime}
                </span>
              </div>

              <Link href={`/blog/${featuredArticle.slug}`}>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#0D2440] hover:text-[#2E5E99] transition-colors mb-4">
                  {featuredArticle.title}
                </h2>
              </Link>

              <p className="text-sm sm:text-base text-[#5F7083] leading-relaxed max-w-3xl mb-6">
                {featuredArticle.excerpt}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-[#CBD6E2]/60">
                <div className="flex items-center gap-3 text-xs">
                  <div className="w-8 h-8 rounded-full bg-[#2E5E99] text-white flex items-center justify-center font-bold text-xs">
                    {featuredArticle.author.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#0D2440]">{featuredArticle.author.name}</div>
                    <div className="text-[#5F7083]">{featuredArticle.author.role}</div>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="text-xs font-bold text-[#2E5E99] hover:underline flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Latest Articles Grid */}
        <section className="py-12">
          <Container size="default">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#7BA4D0] mb-8">
              All Articles & Research
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {remainingArticles.map((art) => (
                <div
                  key={art.slug}
                  className="rounded-xl border border-[#CBD6E2] bg-white p-6 hover:border-[#7BA4D0] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs mb-3">
                      <Badge variant="sapphire" className="text-[10px]">{art.category}</Badge>
                      <span className="text-[#5F7083] text-[11px]">{art.readTime}</span>
                    </div>

                    <Link href={`/blog/${art.slug}`}>
                      <h3 className="font-heading font-bold text-lg text-[#0D2440] hover:text-[#2E5E99] transition-colors mb-3 leading-snug">
                        {art.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-[#5F7083] leading-relaxed mb-6">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#CBD6E2]/40 flex items-center justify-between text-xs">
                    <span className="text-[#5F7083]">{art.publishedAt}</span>
                    <Link
                      href={`/blog/${art.slug}`}
                      className="font-bold text-[#2E5E99] hover:underline flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
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
