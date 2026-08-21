import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Feed } from "@/components/feed";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Feed — jujulabs",
  description:
    "What we're currently building — agentic systems, automation, and engineering updates from jujulabs.",
  // Unlinked for now: reachable by direct URL, kept out of search and the nav.
  robots: { index: false, follow: false },
};

export default function FeedPage() {
  return (
    <>
      <Nav />
      <main className="pt-20">
        <Feed />
      </main>
      <Footer />
    </>
  );
}
