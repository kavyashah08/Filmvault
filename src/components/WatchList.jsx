import { useState } from "react";

function WatchList({ watchlist , setWatchList}) {
  const [search, setSearch] = useState("");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };
  let sortIncreasing = () =>{
    let sortedi = watchlist.sort((movieA,movieB)=>{
      return movieA.vote_average - movieB.vote_average
      setWatchList([...sortedi])
    })
  }
  let sortDecreasing = () =>{
    let sortedd = watchlist.sort((movieA,movieB)=>{
      return movieB.vote_average - movieA.vote_average
      setWatchList([...sortedd])
    })
  }
  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl mx-4">
          Action
        </div>
        <div className="flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl ">
          Drama
        </div>
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
              .filter((movieOb) => {
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
                  <td>Action</td>
                  <td className="text-red-800 cursor-pointer">Delete</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WatchList;
