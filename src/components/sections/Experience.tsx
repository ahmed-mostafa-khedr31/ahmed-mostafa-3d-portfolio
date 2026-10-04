import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";
import { useTheme } from "../../theme/ThemeContext";

const ExperienceCard: React.FC<TExperience> = (experience) => {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isLight ? "#ffffff" : "#1d1836",
        color: isLight ? "#0a0c12" : "#fff",
        boxShadow: isLight ? "0 12px 32px rgba(15, 23, 42, 0.08)" : undefined,
      }}
      contentArrowStyle={{
        borderRight: isLight ? "7px solid #ffffff" : "7px solid #232631",
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: `0 0 0 4px rgba(255,255,255,0.12), 0 6px 18px ${experience.iconBg}55`,
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <span
            className={`on-accent font-bold tracking-wide text-white ${
              experience.iconLetter.length > 2 ? "text-[10px]" : "text-[13px]"
            }`}
          >
            {experience.iconLetter}
          </span>
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold m-0"
        >
          {experience.companyName}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 pl-1 text-[14px] tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
