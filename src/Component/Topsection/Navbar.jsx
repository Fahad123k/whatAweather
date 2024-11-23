import React from 'react';
import { FaHome, FaMapMarkerAlt, FaCalendarAlt, FaUserCircle } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import weather  from '../../assets/weather.png'; 

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-red-200 rounded-lg shadow items-center flex box-shadow lg:hidden">
      
      {/* App Name and Logo */}
      <div className="flex items-center justify-start ml-4">
        <img src={weather} alt="Weather Logo" className="w-10 h-10 mr-2" />
        {/* <h1 className="text-[5px] font-semibold text-gray-700">WhatAWaether</h1> */}
      </div>

      {/* Navbar Links with Icons */}
      <ul className="flex flex-row w-full justify-around items-center space-x-4">
        <li className="flex items-center space-x-1">
          <FaHome size={20} />
          <span>Home</span>
        </li>
        <li className="flex items-center space-x-1">
          <FaMapMarkerAlt size={20} />
          <span>Map</span>
        </li>
        <li className="flex items-center space-x-1">
          <IoLocationOutline size={20} />
          <span>Location</span>
        </li>
        <li className="flex items-center space-x-1">
          <FaCalendarAlt size={20} />
          <span>Calendar</span>
        </li>
        <li className="flex items-center space-x-1">
          <FaUserCircle size={20} />
          <span>Profile</span>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
