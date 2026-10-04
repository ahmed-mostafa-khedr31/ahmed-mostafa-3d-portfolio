type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
    roles: string[];
  };
  social: {
    github: string;
    linkedin: string;
    facebook: string;
    phone: string;
    phoneDisplay: string;
    location: string;
  };
  resume: {
    path: string;
    fileName: string;
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    tech: TSection;
    feedbacks: TSection;
    reviews: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Ahmed Mostafa — Senior Front-End Developer",
    fullName: "Ahmed Mostafa",
    email: "ahmedmostafakhedr31@gmail.com",
  },
  hero: {
    name: "Ahmed Mostafa",
    p: [
      "I build high-performance, scalable web applications",
      "with React, Next.js, and TypeScript",
    ],
    roles: [
      "Senior Front-End Developer",
      "React & Next.js Specialist",
      "Performance & SEO Expert",
      "UI/UX Enthusiast",
    ],
  },
  social: {
    github: "https://github.com/ahmed-mostafa-khedr31",
    linkedin: "https://www.linkedin.com/in/ahmed-mostafa-777b64218",
    facebook: "https://www.facebook.com/ahmedmostafadeveloper",
    phone: "tel:+201090723497",
    phoneDisplay: "+20 109 072 3497",
    location: "Cairo, Egypt",
  },
  resume: {
    path: "/Ahmed_Mostafa_Senior_FrontEnd_Developer.pdf",
    fileName: "Ahmed_Mostafa_Senior_FrontEnd_Developer.pdf",
  },
  contact: {
    p: "Get in touch",
    h2: "Let's Work Together.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "About Me.",
      content: `Senior Frontend Engineer with 5+ years of experience building high-performance, scalable web applications using React.js, Next.js, and TypeScript. I specialize in converting complex WordPress & Elementor websites into modern Next.js architectures while focusing on performance, SEO, and clean code. Expert in React.js, Next.js (App Router), TypeScript, Performance Optimization, Core Web Vitals, and responsive UI/UX. Currently open to Senior Frontend / Frontend Lead opportunities.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    tech: {
      p: "Technologies I work with",
      h2: "Skills.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    reviews: {
      p: "What others say",
      h2: "Reviews.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `A curated selection of professional projects spanning hospitality, e-commerce, real-time auction platforms, and enterprise web applications — built with React, Next.js, and modern frontend technologies.`,
    },
  },
};
