import React, { useState } from "react";
import WeeklyContainer from "../Bottomsection/WeeklyContainer";

// temparature icons
import { IoLocationOutline, IoSearch } from "react-icons/io5";
// png cloud image
import weather from "../../assets/weather.png";
// cloud icons
import { IoIosRainy } from "react-icons/io";

import { FaCalendarAlt } from "react-icons/fa";
import SearchCity from "./SearchCity";



// use selector
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../../features/weather/weatherSlice'
import { PiUsbBold } from "react-icons/pi";
import { BiMinus, BiMinusBack, BiPlus } from "react-icons/bi";

const TemperatureCard = () => {

  const tempval= useSelector((state)=>state.weather.value);

  const dispatch = useDispatch()

  console.log(tempval)
  const [selectedOption, setSelectedOption] = useState("Celcuis");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="temperature-card min-h-[100px]  rounded-xl  md:col-span-3  sm:col-span-6 sm:row-span-1 flex flex-col  text-xl m-1 p-2">
      <SearchCity />
      <div className="temp-content flex flex-col mt-1 ml-2   justify-around  ">
        <div className="cloud pb-2 flex flex-row items-center justify-between p-2 ">
          <img className="h-20 " src={weather} />
          <div className="font-semibold text-4xl " >
            <h1>
              {tempval}<span>&#176;</span>C
            </h1>
          </div>
        </div>
        {/* <div className="font-semibold pb-2" style={{ fontSize: "38px" }}>
          <h1>
            28<span>&#176;</span>C
          </h1>
        </div> */}
        <div className="flex flex-row items-center ">
          <span className="mr-3 ">
            <IoIosRainy size={40} />
          </span>{" "}
          <p className="font-semibold "> Rainy Storm Clouds</p>
        </div>
      </div>
      <div className="h-[0.1rem]  bg-gray-600 w-ful m-2"></div>
      <div className="detail-date h-full flex justify-between   flex-row  p-2">
        <div className=" items-end  w-full ">
          <div className="flex items-center justify-between ">
            <div className="city flex items-center"> {" "}
              <IoLocationOutline className="fill-current" size={20} />
              <span className=" ml-2"> New Delhi ,India</span></div>
            <div className="flex">
              <select
                value={selectedOption}
                onChange={handleChange}
                className="p-2 rounded-lg border border-gray-300 shadow-sm outline-none bg-transparent text-sm"
              >
                <option className='bg-transparent p-2 rounded-lg' value="7 days">Celsuis</option>
                <option className='bg-transparent p-2 rounded-lg' value="30 days">Fahrenheit</option>
              </select>
            </div>
            <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
         <BiPlus/>
        </button>
        <span>{tempval}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          <BiMinus/>
        </button>
      </div>

          </div>
        </div>
      </div>
      <div className="detail-date h-full flex justify-between  flex-row items-end p-2">
        <div className=" items-center   w-full">
          <div className="flex items-center ">
            {" "}
            <FaCalendarAlt className="fill-current" size={20} />
            <div className="ml-2 flex w-full justify-between items-center ">
              <div className="time  flex font-bold">Monday ,<span>{" "}24 July 2025</span></div>
              <div className="time font-bold text-xl"> 05:05 PM </div>
            </div>
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
