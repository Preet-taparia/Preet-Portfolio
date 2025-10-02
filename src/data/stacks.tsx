import { BsFillBootstrapFill, BsGithub } from 'react-icons/bs';
import { FaAws } from 'react-icons/fa';
import {
  SiAmazonaws,
  SiCss3,
  SiDjango,
  SiDocker,
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
  SiVisualstudiocode,
  SiVite,
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  Bootstrap: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-300" />,
  Docker: <SiDocker size={iconSize} className="text-blue-400" />,
  Django: <SiDjango size={iconSize} className="text-green-700" />,
  Express: <SiExpress size={iconSize} />,
  Flask: <SiFlask size={iconSize} className="text-gray-600" />,
  'Framer Motion': <SiFramer size={iconSize} className="text-pink-500" />,
  Git: <SiGit size={iconSize} className="text-red-500" />,
  GitHub: <BsGithub size={iconSize} />,
  GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  Linux: <SiLinux size={iconSize} className="text-orange-500" />,
  MongoDB: <SiMongodb size={iconSize} className="text-green-500" />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  Nginx: <SiNginx size={iconSize} className="text-green-500" />,
  'Node.js': <SiNodedotjs size={iconSize} className="text-green-600" />,
  PostgreSQL: <SiPostgresql size={iconSize} className="text-blue-600" />,
  Python: <SiPython size={iconSize} className="text-yellow-300" />,
  'React.js': <SiReact size={iconSize} className="text-sky-500" />,
  React: <SiReact size={iconSize} className="text-sky-500" />,
  Redux: <SiRedux size={iconSize} className="text-purple-500" />,
  SocketIO: <SiSocketdotio size={iconSize} />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-300" />,
  'Three.js': <SiThreedotjs size={iconSize} className="text-gray-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-400" />,
  Vercel: <SiVercel size={iconSize} />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,
  VSCode: <SiVisualstudiocode size={iconSize} className="text-blue-500" />,
  Convex: <SiAmazonaws size={iconSize} className="text-green-700" />, // closest visual
  Clerk: <SiVercel size={iconSize} className="text-gray-700" />,       // placeholder
  'Stream Video': <FaAws size={iconSize} className="text-orange-500" />, // placeholder
  Liveblocks: <SiVercel size={iconSize} className="text-black" />,       // placeholder
  Yjs: <SiVercel size={iconSize} className="text-yellow-700" />,         // placeholder
  Sequelize: <SiJavascript size={iconSize} className="text-yellow-300" />,
  'AWS Lambda': <FaAws size={iconSize} className="text-yellow-500" />,
  'AWS Amplify': <FaAws size={iconSize} className="text-orange-600" />,
  'Gemini API': <SiVercel size={iconSize} className="text-purple-600" />, // placeholder
  OpenCV: <SiPython size={iconSize} className="text-blue-700" />,         // placeholder
  'Speech Recognition API': <SiPython size={iconSize} className="text-gray-500" />,
  Nodemailer: <SiJavascript size={iconSize} className="text-green-600" />,
};
