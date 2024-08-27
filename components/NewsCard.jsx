import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = () => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden shadow">
      <div className="w-full h-64 relative">
        <Image src={"/assets/ht-asset-3.jpg"} layout="fill" objectFit="cover" />
      </div>
      <div className="space-y-5 p-6">
        <h1 className="text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-gray-500 line-clamp-5 mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          praesentium quos velit magni magnam sequi laborum neque aspernatur,
          quis quidem error iste iure eligendi nihil nobis quam numquam incidunt
          dolor!
        </p>
        <div>
          <Link href={"/"}>Read</Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
