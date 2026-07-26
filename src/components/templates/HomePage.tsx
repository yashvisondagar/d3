import { Header } from "@/components/organisms/Header";
import { Hero } from "@/components/organisms/Hero";
import { ProjectMarquee } from "@/components/organisms/ProjectMarquee";
import { MumbaiMap } from "@/components/organisms/MumbaiMap";
import { ProjectCTA } from "@/components/organisms/ProjectCTA";
import { Values } from "@/components/organisms/Values";
import { ContactFooter } from "@/components/organisms/ContactFooter";
import { ScrollToTop } from "@/components/organisms/ScrollToTop";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProjectMarquee />
        <MumbaiMap />
        <ProjectCTA />
        <Values />
        <ContactFooter />
      </main>
      <ScrollToTop />
    </>
  );
}
