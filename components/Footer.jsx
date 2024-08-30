"use client";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { HiEnvelope } from "react-icons/hi2";

const Footer = () => {
  const footerRef1 = useRef(null);
  const footerRef2 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger?.create({
      trigger: footerRef1.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        footerRef1.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, delay: 1.1, duration: 2 }
      ),
    });

    ScrollTrigger?.create({
      trigger: footerRef2.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        footerRef2.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, delay: 1.1, duration: 2 }
      ),
    });
  }, []);

  return (
    <div className="bg-black flex flex-col lg:flex-row items-center justify-between gap-4 px-4 lg:px-10 pb-10">
      <p className="text-gray-200 text-sm" ref={footerRef1}>
        All Rights Reserved &copy; 2024 Harmony Group
      </p>
      <div
        className="flex items-center gap-5 text-gray-200 text-sm"
        ref={footerRef2}
      >
        <Link
          target="_blank"
          href={"https://www.instagram.com/harmonyent.ng/"}
        >
          Instagram
        </Link>
        |<Link href={"https://www.facebook.com"}>Facebook</Link>|
        <Link
          target="_blank"
          href={"https://www.youtube.com/@HarmonyGroupTV"}
        >
          YouTube
        </Link>
      </div>
    </div>
  );
};

export default Footer;
