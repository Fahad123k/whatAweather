import React, { useState } from 'react';

// cloud icons
import { IoIosRainy } from "react-icons/io";




const WeeklyContainer = () => {
    const [selectedOption, setSelectedOption] = useState("7 days");

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className=" weekly-container flex  flex-col justify-around  box-shadow m-1 h-full min-h-[30px]  rounded-lg  sm:col-span-3    ">
            <div className="header flex justify-between p-3 flex-row "><p className='font-semibold'>7 Days Forecast</p> <p>

                <select
                    value={selectedOption}
                    onChange={handleChange}
                    className="p-2 rounded-lg border border-gray-300 shadow-sm outline-none bg-transparent text-sm"
                >
                    <option className='bg-transparent p-2 rounded-lg' value="7 days">7 days</option>
                    <option className='bg-transparent p-2 rounded-lg' value="30 days">30 days</option>
                </select>
            </p></div>

            <div className="seven-days pl-2 pr-2 ">
                <div className="list flex justify-between  flex-row items-center">
                    <div className="icon-temp flex justify-between  items-center flex-row "><div className='flex items-center '><IoIosRainy size={28} /> <span className='seven-days-font'>+29 &#176;/</span>+18</div><p className='ml-4'>25 July</p></div>

                    <div className="day ">Tuesday</div>
                </div>

                <div className="list flex justify-between  flex-row items-center">
                    <div className="icon-temp flex justify-around  items-center flex-row "><div className='flex items-center'><IoIosRainy size={28} /> <span className='seven-days-font'>+29 &#176;/</span>+18</div><p className='ml-4'>26 July</p></div>

                    <div className="day ">Wedenesday</div>
                </div>

                <div className="list flex justify-between  flex-row items-center">
                    <div className="icon-temp flex justify-around  items-center flex-row "><div className='flex items-center'><IoIosRainy size={28} /> <span className='seven-days-font'>+29 &#176;/</span>+18</div><p className='ml-4'>27 July</p></div>

                    <div className="day ">Thursday</div>
                </div>

                <div className="list flex justify-between  flex-row items-center">
                    <div className="icon-temp flex justify-around  items-center flex-row "><div className='flex items-center'><IoIosRainy size={28} /> <span className='seven-days-font'>+29 &#176;/</span>+18</div><p className='ml-4'>28 July</p></div>

                    <div className="day ">Friday</div>
                </div>

                <div className="list flex justify-between  flex-row items-center">
                    <div className="icon-temp flex justify-around  items-center flex-row "><div className='flex items-center'><IoIosRainy size={28} /> <span className='seven-days-font'>+29 &#176;/</span>+18</div><p className='ml-4'>29 July</p></div>

                    <div className="day ">Saturday</div>
                </div>

                <div className="list flex justify-between  flex-row items-center">
                    <div className="icon-temp flex justify-around  items-center flex-row "><div className='flex items-center'><IoIosRainy size={28} /> <span className='seven-days-font'>+29 &#176;/</span>+18</div><p className='ml-4'>30 July</p></div>

                    <div className="day ">Sunday</div>
                </div>



            </div>

        </div>
    );
};


export default WeeklyContainer