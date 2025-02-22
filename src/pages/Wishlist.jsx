import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen text-white">
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
            <h2 className="text-4xl font-bold">NEWS</h2>
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

      <h2 className="text-white text-3xl mt-10 mb-6">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-400">Your wishlist is empty.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-600 text-white">
              <th className="p-4 w-1/5 text-center">Image</th>
              <th className="p-4 w-1/5 text-left">Product Name</th>
              <th className="p-4 w-1/5 text-center">Price</th>
              <th className="p-4 w-1/5 text-center">Buy</th>
              <th className="p-4 w-1/5 text-center">Remove</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item) => (
              <tr key={item.id} className="border-b border-gray-600 text-white">
                <td className="p-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-24 object-cover mx-auto"
                  />
                </td>
                <td className="p-4 w-1/5 text-left">{item.title}</td>
                <td className="p-4 w-1/5 text-center font-semibold">
                  ${item.price}
                </td>
                <td className="p-4 w-1/5 text-center">
                  <Link>
                    <button className="bg-[#b59a76] hover:bg-white hover:text-black cursor-pointer text-white px-4 py-2 rounded-lg">
                      Shop Now
                    </button>
                  </Link>
                </td>
                <td className="p-4 w-1/5 text-center">
                  <button onClick={() => dispatch(removeFromWishlist(item.id))}>
                    <FaTrash className="text-white cursor-pointer text-lg hover:text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Footer />
    </div>
  );
};

export default Wishlist;
