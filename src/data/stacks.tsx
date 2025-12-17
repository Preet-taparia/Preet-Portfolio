import { BsFillBootstrapFill, BsGithub } from 'react-icons/bs';
import {
  SiCss3,
  SiDjango,
  SiDocker,
  SiExpress,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
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

import Image from 'next/image';

type LogoImageProps = {
  src: string;
  alt: string;
  size?: number;
};

export const LogoImage = ({ src, alt, size = 20 }: LogoImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={size}
    height={size}
    className="object-contain"
  />
);

export type StacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: StacksProps = {
  // Core Web
  Bootstrap: <BsFillBootstrapFill size={iconSize} className="text-purple-500" />,
  CSS: <SiCss3 size={iconSize} className="text-blue-500" />,
  JavaScript: <SiJavascript size={iconSize} className="text-yellow-400" />,
  TypeScript: <SiTypescript size={iconSize} className="text-blue-600" />,

  // Frameworks
  React: <SiReact size={iconSize} className="text-sky-500" />,
  'React.js': <SiReact size={iconSize} className="text-sky-500" />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  Redux: <SiRedux size={iconSize} className="text-purple-500" />,
  TailwindCSS: <SiTailwindcss size={iconSize} className="text-cyan-400" />,
  'Three.js': <SiThreedotjs size={iconSize} />,
  Vite: <SiVite size={iconSize} className="text-purple-500" />,

  // Backend
  'Node.js': <SiNodedotjs size={iconSize} className="text-green-600" />,
  Express: <SiExpress size={iconSize} />,
  Django: <SiDjango size={iconSize} className="text-green-700" />,
  Flask: (
    <LogoImage
      src="/images/logos/Flask.png"
      alt="Flask"
      size={iconSize}
    />
  ),

  // Databases
  MongoDB: <SiMongodb size={iconSize} className="text-green-500" />,
  PostgreSQL: <SiPostgresql size={iconSize} className="text-blue-600" />,
  Sequelize: (
    <LogoImage
      src="/images/logos/sequelize.svg"
      alt="Sequelize"
      size={iconSize}
    />
  ),

  // DevOps / Infra
  Docker: <SiDocker size={iconSize} className="text-blue-400" />,
  Nginx: <SiNginx size={iconSize} className="text-green-600" />,
  Linux: <SiLinux size={iconSize} />,
  Vercel: <SiVercel size={iconSize} />,

  // AWS
  'AWS Lambda': (
    <LogoImage
      src="/images/logos/aws-lambda.svg"
      alt="AWS Lambda"
      size={iconSize}
    />
  ),
  'AWS Amplify': (
    <LogoImage
      src="/images/logos/aws-amplify.svg"
      alt="AWS Amplify"
      size={iconSize}
    />
  ),

  // APIs / Services
  Convex: (
    <LogoImage
      src="/images/logos/convex.svg"
      alt="Convex"
      size={iconSize}
    />
  ),
  Clerk: (
    <LogoImage
      src="/images/logos/clerk.svg"
      alt="Clerk"
      size={iconSize}
    />
  ),
  Liveblocks: (
    <LogoImage
      src="/images/logos/liveblocks.svg"
      alt="Liveblocks"
      size={iconSize}
    />
  ),
  'Stream Video': (
    <LogoImage
      src="/images/logos/stream.png"
      alt="Stream Video"
      size={iconSize}
    />
  ),
  Yjs: (
    <LogoImage
      src="/images/logos/yjs.png"
      alt="Yjs"
      size={iconSize}
    />
  ),

  // AI / CV
  'Gemini API': (
    <LogoImage
      src="/images/logos/gemini-color.svg"
      alt="Gemini API"
      size={iconSize}
    />
  ),
  OpenCV: (
    <LogoImage
      src="/images/logos/opencv.svg"
      alt="OpenCV"
      size={iconSize}
    />
  ),

  // Tooling
  Git: <SiGit size={iconSize} className="text-red-500" />,
  GitHub: <BsGithub size={iconSize} />,
  GraphQL: <SiGraphql size={iconSize} className="text-pink-600" />,
  SocketIO: <SiSocketdotio size={iconSize} />,
  VSCode: <SiVisualstudiocode size={iconSize} className="text-blue-500" />,
};
