export const navItems = [
  { name: "Home", link: "#hero" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#Projects" },
  { name: "Skills", link: "#skills" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm Flexible with other time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Hobbies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "",
    description: "Achievements",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building rust powered version control system.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    icons: [
      { img: "/re.svg", name: "Re.js" },
      { img: "/tail.svg", name: "Tailwind.css" },
      { img: "/ts.svg", name: "TS" },
      { img: "/three.svg", name: "Three" },
      { img: "/fm.svg", name: "C" },
    ],
    link: "/ui.earth.com",
    category: "Web",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends. adasd sdasd xcz adsad sdasa awqwr cxz vx.",
    img: "/p2.svg",
    icons: [
      { img: "/next.svg", name: "Next.js" },
      { img: "/tail.svg", name: "Tailwind.css" },
      { img: "/ts.svg", name: "TS" },
      { img: "/stream.svg", name: "Stream" },
      { img: "/c.svg", name: "C" },
    ],
    link: "/ui.yoom.com",
    repo: "afasfs",
    category: "Other",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack. adasd sdasd xcz adsad sdasa awqwr cxz vx",
    img: "/p3.svg",
    icons: [
      { img: "/re.svg", name: "Next.js" },
      { img: "/tail.svg", name: "RE.css" },
      { img: "/ts.svg", name: "TS" },
      { img: "/three.svg", name: "Stream" },
      { img: "/c.svg", name: "C" },
    ],
    category: "App",
    link: "a",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    icons: [
      { img: "/next.svg", name: "Next.js" },
      { img: "/tail.svg", name: "GSAP.css" },
      { img: "/ts.svg", name: "TS" },
      { img: "/three.svg", name: "Stream" },
      { img: "/gsap.svg", name: "C" },
    ],
    link: "/ui.apple.com",
    category: "Web",
  },
];

export const skills = [
  { title: "HTML" },
  { title: "CSS" },
  { title: "Bootstrap" },
  { title: "Tailwind" },
  { title: "JavaScript" },
  { title: "Python" },
  { title: "TypeScript" },
  { title: "React.js" },
  { title: "Next.js" },
  { title: "Node.js" },
  { title: "Express.js" },
  { title: "Django" },
  { title: "Flask" },
  { title: "FastAPI" },
  { title: "MongoDB" },
  { title: "MySQL" },
  { title: "Redis" },
];

export const workExperience = [
  {
    id: 1,
    title: "Teaching Assistant (C Prgramming)",
    desc: "Mentored juniors to gain practical knoweldge about both the fundamenatls of programming and C language.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Full Stack Development",
    desc: "Created website for a local school",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const achievements = [
  {
    name: "Hackathon",
    detail: "Second Runner Up",
    organisation: "Formidium",
  },
  {
    name: "Competitive Programming",
    detail: "2 Star",
    organisation: "Code Chef",
  },
  {
    name: "Hackathon",
    detail: "Top 5",
    organisation: "JKLU",
  },
  {
    name: "HacktoberFest Completed",
    detail: "Completed",
    organisation: "HacktoberFest",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
