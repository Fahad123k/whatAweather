import React from 'react';
import { FaHome, FaRegMap, FaCalendarAlt } from "react-icons/fa";
import { BiCommand } from "react-icons/bi";
import { IoLocationOutline, IoEarth, IoSettings, IoNotificationsOutline } from "react-icons/io5";

const Sidenav = () => {
    return (

        <div className="m-3 navbar blue-color box-shadow rounded-lg p-3 sm:col-span-1 hidden lg:flex flex-col justify-between ">
            
        {/* Top Icon Section */}
        <div className="icon ">
            <a className="flex items-center hover:text-gray-500 justify-center mt-2">
                <FaHome className="fill-current" size={25} />
            </a>
        </div>

        {/* Center Icons Section */}
        <div className="center-icons flex flex-col items-center space-y-4 ">
            <a className="flex items-center hover:text-gray-500 justify-center p-4">
                <BiCommand className="fill-current" size={20} />
            </a>
            <a className="flex items-center hover:text-gray-500 justify-center p-4">
                <FaRegMap className="fill-current" size={20} />
            </a>
            <a className="flex items-center hover:text-gray-500 justify-center p-4">
                <IoLocationOutline className="fill-current" size={25} />
            </a>
            <a className="flex items-center hover:text-gray-500 justify-center p-4">
                <IoEarth className="fill-current" size={22} />
            </a>
            <a className="flex items-center hover:text-gray-500 justify-center p-4">
                <FaCalendarAlt className="fill-current" size={20} />
            </a>
            <a className="flex items-center hover:text-gray-500 justify-center p-4">
                <IoSettings className="fill-current" size={20} />
            </a>
        </div>

        {/* Bottom Icon Section */}
        <div className="notification-container flex justify-center">
            <a className="flex items-center hover:text-gray-500 justify-center mb-2">
                <IoNotificationsOutline className="fill-current" size={22} />
            </a>
        </div>
    </div>
        // </div>
    );
}

export default Sidenav;
