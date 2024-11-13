import React from 'react'

const Highlights = () => {
  return (
    <div className='flex flex-row justify-around  w-screen p-2  m-2'>

      <div className=" details bg-gray-900 h-80 w-80 rounded-lg  flex justify-center">Details</div>

      <div className="highlights flex flex-col h-80 bg-gray-800 rounded-lg ">
        <div className="heading p-2 "><p>Today's Highlight</p></div>

        <div className="boxes-row flex flex-row">
          <div className="bg-gray-900 m-2  h-[calc(30vh)] w-64 flex justify-center">hello</div>
          <div className="bg-gray-900 m-2  h-[calc(30vh)] w-64 flex justify-center">hello</div>
          <div className="bg-gray-900 m-2  h-[calc(30vh)] w-64 flex justify-center">hello</div>
        </div>

      </div>
    </div>
  )
}

export default Highlights