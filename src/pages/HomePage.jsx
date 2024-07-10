import { Search } from 'lucide-react'
import RecipeCard from '../components/RecipeCard'
import { useEffect, useState } from 'react'
import { getRandomColor } from '../lib/utils'

const App_ID = import.meta.env.VITE_APP_ID
const App_KEY = import.meta.env.VITE_APP_KEY

const HomePage = () => {

  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipe = async (searchQuery) => {
    setLoading(true);
    setRecipe([]);
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${App_ID}&app_key=${App_KEY}&q=${searchQuery}&type=public`);
      const data = await res.json();
      setRecipe(data.hits)
    } catch (error) {
      console.log("error: ", error.message)
    }
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchRecipe('chicken')
  }, [])


  return (
    <div className='bg-white p-10 flex-1'>
      <div className='max-w-screen-lg mx-auto'>
        <form>
          <label className='input shadow-md flex items-center gap-2'>
            <Search size={24} />
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
          {!loading && recipe.map(({recipe},index) =>(
            <RecipeCard key={index} recipe={recipe} {...getRandomColor()}/>
          ))}
          {
            loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex w-52 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                  <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                  </div>
                </div>
                <div className="skeleton h-32 w-full"></div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default HomePage