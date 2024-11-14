import React, { useState } from 'react'
import WeatherMap from './WeatherMap';
import WeeklyContainer from './WeeklyContainer';



const Bottom = () => {
  return (
    <div className="bottom-section rounded-xl  h-full flex-1   ">
    <div className=" grid h-full  grid-rows-1 gap-2 sm:grid-cols-11 ">
      <div className="sm:hidden md:block md:col-span-3">
        <WeeklyContainer />
      </div>    

      <div className="blue-color   box-shadow h-full min-h-[30px] m-1  rounded-lg sm:col-span-11  md:col-span-8 p-1"><WeatherMap /></div>
    </div>
  </div>
  )
}

export default Bottom