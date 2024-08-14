// app/page.tsx

"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import SkillGrid from "@/components/Skills";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto px-5 lg:px-10 ">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      {/* <RecentProjects /> */}
      <Projects/>
      <SkillGrid />
      <Experience />
      <Footer />
    </main>
  );
};

export default Home;
