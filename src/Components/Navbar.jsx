import { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaInfoCircle } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <h1 className="text-xl font-bold">MyPortfolio</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <FaHome /> Home
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <FaUser /> Profile
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300">
              <FaInfoCircle /> About
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-gray-800 px-4 pb-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#" className="flex items-center gap-2 py-2 border-b border-gray-700">
          <FaHome /> Home
        </a>
        <a href="#" className="flex items-center gap-2 py-2 border-b border-gray-700">
          <FaUser /> Profile
        </a>
        <a href="#" className="flex items-center gap-2 py-2">
          <FaInfoCircle /> About
        </a>
      </div>
    </nav>
  );
}