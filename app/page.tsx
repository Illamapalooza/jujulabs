import { Nav } from "@/components/nav";
import { Rail } from "@/components/rail";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Rail />
      <div className="lg:pl-60">
        <main>
          <Hero />
          <Services />
          <Work />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
