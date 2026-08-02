import { motion } from "framer-motion";

import { technologies } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { config } from "../../constants/config";
import { fadeIn } from "../../utils/motion";
import type { TTechnology } from "../../types";

const TechCard: React.FC<{ technology: TTechnology; index: number }> = ({
  technology,
  index,
}) => {
  const accent = technology.color ?? "#915EFF";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.04, 0.45)}
      className="skill-card group flex w-[110px] flex-col items-center sm:w-[130px]"
    >
      <div
        className="skill-icon-wrap glass-card flex h-[88px] w-[88px] items-center justify-center rounded-2xl transition-all duration-300 group-hover:-translate-y-1 sm:h-[100px] sm:w-[100px]"
        style={
          {
            "--skill-color": accent,
          } as React.CSSProperties
        }
      >
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-11 w-11 object-contain sm:h-12 sm:w-12"
          loading="lazy"
        />
      </div>
      <p className="text-secondary mt-3 text-center text-[12px] font-medium leading-tight transition-colors duration-300 group-hover:text-white sm:text-[13px]">
        {technology.name}
      </p>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.tech} />

      <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-10">
        {technologies.map((technology, index) => (
          <TechCard key={technology.name} technology={technology} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
