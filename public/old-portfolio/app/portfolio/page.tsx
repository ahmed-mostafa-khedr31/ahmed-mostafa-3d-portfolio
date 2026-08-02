const filters = [
  { key: "*", label: "All Categories" },
  { key: ".Hospitality", label: "Hospitality" },
  { key: ".Event", label: "Event Reservation Website" },
  { key: ".Cruises", label: "Cruises" },
  { key: ".Other", label: "Other" },
];

const projects = [
  {
    title: "Travco Travel Company",
    description:
      "I designed and developed a responsive website for Travco Travel Company, showcasing travel packages, hotel options, and services with an intuitive UI and real-time API integrations.",
    image: "/img/works/travco.png",
    link: "https://travco.com",
    category: "Hospitality",
    clamp: false,
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
    clamp: false,
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
    title: "Tawila Island Website",
    description:
      "I developed the Tawila Island website to showcase a luxury five-star resort, unique bungalows, and an exclusive guest experience.",
    image: "/img/works/tawila.png",
    link: "https://tawila-island.com/",
    category: "Hospitality",
    clamp: false,
  },
  {
    title: "Aso2lak Website",
    description:
      "I developed the Aso2lak website for a door-to-door luxury driving service, highlighting expert drivers and 24/7 availability.",
    image: "/img/works/aso2lak.png",
    link: "https://aso2lak.com",
    category: "Other",
    clamp: false,
  },
  {
    title: "Cleopark Sharm Website",
    description:
      "I developed the Cleopark Sharm website for a Pharaonic-themed water park, highlighting attractions and visitor information.",
    image: "/img/works/cleoparksharm.jpg",
    link: "https://cleoparksharm.com",
    category: "Other",
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
    clamp: false,
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
  {
    title: "Dhara Hotels",
    description:
      "I developed the Dhara Hotels website, showcasing properties, booking features, and a premium hospitality experience.",
    image: "/img/works/4.jpg",
    link: "https://dharahotels.com/en",
    category: "Hospitality",
    clamp: false,
  },
  {
    title: "SOHO Events",
    description:
      "I created the event page for Carole Samaha’s live concert at SOHO Square, showcasing event details, highlights, and a clear call to action for attendees.",
    image: "/img/works/event-soho.png",
    link: "https://event.soho-sharm.com/ramysabry-20250131",
    category: "Event",
    clamp: false,
  },
];

export default function PortfolioPage() {
  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        <div className="col-lg-12">
          <div className="art-section-title">
            <div className="art-title-frame">
              <h4>Projects</h4>
            </div>

            <div className="art-right-frame">
              <div className="art-filter">
                {filters.map((filter) => (
                  <a
                    key={filter.key}
                    href="#"
                    data-filter={filter.key}
                    className={`art-link${filter.key === "*" ? " art-current" : ""}`}
                  >
                    {filter.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="art-grid art-grid-3-col art-gallery">
          {projects.map((project) => (
            <div key={project.title} className={`art-grid-item ${project.category}`}>
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
      </div>
    </div>
  );
}
