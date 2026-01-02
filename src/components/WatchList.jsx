import { useEffect, useState } from "react";
import genreids from "../Utility/Genres"
function WatchList({ watchlist , setWatchList, handleRemoveFromWatchlist}) {
  const [search, setSearch] = useState("");
  const [genrelist,setGenreList] = useState(['All genres'])
  const [currGenre,setCurrGenre] = useState('All genres')
  let handleSearch = (e) => {
    setSearch(e.target.value);
  };
  let handleFilter = (genre)=>{
    setCurrGenre(genre)
  }
  let sortIncreasing = () =>{
    let sortedi = watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average - movieB.vote_average
    })
    setWatchList([...sortedi])
  }
  let sortDecreasing = () =>{
    let sortedd = watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average - movieA.vote_average
    })
      setWatchList([...sortedd])
  }
useEffect(()=>{
  let temp = watchlist.map((movieOb)=>{
    return genreids[movieOb.genre_ids[0]]
  })
  temp = new Set(temp)
  setGenreList(['All genres',...temp])
  console.log(temp)
},[watchlist])
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genrelist.map((genre)=>{
          return <div onClick = {()=>handleFilter(genre)}className={currGenre==genre? "flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl mx-4" : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-900/60 rounded-xl mx-4"}>
          {genre}
        </div>
        })}
      </div>

      <div className="flex justify-center flex-wrap m-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search...."
          className="h-[44px]
    w-[360px]
    px-4
    rounded-lg
    bg-gray-200
    outline-none
    focus:ring-2
    focus:ring-blue-400"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div onClick={sortIncreasing} className="p-2"><i class="fa-solid fa-arrow-up"></i></div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDecreasing}
                className="p-2"><i class="fa-solid fa-arrow-down"></i></div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieOb)=>{
                if(currGenre=='All genres'){
                  return true
                }
                else{
                  return genreids[movieOb.genre_ids[0]]==currGenre;
                }
              }).filter((movieOb) => {
                return movieOb.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieOb) => (
                <tr key={movieOb.id} className="border-b-2">
                  <td className="flex items-center px-6 py-4">
                    <img
                      className="h-[6rem] w-[10rem]"
                      src={`https://image.tmdb.org/t/p/w500${movieOb.backdrop_path}`}
                      alt=""
                    />
                    <div className="mx-5 my-7">{movieOb.title}</div>
                  </td>
                  <td>{movieOb.vote_average}</td>
                  <td>{movieOb.popularity}</td>
                  <td>{genreids[movieOb.genre_ids[0]]}</td>
                  <td onClick = {()=>handleRemoveFromWatchlist(movieOb)}className="text-red-800 cursor-pointer">Delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
