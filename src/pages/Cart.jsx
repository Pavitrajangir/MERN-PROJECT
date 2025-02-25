import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            quantity: type === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
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

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-6">Products</h1>

      <div className="flex gap-10">
        {/* Left Side - Products */}
        <div className="w-2/3">
          {cart.length === 0 ? (
            <p className="text-center text-lg">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="bg-gray-900 p-5 rounded-lg flex items-center justify-between mb-6 border border-gray-700">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                <div className="flex-1 ml-4">
                  <h2 className="text-2xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">Rs {item.price}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <button onClick={() => updateQuantity(item.id, "decrease")} className="bg-brown px-3 py-1 rounded">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, "increase")} className="bg-brown px-3 py-1 rounded">+</button>
                  </div>
                </div>
                <p className="text-lg font-semibold">Total: Rs {item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)} className="text-gray-400 text-xl">✖</button>
              </div>
            ))
          )}

          <div className="flex gap-6">
            <Link to="/" className="bg-brown text-black px-6 py-3 rounded-md font-semibold">
              Continue Shopping
            </Link>
            <button className="bg-brown text-black px-6 py-3 rounded-md font-semibold">
              Update Cart
            </button>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-1/3 p-6 rounded-lg border">
          <h2 className="text-3xl font-bold mb-4">Order Summary</h2>
          <p className="text-lg mb-4">Subtotal: <span className="font-semibold">Rs {totalPrice}</span></p>
          <button className="bg-red-500 text-white w-full py-3 rounded-md font-semibold mb-4">Add a note to your order</button>
          <p className="text-gray-400 text-sm mb-4">Shipping, taxes, and discounts will be calculated at checkout.</p>
          <button className="bg-red-500 text-black w-full py-3 rounded-md font-semibold mb-4">Checkout</button>

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
            <input type="text" className="w-full bg-gray-800 p-3 rounded-md" />
          </div>

          <button className="bg-brown text-black w-full py-3 rounded-md font-semibold">Calculate Shipping</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
