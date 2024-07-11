import { Heart, HeartPulse, Soup } from 'lucide-react'
import { useState } from 'react';


const getTwoValues = (arr) => {
  return [arr[0],arr[1]];
}

const RecipeCard = ({recipe,bg,badge}) => {
  const healthLabels = getTwoValues(recipe.healthLabels);
  const [isFavourite,setIsFavourite] = useState(localStorage.getItem('favourites')?.includes(recipe.label));

  const addRecipeToFavourites = () => {
    let favourites =  JSON.parse(localStorage.getItem('favourites')) || [];
    const isFavouriteTaken = favourites.some((fav)=>  fav.label === recipe.label);

    if(isFavouriteTaken){
      favourites = favourites.filter((fav)=> fav.label !== recipe.label );
      setIsFavourite(false)
    }
    else{
      favourites.push(recipe)
      setIsFavourite(true)
    }
    localStorage.setItem('favourites', JSON.stringify(favourites))
  }
 
  return (
    <div className={`flex flex-col rounded-md bg-green-100 ${bg} overflow-hidden p-3 relative`}>
          <a href={`https://www.youtube.com/results?search_query=${recipe.label} recipe`} target='_blank'  className='relative h-32'>
          <div className='skeleton absolute inset-0'/>
            <img 
              src={recipe.image} 
              alt='recipe-image'
              className='rounded-md w-full object-cover cursor-pointer h-full opacity-0 transition-opacity duration-500'
              onLoad={(e)=>{
                e.currentTarget.style.opacity = 1;
                e.currentTarget.previousElementSibling.style.display = "none";
              }}
            />
            <div className='absolute bottom-2 left-2 p-1 bg-white rounded-full hover:bg-slate-100 transition-colors cursor-pointer flex items-center gap-1 text-sm'>
              <Soup size={16}/>
              {recipe.yield} servings
            </div>
            </a>
            
            <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer' onClick={(e)=>{e.preventDefault(); addRecipeToFavourites()}}>
              {!isFavourite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500 transition-colors'/>}
              {isFavourite &&<Heart size={20} className='fill-red-500 text-red-500 transition-colors'/>}
            </div>
          
          <div className='flex mt-1'>
            <p className='font-bold tracking-wide text-slate-600'>{recipe.label}</p>
          </div>
          <p className='my-2'>{recipe.cuisineType[0].charAt(0).toUpperCase() + recipe.cuisineType[0].slice(1)} Kitchen</p>
          <div className='flex gap-2 mt-auto'>
              {
                healthLabels.map((label,idx)=>(
                  <div key={idx} className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
                    <HeartPulse size={16}/>
                    <span className='text-xs tracking-tighter font-semibold'>{label}</span>
                  </div>
                ))
              }
            </div>
          </div>
  )
}

export default RecipeCard

