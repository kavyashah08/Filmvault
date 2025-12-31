import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard.jsx'
import axios from 'axios'
function Movies() {
  const [movies,setMovies] = useState([])
  useEffect(()=>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1ebce2df7cd12db4f01f8d0df71d6bda&language=en-US&page=1').then(function(resp){
      setMovies(resp.data.results)
    },[])
  })
  return (
    <div className='p-5'>
      <div className='text-2xl font-bold text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-8'>
        {movies.map((movieOb)=>{
          return <MovieCard PosterPath={movieOb.poster_path} Name={movieOb.original_title} />
        })}
      </div>
    </div>
  )
}

export default Movies