"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollRevealOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  childSelector?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { y = 40, duration = 0.8, stagger = 0.15, childSelector } = options;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = childSelector ? el.querySelectorAll(childSelector) : el;

    const tween = gsap.from(targets, {
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      y,
      opacity: 0,
      duration,
      ease: "power2.out",
      stagger: childSelector ? stagger : 0,
    });

    return () => {
      const st = tween.scrollTrigger;
      if (st) st.kill();
      tween.kill();
    };
  }, [y, duration, stagger, childSelector]);

  return ref;
}
