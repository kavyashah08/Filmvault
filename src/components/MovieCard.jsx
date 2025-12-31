import React from 'react'

function MovieCard({PosterPath,Name}) {
  return (
    <div className = "w-[165px] h-[40vh] bg-cover bg-center rounded-xl hover:scale-115 duration-300 hover:cursor-pointer  " style = {{backgroundImage :`url(https://image.tmdb.org/t/p/w500${PosterPath})`
    }}>
      <div className='text-white text-xl w-full p-2 text-center bg-gray-900/60 '>
        {Name}
      </div>
    </div>
  )
}

export default MovieCard