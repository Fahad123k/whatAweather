import { useState } from 'react';
import './App.css';
import Sidenav from './Component/Sidenav';


import Navbar from './Component/Topsection/Navbar';
import Bottom from './Component/Bottomsection/Bottom';
import TopContainer from './Component/Topsection/TopContainer';



function App() {
 
  return (
    <div className="grid-container grid grid-cols-1 gap-2 sm:grid-cols-12 md:grid-cols-12  min-h-screen ">
      <Sidenav />
      <div className="content-container rounded p-2  sm:col-span-12 md:col-span-12 lg:col-span-11">

       <Navbar/>
        <div className="main-container flex h-full flex-col gap-2">
          <TopContainer/>
          <Bottom />
        </div>
      </div>
    </div>
  );
}

export default App;
