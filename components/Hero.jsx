// import Image from "next/image";

// const Hero = () => {
//   return (
//     <div className="relative h-[80vh] w-full bg-[#407D6D] flex flex-col items-center justify-center overflow-x-hidden rounded-[3rem]">

//       <h1 className="text-white text-7xl text-center font-bold leading-[5rem] z-50">
//         CELEBRATING MUSIC, <br /> ART, AND CULTURE
//       </h1>
//       <p className="w-full max-w-4xl text-white text-xl text-center z-50 mt-7">
//         Dive into a world where music, art, and culture converge to create the
//         ultimate celebration. From electrifying concerts to vibrant festivals,
//         we bring you closer to the pulse of the city. Explore the fusion of
//         food, fashion, and beauty in a realm where every event is a masterpiece.
//       </p>
//     </div>
//   );
// };

// export default Hero;

"use client"

import { SlMouse } from "react-icons/sl";
import { GoArrowDown } from "react-icons/go";
import Image from "next/image";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
  const h1Ref = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const tl = gsap.timeline();
      tl.fromTo(h1Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 3, ease: "power3.out" });
      tl.fromTo(buttonRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0, ease: "power3.out" });
    }
  }, [h1Ref, buttonRef]);

  return (
    <div className="relative flex flex-col items-center justify-center bg-black px-10 py-56 h-[100vh] lg:min-h-[100vh]">
      <Image
        src={"/assets/ht-asset-2.jpg"}
        layout="fill"
        objectFit="cover"
        className=""
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-black/60"></div>
      <h1 className="text-white text-4xl lg:text-7xl text-center font-bold leading-normal lg:leading-[5.2rem] z-50" ref={h1Ref}>
        <span className="text-[#EEA942] cursive lowercase">CELEBRATING </span>{" "}
        MUSIC, <br /> ART, AND CULTURE
      </h1>
      <button className="absolute bottom-7 flex flex-col items-center gap-2 text-white text-sm font-medium" ref={buttonRef}>
        <SlMouse className="text-lg animate__animated animate__fadeInDown animate__infinite animate__slower" />
        click here
      </button>
    </div>
  );
};

export default Hero;