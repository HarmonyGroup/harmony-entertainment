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

import { SlMouse } from "react-icons/sl";
import { GoArrowDown } from "react-icons/go";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center bg-black px-10 py-56 h-[100vh] lg:min-h-[100vh]">
      <Image
        src={"/assets/ht-asset-2.jpg"}
        layout="fill"
        objectFit="cover"
        className="blur-[3px]"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-black/60"></div>
      {/* <Image src={'/assets/pattern-4.png'} height={250} width={250} alt="pattern" className="absolute top-0 right-0" /> */}
      <h1 className="text-white text-4xl lg:text-7xl text-center font-bold leading-normal lg:leading-[5.2rem] z-50">
        <span className="text-[#EEA942] cursive lowercase">CELEBRATING </span> MUSIC, <br /> ART, AND CULTURE
      </h1>
      {/* <p className="w-full max-w-4xl text-white text-sm md:text-xl text-center leading-tight z-50 mt-7">
        Dive into a world where music, art, and culture converge to create the
        ultimate celebration. From electrifying concerts to vibrant festivals,
        we bring you closer to the pulse of the city. Explore the fusion of
        food, fashion, and beauty in a realm where every event is a masterpiece.
      </p> */}
      <button className="absolute bottom-7 flex flex-col items-center gap-2 text-white text-sm font-medium">
        <SlMouse className="text-lg animate__animated animate__fadeInDown animate__infinite animate__slower" />
        click here
      </button>
    </div>
  );
};

export default Hero;
