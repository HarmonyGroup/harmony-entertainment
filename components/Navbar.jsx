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

import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="lg:flex items-center justify-center py-8 z-[9999] hidden">
      <div className="bg-black space-x-20 border-white border-[2px] rounded-full px-12 py-3.5 z-[9999]">
        <Link href={"/"} className="text-white text-lg font-medium">
          Home
        </Link>
        <Link href={"/"} className="text-white text-lg font-medium">
          Events
        </Link>
        <Link href={"/"} className="text-white text-lg font-medium">
          Gallery
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
