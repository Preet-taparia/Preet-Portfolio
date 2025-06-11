import { BiRocket as ContactIcon } from 'react-icons/bi';
import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsInstagram as InstagramIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs';
import { FaDev as DevIcon } from 'react-icons/fa';
import {
  FiBookOpen as LearnIcon,
  FiCoffee as ProjectIcon,
  FiCpu as DashboardIcon,
  FiPieChart as AnalyticsIcon,
  FiRss as BlogIcon,
  FiUser as ProfileIcon,
  FiCode as CodeIcon,
} from 'react-icons/fi';
import { IoHome as HomeIcon } from 'react-icons/io5';

import { MenuItemProps } from '../common/types/menu';

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: 'Home',
    href: '/',
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Home',
    type: 'Pages',
  },
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Dashboard',
    type: 'Pages',
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Projects',
    type: 'Pages',
  },
  {
    title: 'Blog',
    href: '/blog',
    icon: <BlogIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Blog',
    type: 'Pages',
  },
  {
    title: 'Learn',
    href: '/learn',
    icon: <LearnIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Learn',
    type: 'Pages',
  },
  {
    title: 'About',
    href: '/about',
    icon: <ProfileIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: About',
    type: 'Pages',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Contact',
    type: 'Pages',
  },
];

export const MENU_APPS: MenuItemProps[] = [
  {
    title: 'Playground',
    href: '/playground',
    icon: <CodeIcon size={iconSize} />,
    isShow: true,
    isExternal: false,
    eventName: 'Pages: Playground',
    type: 'Pages',
  },
];

export const SOCIAL_MEDIA: MenuItemProps[] = [
  {
    title: 'Email',
    href: 'mailto:preettaparia@gmail.com',
    icon: <EmailIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Contact: Email',
    className: '!bg-emerald-500 hover:brightness-110 shadow-md',
    type: 'Link',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/preet-taparia/',
    icon: <LinkedinIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Linkedin',
    className: '!bg-[#0077B5] hover:brightness-110 shadow-md',
    type: 'Link',
  },
  {
    title: 'Github',
    href: 'https://github.com/Preet-taparia',
    icon: <GithubIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Github',
    className: '!bg-neutral-900 text-white hover:brightness-110 shadow-md',
    type: 'Link',
  },
  {
    title: 'Dev.to',
    href: 'https://dev.to/preettaparia',
    icon: <DevIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Devto',
    className: '!bg-[#0A0A0A] text-white hover:brightness-110 shadow-md',
    type: 'Link',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/preetmaheswari/',
    icon: <InstagramIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'Social: Instagram',
    className:
      '!bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white hover:brightness-110 shadow-md',
    type: 'Link',
  },
];

export const EXTERNAL_LINKS: MenuItemProps[] = [
  {
    title: 'Analytics',
    href: 'https://analytics.aulianza.com/share/LK5kiRuosw9pORLa/preet-portfolio.vercel.app',
    icon: <AnalyticsIcon size={iconSize} />,
    isShow: true,
    isExternal: true,
    eventName: 'External Link: Analytics',
    type: 'Link',
  },
];
