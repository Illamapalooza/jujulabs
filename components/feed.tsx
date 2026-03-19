import { posts } from "@/lib/data";
import { SectionReveal } from "./section-reveal";

export function Feed() {
  return (
    <section id="feed" className="px-6 py-24 sm:py-32">
      <SectionReveal className="mx-auto max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-widest text-muted">
          Feed
        </p>

        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          What we&apos;re working on.
        </h2>

        <div className="mt-12 space-y-6">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group border-l-2 border-border pl-6 transition-colors hover:border-foreground/30"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-semibold tracking-tight">
                  {post.title}
                </h3>
                <p className="font-mono text-xs text-muted">{post.date}</p>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-muted">
                {post.description}
              </p>

              <span className="mt-3 inline-block rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted">
                {post.tag}
              </span>
            </article>
          ))}
        </div>
      </SectionReveal>
    </section>
  );
}
