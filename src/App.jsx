import { useState } from 'react';
import './App.css';
import Sidenav from './Component/Sidenav';

// temparature icons
import { IoLocationOutline, IoSearch } from "react-icons/io5";


// png cloud image
import weather from "./assets/weather.png"
import { IoIosRainy } from "react-icons/io";
import { FaCalendarAlt } from 'react-icons/fa';


// windstatus
import { VscGraphLine } from "react-icons/vsc";
import WeatherMap from './Component/WeatherMap';
import Graph from './Component/Graph';
import LineChartComponent from './Component/Graph';





const Navbar = () => {
  return (
    <Sidenav />

  );
};

const TemperatureCard = () => {
  return (
    <div className="temperature-card min-h-[200px]  rounded-xl  md:col-span-3  sm:col-span-6 sm:row-span-1 flex flex-col  text-xl m-1 p-2">

      <div className="flex justify-end  mt-2 mr-2  rounded-lg">
        <IoSearch className="rounded-xl  search p-1 font-semibold bg-gray-100 hover:bg-gray-300 " size={35} />
      </div>
      <div className="flex flex-col  ml-2  h-[180px] justify-between alingn-start ">
        <div className="cloud"><img className="h-20" src={weather} /></div>
        <div className='font-semibold' style={{ fontSize: "40px" }}><h1>28<span>&#176;
        </span>C</h1></div>
        <div className='flex flex-row items-center '><span className='mr-3'><IoIosRainy size={40} /></span> Rainy Storm Clouds</div>
      </div>
      <div className="h-[0.1rem]  bg-gray-600 w-ful m-2"></div>
      <div className="detail-date flex justify-between   flex-row items-center">
        <div className="  items-center "><div className='flex items-center '> <IoLocationOutline className="fill-current" size={20} /><span className=' ml-2'> New Delhi ,India</span></div></div>
      </div>
      <div className="detail-date flex justify-between  flex-row items-center">
        <div className=" items-center "><div className='flex items-center '> <FaCalendarAlt className="fill-current" size={20} /> <span className='ml-2'><span className='time font-bold'>Monday</span> 24 July 2025 <span className='time font-bold'> 05:05 PM </span></span></div></div>
      </div>
      <div className="hidden sm:block  md:hidden lg:hidden mt-2">
        <WeeklyContainer />
      </div>

    </div>
  );
};

const InfoBox = ({ color }) => {
  return (
    <div className={`info-box ${color} min-h-[40px] rounded-lg  grid grid-rows-7 `}>
      <div className="top-content row-span-5 min-h-[30px]   flex items-center justify-center rounded-t">
        {/* <div className="div">Wind Staus</div> */}
      </div>
      <div className="bottom-content row-span-2 min-h-[30px]   flex items-center justify-center rounded-b  rounded">
        Bottom
      </div>
    </div>
  );
};
const WindStatus = ({ color }) => {
  return (
    <div className={`info-box ${color} min-h-[40px] rounded-lg  grid grid-rows-7  p-3`}>
      <div className="top-content row-span-5 min-h-[30px]   flex flex-col items-center justify-between rounded mt-2">
        <div className="flex items-center w-full font-semibold">Wind Status</div>
        <Graph />
      </div>
      <div className="bottom-content row-span-2 min-h-[30px]   flex items-center justify-center rounded outilne ">
        <div className="flex flex-row justify-between   items-center w-full"><p><span className='text-[22px] font-semibold '>7.90</span> km/h</p> <p>5:01AM</p></div>

      </div>
    </div>
  );
};
const UvIndex = ({ color }) => {
  return (
    <div className={`info-box ${color} min-h-[40px] rounded-lg  grid grid-rows-7  p-3`}>
      <div className="top-content row-span-5 min-h-[30px]   flex flex-col items-center justify-between rounded mt-2">
        <div className="flex items-center w-full font-semibold">Uv Index</div>
        <Graph />
      </div>
      <div className="bottom-content row-span-2 min-h-[30px]   flex items-center justify-center rounded outilne ">
        <div className="flex flex-row justify-between   items-center w-full"><p><span className='text-[22px] font-semibold '>800</span> Omega</p> <p>5:01AM</p></div>

      </div>
    </div>
  );
};
const SunRiseSet = ({ color }) => {
  return (
    <div className={`info-box ${color} min-h-[40px] rounded-lg  grid grid-rows-7  p-3 `}>
      <div className="top-content row-span-5 min-h-[30px]   flex flex-col items-center justify-between rounded mt-2">
        <div className="flex items-center w-full font-semibold">Sunset  and Sunrise</div>
        <Graph />
      </div>
      <div className="bottom-content row-span-2 min-h-[30px]   flex items-center justify-center  rounded ">
        <div className="flex flex-row justify-between   items-center w-full"><p><span className='text-[22px] font-semibold '>5:30</span> AM</p> <p>5:01PM</p></div>

      </div>
    </div>
  );
};

const InfoSection = () => {
  return (
    <div className="info-section min-h-[40px] rounded-xl  m-1  md:col-span-8 sm:col-span-5">
      <div className="h-full grid md:grid-cols-3 sm:grid-cols-1 gap-4  ">
        <WindStatus />
        <UvIndex />
        <SunRiseSet />

      </div>
    </div>
  );
};

const WeeklyContainer = () => {
  const [selectedOption, setSelectedOption] = useState("7 days");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="weekly-container flex  flex-col justify-around  box-shadow m-1 h-full min-h-[30px]  rounded-lg  sm:col-span-3    ">
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


const BottomSection = () => {

  return (
    <div className="bottom-section rounded-xl  h-full flex-1   ">
      <div className=" grid h-full  grid-rows-1 gap-2 sm:grid-cols-11 ">
        <div className="sm:hidden md:block md:col-span-3">
          <WeeklyContainer />
        </div>

        <div className="blue-color   box-shadow h-full min-h-[30px] m-1  rounded-lg sm:col-span-11  md:col-span-8 p-1"><WeatherMap /></div>
      </div>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(0);



  return (
    <div className="grid-container grid grid-cols-1 gap-4 sm:grid-cols-12 md:grid-cols-12  min-h-screen ">

      <Navbar />

      <div className="content-container rounded p-2  sm:col-span-12 md:col-span-12 lg:col-span-11">

        <div className="w-full h-20 bg-red-200 rounded-lg shadow items-center  flex  box-shadow lg:hidden">
          <ul className=' flex flex-row w-full justify-around items-center space-x-4'>
            <li>Home</li>
            <li>Map</li>
            <li>Location</li>
            <li>Calender</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="flex h-full flex-col gap-2">
          <div className="temperature-section flex-1 ">
            <div className="temperature-display m-1 grid h-full grid-rows-1 gap-2 md:grid-cols-11  sm:grid-cols-11">
              <TemperatureCard />
              <InfoSection />
            </div>
          </div>
          <BottomSection />
        </div>
      </div>
    </div>
  );
}

export default App;
