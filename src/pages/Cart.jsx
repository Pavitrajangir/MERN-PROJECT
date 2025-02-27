import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, type) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              type === "increase"
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
          }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
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
            <h2 className="text-4xl font-bold">Shopping Cart</h2>
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
      <h1 className="text-4xl font-bold mt-10 mb-6">Products</h1>

      <div className="flex ml-5 mr-5 gap-10">
        <div className="w-2/3">
          {cart.length === 0 ? (
            <p className="text-center text-lg">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-lg flex items-center justify-between mb-6 border border-gray-700"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-2xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">Rs {item.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, "decrease")}
                      className="bg-brown px-3 py-1 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "increase")}
                      className="bg-brown px-3 py-1 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="text-lg font-semibold">
                  Total: Rs {item.price * item.quantity}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 text-xl"
                >
                  ✖
                </button>
              </div>
            ))
          )}

          <div className="flex gap-6">
            <Link
              to="/"
              className="text-white bg-orange-300 hover:bg-white hover:text-black px-6 py-3 rounded-md font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </div>

        {cart.length > 0 && (
          <div className="w-1/3 p-6 rounded-lg border">
            <h2 className="text-3xl font-bold mb-4">Order Summary</h2>
            <p className="text-lg mb-4">
              Subtotal: <span className="font-semibold">Rs {totalPrice}</span>
            </p>
            <button className="bg-red-500 text-white w-full py-3 rounded-md font-semibold mb-4">
              Add a note to your order
            </button>
            <p className="text-gray-400 text-sm mb-4">
              Shipping, taxes, and discounts will be calculated at checkout.
            </p>
            <button className="bg-red-500 text-black w-full py-3 rounded-md font-semibold mb-4">
              Checkout
            </button>

            <div className="mb-4">
              <label className="block text-gray-400">Country</label>
              <select className="w-full bg-gray-800 p-3 rounded-md">
                <option>United States</option>
                <option>India</option>
                <option>United Kingdom</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-400">State</label>
              <select className="w-full bg-gray-800 p-3 rounded-md">
                <option>Alabama</option>
                <option>California</option>
                <option>New York</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-400">Zip/Postal Code</label>
              <input
                type="text"
                className="w-full bg-gray-800 p-3 rounded-md"
              />
            </div>

            <button className="bg-brown text-black w-full py-3 rounded-md font-semibold">
              Calculate Shipping
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
