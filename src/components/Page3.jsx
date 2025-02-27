import React from "react";
import { Link } from "react-router";

function Page3() {
  return (
    <>
      <div className="min-h-screen min-w-[100%]">
        <div className="min-h-[85%] w-[80%] grid grid-cols-2 items-center ml-40 gap-15">
          <div className="text-white mt-6">
            <h1 className="text-5xl uppercase">
              Custom Made <br /> Luxurious Men's <br /> Suits
            </h1>
            <p className="mt-8">
              There is no limit to refinement when it comes to tailored luxury.
              Designed <br /> for elegance and precision, each suit is crafted
              with the finest materials to <br /> ensure a perfect fit and
              timeless style. Experience the ultimate <br />
              sophistication with our custom-made suits, tailored to perfection
              for the modern gentleman.
            </p>
            <Link to="custom-made">
              <button className="relative cursor-pointer mt-10 text-black overflow-hidden bg-orange-200 px-16 py-6 font-bold text-lg transition-colors duration-300 hover:text-orange-400 group">
                <span className="relative z-10">Shop Now</span>
                <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
              </button>
            </Link>
          </div>

          <div className="h-full relative group">
            <img src="/img9.webp" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-300 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        </div>

        <div className="min-h-[80%] mt-30 w-[80%] grid grid-cols-2 items-center ml-40 gap-15">
          <div className="h-full relative group">
            <img src="/img10.webp" className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-300 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
          <div className="text-white mt-6">
            <h1 className="text-5xl uppercase">
              Custom Made <br /> Luxurious Men's <br /> Suits
            </h1>
            <p className="mt-8">
              There is no limit to refinement when it comes to tailored luxury.
              Designed <br /> for elegance and precision, each suit is crafted
              with the finest materials to <br /> ensure a perfect fit and
              timeless style. Experience the ultimate <br />
              sophistication with our custom-made suits, tailored to perfection
              for the modern gentleman.
            </p>
            <Link to="custom-made">
              <button className="relative cursor-pointer mt-10 text-black overflow-hidden bg-orange-200 px-16 py-6 font-bold text-lg transition-colors duration-300 hover:text-orange-400 group">
                <span className="relative z-10">Shop Now</span>
                <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[10vw]"></div>
    </>
  );
}

export default Page3;
