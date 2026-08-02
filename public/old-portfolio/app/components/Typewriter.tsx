"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  texts: string[];
  period?: number;
  speed?: number;
  deleteSpeed?: number;
  className?: string;
};

export default function Typewriter({
  texts,
  period = 800,
  speed = 40,
  deleteSpeed = 20,
  className,
}: TypewriterProps) {
  const [text, setText] = useState("");
  const loopNum = useRef(0);
  const isDeleting = useRef(false);
  const timeoutId = useRef<number | null>(null);

  useEffect(() => {
    if (!texts.length) return;

    const tick = () => {
      const i = loopNum.current % texts.length;
      const fullText = texts[i];
      const updated = isDeleting.current
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updated);

      let delta = isDeleting.current ? deleteSpeed : speed;
      if (delta < 0) delta = 0;

      if (!isDeleting.current && updated === fullText) {
        delta = period;
        isDeleting.current = true;
      } else if (isDeleting.current && updated === "") {
        isDeleting.current = false;
        loopNum.current += 1;
        delta = 200;
      }

      timeoutId.current = window.setTimeout(tick, delta);
    };

    timeoutId.current = window.setTimeout(tick, 100);

    return () => {
      if (timeoutId.current) window.clearTimeout(timeoutId.current);
    };
  }, [texts, period, speed, deleteSpeed, text]);

  return (
    <span className={["txt-rotate", className].filter(Boolean).join(" ")}>
      <span className="wrap">{text}</span>
    </span>
  );
}
