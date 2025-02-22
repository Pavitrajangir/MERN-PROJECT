import React, { useState } from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "../components/Footer";

function BrandedSuits() {
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
      src: "/public/doublecolor.webp",
      src2: "/public/doublecolor.webp",
      title: "Double Color Solid Blazer",
      title2: "Rs 9000",
      link: "double-color-blazer",
    },
    {
      src: "/public/cotton.webp",
      src2: "/public/cotton.webp",
      title: "Cotton Twill Blazer",
      title2: "Rs 12000",
      link: "/branded-suits/cotton-twill-blazer",
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  return (
    <>
      <div className="text-white min-h-screen">
        <header
          className="relative w-full h-80 bg-no-repeat bg-[length:100%_100%] bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/detailed-3d-illustration-men39s-fashion-display-with-business-attire-arranged-classic-wooden-hangers-showcased-clean-white-lighting_41097-18792.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10">
            <Nav />
            <div className="absolute mt-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h2 className="text-4xl font-bold">COLLECTION</h2>
              <h1 className="mt-10">
                <Link to="/">
                  <span className="hover:text-orange-300 cursor-pointer">
                    Home
                  </span>
                </Link>
                / Best Selling - Home1
              </h1>
            </div>
          </div>
        </header>
        <div className="text-white mt-20 p-8">
          <div className="grid grid-cols-12 gap-6">
            <aside className="col-span-3 p-5 rounded-lg bg-gray-900">
              <div className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-lg font-semibold border-b border-gray-700 pb-2"
                  onClick={() => toggleDropdown("category")}
                >
                  Category{" "}
                  {openDropdown === "category" ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </button>
                {openDropdown === "category" && (
                  <ul className="mt-2 space-y-2 text-gray-400">
                    <li>Formal Blazers</li>
                    <li>Casual Blazers</li>
                    <li>Party Wear</li>
                  </ul>
                )}
              </div>

              <div className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-lg font-semibold border-b border-gray-700 pb-2"
                  onClick={() => toggleDropdown("availability")}
                >
                  Availability{" "}
                  {openDropdown === "availability" ? (
                    <ChevronUp />
                  ) : (
                    <ChevronDown />
                  )}
                </button>
                {openDropdown === "availability" && (
                  <ul className="mt-2 space-y-2 text-gray-400">
                    <li>In Stock</li>
                    <li>Out of Stock</li>
                  </ul>
                )}
              </div>

              <div className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-lg font-semibold border-b border-gray-700 pb-2"
                  onClick={() => toggleDropdown("price")}
                >
                  Price{" "}
                  {openDropdown === "price" ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openDropdown === "price" && (
                  <ul className="mt-2 space-y-2 text-gray-400">
                    <li>Under Rs 5000</li>
                    <li>Rs 5000 - Rs 10000</li>
                    <li>Above Rs 10000</li>
                  </ul>
                )}
              </div>
            </aside>

            <section className="col-span-9">
              <div className="grid grid-cols-3 gap-6">
                {images.map((product, index) => (
                  <div className="p-4 shadow-lg relative group">
                    <div className="relative w-full h-94 overflow-hidden">
                      <img
                        src={product.src}
                        alt={product.title}
                        className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                      />
                      {product.src2 && (
                        <img
                          src={product.src2}
                          alt={product.title}
                          className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-600 group-hover:opacity-100"
                        />
                      )}
                      <div className="absolute h-[100%] inset-0 bg-gradient-to-t from-orange-400 to-orange-200 opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <Link to={product.link}>
                        <button className="absolute top-[40%] right-[30%] cursor-pointer bg-orange-300 px-8 py-4 font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:opacity-100 hover:translate-y-0 hover:text-black">
                          <span className="relative z-20">Shop Now</span>
                          <span className="absolute inset-0 bg-white transition-transform duration-300 opacity-0 hover:translate-y-0 hover:opacity-100"></span>
                        </button>
                      </Link>
                    </div>
                    <h3 className="text-xl mt-4">{product.title}</h3>
                    <p className="text-gray-400">{product.title2}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BrandedSuits;
