import React, { useEffect } from "react";
import { useState } from "react";
import "./index.css";
import "./App.css";
import { Navbar } from "./components/NavBar.jsx";
import Movies from "./components/Movies.jsx";
import WatchList from "./components/WatchList.jsx";
import Banner from "./components/Banner.jsx";
import {} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let [watchlist, setWatchList] = useState([]);
  let handleAddToWatchlist = (movieOb)=> {
    let newWatchlist = [...watchlist,movieOb];
    localStorage.setItem("watchlist",JSON.stringify(newWatchlist));
    setWatchList(newWatchlist);
    console.log(newWatchlist);
  }

  let handleRemoveFromWatchlist = (movieOb)=>{
    let filteredWatchlist = watchlist.filter((movie)=>{
      return movie.id != movieOb.id
    })
    setWatchList(filteredWatchlist);
    console.log(filteredWatchlist);
  }

  useEffect(()=>{
    let moviesFromStorage = localStorage.getItem("watchlist");
    if(moviesFromStorage!==null){
      setWatchList(JSON.parse(moviesFromStorage));
    }
  },[])
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies watchlist = {watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList watchlist={watchlist} setWatchList={setWatchList}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
