import Breakline from '@/common/components/elements/Breakline';

// import BlogPreview from './BlogPreview';
import Introduction from './Introduction';
import Services from './Services';
import SkillsSection from './SkillsSection';
import ProjectPreview from './ProjectPreview';


const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className='mb-7 mt-8' />
      <SkillsSection />
      <Breakline className='my-8' />
      <ProjectPreview />
      <Breakline className='my-8' />
      <Services />
    </>
  );
};

export default Home;
