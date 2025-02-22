import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Link } from "react-router";

function Home() {
  const slides = [
    {
      id: 1,
      image: "/img1.webp",
      title: "Fabulous Fabric & Pattern Suits",
      description:
        "Suspend potential, do not move, and live like a pure ornamental fountain. The ornamental seat is in its place.",
      link: "",
    },
    {
      id: 2,
      image: "/img02.webp",
      title: "Soft & Wrinkle Free Suits",
      description:
        "Style meets comfort with our latest suit collection. Elevate your look with premium fabrics and timeless designs.",
    },
    {
      id: 3,
      image: "/img03.webp",
      title: "Make Your Style Gorgeous",
      description:
        "Experience the art of tailoring with suits designed for confidence and sophistication. Perfect fit for any moment.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative">
      <div className="absolute mt-20 ml-10 text-white p-6 w-[400px] h-[350px]">
        <span className="text-8xl font-bold mr-2">{`0${
          currentSlide + 1
        }`}</span>
        <span className="text-5xl font-bold">{`/03`}</span>
        <button
          onClick={handleNext}
          className="ml-10 mt-10 p-2 bg-orange-300 cursor-pointer rounded-full hover:bg-orange-400 transition-all duration-300"
        >
          <img
            className="h-[50px] w-[50px] object-contain"
            src="https://cdn-icons-png.flaticon.com/512/664/664866.png"
          />
        </button>
      </div>

      <img
        ref={imageRef}
        key={slides[currentSlide].id}
        src={slides[currentSlide].image}
        alt="Slide Image"
        className="w-full h-auto"
      />

      <div
        ref={titleRef}
        className="absolute inset-0 flex justify-center top-[40%] left-[30%] text-white"
      >
        <h1 className="text-8xl uppercase font-light">
          {slides[currentSlide].title}
        </h1>
      </div>

      <div
        ref={descriptionRef}
        className="absolute inset-0 flex justify-center text-xl top-[67%] left-[40%] text-white"
      >
        <h1 className="mr-5">{slides[currentSlide].description}</h1>
      </div>

      <div className="absolute flex justify-center top-[80%] left-[70%] text-black">
        <Link to="Fabulous-suits">
          <button className="relative cursor-pointer overflow-hidden bg-orange-300 px-16 py-6 font-bold text-lg transition-colors duration-300 hover:text-orange-400 group">
            <span className="relative z-10">Shop Now</span>
            <span className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
          </button>
        </Link>
      </div>

      <div className="absolute bottom-5 right-5"></div>
    </div>
  );
}

export default Home;
