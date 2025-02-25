import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="text-white min-h-screen">
      <Nav />
      <div className="container mx-auto p-10">
        <h1 className="text-4xl font-bold text-center mb-6">Your Wishlist</h1>

        {wishlist.length === 0 ? (
          <p className="text-center text-lg">Your wishlist is empty.</p>
        ) : (
          <div className="space-y-6">
            {wishlist.map((item) => (
              <div key={item.id} className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">Price: Rs {item.price}</p>
                </div>
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="bg-red-500 px-4 py-2 rounded-md font-semibold"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-6">
          <Link to="/" className="bg-orange-400 text-black px-6 py-3 rounded-md font-semibold">
            Continue Shopping
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Wishlist;
