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
      className={`lg:flex items-center justify-center py-8 z-[9999] hidden`}
      ref={navbarRef}
    >
      <div
        className={`space-x-24 border-[2px] rounded-full px-12 py-3.5 z-[9999] transition-all duration-500 ${
          isScrolled
            ? "bg-black border-white"
            : "bg-transparent border-transparent"
        }`}
      >
        <Link href="/" className="text-white text-lg font-medium">
          Home
        </Link>
        <Link href="/" className="text-white text-lg font-medium">
          Events
        </Link>
        <Link href="/" className="text-white text-lg font-medium">
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
