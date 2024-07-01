import { Heart, Home } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
        <DesktopSidebar/>
        <MobileSidebar/>
    </div>
  )
}

export default Sidebar;

const DesktopSidebar = () => {
    return(
        <div className="p-3 md:p-10 border-r min-h-screen w-24 md:w-64 hidden sm:block ">
          <div className='flex flex-col gap-20 sticky top-10 left-0 '>
            <div className='w-full'>
              <img src="/logo.svg" alt='logo' className='hidden md:block'/>
              <img src="/mobile-logo.svg" alt='mobile-logo' className='flex md:hidden'/>
            </div>
            <ul className='flex flex-col items-center md:items-start gap-8'>
              <Link to={"/"} className='flex gap-1 '>
                <Home size={24}/>
                <span className='font-bold hidden md:block'>Home</span>
              </Link> 
              <Link to={"/favourite"} className='flex gap-1 '>
                <Heart size={24}/>
                <span className='font-bold hidden md:block'>Favourite</span>
              </Link> 
            </ul>
          </div>
        </div>
    )
}
const MobileSidebar = () => {
    return(
       <div className='flex justify-center gap-10 border-t fixed w-full bottom-0 left-0 bg-white z-10 p-2 sm:hidden'>
          <Link to={"/"} className='hover:bg-slate-300 p-1 rounded-lg transition-colors'>
            <Home size={24} className='cursor-pointer'/>
          </Link>
          <Link to={"/favourite"} className='p-1 hover:bg-slate-300 p-1 rounded-lg transition-colors'>
            <Heart size={24} className='cursor-pointer'/>
          </Link>
       </div>
    )
}