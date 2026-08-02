import ContactForm from "./components/ContactForm";
import Counters from "./components/Counters";
import Typewriter from "./components/Typewriter";

const services = [
  {
    title: "Web Development",
    description:
      "With over 5 years of experience, I specialize in building responsive, scalable web applications using modern technologies like React, Node.js, and RESTful APIs. I deliver fully functional websites.",
  },
  {
    title: "UI/UX Design",
    description:
      "I create intuitive, user-centered designs that enhance user experience and engagement. Skilled in Figma, Sketch, and Adobe XD, I focus on clean, accessible, and responsive designs tailored to your brand.",
  },
  {
    title: "Front-End Optimization",
    description:
      "I improve page loading speed and performance by optimizing code, images, and assets. Using best practices and tools like Lighthouse, I ensure your site runs smoothly and efficiently.",
  },
  {
    title: "API Integration",
    description:
      "I have extensive experience integrating third-party APIs for functionalities such as payment processing, social media, and data retrieval, ensuring seamless connections between front-end and back-end systems.",
  },
  {
    title: "Maintenance and Support",
    description:
      "I offer ongoing maintenance and support to ensure your website or application remains up-to-date and secure. This includes regular updates, bug fixes, and performance enhancements.",
  },
];

const workHistory = [
  {
    company: "T.I.T. Solutions",
    role: "Senior Front-End Developer",
    date: "Aug 2023 – Present | Maadi, Egypt",
    bullets: [
      "Led front-end development for large-scale e-commerce and ERP platforms, managing a team of 5 engineers.",
      "Improved application load time by 35% and achieved Lighthouse SEO scores of 95+ through performance optimization.",
      "Reduced JavaScript bundle size by 30% using code splitting and build optimizations.",
      "Architected scalable, reusable component libraries using React.js and TypeScript.",
      "Mentored junior developers and enforced best practices and clean code standards across the team.",
    ],
  },
  {
    company: "Null Safety",
    role: "Senior Front-End Developer (Contract-Based Project)",
    date: "Mar 2023 – Aug 2023 | Istanbul, Turkey",
    bullets: [
      "Delivered high-traffic, SEO-optimized web applications using Next.js with SSR and SSG.",
      "Increased organic traffic by 25% through improved rendering strategies and SEO enhancements.",
      "Collaborated with distributed teams across multiple time zones, achieving a 100% sprint delivery rate.",
    ],
  },
  {
    company: "Saudia Auctions",
    role: "Senior Front-End Developer",
    date: "Oct 2022 – Mar 2023 | Riyadh, Saudi Arabia",
    bullets: [
      "Architected and developed a complete online auction ecosystem including a public bidding platform and admin dashboard.",
      "Implemented real-time bidding interfaces and dynamic data synchronization.",
      "Built advanced dashboard modules handling large datasets with complex state management.",
    ],
  },
  {
    company: "Cyparta",
    role: "Front-End Developer",
    date: "May 2021 – Sep 2022 | 6th of October, Egypt",
    bullets: [
      "Developed scalable front-end applications using React, Redux Toolkit, MUI, and Sass.",
      "Improved overall performance score from 75 to 92 through bundle optimization and refactoring.",
    ],
  },
  {
    company: "Singleclic",
    role: "Front-End Developer",
    date: "Oct 2020 – Mar 2021 | Maadi, Egypt",
    bullets: [
      "Built responsive SPA interfaces from Figma and Adobe XD designs.",
      "Reduced design-to-code delivery time by 30%.",
      "Implemented Formik & Yup for form validation, reducing user input errors by 40%.",
    ],
  },
];

const education = [
  {
    title: "Bachelor Of Computer Science",
    subtitle: "Banha University",
    date: "2021",
    description: "Faculty Of Computer and Artificial Intelligence.",
  },
  {
    title: "JavaScript (Basic) Certificate",
    subtitle: "HackerRank",
    date: "2022",
    description: "Passed The HackerRank Skill Certification Test.",
    linkUrl: "https://www.hackerrank.com/certificates/166ea6440798",
  },
];

const projects = [
  {
    title: "Travco Travel Company",
    description:
      "I designed and developed a responsive website for Travco Travel Company, showcasing travel packages, hotel options, and services with an intuitive UI and real-time API integrations.",
    image: "/img/works/travco.png",
    link: "https://travco.com",
    category: "Hospitality",
    clamp: true,
  },
  {
    title: "Borg Elarab Beach Resort",
    description:
      "I built an SSR Next.js website for Borg Elarab Beach Resort, highlighting accommodations and services with multilingual support and live data integration.",
    image: "/img/works/borgelarab.jpg",
    link: "https://borgelarabbeachresort.com",
    category: "Hospitality",
    clamp: true,
  },
  {
    title: "Hwaidak Hotels Website",
    description:
      "I designed and developed the Hwaidak Hotels website, showcasing hotels, services, and offers through a responsive layout and user-friendly experience.",
    image: "/img/works/hwaidak.png",
    link: "https://hwaidakhotels.com",
    category: "Hospitality",
    clamp: true,
  },
  {
    title: "Orient Hotels Website",
    description:
      "I developed the Orient Hotels website with responsive design and clear navigation to highlight hotels, services, and exclusive offers across devices.",
    image: "/img/works/orient.png",
    link: "https://www.orienthg.com",
    category: "Hospitality",
    clamp: false,
  },
  {
    title: "Nile Capital Cruises",
    description:
      "I developed the Nile Capital Cruises website for booking luxury Nile journeys, highlighting routes between Luxor and Aswan and Egypt’s iconic landmarks.",
    image: "/img/works/nile-capital.png",
    link: "https://www.nilecapitalcruises.com/en",
    category: "Cruises",
    clamp: false,
  },
  {
    title: "Solargy Website",
    description:
      "I developed the Solargy website to showcase services across EV infrastructure, renewable energy, smart parking, and sustainable construction across the MENA region.",
    image: "/img/works/solargy.png",
    link: "https://solargyco.com",
    category: "Other",
    clamp: true,
  },
  {
    title: "Falak Al Khayer (Auctions)",
    description:
      "Developed a real-time auction platform and dashboard using Next.js and Socket.io for live bidding, with secure Auth/RBAC and optimized rendering for strong SEO and performance scores.",
    image: "/img/works/1.jpg",
    link: "https://falakalkhayer.sa",
    category: "Other",
    clamp: false,
  },
  {
    title: "Broker.sa",
    description:
      "Architected a real-estate auction system with real-time bidding synchronization, advanced state management, complex authorization, and optimized API integration.",
    image: "/img/works/2.jpg",
    link: "https://broker.sa",
    category: "Other",
    clamp: false,
  },
  {
    title: "Wings",
    description:
      "Implemented Next.js SSR to boost SEO rankings and increase organic traffic by 25%.",
    image: "/img/works/3.jpg",
    link: "https://wingsgroup.travel",
    category: "Hospitality",
    clamp: false,
  },
];

export default function Home() {
  const rotateTexts = [
    "with 5 years of experience.",
    "building scalable UI with React and Next.js.",
    "focused on performance and clean architecture.",
  ];

  return (
    <>
      <section className="container-fluid">
        <div className="row p-60-0 p-lg-30-0 p-md-15-0">
          <div className="col-lg-12">
            <div
              className="art-a art-banner"
              style={{ backgroundImage: "url(/img/bg.jpg)" }}
            >
              <div className="art-banner-back"></div>
              <div className="art-banner-dec"></div>
              <div className="art-banner-overlay">
                <div className="art-banner-title">
                  <h1 className="mb-15">
                    Discover my <br />
                    Resume & Works
                  </h1>
                  <div className="art-lg-text art-code mb-25">
                    &lt;<i>code</i>&gt; I'm Front End Developer{" "}
                    <Typewriter
                      texts={rotateTexts}
                      period={200}
                      speed={25}
                      deleteSpeed={10}
                    />
                    &lt;/<i>code</i>&gt;
                  </div>
                  <div className="art-buttons-frame">
                    <a href="/portfolio" className="art-btn art-btn-md">
                      <span>Explore now</span>
                    </a>
                    <a
                      href="tel:+201090723497"
                      className="art-link art-white-link art-w-chevron"
                    >
                      Hire me
                    </a>
                  </div>
                </div>
                <img
                  src="/img/face-2.png"
                  className="art-banner-photo"
                  alt="Your Name"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="row p-30-0">
          <div className="col-lg-12">
            <div className="art-section-title">
              <div className="art-title-frame">
                <h4>About</h4>
              </div>
            </div>
            <div className="art-a art-card">
              <p className="mb-15">
                Senior Frontend Engineer with 5+ years of experience building{" "}
                <strong>high-performance, scalable web applications</strong>{" "}
                using React.js, Next.js, and TypeScript. I specialize in
                converting complex WordPress &amp; Elementor websites into
                modern Next.js architectures while focusing on{" "}
                <strong>performance, SEO, and clean code</strong>.
              </p>
              <ul className="mb-15">
                <li>5+ years of experience in Frontend Development</li>
                <li>Expert in React.js, Next.js (App Router), TypeScript</li>
                <li>
                  Migrated multiple WordPress &amp; Elementor websites to
                  Next.js
                </li>
                <li>
                  Strong skills in Performance Optimization, Core Web Vitals,
                  SEO, and responsive UI/UX
                </li>
              </ul>
              <p className="mb-10">
                <strong>Tech Stack:</strong>
              </p>
              <p className="mb-15">
                React.js • Next.js • TypeScript • JavaScript (ES6+) <br />
                HTML • CSS • Tailwind • MUI <br />
                REST APIs • Git • Performance Optimization • SEO
              </p>
              <p className="mb-0">
                Currently open to Senior Frontend / Frontend Lead opportunities.
                Let's connect!
              </p>
              <Counters />
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="art-section-title">
              <div className="art-title-frame">
                <h4>My Services</h4>
              </div>
            </div>
          </div>

          {services.map((service) => (
            <div key={service.title} className="col-lg-4 col-md-6">
              <div className="art-a art-service-icon-box">
                <div className="art-service-ib-content">
                  <h5 className="mb-15">{service.title}</h5>
                  <div className="mb-15">{service.description}</div>
                  <div className="art-buttons-frame">
                    <a
                      href="tel:+201090723497"
                      className="art-link art-color-link art-w-chevron"
                    >
                      Contact me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="art-section-title">
              <div className="art-title-frame">
                <h4>Work History</h4>
              </div>
            </div>

            <div className="art-timeline">
              {workHistory.map((item) => (
                <div
                  key={`${item.company}-${item.date}`}
                  className="art-timeline-item"
                >
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>{item.company}</h5>
                        <div className="art-el-suptitle mb-15">{item.role}</div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">{item.date}</span>
                      </div>
                    </div>
                    <ul className="pl-2">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-6">
            <div className="art-section-title">
              <div className="art-title-frame">
                <h4>Education</h4>
              </div>
            </div>

            <div className="art-timeline art-gallery" id="history">
              {education.map((item) => (
                <div
                  key={`${item.title}-${item.date}`}
                  className="art-timeline-item"
                >
                  <div className="art-timeline-mark-light"></div>
                  <div className="art-timeline-mark"></div>

                  <div className="art-a art-timeline-content">
                    <div className="art-card-header">
                      <div className="art-left-side">
                        <h5>{item.title}</h5>
                        <div className="art-el-suptitle mb-15">
                          {item.subtitle}
                        </div>
                      </div>
                      <div className="art-right-side">
                        <span className="art-date">{item.date}</span>
                      </div>
                    </div>
                    {item.description && <p>{item.description}</p>}
                    {item.linkUrl && (
                      <a
                        target="_blank"
                        href={item.linkUrl}
                        className="art-link art-color-link art-w-chevron"
                        rel="noreferrer"
                      >
                        Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid" id="portfolio">
        <div className="row p-30-0">
          <div className="col-lg-12">
            <div className="art-section-title">
              <div className="art-title-frame">
                <h4>Projects</h4>
              </div>
            </div>
          </div>

          <div className="art-grid art-grid-3-col art-gallery">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`art-grid-item ${project.category}`}
              >
                <a
                  data-fancybox="gallery"
                  data-no-swup
                  href={project.image}
                  className="art-a art-portfolio-item-frame art-horizontal"
                >
                  <img src={project.image} alt="item" />
                  <span className="art-item-hover">
                    <i className="fas fa-expand"></i>
                  </span>
                </a>

                <div className="art-item-description">
                  <h5 className="mb-1">{project.title}</h5>
                  <p
                    className="mb-15"
                    style={
                      project.clamp
                        ? {
                          display: "-webkit-box",
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }
                        : undefined
                    }
                  >
                    {project.description}
                  </p>
                  <hr style={{ borderColor: "#555" }} />
                  <a
                    href={project.link}
                    target="_blank"
                    className="art-link art-color-link art-w-chevron"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="art-submit-frame" style={{ margin: "auto" }}>
            <a className="art-btn art-btn-md art-submit" href="/portfolio">
              <span>View All</span>
            </a>
          </div>
        </div>
      </section>

      <section className="container-fluid">
        <div className="row p-30-0">
          <div className="col-lg-12">
            <div className="art-section-title">
              <div className="art-title-frame">
                <h4>Get in touch</h4>
              </div>
            </div>

            <div className="art-a art-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
