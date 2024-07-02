import { Heart, HeartPulse, Soup } from 'lucide-react'
import React from 'react'

const RecipeCard = () => {
  return (
    <div className='flex flex-col rounded-md bg-green-100 overflow-hidden p-3 relative'>
          <a href='#' className='relative h-32'>
            <img src='/1.jpg' alt='recipe-image'
              className='rounded-md w-full object-cover cursor-pointer h-full'
            />
            <div className='absolute bottom-2 left-2 p-1 bg-white rounded-full hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-1 text-sm'>
              <Soup size={16}/>
              4 servings
            </div>
            <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'>
              <Heart size={20} className='hover:fill-red-500 hover:text-red-500 transition-colors'/>
            </div>
          </a>
          <div className='flex mt-1'>
            <p className='font-bold tracking-wide text-slate-600'>Roasted Chicken</p>
          </div>
          <p className='my-2'>Turkish Kitchen</p>
          <div className='flex gap-2 mt-auto'>
            <div className='flex gap-1 items-center p-1 px-1.5 rounded-md shadow-sm bg-green-300  hover:bg-green-300/70 transition-colors'>
              <HeartPulse size={16}/>
              <span className='text-sm tracking-tighter font-semibold'>Gluten-free</span>
            </div>
            <div className='flex gap-1 items-center p-1 px-1.5 rounded-md shadow-sm bg-green-300  hover:bg-green-300/70 transition-colors'>
              <HeartPulse size={16}/>
              <span className='text-sm tracking-tighter font-semibold'>Gluten-free</span>
            </div>
          </div>
          </div>
  )
}

export default RecipeCard

