import { useParams } from "react-router-dom"
import "./MovieDetailPage.css"

export default function MovieDetailPage({movies}) {

    const { movieName } = useParams()

    function findMovie(moviesArr, movieName) {
        let foundMovie = moviesArr.find(movie => movie.movieName === movieName)
        return foundMovie
    }
    const foundMovie = findMovie(movies, movieName)

    function joinCast(castArr) {
        let castAsStr = castArr.join(", ")
        return castAsStr
    }
    const castAsStr = joinCast(foundMovie.cast)
    
    return (
        <div className="MovieDetailPage d-flex flex-column justify-content-center align-items-center my-5">
            <h1>{foundMovie.title}</h1>
            <div className="card my-4">
                <img src={foundMovie.posterPath} className="card-img-top poster"></img>
                <div className="card-body">
                    <h4 className="card-title">{foundMovie.title}</h4>
                    <p>Release date: {foundMovie.releaseDate}</p>
                    <p className="fw-semibold my-3">Cast: </p>
                    <p>{castAsStr}</p>
                </div>
            </div>
        </div>
    )
}