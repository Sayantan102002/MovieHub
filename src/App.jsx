import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import { getLatestMovies, getMovieByTitle } from './apiCalls'
// import Api from './utils/Api'
function App() {
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   Api.get('titles/')
  //     .then((res) => {
  //       console.log(res);
  //     })

  let films = getMovieByTitle('Inception');
  console.log(films);
  // })

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
