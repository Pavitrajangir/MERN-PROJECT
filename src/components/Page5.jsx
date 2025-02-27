import React, { useState } from "react";

const images = [
  {
    image: "/me.jpg",
    name: "Pavitra Jangir",
    position: "CEO",
    text: "Pure in softness now, but always present. The painful path leads to great changes at the doorstep. The balanced approach brings comfort and progress.",
  },
  {
    image: "/shivansh.jpg",
    name: "Shivansh",
    position: "Manager",
    text: "Success is built on patience and persistence. Every challenge is a stepping stone to greatness.",
  },
  {
    image: "/shailu.jpg",
    name: "Shailendra Sharma",
    position: "Developer",
    text: "Great leadership is about inspiring change and adapting to the needs of the future.",
  },
];

function Page5() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center text-white w-full">
        <div className="w-[90%] relative left-[5%]">
          <img
            src="/bgImage.webp"
            alt="Background"
            className="h-[400px] w-[650px] object-cover"
          />

          <div className="absolute flex top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 gap-25">
            <img src={images[index].image} className="h-35 w-30" alt="User" />

            <div>
              <h1 className="uppercase text-4xl font-bold">Testimonial</h1>
              <p className="pt-6 text-gray-300 text-lg">{images[index].text}</p>
              <p className="pt-6 text-xl text-orange-300 font-semibold">
                {images[index].name} - {images[index].position}
              </p>
            </div>
          </div>

          <div
            className="absolute top-[30%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 cursor-pointer group"
            onClick={handleNext}
          >
            <span className="text-gray-300 text-2xl">Next</span>
            <div className="w-10 h-[2px] bg-orange-300"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-[50vh] text-white px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          SUBSCRIBE TODAY
        </h2>

        <div className="flex w-full mt-10 max-w-lg">
          <input
            type="email"
            placeholder="email id here"
            className="w-[80%] p-6 text-gray-700 bg-white border-none outline-none rounded-l-lg placeholder-gray-400"
          />
          <button className="w-1/3 p-3 bg-[#b6997b] text-white text-xl rounded-r-lg hover:bg-[#a3876c] transition">
            Subscribe
          </button>
        </div>

        <p className="mt-4 text-gray-300 text-lg ">
          Signup and claim gift card worth{" "}
          <span className="font-semibold text-white">$10</span>
        </p>
      </div>
    </>
  );
}

export default Page5;
