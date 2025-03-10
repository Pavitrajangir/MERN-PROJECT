import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isUserSidebarOpen, setIsUserSidebarOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  // Auth states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  // Check if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Handle Sign-Up
  const handleSignUp = async (e) => {
    e.preventDefault();
    
    console.log("Signing up...");
  
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, phone, password }),
      });
  
      const data = await response.json();
      console.log("Signup response:", data);
  
      if (response.ok) {
        alert("Signup successful! Please sign in.");
        setIsSignUp(false);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("An error occurred. Check console.");
    }
  };
  
  const handleSignIn = async (e) => {
    e.preventDefault();
  
    console.log("Signing in...");
  
    try {
      const response = await fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("Signin response:", data);
  
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setIsUserSidebarOpen(false);
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Signin Error:", error);
      alert("An error occurred. Check console.");
    }
  };
  
  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <>
      <div className="flex items-center justify-between mt-10">
        <div className="flex ml-10 gap-3">
          <img className="h-20 rounded-full" src="/logo.webp" />
          <Link to="/">
            <h1 className="text-3xl font-bold mt-5 text-orange-200">
              Panda Suits
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-5 text-xl font-bold font-sans text-white">
          {["Home", "Shop", "About", "Pages", "Contact"].map((item) => (
            <div
              key={item}
              className="relative group cursor-pointer transition-colors duration-500 hover:text-orange-200"
              onMouseEnter={() => item === "Shop" && setShowDropdown(true)}
              onMouseLeave={() =>
                item === "Shop" && setTimeout(() => setShowDropdown(false), 300)
              }
            >
              <h1>{item}</h1>

              {item === "Shop" && (
                <div
                  className={`absolute min-w-max z-50 flex justify-center transition-all duration-500 ease-in-out ${
                    showDropdown
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-5 pointer-events-none"
                  }`}
                >
                  <div className="absolute mt-4 border border-white bg-[#110600] text-white p-5 rounded shadow-lg z-50 min-w-max">
                    <div className="grid grid-cols-4 gap-x-16">
                      {[
                        {
                          title: "BUSINESS SUIT",
                          items: [
                            "Cape Blazer",
                            "Lace Blazer",
                            "Solid Blazer",
                            "Parka Coat",
                            "Heavy Parka Coat",
                            "Fur Coat",
                            "Duster Coat",
                            "Chesterfield Coat",
                          ],
                        },
                        {
                          title: "TRADITIONAL SUIT",
                          items: [
                            "Casual Jacket",
                            "Formal Blazer",
                            "Long Coat",
                            "Wedding Coat",
                            "Over Coat",
                            "Tail Coat",
                            "Ulster Coat",
                            "Paletot Coat",
                          ],
                        },
                        {
                          title: "FASHION SUIT",
                          items: [
                            "Denin Blazer",
                            "Printed Blazer",
                            "Velvet Blazer",
                            "Fur Coat",
                            "Duster Coat",
                            "Breasted Coat",
                            "Wet Coat",
                            "Shawl Coat",
                          ],
                        },
                        {
                          title: "CASUAL SUIT",
                          items: [
                            "Designer Blazer",
                            "Slim Fit Blazer",
                            "Chore Coat",
                            "Chesterfield Coat",
                            "Windcheater Coat",
                            "Notch coat",
                            "Double Breasted Coat",
                            "Tuxedos Coat",
                          ],
                        },
                      ].map((category, index) => (
                        <div key={index} className="w-1/4">
                          <h2 className="font-bold text-md mb-2 transition-colors duration-300 hover:text-[#8B4513]">
                            {category.title}
                          </h2>
                          {category.items.map((item, i) => (
                            <p
                              key={i}
                              className="whitespace-nowrap cursor-pointer transition-colors duration-300 hover:text-[#8B4513]"
                            >
                              {item}
                            </p>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-14 mr-20 text-white">
          <Link to="/cart">
            <svg
              className="h-8 cursor-pointer transition-colors duration-300 hover:fill-orange-200"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 122.88 116.31"
              fill="white"
            >
              <g>
                <path d="M4.06,12.67C1.87,12.67,0,10.8,0,8.51c0-2.19,1.87-4.06,4.06-4.06h5.62c0.1,0,0.31,0,0.42,0c3.75,0.1,7.08,0.83,9.88,2.6 c3.12,1.98,5.41,4.99,6.66,9.47c0,0.1,0,0.21,0.1,0.31L27.78,21h2.34V4.12c0-2.27,1.85-4.12,4.12-4.12h21.67 c2.27,0,4.12,1.85,4.12,4.12v10.02c3.42-3.41,8.06-5.5,13.18-5.5c2.22,0,4.36,0.4,6.34,1.12c4.08-4.33,9.87-7.04,16.29-7.04 c10.96,0,20.07,7.88,21.99,18.28h0.99c2.29,0,4.06,1.87,4.06,4.06c0,0.42-0.11,0.83-0.21,1.25l-10.61,42.76 c-0.42,1.87-2.08,3.12-3.95,3.12l0,0H41.51c1.46,5.41,2.91,8.32,4.89,9.68c2.39,1.56,6.56,1.66,13.53,1.56h0.1l0,0h47.03 c2.29,0,4.06,1.87,4.06,4.06c0,2.29-1.87,4.06-4.06,4.06H60.04l0,0c-8.64,0.1-13.94-0.1-18.21-2.91 c-4.37-2.91-6.66-7.91-8.95-16.96l0,0L18.94,18.92c0-0.1,0-0.1-0.1-0.21c-0.62-2.29-1.66-3.85-3.12-4.68 c-1.46-0.94-3.43-1.35-5.72-1.35c-0.1,0-0.21,0-0.31,0H4.06L4.06,12.67L4.06,12.67z M84.38,37.69c0-1.28,1.27-2.32,2.83-2.32 c1.56,0,2.83,1.04,2.83,2.32v15.69c0,1.28-1.27,2.32-2.83,2.32c-1.56,0-2.83-1.04-2.83-2.32V37.69L84.38,37.69z M67.43,37.69 c0-1.28,1.27-2.32,2.83-2.32c1.56,0,2.83,1.04,2.83,2.32v15.69c0,1.28-1.27,2.32-2.83,2.32c-1.56,0-2.83-1.04-2.83-2.32V37.69 L67.43,37.69z M50.49,37.69c0-1.28,1.27-2.32,2.83-2.32c1.56,0,2.83,1.04,2.83,2.32v15.69c0,1.28-1.27,2.32-2.83,2.32 c-1.56,0-2.83-1.04-2.83-2.32V37.69L50.49,37.69z M85.57,13.37c2.31,2.05,4.14,4.66,5.29,7.63h19.85 c-1.68-6.65-7.7-11.58-14.87-11.58C91.89,9.42,88.29,10.91,85.57,13.37L85.57,13.37z M92.21,29.11L92.21,29.11l-38.01,0l0,0H30.07 l0,0l9.26,34.86h65.65l8.63-34.86H92.21L92.21,29.11z M55.31,21c0.11-0.29,0.23-0.57,0.35-0.85V7.2c0-1.64-1.35-2.99-2.99-2.99 H37.71c-1.64,0-2.99,1.34-2.99,2.99V21H55.31L55.31,21z M94.89,96.33c5.52,0,9.99,4.47,9.99,9.99s-4.47,9.99-9.99,9.99 c-5.51,0-9.99-4.47-9.99-9.99S89.38,96.33,94.89,96.33L94.89,96.33L94.89,96.33z M51.09,96.33c5.51,0,9.99,4.47,9.99,9.99 s-4.47,9.99-9.99,9.99s-9.99-4.47-9.99-9.99S45.57,96.33,51.09,96.33L51.09,96.33L51.09,96.33z" />
              </g>
            </svg>
          </Link>

          <Link to="/wishlist">
            <svg
              className="h-8 cursor-pointer transition-colors duration-300 hover:fill-orange-200"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              fill="white"
              viewBox="0 0 122.88 109.57"
            >
              <g>
                <path d="M65.46,19.57c-0.68,0.72-1.36,1.45-2.2,2.32l-2.31,2.41l-2.4-2.33c-0.71-0.69-1.43-1.4-2.13-2.09 c-7.42-7.3-13.01-12.8-24.52-12.95c-0.45-0.01-0.93,0-1.43,0.02c-6.44,0.23-12.38,2.6-16.72,6.65c-4.28,4-7.01,9.67-7.1,16.57 c-0.01,0.43,0,0.88,0.02,1.37c0.69,19.27,19.13,36.08,34.42,50.01c2.95,2.69,5.78,5.27,8.49,7.88l11.26,10.85l14.15-14.04 c2.28-2.26,4.86-4.73,7.62-7.37c4.69-4.5,9.91-9.49,14.77-14.52c3.49-3.61,6.8-7.24,9.61-10.73c2.76-3.42,5.02-6.67,6.47-9.57 c2.38-4.76,3.13-9.52,2.62-13.97c-0.5-4.39-2.23-8.49-4.82-11.99c-2.63-3.55-6.13-6.49-10.14-8.5C96.5,7.29,91.21,6.2,85.8,6.82 C76.47,7.9,71.5,13.17,65.46,19.57L65.46,19.57z M60.77,14.85C67.67,7.54,73.4,1.55,85.04,0.22c6.72-0.77,13.3,0.57,19.03,3.45 c4.95,2.48,9.27,6.1,12.51,10.47c3.27,4.42,5.46,9.61,6.1,15.19c0.65,5.66-0.29,11.69-3.3,17.69c-1.7,3.39-4.22,7.03-7.23,10.76 c-2.95,3.66-6.39,7.44-10,11.17C97.2,74.08,91.94,79.12,87.2,83.66c-2.77,2.65-5.36,5.13-7.54,7.29L63.2,107.28l-2.31,2.29 l-2.34-2.25l-13.6-13.1c-2.49-2.39-5.37-5.02-8.36-7.75C20.38,71.68,0.81,53.85,0.02,31.77C0,31.23,0,30.67,0,30.09 c0.12-8.86,3.66-16.18,9.21-21.36c5.5-5.13,12.97-8.13,21.01-8.42c0.55-0.02,1.13-0.03,1.74-0.02C46,0.48,52.42,6.63,60.77,14.85 L60.77,14.85z" />
              </g>
            </svg>
          </Link>

          {user ? (
            <>
              <span>Welcome, {user.firstName}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsUserSidebarOpen(!isUserSidebarOpen)}
              className="p-2 bg-gray-800 text-white rounded-full shadow-lg"
            >
              <FaUser size={24} />
            </button>
          )}
        </div>
      </div>

      {isUserSidebarOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.3 }}
          className="fixed z-50 top-0 right-0 h-full w-80 bg-white shadow-xl p-6"
        >
          <button
            onClick={() => setIsUserSidebarOpen(false)}
            className="absolute cursor-pointer top-4 right-4 text-gray-600 text-xl"
          >
            ✕
          </button>

          {isSignUp ? (
            <>
              <h2 className="text-2xl font-bold mb-4">Create an Account</h2>
              <form onSubmit={handleSignUp} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border p-2 rounded"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border p-2 rounded"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="border p-2 rounded"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="OTP Verification"
                  className="border p-2 rounded"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button className="bg-blue-600 cursor-pointer text-white py-2 rounded">
                  Verify & Sign Up
                </button>
                <button
                  type="button"
                  onClick={() => setIsSignUp(false)}
                  className="text-blue-600 cursor-pointer"
                >
                  Already have an account? Sign In
                </button>
              </form>
            </>
          ) : (
            <>
              <h2 className="text-2xl cursor-pointer font-bold mb-4">
                Sign In
              </h2>
              <form onSubmit={handleSignIn} className="flex flex-col gap-4">
                <input
                  className="border p-2 rounded"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="border p-2 rounded"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button className="bg-blue-600 cursor-pointer text-white py-2 rounded">
                  Sign In
                </button>
                <button
                  type="button"
                  onClick={() => setIsSignUp(true)}
                  className="text-blue-600 cursor-pointer"
                >
                  Create an Account
                </button>
              </form>
            </>
          )}
        </motion.div>
      )}
    </>
  );
}

export default Nav;
