import './index.css'
import './App.css'
import Navbar from './components/NavBar.jsx'
import Movies from './components/Movies.jsx'
import Watchlist from './components/WatchList.jsx'
function App() {
  return (
    <>
    <h1>hello react</h1>
      <Navbar />
      <Movies />
      <Watchlist />
    </>
  )
}

export default App
