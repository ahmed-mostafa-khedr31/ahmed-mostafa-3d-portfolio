import { forwardRef, useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects, projectCategories } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { TProject } from "../../types";

const categoryLabels: Record<string, string> = {
  all: "All",
  hospitality: "Hospitality",
  cruises: "Cruises",
  event: "Events",
  other: "Other",
};

type ProjectCardProps = { index: number } & TProject;

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  function ProjectCard(
    {
      index,
      name,
      description,
      tags,
      image,
      sourceCodeLink,
      liveDemo,
      featured,
    },
    ref
  ) {
    const [expanded, setExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const descRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
      const el = descRef.current;
      if (!el) return;

      const checkTruncation = () => {
        if (expanded) return;
        setIsTruncated(el.scrollHeight > el.clientHeight + 1);
      };

      checkTruncation();
      window.addEventListener("resize", checkTruncation);
      return () => window.removeEventListener("resize", checkTruncation);
    }, [description, expanded]);

    return (
    <motion.div
      ref={ref}
      variants={fadeIn("up", "spring", index * 0.15, 0.5)}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Tilt
        glareEnable
        tiltEnable
        tiltMaxAngleX={20}
        tiltMaxAngleY={20}
        glareColor="#aaa6c3"
        className="h-full"
      >
        <div className="bg-tertiary project-card-hover relative flex h-full w-full flex-col rounded-2xl p-5">
          {/* Featured Badge */}
          {featured && (
            <div className="absolute -top-3 left-4 z-10">
              <span className="featured-badge">⭐ Featured</span>
            </div>
          )}

          <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[210px]">
            <img
              src={image}
              alt={`${name} project screenshot`}
              className="h-full w-full rounded-2xl object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="card-img_hover absolute inset-0 m-3 flex items-start justify-end gap-3">
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${name}`}
                  className="violet-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="h-1/2 w-1/2 object-contain text-white"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                  </svg>
                </a>
              )}
              {sourceCodeLink && (
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code of ${name} on GitHub`}
                  className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
                >
                  <img
                    src={github}
                    alt="github"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </a>
              )}
            </div>
          </div>

          <div className="mt-4 flex flex-1 flex-col">
            <h3 className="line-clamp-2 min-h-[56px] text-[20px] font-bold leading-tight text-white sm:text-[22px]">
              {name}
            </h3>
            <p
              ref={descRef}
              className={`text-secondary mt-2 text-[14px] leading-[22px] ${
                expanded ? "" : "line-clamp-4"
              }`}
            >
              {description}
            </p>
            {(isTruncated || expanded) && (
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                className="mt-2 w-fit text-[13px] font-medium text-[#915EFF] transition-colors hover:text-[#00cea8]"
              >
                {expanded ? "View Less ↑" : "View More ↓"}
              </button>
            )}
          </div>

          <div className="mt-auto pt-4">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag.name} className={`text-[13px] ${tag.color}`}>
                  #{tag.name}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-4 flex min-h-[44px] gap-3">
              {liveDemo && (
                <a
                  href={liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-gradient-to-r from-[#915EFF] to-[#00cea8] px-4 py-2 text-center text-[13px] font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-[0_4px_15px_rgba(145,94,255,0.3)]"
                >
                  Live Demo →
                </a>
              )}
              {sourceCodeLink && (
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/10 px-4 py-2 text-center text-[13px] font-medium text-secondary transition-all duration-300 hover:border-white/30 hover:text-white"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";

const Works = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="mt-10 flex flex-wrap gap-3">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`filter-pill ${activeCategory === cat ? "active" : ""}`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="mt-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              {...project}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
