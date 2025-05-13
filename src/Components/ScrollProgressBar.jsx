"use client";
import { useEffect, useRef, useState } from "react";
const ScrollProgressBar = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  const contentRef = useRef(null);
  useEffect(() => {
    const contentEl = document.querySelector(".content");
    if (!contentEl) return;
    const handleScroll = () => {
      const scrollTop = contentEl.scrollTop;
      const totalHeight = contentEl.scrollHeight - contentEl.clientHeight;
      const scrollPercent = (scrollTop / totalHeight) * 100;
      setScrollWidth(scrollPercent);
    };
    contentEl.addEventListener("scroll", handleScroll);
    return () => contentEl.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "1.5px",
        width: `${scrollWidth}%`,
        backgroundColor: `var(--background-color)`,
        zIndex: 9999,
        transition: "width 0.1s ease-out",
      }}
    />
  );
};
export default ScrollProgressBar;