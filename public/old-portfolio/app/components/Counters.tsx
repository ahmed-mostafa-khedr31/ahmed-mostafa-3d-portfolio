"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CounterItem = {
  value: number;
  label: string;
  plus?: boolean;
};

const COUNTERS: CounterItem[] = [
  { value: 5, label: "+Years Experience", plus: true },
  { value: 80, label: "Completed Projects" },
  { value: 10, label: "Happy Customers" },
  { value: 5, label: "Free Lancing Projects", plus: true },
];

export default function Counters() {
  const [hasPlayed, setHasPlayed] = useState(false);
  const [values, setValues] = useState<number[]>(() => COUNTERS.map(() => 0));
  const containerRef = useRef<HTMLDivElement | null>(null);

  const durationMs = 1200;

  const targetValues = useMemo(() => COUNTERS.map((item) => item.value), []);

  useEffect(() => {
    if (!containerRef.current || hasPlayed) return;

    const element = containerRef.current;
    const root = document.getElementById("scrollbar");
    let rafId = 0;
    let observer: IntersectionObserver | null = null;

    const isVisible = () => {
      const elementRect = element.getBoundingClientRect();
      if (root) {
        const rootRect = root.getBoundingClientRect();
        return elementRect.top < rootRect.bottom && elementRect.bottom > rootRect.top;
      }
      return elementRect.top < window.innerHeight && elementRect.bottom > 0;
    };

    const checkLoop = () => {
      if (isVisible()) {
        setHasPlayed(true);
        return;
      }
      rafId = requestAnimationFrame(checkLoop);
    };

    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setHasPlayed(true);
          }
        },
        { threshold: 0.35, root: root ?? undefined },
      );
      observer.observe(element);
    } else {
      checkLoop();
    }

    // Always start a lightweight visibility loop as a fallback for
    // transformed scroll containers that may not trigger the observer.
    rafId = requestAnimationFrame(checkLoop);

    return () => {
      if (observer) observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [hasPlayed]);

  useEffect(() => {
    if (!hasPlayed) return;

    let start: number | null = null;
    let rafId = 0;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValues(
        targetValues.map((target) => Math.round(target * eased)),
      );

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasPlayed, targetValues]);

  return (
    <section   ref={containerRef}>
      <div className="row pt-5">
        {COUNTERS.map((counter, index) => (
          <div key={counter.label} className="col-md-3 col-6">
            <div className="art-counter-frame">
              <div className="art-counter-box">
                <span className="art-counter">{values[index]}</span>
                {counter.plus ? <span className="art-counter-plus">+</span> : null}
              </div>
              <h6>{counter.label}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
