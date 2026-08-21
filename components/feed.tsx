import { posts } from "@/lib/data";
import { SectionHead } from "./section-head";
import { SectionReveal } from "./section-reveal";

export function Feed() {
  return (
    <section id="feed" className="px-6 py-24 sm:px-10 sm:py-32">
      <SectionReveal className="mx-auto max-w-6xl">
        <SectionHead label="Feed" title="What we're working on." />

        <div className="mt-16 border-t border-border">
          {posts.map((post) => (
            <article
              key={post.title}
              className="grid gap-4 border-b border-border py-10 sm:grid-cols-12 sm:gap-10"
            >
              <div className="sm:col-span-3">
                <p className="font-mono text-xs text-muted">{post.date}</p>
                <p className="eyebrow mt-2 text-accent">{post.tag}</p>
              </div>

              <div className="sm:col-span-9">
                <h3 className="display text-[1.375rem] sm:text-[1.75rem]">
                  {post.title}
                </h3>
                <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
