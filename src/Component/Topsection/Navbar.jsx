import React, { useState } from 'react';
import { FaHome, FaMapMarkerAlt, FaCalendarAlt, FaUserCircle } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { GiHamburgerMenu } from 'react-icons/gi'; // Hamburger menu icon
import weather from '../../assets/weather.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full h-20  rounded-lg shadow flex items-center justify-between px-4 lg:hidden">
      
      {/* App Name and Logo */}
      <div className="flex items-center">
        <img src={weather} alt="Weather Logo" className="w-10 h-10 mr-2" />
        <h1 className="text-lg font-semibold text-gray-700">What A Weather</h1>
      </div>

      {/* Hamburger Icon */}
      <button
        className="text-gray-700 text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu />
      </button>

      {/* Menu Items */}
      {isMenuOpen && (
        <div className="absolute top-20 right-4 bg-white rounded-lg drop-shadow-lg py-4 px-6 z-50 border-t-2">
          <ul className="flex flex-col space-y-4">
            <li className="flex items-center space-x-2">
              <FaHome size={20} />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt size={20} />
              <span>Map</span>
            </li>
            <li className="flex items-center space-x-2">
              <IoLocationOutline size={20} />
              <span>Location</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCalendarAlt size={20} />
              <span>Calendar</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaUserCircle size={20} />
              <span>Profile</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
