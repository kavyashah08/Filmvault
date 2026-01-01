import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard.jsx'
import axios from 'axios'
import Pagination from './Pagination.jsx'
function Movies({handleAddToWatchlist,handleRemoveFromWatchlist,watchlist}) {
  const [movies,setMovies] = useState([])
  const [pageNo,setPageNo] = useState(1)

  const handlePrev = ()=>{
    if(pageNo===1){
      setPageNo(pageNo)
    }
    else{
      setPageNo(pageNo-1)
    }
  }
  const handleNext = ()=>{
    setPageNo(pageNo+1)
  }
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1ebce2df7cd12db4f01f8d0df71d6bda&language=en-US&page=${pageNo}`).then(function(resp){
      setMovies(resp.data.results)
    },[pageNo])
  })
  return (
    <div className='p-5'>
      <div className='text-2xl font-bold text-center'>
        Trending Movies
      </div>

      <div className='flex flex-row flex-wrap justify-around gap-8'>
        {movies.map((movieOb)=>{
          return <MovieCard key = {movieOb.id} movieOb={movieOb} 
          PosterPath={movieOb.poster_path} Name={movieOb.original_title} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist = {watchlist}/>
        })}
      </div>
      <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext} />
    </div>
  )
}

export default Movies