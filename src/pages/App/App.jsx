import { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import './App.css';
import { movies } from '../../data';
import LoginPage from '../LoginPage/LoginPage';
import MoviesListPage from '../MoviesListPage/MoviesListPage';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';
import ActorListPage from '../ActorListPage/ActorListPage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {

  const [user, setUser] = useState({})

  function appendMovieNames(movieArr) {
    movieArr.forEach(function (movie) {
      movie.movieName= movie.title.replaceAll(' ', '')
    })
  }
  appendMovieNames(movies)

  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user}/>
          <Routes>
            <Route path="/movies" element={<MoviesListPage movies={movies}/>} />
            <Route path="/movies/:movieName" element={<MovieDetailPage movies={movies} />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
        :
        <LoginPage user={user} setUser={setUser}/>
      }
    </main>
  )
}
