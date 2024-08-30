"use client";

import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
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
  const [activeCard, setActiveCard] = useState("");
  const heading1Ref = useRef(null);
  const cardRefs = useRef([]);
  const heading2Ref = useRef(null);
  const imageRefs = useRef([]);
  const heading3Ref = useRef(null);
  const heading4Ref = useRef(null);
  const heading5Ref = useRef(null);
  const heading6Ref = useRef(null);

  useEffect(() => {
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate the heading when it enters the viewport
    ScrollTrigger?.create({
      trigger: heading1Ref.current,
      start: "top bottom",
      animation: gsap.fromTo(
        heading1Ref.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      ),
    });

    // Animate the cards with delays when they enter the viewport
    cardRefs.current.forEach((cardRef, index) => {
      ScrollTrigger.create({
        trigger: cardRef,
        start: "top bottom",
        animation: gsap.fromTo(
          cardRef,
          { x: 80, opacity: 0 },
          { x: 0, opacity: 1, delay: index * 0.4, duration: 1 }
        ),
      });
    });

    ScrollTrigger?.create({
      trigger: heading2Ref.current,
      start: "top bottom",
      animation: gsap.fromTo(
        heading2Ref.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 2 }
      ),
    });

    // Animate the images when they enter the viewport
    imageRefs.current.forEach((imageRef, index) => {
      const isSecondRow = index >= 2;
      const animation = gsap.fromTo(
        imageRef,
        {
          x: isSecondRow
            ? index % 2 === 0
              ? 50
              : -50
            : index % 2 === 0
            ? -50
            : 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 2,
        }
      );

      ScrollTrigger.create({
        trigger: imageRef,
        start: "top bottom",
        animation,
      });
    });

    ScrollTrigger?.create({
      trigger: heading3Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        heading3Ref.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 2 }
      ),
    });

    ScrollTrigger?.create({
      trigger: heading4Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        heading4Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 2 }
      ),
    });

    ScrollTrigger?.create({
      trigger: heading5Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        heading5Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, delay: 0.5, duration: 2 }
      ),
    });

    ScrollTrigger?.create({
      trigger: heading6Ref.current,
      // start: "top bottom",
      animation: gsap.fromTo(
        heading6Ref.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, delay: 1.2, duration: 2 }
      ),
    });
  }, []);

  return (
    <>
      <Hero />

      <HeroMarquee />

      <div className="relative px-4 md:px-10 pt-24 pb-28 lg:pt-28 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-2xl lg:text-4xl font-bold" ref={heading1Ref}>
              Connecting You to <br /> the Heart of Culture
            </h1>
          </div>
          <div>
            <div className="flex flex-col gap-6">
              <div
                className="bg-orange-100 flex gap-4 lg:gap-8 p-4 lg:p-6 rounded-xl cursor-pointer"
                ref={(el) => (cardRefs.current[0] = el)}
                onClick={() =>
                  setActiveCard(activeCard === "music" ? "" : "music")
                }
              >
                <h3 className="text-lg font-bold">01</h3>
                <div className="w-full">
                  <h3 className="text-lg font-bold">MUSIC</h3>
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
                className="bg-red-100 flex gap-4 lg:gap-8 p-4 lg:p-6 rounded-xl cursor-pointer"
                ref={(el) => (cardRefs.current[1] = el)}
                onClick={() =>
                  setActiveCard(activeCard === "food" ? "" : "food")
                }
              >
                <h3 className="text-lg font-bold">02</h3>
                <div className="w-full">
                  <h1 className="text-lg font-bold">FOOD</h1>
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

              {/* <div
                className="bg-purple-100 flex gap-4 lg:gap-8 p-4 lg:p-6 rounded-xl cursor-pointer"
                ref={(el) => (cardRefs.current[2] = el)}
                onClick={() => setActiveCard(activeCard === "art" ? "" : "art")}
              >
                <h3 className="text-lg font-bold">03</h3>
                <div className="w-full">
                  <h1 className="text-lg font-bold">ART</h1>
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
              </div> */}

              <div
                className="bg-purple-100 flex gap-4 lg:gap-8 p-4 lg:p-6 rounded-xl cursor-pointer"
                ref={(el) => (cardRefs.current[2] = el)}
                onClick={() =>
                  setActiveCard(activeCard === "fashion" ? "" : "fashion")
                }
              >
                <h3 className="text-lg font-bold">03</h3>
                <div className="w-full">
                  <h1 className="text-lg font-bold">FASHION</h1>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                      activeCard === "fashion" ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <p className="font-light pt-2 lg:pt-4 lg:pb-2">
                      We bring together designers, stylists, and fashion
                      enthusiasts to showcase the latest trends, timeless
                      classics, and everything in between. Come see, be seen,
                      and explore the art of style.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="bg-emerald-100 flex gap-4 lg:gap-8 p-4 lg:p-6 rounded-xl cursor-pointer"
                ref={(el) => (cardRefs.current[3] = el)}
                onClick={() =>
                  setActiveCard(activeCard === "culture" ? "" : "culture")
                }
              >
                <h3 className="text-lg font-bold">04</h3>
                <div className="w-full">
                  <h1 className="text-lg font-bold">CREATIVE ART & CULTURE</h1>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${
                      activeCard === "culture" ? "max-h-[500px]" : "max-h-0"
                    }`}
                  >
                    <p className="font-light pt-2 lg:pt-4 lg:pb-2">
                      From live performances and interactive art installations
                      to traditional craft displays and modern artistic
                      interpretations, we bring together a diverse range of
                      talents that highlight the beauty of our shared cultures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={"/assets/ornament-2.png"}
          className="absolute -left-5 top-1/2 transform -translate-y-1/2 mt-4 hidden lg:block"
          alt="ornament"
          height={130}
          width={130}
        />
      </div>

      <div className="px-4 md:px-10 pb-24 w-full">
        <h1 className="text-2xl lg:text-4xl font-bold" ref={heading2Ref}>
          Featured Highlights
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5 w-full mt-12">
          <div
            className="relative h-96 w-full rounded-2xl overflow-hidden group"
            ref={(el) => (imageRefs.current[0] = el)}
          >
            <Image
              src={"/assets/ht-asset-6.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
          <div
            className="relative h-96 w-full rounded-2xl overflow-hidden group md:row-start-2 md:col-start-1 md:col-span-2"
            ref={(el) => (imageRefs.current[1] = el)}
          >
            <Image
              src={"/assets/ht-asset-7.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
          <div
            className="relative h-96 w-full rounded-2xl overflow-hidden group"
            ref={(el) => (imageRefs.current[2] = el)}
          >
            <Image
              src={"/assets/ht-asset-3.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
          <div
            className="relative h-96 w-full rounded-2xl overflow-hidden group md:row-start-1 md:col-start-2 md:col-span-2"
            ref={(el) => (imageRefs.current[3] = el)}
          >
            <Image
              src={"/assets/ht-asset-5.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      <div
        className="px-4 md:px-10 pb-28 flex flex-col items-center justify-center gap-14"
        ref={heading3Ref}
      >
        <div className="relative">
          <h1 className="text-2xl lg:text-4xl font-bold">
            2023 Festival Recap
          </h1>
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
        <h1
          className="text-center text-white text-4xl font-bold"
          ref={heading4Ref}
        >
          Let&apos;s work <span className="text-[#EEA942]">together</span>
        </h1>
        <p
          className="text-white text-center w-full max-w-md md:max-w-2xl mx-auto px-0 mt-6"
          ref={heading5Ref}
        >
          We&apos;re always on the lookout for passionate partners and visionary
          sponsors to help us create unforgettable experiences. Let&apos;s work
          together to bring your brand into the spotlight and make our next
          event the talk of the town.
        </p> 
        <Link
          target="_blank"
          href={"https://wa.me/+2348182012345/"}
          className="flex items-center gap-6 text-white font-medium rounded-lg mt-6 overflow-hidden px-7 py-3"
          ref={heading6Ref}
        >
          Talk to us
          <GoArrowRight
            size={21}
            className="animate__animated animate__fadeInLeft animate__infinite animate__slower"
          />
        </Link>
      </div>

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
