import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
  SiDiscover,
} from "react-icons/si";

const Footer = () => {
  return (
    <footer className="text-gray-300 mt-10 py-8 px-4 text-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex items-center space-x-2">
          <div className="bg-yellow-700 p-3 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-semibold text-gray-100">Roar Suit</h1>
        </div>

        <div className="text-sm space-y-1">
          <p>Jaipur, Rajasthan</p>
          <p>
            Email:{" "}
            <a href="mailto:info@example.com" className="text-white">
              info@example.com
            </a>
          </p>
          <p>Phone: 0000 - 123 - 456789</p>
        </div>

        <div className="flex space-x-4 text-lg">
          <a href="#" className="text-white hover:text-yellow-600">
            <FaFacebookF />
          </a>
          <a href="#" className="text-white hover:text-yellow-600">
            <FaInstagram />
          </a>
          <a href="#" className="text-white hover:text-yellow-600">
            <FaTwitter />
          </a>
          <a href="#" className="text-white hover:text-yellow-600">
            <FaYoutube />
          </a>
        </div>

        <hr className="w-full border-t border-gray-700 my-4" />

        <div className="flex flex-col md:flex-row md:justify-between items-center w-full text-sm space-y-2 md:space-y-0">
          <p>
            © 2025 <span className="font-semibold">dt-dark fashion</span> Design
            Themes
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-600">
              Setting
            </a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-600">
              Support
            </a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-600">
              Information
            </a>
            <span>|</span>
            <a href="#" className="hover:text-yellow-600">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex space-x-4 text-2xl mt-4">
          <SiVisa className="text-white hover:cursor-pointer hover:text-yellow-600" />
          <SiMastercard className="text-white hover:cursor-pointer hover:text-yellow-600" />
          <SiAmericanexpress className="text-white hover:cursor-pointer hover:text-yellow-600" />
          <SiPaypal className="text-white hover:cursor-pointer hover:text-yellow-600" />
          <SiDiscover className="text-white hover:cursor-pointer hover:text-yellow-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
