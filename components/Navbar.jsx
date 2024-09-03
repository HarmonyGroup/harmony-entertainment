// import Image from "next/image";
// import Link from "next/link";
// import { FiArrowUpRight } from "react-icons/fi";

// const Navbar = () => {
//   return (
//     <div className='px-10 py-8 bg-inherit z-50'>
//         <div className='flex items-center justify-between'>
//             <Image src={'/assets/logo.png'} alt="logo" height={160} width={160} />
//             <div className="flex items-center gap-12 text-[16px] font-medium">
//                 <Link href={'/festival'} className="flex items-center gap-1">
//                   Festival
//                   <FiArrowUpRight className="text-xl" />
//                 </Link>
//                 <Link href={'/music'} className="flex items-center gap-1">
//                   Music
//                   <FiArrowUpRight className="text-xl" />
//                 </Link>
//                 <Link href={'/art'} className="flex items-center gap-1">
//                   Art
//                   <FiArrowUpRight className="text-xl" />
//                 </Link>
//                 <Link href={'/culture'} className="flex items-center gap-1">
//                   Culture
//                   <FiArrowUpRight className="text-xl" />
//                 </Link>
//                 <Link href={'/events'} className="flex items-center gap-1">
//                   Events
//                   <FiArrowUpRight className="text-xl" />
//                 </Link>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar

"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    // Check if running in the browser
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        // Check if the user has scrolled down from the top
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      // Trigger initial animation on component mount
      gsap.fromTo(
        navbarRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 3, ease: "power3.out" }
      );

      window.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      className={`flex items-center justify-between py-2 lg:py-4 z-[9999] ${
        isScrolled
          ? "glassmorphism"
          : "bg-transparent border-transparent"
      }`}
      ref={navbarRef}
    >
      <Link href={"/"}>
        <Image
          src={"/assets/hcf-logo.png"}
          alt="logo"
          height={130}
          width={130}
          className="scale-75 lg:scale-110"
        />
      </Link>
      <div
        className={`space-x-24 px-12 z-[9999] transition-all duration-500 hidden lg:block`}
      >
        <Link href="/" className="text-white text-[17px] font-semibold">
          Home
        </Link>
        <Link href="/gallery" className="text-white text-[17px] font-semibold">
          Gallery
        </Link>
        <Link href="/" className="text-white text-[17px] font-semibold">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
