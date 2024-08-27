"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FaSquareFacebook } from "react-icons/fa6";
import OurStory from "@/components/OurStory";
import NewsCard from "@/components/NewsCard";
import HeroMarquee from "@/components/HeroMarquee";
import { IoPlay } from "react-icons/io5";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [activeCard, setActiveCard] = useState("music");

  return (
    <>
      <Hero />

      <HeroMarquee />

      <div className="relative px-4 md:px-10 pt-24 pb-28 lg:pt-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold">
              Connecting You to <br /> the Heart of Culture
            </h1>
          </div>
          <div>
            <div className="flex flex-col gap-6">
              <div
                className="bg-orange-100 flex gap-4 lg:gap-8 px-6 py-6 rounded-xl cursor-pointer"
                onClick={() =>
                  setActiveCard(activeCard === "music" ? "" : "music")
                }
              >
                <h3 className="text-lg font-semibold">01</h3>
                <div className="w-full">
                  <h3 className="text-lg font-semibold">MUSIC</h3>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                      activeCard === "music" ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <p className="font-light pt-2 lg:pt-4 lg:pb-2">
                      Music is more than just sound; it&apos;s the pulse that
                      drives our events and the force that unites us all. we
                      curate an eclectic mix of genres and styles to create the
                      ultimate musical experience.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-red-100 flex gap-4 lg:gap-8 px-6 py-6 rounded-xl cursor-pointer"
                onClick={() =>
                  setActiveCard(activeCard === "food" ? "" : "food")
                }
              >
                <h3 className="text-lg font-semibold">02</h3>
                <div className="w-full">
                  <h1 className="text-lg font-semibold">FOOD</h1>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                      activeCard === "food" ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <p className="font-light pt-2 lg:pt-4 lg:pb-2">
                      We believe that food brings people together, and our
                      events are the perfect place to share a meal with friends,
                      old and new. Let&apos;s eat, drink, and celebrate the art
                      of good food.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-purple-100 flex gap-4 lg:gap-8 px-6 py-6 rounded-xl cursor-pointer"
                onClick={() => setActiveCard(activeCard === "art" ? "" : "art")}
              >
                <h3 className="text-lg font-semibold">03</h3>
                <div className="w-full">
                  <h1 className="text-lg font-semibold">ART</h1>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                      activeCard === "art" ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <p className="font-light pt-2 lg:pt-4 lg:pb-2">
                      From painting sessions to immersive art installations, we
                      provide a platform for artists to showcase their talents
                      and for you to immerse yourself in their creative world.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-emerald-100 flex gap-4 lg:gap-8 px-6 py-6 rounded-xl cursor-pointer"
                onClick={() =>
                  setActiveCard(activeCard === "culture" ? "" : "culture")
                }
              >
                <h3 className="text-lg font-semibold">04</h3>
                <div className="w-full">
                  <h1 className="text-lg font-semibold">CULTURE</h1>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                      activeCard === "culture" ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <p className="font-light pt-2 lg:pt-4 lg:pb-2">
                      Culture is the heartbeat of our events. We honor the past
                      while inspiring the future, creating a space where culture
                      is both preserved and reimagined.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={"/assets/ornament-2.png"}
          className="absolute -left-5 top-1/2 transform -translate-y-1/2 mt-4"
          alt="ornament"
          height={130}
          width={130}
        />
      </div>

      <div className="px-4 md:px-10 pb-24 w-full">
        <h1 className="text-2xl lg:text-4xl font-bold">Featured Highlights</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 w-full mt-12">
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group">
            <Image
              src={"/assets/ht-asset-6.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group md:row-start-2 md:col-start-1 md:col-span-2">
            <Image
              src={"/assets/ht-asset-7.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group">
            <Image
              src={"/assets/ht-asset-3.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group md:row-start-1 md:col-start-2 md:col-span-2">
            <Image
              src={"/assets/ht-asset-5.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-10 pb-28 flex flex-col items-center justify-center gap-14">
        <div className="relative">
          <h1 className="text-2xl lg:text-4xl font-bold">
            2023 Festival Recap
          </h1>

          <Image
            src={"/assets/ornament-1.png"}
            className="absolute rotate-[20deg] -right-10 -top-6"
            height={100}
            width={100}
            alt="ornament"
          />
        </div>
        <iframe
          className="w-full max-w-3xl h-[27rem] rounded-2xl -mt-2"
          src="https://www.youtube.com/embed/oS_OjTOfh5E?si=sFDI2bMCIHqXab-s&amp;controls=0"
          title=""
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="bg-black flex flex-col items-center px-4 md:px-10 py-28 relative">
        <h1 className="text-center text-white text-4xl font-bold">
          Let's work <span className="text-[#EEA942]">together</span>
        </h1>
        <p className="text-white text-center w-full max-w-md md:max-w-2xl mx-auto px-0 mt-6">
          We&apos;re always on the lookout for passionate partners and visionary
          sponsors to help us create unforgettable experiences. Let&apos;s work
          together to bring your brand into the spotlight and make our next
          event the talk of the town.
        </p>
        <Link
          href={"/"}
          className="flex items-center gap-6 text-white font-medium rounded-lg mt-6 overflow-hidden px-7 py-3"
        >
          Talk to us
          <GoArrowRight
            size={21}
            className="animate__animated animate__fadeInLeft animate__infinite animate__slower"
          />
        </Link>
      </div>

      {/* <Marquee className="mt-8">
        <div className="h-64 w-64 bg-black rounded-3xl relative overflow-hidden mx-5">
          <Image
            src={"/assets/ht-asset-3.jpg"}
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
        </div>
        <div className="h-64 w-64 bg-black rounded-3xl relative overflow-hidden mx-5 mt-40">
          <Image
            src={"/assets/ht-asset-3.jpg"}
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
        </div>
        <div className="h-64 w-64 bg-black rounded-3xl relative overflow-hidden mx-5">
          <Image
            src={"/assets/ht-asset-3.jpg"}
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
        </div>
        <div className="h-64 w-64 bg-black rounded-3xl relative overflow-hidden mx-5 mt-40">
          <Image
            src={"/assets/ht-asset-3.jpg"}
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
        </div>
        <div className="h-64 w-64 bg-black rounded-3xl relative overflow-hidden mx-5">
          <Image
            src={"/assets/ht-asset-3.jpg"}
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
        </div>
        <div className="h-64 w-64 bg-black rounded-3xl relative overflow-hidden mx-5 mt-40">
          <Image
            src={"/assets/ht-asset-3.jpg"}
            layout="fill"
            objectFit="cover"
            className="grayscale"
          />
        </div>
      </Marquee> */}

      {/* <div className="bg-black flex items-center justify-between px-10 py-10 my-32">
        <h1 className="text-white text-2xl font-medium">Want to be <span className="cursive text-4xl">sponsor</span> <br /> our next event</h1>
      </div> */}
      {/* <OurStory /> */}

      {/* <div className="px-10 pb-24 w-full">
        <h1 className="text-3xl font-bold">Recent News</h1>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div> */}
    </>
  );
};

export default Home;
