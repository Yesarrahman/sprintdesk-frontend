"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function GsapReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  y = 30,
  direction = "up",
}: GsapRevealProps) {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!el.current) return;

    let initialX = 0;
    let initialY = y;

    if (direction === "left") {
      initialX = 30;
      initialY = 0;
    } else if (direction === "right") {
      initialX = -30;
      initialY = 0;
    } else if (direction === "down") {
      initialY = -y;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { opacity: 0, x: initialX, y: initialY },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, duration, y, direction]);

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}

export function GsapStagger({
  children,
  className = "",
  stagger = 0.12,
  y = 25,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  y?: number;
}) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const ctx = gsap.context(() => {
      const items = container.current?.children;
      if (items && items.length > 0) {
        gsap.fromTo(
          items,
          { opacity: 0, y: y },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: stagger,
            ease: "power2.out",
            scrollTrigger: {
              trigger: container.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [stagger, y]);

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}

export function GsapScale({
  children,
  className = "",
  scaleFrom = 0.96,
  scaleStart,
  duration = 0.85,
}: {
  children: React.ReactNode;
  className?: string;
  scaleFrom?: number;
  scaleStart?: number;
  duration?: number;
}) {
  const el = useRef<HTMLDivElement>(null);
  const effectiveScale = scaleStart !== undefined ? scaleStart : scaleFrom;

  useEffect(() => {
    if (!el.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { opacity: 0, scale: effectiveScale },
        {
          opacity: 1,
          scale: 1,
          duration: duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [effectiveScale, duration]);

  return (
    <div ref={el} className={className}>
      {children}
    </div>
  );
}
