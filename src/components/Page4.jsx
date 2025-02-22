import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router";

const Page4 = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "/public/image1.webp",
      src2: "/public/image11.webp",
      title: "Tweed Formal Blazer",
      title2: "Rs 8000",
      link: "/fabulous-suits/tweed-formal-blazer",
    },
    {
      src: "/public/image2.webp",
      src2: "/public/image22.webp",
      title: "Slim Fit Blazer",
      title2: "Rs 11000",
      link: "/fabulous-suits/slim-fit-blazer",
    },
    {
      src: "/public/image3.webp",
      src2: "/public/image33.webp",
      title: "Slim Formal Blazer",
      title2: "Rs 9000",
      link: "/fabulous-suits/slim-formal-blazer",
    },
    {
      src: "/public/image4.webp",
      src2: "/public/image44.webp",
      title: "Double Breasted Blazer",
      title2: "Rs 10000",
      link: "/fabulous-suits/double-breasted-blazer",
    },
    {
      src: "/public/image5.webp",
      src2: "/public/image55.webp",
      title: "Unique Silk Blazer",
      title2: "Rs 12000",
      link: "/fabulous-suits/unique-silk-blazer",
    },
    {
      src: "/public/image6.webp",
      title: "Elegant Suit 6",
      title2: "Rs 6000",
      link: "/fabulous-suits/elegant-suit-6",
    },
  ];
  const totalSlides = images.length;
  const visibleSlides = 3;

  useEffect(() => {
    gsap.to(sliderRef.current, {
      x: `-${currentIndex * (80 / visibleSlides)}%`,
      duration: 0.8,
      ease: "power2.out",
    });
  }, [currentIndex]);

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < totalSlides - visibleSlides) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="uppercase text-5xl mb-10">Formal Suits</h1>

        <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
          {currentIndex > 0 && (
            <button
              onClick={handlePrevClick}
              className="absolute z-30 left-0 top-[30%] bg-black text-white p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              ◀
            </button>
          )}

          {/* Image Slider */}
          <div className=" min-h-screen overflow-hidden text-white">
            <div ref={sliderRef} className="flex w-[130%] space-x-6">
              {images.map((image, index) => (
                <div
                  className="flex-shrink-0 w-1/4 h-[500px] flex flex-col items-center relative group"
                  key={index}
                >
                  <img
                    src={image.src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[95%] object-cover rounded-lg transition-all duration-600 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={image.src2}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[95%] object-cover absolute top-0 rounded-lg transition-all duration-600 ease-in-out opacity-0 group-hover:opacity-100"
                  />

                  <div className="absolute h-[95%] inset-0 bg-gradient-to-t from-orange-400 to-orange-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <Link to={image.link}>
                    <button className="absolute top-[40%] right-[30%] cursor-pointer bg-orange-300 px-8 py-4 font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:opacity-100 hover:translate-y-0 hover:text-black">
                      <span className="relative z-20">Shop Now</span>
                      <span className="absolute inset-0 bg-white transition-transform duration-300 opacity-0 hover:translate-y-0 hover:opacity-100"></span>
                    </button>
                  </Link>
                  <h1 className="mt-4 text-white text-4xl font-bold text-center hover:text-orange-300">
                    {image.title}
                  </h1>
                  <h1 className="mt-4 text-white text-2xl font-bold text-center">
                    {image.title2}
                  </h1>
                </div>
              ))}
            </div>
          </div>

          {currentIndex < totalSlides - visibleSlides && (
            <button
              onClick={handleNextClick}
              className="absolute right-0 top-[30%] bg-black text-white p-4 rounded-full opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              ▶
            </button>
          )}
        </div>
      </div>

      <div className="min-h-[100%]">
        <div className="min-h-[85%] w-[80%] grid grid-cols-2 items-center ml-40 gap-15">
          <div className="text-white mt-6">
            <h1 className="text-5xl uppercase">
              Latest breathable great dinner party jacket
            </h1>
            <p className="mt-8">
              While the development of the row continues with ease. The sediment
              of <br />
              the ground meets the appropriate surface.
            </p>
            <Link to="breathable-suits">
              <button className="relative cursor-pointer mt-10 text-black overflow-hidden bg-orange-200 px-16 py-6 font-bold text-lg transition-colors duration-300 hover:text-orange-400 group">
                <span className="relative z-10">Shop Now</span>
                <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
              </button>
            </Link>
          </div>

          <div className="h-[100%] relative group">
            <img src="/public/img11.webp" className="w-full h-[95%]" />
            <div className="absolute h-[95%] inset-0 bg-gradient-to-t from-orange-300 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page4;
