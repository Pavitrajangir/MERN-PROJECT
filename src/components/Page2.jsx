import gsap from "gsap";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import BrandedSuits from '../pages/BrandedSuits';

function Page2() {
  useEffect(() => {
    gsap.to(".moving-img", {
      y: "-80", // Move up
      duration: 3, // Speed
      repeat: -1,
      yoyo: true, // Infinite loop
      ease: "power1.inOut", // Smooth animation
      force3D: true, // Ensures smoother GPU rendering
    });
  }, []);

  return (
    <>
      <div className="h-screen text-white flex relative">
        <div className="flex gap-8 top-[30%] left-[10%] absolute">
          <img className="h-[350px] w-[250px] " src="public/img2.webp" />

          <img className="h-[150px] mt-51 moving-img" src="public/img4.webp" />

          <div className="">
            <h1 className="text-5xl font-light uppercase pl-30">
              Branded Suits
            </h1>
            <h1 className="mt-8 pl-4 max-w-md text-lg leading-relaxed text-justif">
              I hate that there is no gap; the arrow sits at the bottom. The
              lake’s waves accumulate and settle. The pure sits in accordance
              with the highest discipline. Who stands with nothing, at the
              highest point of balance. Time does not yield; the force of energy
              flows smoothly. Live righteously, growing in greatness, with a
              strong foundation. Do not hesitate, hold steady.
            </h1>

            <Link to="branded-suits">
              <button className="relative cursor-pointer overflow-hidden border border-orange-200 mt-14 ml-45 px-16 py-6 font-bold text-lg transition-colors duration-300 hover:text-orange-400 group">
                <span className="relative z-10 ">Shop Now</span>
                <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
              </button>
            </Link>
          </div>

          <img className="h-[500px]" src="public/img3.webp" />
        </div>
      </div>

      <div className="h-[5vw]"></div>

      <div className=" text-white flex mt-15 justify-center items-center h-screen">
        <div className="grid bg-[#101010] grid-cols-2 w-[80%] h-[100%]">
          {/* Excellence Cutting */}
          <div className="flex justify-center items-center gap-6 border-r border-b transition-all duration-700 hover:bg-[#1b1b1b] border-[#c4a47c] group group-hover:mt-5">
            <img
              src="/public/img5.webp"
              className="h-30 transition-transform duration-700 group-hover:-translate-y-5"
            />
            <h2 className="text-5xl font-light text-justify">
              EXCELLENCE <br /> E CUTTING
            </h2>
          </div>

          {/* Quality Fabric */}
          <div className="flex justify-center items-center gap-6 border-b transition-all duration-700 hover:bg-[#1b1b1b] border-[#c4a47c] group">
            <img
              src="/public/img6.webp"
              className="h-30 transition-transform duration-700 group-hover:-translate-y-5"
            />
            <h2 className="text-5xl font-light text-justify">
              QUALITY <br /> FABRIC
            </h2>
          </div>

          {/* Expert Tailoring */}
          <div className="flex justify-center items-center gap-6 border-r transition-all duration-700 hover:bg-[#1b1b1b] border-[#c4a47c] group">
            <img
              src="/public/img7.webp"
              className="h-30 transition-transform duration-700 group-hover:-translate-y-5"
            />
            <h2 className="text-5xl pt-4 font-light text-justify">
              EXPERT <br /> TAILORING
            </h2>
          </div>

          {/* Fully Hand Stitched */}
          <div className="flex justify-center gap-6 items-center transition-all duration-700 hover:bg-[#1b1b1b] group">
            <img
              src="/public/img8.webp"
              className="h-30 transition-transform duration-700 group-hover:-translate-y-5"
            />
            <h2 className="text-5xl pt-3 font-light text-justify">
              FULLY HAND <br /> STITCHED
            </h2>
          </div>
        </div>
      </div>

      <div className="h-[10vw]"></div>
    </>
  );
}

export default Page2;
