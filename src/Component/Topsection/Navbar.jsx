import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-20 bg-red-200 rounded-lg shadow items-center  flex  box-shadow lg:hidden">
    <ul className=' flex flex-row w-full justify-around items-center space-x-4'>
      <li>Home</li>
      <li>Map</li>
      <li>Location</li>
      <li>Calender</li>
      <li>Profile</li>
    </ul>
  </div>
  )
}

export default Navbar