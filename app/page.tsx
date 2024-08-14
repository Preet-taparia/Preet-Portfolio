// app/page.tsx

"use client";

import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import SkillGrid from "@/components/Skills";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <>
      <Grid />
      {/* <RecentProjects /> */}
      <Projects/>
      <SkillGrid />
      <Experience />
      <Footer />
    </>
  );
};

export default Home;
