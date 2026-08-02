import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  materialui,
  bootstrap,
  scss,
  vite,
  graphql,
  jest,
} from "../assets";

const devicon = (name: string, variant = "plain") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

// 📌 Navbar Links
export const navLinks: TNavLink[] = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// 📌 Services
const services: TService[] = [
  { title: "Web Development", icon: web },
  { title: "UI/UX Design", icon: creator },
  { title: "Front-End Optimization", icon: mobile },
  { title: "API Integration", icon: backend },
];

// 📌 Technologies — aligned with CV skills
const technologies: TTechnology[] = [
  { name: "HTML 5", icon: html, color: "#E34F26" },
  { name: "CSS 3", icon: css, color: "#1572B6" },
  { name: "JavaScript", icon: javascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: typescript, color: "#3178C6" },
  { name: "React JS", icon: reactjs, color: "#61DAFB" },
  { name: "Next JS", icon: devicon("nextjs"), color: "#ffffff" },
  { name: "Redux Toolkit", icon: redux, color: "#764ABC" },
  { name: "Tailwind CSS", icon: tailwind, color: "#06B6D4" },
  { name: "Sass", icon: scss, color: "#CC6699" },
  { name: "Bootstrap", icon: bootstrap, color: "#7952B3" },
  { name: "Material UI", icon: materialui, color: "#0081CB" },
  { name: "Git", icon: git, color: "#F05032" },
  { name: "Figma", icon: figma, color: "#F24E1E" },
  { name: "Vite", icon: vite, color: "#646CFF" },
  { name: "GraphQL", icon: graphql, color: "#E10098" },
  { name: "Jest", icon: jest, color: "#C21325" },
];

// 📌 Experiences
const experiences: TExperience[] = [
  {
    title: "Senior Front-End Developer",
    companyName: "WhiteGuard — Cairo, Egypt",
    iconLetter: "WG",
    iconBg: "#0284c7",
    date: "Feb 2026 – Present",
    points: [
      "Developing enterprise cybersecurity dashboards using Next.js and React.",
      "Built reusable UI architecture for scalable development.",
      "Optimized performance using SSR and modern rendering strategies.",
      "Integrated secure REST APIs and collaborated with cross-functional teams.",
    ],
  },
  {
    title: "Senior Front-End Developer",
    companyName: "T.I.T. Solutions — Maadi, Egypt",
    iconLetter: "TIT",
    iconBg: "#915EFF",
    date: "Aug 2023 – Feb 2026",
    points: [
      "Led front-end development for ERP and enterprise applications.",
      "Improved Lighthouse scores to 95+ and reduced load time by 35%.",
      "Built reusable component libraries and scalable architecture.",
      "Mentored junior developers and participated in code reviews.",
    ],
  },
  {
    title: "Senior Front-End Developer (Contract-Based Project)",
    companyName: "Null Safety — Istanbul, Turkey",
    iconLetter: "NS",
    iconBg: "#dc2626",
    date: "Mar 2023 – Aug 2023",
    points: [
      "Delivered high-traffic, SEO-optimized web applications using Next.js with SSR and SSG.",
      "Increased organic traffic by 25% through improved rendering strategies and SEO enhancements.",
      "Collaborated with distributed teams across multiple time zones, achieving a 100% sprint delivery rate.",
    ],
  },
  {
    title: "Senior Front-End Developer",
    companyName: "Saudia Auctions — Riyadh, Saudi Arabia",
    iconLetter: "SA",
    iconBg: "#059669",
    date: "Oct 2022 – Mar 2023",
    points: [
      "Developed a real-time online auction platform and admin dashboard.",
      "Built complex dashboards with advanced state management.",
      "Integrated real-time features and secure APIs.",
    ],
  },
  {
    title: "Front-End Developer",
    companyName: "Cyparta — 6th of October, Egypt",
    iconLetter: "CP",
    iconBg: "#4f46e5",
    date: "May 2021 – Sep 2022",
    points: [
      "Developed enterprise React applications.",
      "Improved application performance from 75 to 92.",
      "Built responsive UI with Material UI and Sass.",
    ],
  },
  {
    title: "Front-End Developer",
    companyName: "singleclic — Maadi, Egypt",
    iconLetter: "SC",
    iconBg: "#00cea8",
    date: "Oct 2020 – Mar 2021",
    points: [
      "Converted Figma designs into responsive web applications.",
      "Built reusable forms using Formik and Yup.",
      "Collaborated with designers and backend developers.",
    ],
  },
  {
    title: "Bachelor of Computer Science",
    companyName: "Benha University — Faculty of Computers and Artificial Intelligence, Egypt",
    iconLetter: "BU",
    iconBg: "#ea580c",
    date: "Graduated",
    points: [
      "Bachelor of Computer Science from the Faculty of Computers and Artificial Intelligence.",
    ],
  },
];

// 📌 Testimonials
const testimonials: TTestimonial[] = [];

// 📌 Project Categories for filter
export const projectCategories = [
  "all",
  "hospitality",
  "cruises",
  "event",
  "other",
] as const;

// 📌 Projects
const projects: TProject[] = [
  {
    name: "Dars — Education Admin Dashboard",
    description:
      "Built a comprehensive Arabic RTL admin dashboard for the Dars educational platform, featuring user & curriculum management, booking workflows, financial reports, real-time activity feeds, and data-rich analytics cards.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "dashboard", color: "green-text-gradient" },
      { name: "rtl", color: "pink-text-gradient" },
    ],
    image: "/projects/dars-admin.png",
    sourceCodeLink: "",
    liveDemo: "https://admin.dars.sa/login?returnTo=%2F",
    featured: true,
    category: "other",
  },
  {
    name: "WhiteGuard — Cybersecurity Website",
    description:
      "Developed the enterprise marketing website for WhiteGuard, a MENA cybersecurity company serving banks, fintechs, healthcare, and critical infrastructure — with service pages, industry sections, and SEO-optimized Next.js architecture.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "seo", color: "pink-text-gradient" },
    ],
    image: "/projects/whiteguard.png",
    sourceCodeLink: "",
    liveDemo: "https://whiteguard.io/",
    featured: true,
    category: "other",
  },
  {
    name: "White Hawk — Cybersecurity Platform",
    description:
      "Built the frontend for White Hawk, an AI-powered unified cybersecurity platform that centralizes offensive & defensive security, GRC, asset management, and risk visibility — helping MENA enterprises manage their entire security program in one place.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "dashboard", color: "pink-text-gradient" },
    ],
    image: "/projects/whitehawk.png",
    sourceCodeLink: "",
    liveDemo: "https://whitehawk.io/",
    featured: true,
    category: "other",
  },
  {
    name: "Falak Al Khayer (Auctions)",
    description:
      "Developed a real-time auction platform and dashboard using Next.js and Socket.io for live bidding, with secure Auth/RBAC and optimized rendering for strong SEO and performance scores.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "socket.io", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
    ],
    image: "/projects/1.jpg",
    sourceCodeLink: "",
    liveDemo: "https://falakalkhayer.sa",
    featured: true,
    category: "other",
  },
  {
    name: "Broker.sa",
    description:
      "Architected a real-estate auction system with real-time bidding synchronization, advanced state management, complex authorization, and optimized API integration.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
    ],
    image: "/projects/2.jpg",
    sourceCodeLink: "",
    liveDemo: "https://broker.sa",
    featured: true,
    category: "other",
  },
  {
    name: "Travco Travel Company",
    description:
      "Designed and developed a responsive website for Travco Travel Company, showcasing travel packages, hotel options, and services with an intuitive UI and real-time API integrations.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "api", color: "pink-text-gradient" },
    ],
    image: "/projects/travco.png",
    sourceCodeLink: "",
    liveDemo: "https://travco.com",
    featured: true,
    category: "hospitality",
  },
  {
    name: "Borg Elarab Beach Resort",
    description:
      "Built an SSR Next.js website for Borg Elarab Beach Resort, highlighting accommodations and services with multilingual support and live data integration.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "ssr", color: "green-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
    ],
    image: "/projects/borgelarab.jpg",
    sourceCodeLink: "",
    liveDemo: "https://borgelarabbeachresort.com",
    category: "hospitality",
  },
  {
    name: "Hwaidak Hotels Website",
    description:
      "Designed and developed the Hwaidak Hotels website, showcasing hotels, services, and offers through a responsive layout and user-friendly experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: "/projects/hwaidak.png",
    sourceCodeLink: "",
    liveDemo: "https://hwaidakhotels.com",
    category: "hospitality",
  },
  {
    name: "Orient Hotels Website",
    description:
      "Developed the Orient Hotels website with responsive design and clear navigation to highlight hotels, services, and exclusive offers across devices.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "seo", color: "green-text-gradient" },
      { name: "responsive", color: "pink-text-gradient" },
    ],
    image: "/projects/orient.png",
    sourceCodeLink: "",
    liveDemo: "https://www.orienthg.com",
    category: "hospitality",
  },
  {
    name: "Tawila Island Website",
    description:
      "Developed the Tawila Island website to showcase a luxury five-star resort, unique bungalows, and an exclusive guest experience.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "ui/ux", color: "pink-text-gradient" },
    ],
    image: "/projects/tawila.png",
    sourceCodeLink: "",
    liveDemo: "https://tawila-island.com/",
    category: "hospitality",
  },
  {
    name: "Wings",
    description:
      "Implemented Next.js SSR to boost SEO rankings and increase organic traffic by 25%.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "ssr", color: "green-text-gradient" },
      { name: "seo", color: "pink-text-gradient" },
    ],
    image: "/projects/3.jpg",
    sourceCodeLink: "",
    liveDemo: "https://wingsgroup.travel",
    category: "hospitality",
  },
  {
    name: "Dhara Hotels",
    description:
      "Developed the Dhara Hotels website, showcasing properties, booking features, and a premium hospitality experience.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "booking", color: "pink-text-gradient" },
    ],
    image: "/projects/4.jpg",
    sourceCodeLink: "",
    liveDemo: "https://dharahotels.com/en",
    category: "hospitality",
  },
  {
    name: "Nile Capital Cruises",
    description:
      "Developed the Nile Capital Cruises website for booking luxury Nile journeys, highlighting routes between Luxor and Aswan and Egypt's iconic landmarks.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "booking", color: "pink-text-gradient" },
    ],
    image: "/projects/nile-capital.png",
    sourceCodeLink: "",
    liveDemo: "https://www.nilecapitalcruises.com/en",
    category: "cruises",
  },
  {
    name: "SOHO Events",
    description:
      "Created the event page for Carole Samaha's live concert at SOHO Square, showcasing event details, highlights, and a clear call to action for attendees.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "event", color: "green-text-gradient" },
      { name: "landing", color: "pink-text-gradient" },
    ],
    image: "/projects/event-soho.png",
    sourceCodeLink: "",
    liveDemo: "https://event.soho-sharm.com/ramysabry-20250131",
    category: "event",
  },
  {
    name: "Solargy Website",
    description:
      "Developed the Solargy website to showcase services across EV infrastructure, renewable energy, smart parking, and sustainable construction across the MENA region.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "corporate", color: "pink-text-gradient" },
    ],
    image: "/projects/solargy.png",
    sourceCodeLink: "",
    liveDemo: "https://solargyco.com",
    category: "other",
  },
  {
    name: "Aso2lak Website",
    description:
      "Developed the Aso2lak website for a door-to-door luxury driving service, highlighting expert drivers and 24/7 availability.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nextjs", color: "green-text-gradient" },
      { name: "services", color: "pink-text-gradient" },
    ],
    image: "/projects/aso2lak.png",
    sourceCodeLink: "",
    liveDemo: "https://aso2lak.com",
    category: "other",
  },
  {
    name: "Cleopark Sharm Website",
    description:
      "Developed the Cleopark Sharm website for a Pharaonic-themed water park, highlighting attractions and visitor information.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "entertainment", color: "pink-text-gradient" },
    ],
    image: "/projects/cleoparksharm.jpg",
    sourceCodeLink: "",
    liveDemo: "https://cleoparksharm.com",
    category: "other",
  },
];

export { services, technologies, experiences, testimonials, projects };
