import { Search } from 'lucide-react'
import React from 'react'

const HomePage = () => {
  return (
    <div className='bg-white p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>
        <form>
          <label className='input shadow-md flex items-center gap-2'>
            <Search size={24}/>
            <input type='text'
              className='text-sm md:text-md grow'
              placeholder='What do you want to cook today...?'
            />
          </label>
        </form>
        <h1 className='font-bold text-3xl md:text-4xl mt-4'>
          Recommended Recipes
        </h1>
        <p className='text-slate-500 font-semibold my-2 text-sm tracking-tight'>
          Popular choices
        </p>
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <a href='#' className='relative h-32'></a>
        </div>
      </div>
    </div>
  )
}

export default HomePage