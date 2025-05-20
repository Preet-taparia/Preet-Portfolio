import { BsFillBootstrapFill, BsGithub } from 'react-icons/bs';
import {
  SiCss3,
  SiDocker,
  SiDjango,
  SiExpress,
  SiFlask,
  SiFramer,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVisualstudiocode,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  Bootstrap: <BsFillBootstrapFill size={iconSize} className='text-purple-500' />,
  CSS: <SiCss3 size={iconSize} className='text-blue-300' />,
  Docker: <SiDocker size={iconSize} className='text-blue-400' />,
  Django: <SiDjango size={iconSize} className='text-green-700' />,
  Express: <SiExpress size={iconSize} />,
  Flask: <SiFlask size={iconSize} className='text-gray-600' />,
  'Framer Motion': <SiFramer size={iconSize} className='text-pink-500' />,
  Git: <SiGit size={iconSize} className='text-red-500' />,
  GitHub: <BsGithub size={iconSize} />,
  GraphQL: <SiGraphql size={iconSize} className='text-pink-600' />,
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  Linux: <SiLinux size={iconSize} className='text-orange-500' />,
  MongoDB: <SiMongodb size={iconSize} className='text-green-500' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  Nginx: <SiNginx size={iconSize} className='text-green-500' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  PostgreSQL: <SiPostgresql size={iconSize} className='text-blue-600' />,
  Python: <SiPython size={iconSize} className='text-yellow-300' />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  Redux: <SiRedux size={iconSize} className='text-purple-500' />,
  Socket: <SiSocketdotio size={iconSize} />,
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  'Three.js': <SiThreedotjs size={iconSize} className='text-gray-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  Vercel: <SiVercel size={iconSize} />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  VSCode: <SiVisualstudiocode size={iconSize} className='text-blue-500' />,
};
