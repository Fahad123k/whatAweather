import React from 'react'
import TemperatureCard from './TemperatureCard'
import InfoSection from './InfoSection'


const TopContainer = () => {
  return (
    <div className="temperature-section flex-1 ">
            <div className="temperature-display m-1 grid h-full grid-rows-1 gap-2 md:grid-cols-11  sm:grid-cols-11">
              <TemperatureCard />
              <InfoSection />
            </div>
          </div>
  )
}

export default TopContainer