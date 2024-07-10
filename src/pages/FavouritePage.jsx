import RecipeCard from '../components/RecipeCard';

const FavouritePage = () => {
  const fav = true;

  return (
    <div className='bg-white flex-1 p-10 min-h-screen'>
      <div className='max-w-screen-lg mx-auto'>
        <p className='font-bold text-3xl md:text-5xl my-4'>My Favourite</p>
        {
          !fav ? (
            <div className='h-[80vh] flex flex-col items-center gap-4'>
              <img src='/404.svg' alt='404' className='h-3/4'/>
            </div>
          ) :
          (
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
              <RecipeCard/>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default FavouritePage