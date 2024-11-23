import React from 'react'
import Graph from './Graph';
import SunriseSunsetGraph from './SunriseSunsetGraph';



const WindStatus = ({ color }) => {
    return (
      <div className={`info-box ${color} min-h-[40px] rounded-lg  grid grid-rows-7  p-3`}>
        <div className="top-content row-span-5 min-h-[30px]   flex flex-col items-center justify-between rounded mt-2">
          <div className="flex items-center w-full font-semibold">Wind Status Today</div>
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
          <div className="flex flex-row justify-between   items-center w-full"><p><span className='text-[22px] font-semibold '>Moderate</span> </p> <p>5:01AM</p></div>
  
        </div>
      </div>
    );
  };
  const SunRiseSet = ({ color }) => {
    return (
      <div className={`info-box ${color} min-h-[40px] rounded-lg  grid grid-rows-7  p-3 `}>
        <div className="top-content row-span-5 min-h-[30px]   flex flex-col items-center justify-between rounded mt-2">
          <div className="flex items-center w-full font-semibold">Sunset  and Sunrise</div>
          <SunriseSunsetGraph />
        </div>
        <div className="bottom-content row-span-2 min-h-[30px]   flex items-center justify-center  rounded ">
          <div className="flex flex-row justify-between   items-center w-full"><p><span className='text-[22px] font-semibold '>6:51</span></p> <p className='text-[22px] font-semibold '>17:25</p></div>
  
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
  )
}

export default InfoSection