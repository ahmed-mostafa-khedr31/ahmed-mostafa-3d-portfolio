import React, { useEffect, useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <Tilt
    glareEnable
    tiltEnable
    tiltMaxAngleX={30}
    tiltMaxAngleY={30}
    glareColor="#aaa6c3"
  >
    <div className="max-w-[250px] w-full xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full"
      >
        <div className="glass-card flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] px-12 py-5">
          <img
            src={icon}
            alt={title}
            className="h-16 w-16 object-contain"
          />

          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </div>
  </Tilt>
);

// Animated counter component
const AnimatedCounter: React.FC<{ end: number; label: string; suffix: string }> = ({
  end,
  label,
  suffix,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 1500;
          const increment = end / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-[36px] font-black text-white sm:text-[44px]">
        {count}
        <span className="gradient-text-animated">{suffix}</span>
      </p>
      <p className="text-secondary mt-1 text-[14px] font-medium">{label}</p>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div className="flex flex-col-reverse items-start gap-10 md:flex-row md:items-center">
        <div className="flex-1">
          <Header useMotion={true} {...config.sections.about} />

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
          >
            {config.sections.about.content}
          </motion.p>
        </div>

        {/* Profile Photo */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="mx-auto flex-shrink-0 md:mx-0"
        >
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="green-pink-gradient rounded-full p-[3px] shadow-[0_0_30px_rgba(145,94,255,0.2)]"
          >
            <img
              src="/ahmed.png"
              alt={`${config.html.fullName} — Senior Front-End Developer`}
              className="h-[180px] w-[180px] rounded-full object-cover sm:h-[200px] sm:w-[200px]"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats counters */}
      <motion.div
        variants={fadeIn("up", "spring", 0.3, 0.75)}
        className="mt-12 flex flex-wrap items-center justify-center gap-10 sm:gap-16"
      >
        <AnimatedCounter end={5} label="Years Experience" suffix="+" />
        <AnimatedCounter end={80} label="Completed Projects" suffix="+" />
        <AnimatedCounter end={10} label="Happy Customers" suffix="+" />
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
