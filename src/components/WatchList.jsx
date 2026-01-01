function WatchList({ watchlist }) {
  return (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.map((movieOb) => (
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
