"use client";

import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

const OurStory = () => {
  const [activeCard, setActiveCard] = useState("");

  return (
    <div className="px-10 py-24 w-full">
      <div className="grid grid-cols-2 gap-14">
        <div className="col-span-1">
          <h1 className="text-3xl font-bold">Our Story</h1>
          <p className="w-full max-w-xl mt-7 text-black/60">
            We don&apos;t just set out to organize events — we set out to create
            something extraordinary. Our story is rooted in a deep love for the
            arts and a commitment to pushing the boundaries of what&apos;s
            possible. From the start, we&apos;ve been innovators, curators, and
            creators, dedicated to bringing together the best in music, art,
            culture, food, fashion, and beauty.
          </p>
          <div className="flex items-center gap-2 font-medium mt-6">
            Events Gallery
            <GoArrowUpRight className="text-lg" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-10">
            <div
              className="bg-gray-100/60 flex gap-8 p-8 border border-gray-100 rounded-lg cursor-pointer"
              onClick={() =>
                setActiveCard(activeCard === "music" ? "" : "music")
              }
            >
              <h3 className="text-2xl font-medium">01</h3>
              <div className="w-full">
                <h1 className="text-2xl font-medium">MUSIC</h1>
                <div
                  className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                    activeCard === "music" ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <p className="mt-4 text-black/60">
                    We don&apos;t just set out to organize events — we set out
                    to create something extraordinary. Our story is rooted in a
                    deep love for the arts and a commitment to pushing the
                    boundaries of what&apos;s possible. From the start,
                    we&apos;ve been innovators, curators, and creators,
                    dedicated to bringing together the best in music, art,
                    culture, food, fashion, and beauty.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gray-100/60 flex gap-8 p-8 border border-gray-100 rounded-lg cursor-pointer"
              onClick={() => setActiveCard(activeCard === "art" ? "" : "art")}
            >
              <h3 className="text-2xl font-medium">02</h3>
              <div className="w-full">
                <h1 className="text-2xl font-medium">ART</h1>
                <div
                  className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                    activeCard === "art" ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <p className="mt-4 text-black/60">
                    We don&apos;t just set out to organize events — we set out
                    to create something extraordinary. Our story is rooted in a
                    deep love for the arts and a commitment to pushing the
                    boundaries of what&apos;s possible. From the start,
                    we&apos;ve been innovators, curators, and creators,
                    dedicated to bringing together the best in music, art,
                    culture, food, fashion, and beauty.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gray-100/60 flex gap-8 p-8 border border-gray-100 rounded-lg cursor-pointer"
              onClick={() =>
                setActiveCard(activeCard === "culture" ? "" : "culture")
              }
            >
              <h3 className="text-2xl font-medium">03</h3>
              <div className="w-full">
                <h1 className="text-2xl font-medium">CULTURE</h1>
                <div
                  className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                    activeCard === "culture" ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <p className="mt-4 text-black/60">
                    We don&apos;t just set out to organize events — we set out
                    to create something extraordinary. Our story is rooted in a
                    deep love for the arts and a commitment to pushing the
                    boundaries of what&apos;s possible. From the start,
                    we&apos;ve been innovators, curators, and creators,
                    dedicated to bringing together the best in music, art,
                    culture, food, fashion, and beauty.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
