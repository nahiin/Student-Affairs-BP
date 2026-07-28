import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Schedule } from "@/components/site/Schedule";
import { Presenters } from "@/components/site/Presenters";
import { FeaturedSeminar } from "@/components/site/FeaturedSeminar";
import { WhyAttend } from "@/components/site/WhyAttend";
import { Venue } from "@/components/site/Venue";
import { Registration } from "@/components/site/Registration";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <Presenters />
        <Schedule />
        <FeaturedSeminar />
        <WhyAttend />
        <Venue />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
