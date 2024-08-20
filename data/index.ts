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
    img: "/About/b1.svg",
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
    img: "/About/grid.svg",
    spareImg: "/About/b4.svg",
  },

  {
    id: 5,
    title: "Currently building rust powered version control system.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/About/b5.svg",
    spareImg: "/About/grid.svg",
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

// project image dimension 450 x 300

// projext's tech with picture

// { img: "/projectSkills/re.svg", name: "React.js" },
// { img: "/projectSkills/gsap.svg", name: "GSAP" },
// { img: "/projectSkills/tail.svg", name: "Tailwind Css" },
// { img: "/projectSkills/ts.svg", name: "TypeScript" },
// { img: "/projectSkills/three.svg", name: "Three.js" },
// { img: "/projectSkills/bstrap.webp", name: "Bootstrap" },
// { img: "/projectSkills/dj.webp", name: "Django" },
// { img: "/projectSkills/express.png", name: "Express.js" },
// { img: "/projectSkills/flask.png", name: "Flask" },
// { img: "/projectSkills/go.webp", name: "Golang" },
// { img: "/projectSkills/html.png", name: "HTML" },
// { img: "/projectSkills/jinja.webp", name: "Jinja" },
// { img: "/projectSkills/post.webp", name: "Postgres SQL" },
// { img: "/projectSkills/py.png", name: "Python" },
// { img: "/projectSkills/js.jpg", name: "JavaScript" },
// { img: "/projectSkills/tf.webp", name: "TensorFlow" },
// { img: "/projectSkills/", name: "" },
// { img: "/projectSkills/", name: "" },

// 
// { img: "/projectSkills/c.svg", name: "C" },
// { img: "/projectSkills/fm.svg", name: "C" },
// { img: "/projectSkills/stream.svg", name: "Stream" },

export const projects = [
  {
    id: 1,
    title: "Madhyam",
    des: "Platform focused on breaking communication barriers by providing AI tools for sign language translation, audio conversion, and chatbot-based language translation.",
    img: "/Project/madhyam.png",
    icons: [
      { img: "/projectSkills/flask.png", name: "Flask" },
      { img: "/projectSkills/py.png", name: "Python" },
      { img: "/projectSkills/js.jpg", name: "JavaScript" },
      { img: "/projectSkills/tf.webp", name: "TensorFlow" },
      { img: "/projectSkills/bstrap.webp", name: "Bootstrap" },
    ],
    link: "",
    repo: "https://github.com/Preet-taparia/Madhyam-2.0",
    category: "Other",
  },
  {
    id: 2,
    title: "Frictionless Pay",
    des: "A system that enables the tracking of transactions on crypto wallets for invoices which also ensures that customers are paying for their own invoices and attach a reference to each transaction that can be tracked by the billing system.",
    img: "/Project/frictionless.png",
    icons: [
      { img: "/projectSkills/re.svg", name: "React.js" },
      { img: "/projectSkills/express.png", name: "Express.js" },
      { img: "/projectSkills/js.jpg", name: "JavaScript" },
      { img: "/projectSkills/post.webp", name: "Postgres SQL" },
    ],
    link: "",
    repo: "https://github.com/Preet-taparia/formidium",
    category: "Web3",
  },
  {
    id: 3,
    title: "Space Odyssey",
    des: "A web application that combines the engaging content, real-time news, and interactive elements that highlight the beauty and mystery of the cosmos.",
    img: "/Project/cosmic.png",
    icons: [
      { img: "/projectSkills/next.svg", name: "Next.js" },
      { img: "/projectSkills/tail.svg", name: "Tailwind Css" },
      { img: "/projectSkills/three.svg", name: "Three.js" },
     ],
    category: "Frontend",
    link: "",
    repo: "https://github.com/Preet-taparia/Space-website",
  },
  {
    id: 4,
    title: "Contract Smith",
    des: "Your go-to solution for a hassle-free smart contract creation IDE, which is powered by AI and helps you in deploying the contract without any issues.",
    img: "/Project/contactsmith.png",
    icons: [
      { img: "/projectSkills/tail.svg", name: "Tailwind Css" },
      { img: "/projectSkills/ts.svg", name: "TypeScript" },
      { img: "/projectSkills/next.svg", name: "Next.js" },
    ],
    link: "",
    repo: "https://github.com/Preet-taparia/smart_contract_generator",
    category: "Web3",
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
    thumbnail: "/Experience/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance Full Stack Development",
    desc: "Created website for a local school",
    className: "md:col-span-2",
    thumbnail: "/Experience/exp2.svg",
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

export const combinedList = [
  "Space", "Travel", "Chess", "Science",
  "Space", "Travel", "Chess", "Science",
  "Anime", "Marvel", "Music", "Maths",
  "Anime", "Marvel", "Music", "Maths",
];

export const socialMedia = [
  {
    id: 1,
    icon: "github",
    link: "https://github.com/Preet-taparia",
  },
  {
    id: 2,
    icon: "linkedin",
    link: "https://www.linkedin.com/in/preet-taparia/",
  },
  {
    id: 3,
    icon: "codechef",
    link: "https://www.codechef.com/users/preettaparia",
  },
  {
    id: 4,
    icon: "leetcode",
    link: "https://leetcode.com/u/PreetTaparia/",
  },
  {
    id: 5,
    icon: "gfg",
    link: "https://www.geeksforgeeks.org/user/preetta9nx5/",
  },
];
