import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiEnvelope } from "react-icons/hi2";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col lg:flex-row items-center justify-between gap-4 px-4 lg:px-10 pb-10">
      <p className="text-gray-200">
        All Rights Reserved &copy; 2024 Harmony Group
      </p>
      <div className="flex items-center gap-5 text-gray-200">
        <Link href={"/"}>Instagram</Link>|<Link href={"/"}>Facebook</Link>|
        <Link href={"/"}>YouTube</Link>
      </div>
    </div>
  );
};

export default Footer;
