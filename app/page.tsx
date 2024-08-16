// app/page.tsx

"use client";

import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import SkillGrid from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <>
      <Grid />
      <Projects/>
      <SkillGrid />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
