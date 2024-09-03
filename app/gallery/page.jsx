import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { BsArrowLeft } from "react-icons/bs";

const GalleryPage = () => {
  return (
    <>
      {/* <div className="relative bg-black text-white flex items-center justify-center px-4 md:px-10 h-[80vh]">
        <Image
          src={"/assets/ht-asset-2.jpg"}
          layout="fill"
          objectFit="cover"
          className=""
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/60"></div>
        <h1 className="text-5xl md:text-7xl text-center uppercase font-semibold leading-normal lg:leading-[5.2rem] z-50">
          <span className="text-[#EEA942] cursive lowercase">Glimpse</span>{" "}
          <br /> into our world
        </h1>
      </div> */}

      <div className="px-4 md:px-10 pt-16 pb-5 w-full">
        <Link href={'/'} className="flex items-center gap-3 text-[17px] font-medium">
            <BsArrowLeft size={20} />
            Home
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
          <div className="col-span-1">
            <h1 className="text-2xl lg:text-4xl font-bold">
              Our Events Gallery
            </h1>
          </div>
          <div className="col-span-1">
            <p>
              Step into our gallery and take a journey through the unforgettable
              moments of our past festivals and concerts. Each image captures
              the energy, creativity, and joy that define our events—where
              music, art, and culture come alive. Explore the memories, feel the
              vibes, and get inspired for what&apos;s to come in our future events.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-5 gap-5 w-full mt-16">
          {/* Row 1 */}
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group">
            <Image
              src={"/assets/ht-asset-11.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group md:row-start-2 md:col-start-1 md:col-span-2">
            <Image
              src={"/assets/ht-asset-10.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>

          {/* Row 2 */}
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group">
            <Image
              src={"/assets/ht-asset-12.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group md:row-start-1 md:col-start-2 md:col-span-2">
            <Image
              src={"/assets/ht-asset-22.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>

          {/* Row 3 */}
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group">
            <Image
              src={"/assets/ht-asset-14.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group md:row-start-3 md:col-start-2 md:col-span-2">
            <Image
              src={"/assets/ht-asset-15.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>

          {/* Row 4 */}
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group">
            <Image
              src={"/assets/ht-asset-16.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group md:row-start-4 md:col-start-1 md:col-span-2">
            <Image
              src={"/assets/ht-asset-17.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>

          {/* Row 5 */}
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group">
            <Image
              src={"/assets/ht-asset-20.jpg"}
              layout="fill" 
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
          <div className="relative h-96 w-full rounded-2xl overflow-hidden group md:row-start-5 md:col-start-2 md:col-span-2">
            <Image
              src={"/assets/ht-asset-18.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer group-hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* <div className="py-24 w-full">
        <h1 className="text-2xl lg:text-4xl font-bold px-4 md:px-10">
          Featured Highlights
        </h1>
        <Marquee speed={20} direction="left" autoFill={true} className="mt-14 mb-4">
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-3.jpg"}
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-4.jpg"}
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-5.jpg"}
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-6.jpg"}
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
        </Marquee>
        <Marquee speed={20} direction="right" autoFill={true} className="my-4">
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
            <h1>heehh</h1>
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
        </Marquee>
        <Marquee speed={20} direction="left" autoFill={true} className="mb-14">
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
          <div className="relative h-64 w-64 bg-red-600 rounded-2xl overflow-hidden mx-2">
            <Image
              src={"/assets/ht-asset-2.jpg"}
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </div>
        </Marquee>
      </div> */}
    </>
  );
};

export default GalleryPage;
