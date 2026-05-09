import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import ChartProof from "@/components/sections/ChartProof";
import SystemParts from "@/components/sections/SystemParts";
import Process from "@/components/sections/Process";
import ThreeQuestions from "@/components/sections/ThreeQuestions";
import Testimonial from "@/components/sections/Testimonial";
import Operators from "@/components/sections/Operators";
import NotFor from "@/components/sections/NotFor";
import Pricing from "@/components/sections/Pricing";
import EightSystems from "@/components/sections/EightSystems";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <ChartProof />
        <SystemParts />
        <Process />
        <ThreeQuestions />
        <Testimonial />
        <Operators />
        <NotFor />
        <Pricing />
        <EightSystems />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
