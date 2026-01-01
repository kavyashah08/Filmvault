import React from "react";

function MovieCard({
  movieOb,
  PosterPath,
  Name,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {
  function doesContain(movieOb) {
    for(let i=0;i<watchlist.length;i++){
      if(watchlist[i].id == movieOb.id){
        return true;
      }
    }

  }
  return (
    <div
      className="w-[165px] h-[40vh] bg-cover bg-center rounded-xl hover:scale-115 duration-300 hover:cursor-pointer flex flex-col justify-between"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${PosterPath})`,
      }}
    >
      {doesContain(movieOb) ? (
  <div onClick={() => handleRemoveFromWatchlist(movieOb)} 
  className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60">&#10060;</div>
) : (
  <div
    onClick={() => handleAddToWatchlist(movieOb)}
    className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-900/60"
  >
    &#128525;
  </div>
)}
      
      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 rounded-b-xl">
        {Name}
      </div>
    </div>
  );
}

export default MovieCard;
