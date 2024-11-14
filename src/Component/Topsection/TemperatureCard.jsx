import React from "react";
import WeeklyContainer from "../Bottomsection/WeeklyContainer";

// temparature icons
import { IoLocationOutline, IoSearch } from "react-icons/io5";
// png cloud image
import weather from "../../assets/weather.png";
// cloud icons
import { IoIosRainy } from "react-icons/io";

import { FaCalendarAlt } from "react-icons/fa";

const TemperatureCard = () => {
  return (
    <div className="temperature-card min-h-[200px]  rounded-xl  md:col-span-3  sm:col-span-6 sm:row-span-1 flex flex-col  text-xl m-1 p-2">
      <div className="flex justify-end bg-gray-100  mt-2 mr-2  rounded-xl ">
        <IoSearch
          className="rounded-2xl  search p-1 font-semibold bg-gray-100 hover:bg-gray-300 "
          size={35}
        />
      </div>
      <div className="flex flex-col   ml-2  h-full justify-around xxl:gap-8 ">
        <div className="cloud">
          <img className="h-20" src={weather} />
        </div>
        <div className="font-semibold" style={{ fontSize: "40px" }}>
          <h1>
            28<span>&#176;</span>C
          </h1>
        </div>
        <div className="flex flex-row items-center ">
          <span className="mr-3">
            <IoIosRainy size={40} />
          </span>{" "}
          Rainy Storm Clouds
        </div>
      </div>
      <div className="h-[0.1rem]  bg-gray-600 w-ful m-2"></div>
      <div className="detail-date h-full flex justify-between   flex-row  p-2">
        <div className=" items-end  ">
          <div className="flex items-center ">
            {" "}
            <IoLocationOutline className="fill-current" size={20} />
            <span className=" ml-2"> New Delhi ,India</span>
          </div>
        </div>
      </div>
      <div className="detail-date h-full flex justify-between  flex-row items-end p-2">
        <div className=" items-center ">
          <div className="flex items-center ">
            {" "}
            <FaCalendarAlt className="fill-current" size={20} />{" "}
            <span className="ml-2">
              <span className="time font-bold">Monday</span> 24 July 2025{" "}
              <span className="time font-bold"> 05:05 PM </span>
            </span>
          </div>
        </div>
      </div>
      <div className="hidden sm:block  md:hidden lg:hidden mt-2">
        <WeeklyContainer />
      </div>
    </div>
  );
};

export default TemperatureCard;
