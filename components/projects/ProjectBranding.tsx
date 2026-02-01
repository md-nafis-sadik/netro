"use client";
import { useAnimation } from "@/hooks/useAnimation";
import Image from "next/image";
import { useRef, useCallback, useEffect } from "react";
import { gsap } from "gsap";
import DescriptionHeader from "../common/DescriptionHeader";

const ProjectBranding = ({ project }: any) => {
  const firstImgRef = useRef<HTMLDivElement>(null);
  const secondImgRef = useRef<HTMLDivElement>(null);
  const thiredImgRef = useRef<HTMLDivElement>(null);

  // ref for the top overlay image [0] that will be clipped away
  const overlayRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<{ progress: number } | null>(null);
  const rafRef = useRef<number | null>(null);

  useAnimation(firstImgRef, {});
  useAnimation(secondImgRef, {});
  useAnimation(thiredImgRef, {});

  // Apply clipPath based on a progress value (0 = fully visible, 1 = fully gone)
  const applyClip = useCallback((progress: number) => {
    if (!overlayRef.current) return;
    // inset(0 0 0 <left%>) — left edge eats inward as progress goes 0 → 100
    overlayRef.current.style.clipPath = `inset(0 0 0 ${progress * 100}%)`;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      tweenRef.current = null;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseEnter = useCallback(() => {
    // Kill any running tween
    if (tweenRef.current) {
      (tweenRef.current as any)._gsap?.kill?.();
    }
    // Animate a plain object { progress } from current value → 1
    const startVal = tweenRef.current?.progress ?? 0;
    tweenRef.current = { progress: startVal };
    (tweenRef.current as any)._gsap = gsap.to(tweenRef.current, {
      progress: 1,
      duration: 1.8,           // slow & cinematic
      ease: "power2.inOut",    // smooth acceleration + deceleration
      onUpdate: () => {
        applyClip(tweenRef.current!.progress);
      },
    });
  }, [applyClip]);

  const handleMouseLeave = useCallback(() => {
    if (tweenRef.current) {
      (tweenRef.current as any)._gsap?.kill?.();
    }
    const startVal = tweenRef.current?.progress ?? 1;
    tweenRef.current = { progress: startVal };
    (tweenRef.current as any)._gsap = gsap.to(tweenRef.current, {
      progress: 0,
      duration: 1.4,           // slightly quicker on the way back
      ease: "power2.inOut",
      onUpdate: () => {
        applyClip(tweenRef.current!.progress);
      },
    });
  }, [applyClip]);

  return (
    <section className="font-inter bg-darkPurplebg py-8 md:py-16 lg:py-20">
      <div className="container">
        <DescriptionHeader
          title="Software Branding"
          text={
            project?.data?.softwareBrandingDetails ||
            "Software Branding not found."
          }
        />
        <div ref={firstImgRef}>
          <Image
            src={project?.data?.brandingImages[0]}
            alt={project?.data?.title || "Project Image"}
            width={2352}
            height={1296}
            className="w-full mt-6 md:mt-16 lg:mt-20 rounded-2xl md:rounded-3xl"
          />
        </div>
        <div ref={secondImgRef}>
          <Image
            src={project?.data?.brandingImages[1]}
            alt={project?.data?.title || "Project Image"}
            width={2352}
            height={1296}
            className="w-full mt-6 md:mt-16 lg:mt-20 rounded-2xl md:rounded-3xl"
          />
        </div>
        <DescriptionHeader
          title="Wireframes to  Final Design"
          text={
            project?.data?.wireframeDetails || "Wireframe details not found."
          }
          className="mt-16 md:mt-28 lg:mt-40"
        />

        {/* ─── Hover reveal section ─── */}
        <div ref={thiredImgRef} className="mt-10 md:mt-16 lg:mt-32">
          {/*
            Wrapper: relative + overflow-hidden so the sliding
            overlay clips cleanly at the edges.
            cursor-pointer so the user knows it's interactive.
          */}
          <div
            className="relative overflow-hidden cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* ── BOTTOM layer: wireframeImages[1] (always visible beneath) ── */}
            <Image
              src={project?.data?.wireframeImages[1]}
              alt={project?.data?.title || "Project Image"}
              width={2352}
              height={1296}
              className="w-full rounded-2xl md:rounded-3xl"
            />

            {/* ── TOP layer: wireframeImages[0] — clipPath eats it left→right on hover ── */}
            <div
              ref={overlayRef}
              className="absolute inset-0"
              style={{ zIndex: 1, clipPath: "inset(0 0 0 0%)" }}
            >
              <Image
                src={project?.data?.wireframeImages[0]}
                alt={project?.data?.title || "Project Image"}
                width={2352}
                height={1296}
                className="w-full h-full rounded-2xl md:rounded-3xl"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* ─── Grid section (unchanged) ─── */}
        <div className="grid md:grid-cols-6 gap-6 md:gap-10 mt-10 md:mt-20 lg:mt-32">
          <div className="md:col-span-6 md:row-span-2">
            <Image
              src={project?.data?.wireframeGridImages[0]}
              alt={project?.data?.title || "Project Image"}
              width={2352}
              height={1296}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="md:col-span-3 md:row-span-2 md:row-start-3">
            <Image
              src={project?.data?.wireframeGridImages[1]}
              alt={project?.data?.title || "Project Image"}
              width={1136}
              height={1296}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="md:col-span-3 md:row-span-2 md:row-start-3">
            <Image
              src={project?.data?.wireframeGridImages[2]}
              alt={project?.data?.title || "Project Image"}
              width={1136}
              height={1296}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="md:col-span-2 md:row-start-5">
            <Image
              src={project?.data?.wireframeGridImages[3]}
              alt={project?.data?.title || "Project Image"}
              width={730}
              height={730}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="md:col-span-2 md:row-start-5">
            <Image
              src={project?.data?.wireframeGridImages[4]}
              alt={project?.data?.title || "Project Image"}
              width={730}
              height={730}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
          <div className="md:col-span-2 md:row-start-5">
            <Image
              src={project?.data?.wireframeGridImages[5]}
              alt={project?.data?.title || "Project Image"}
              width={730}
              height={730}
              className="w-full rounded-2xl md:rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBranding;