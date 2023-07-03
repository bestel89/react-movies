import "./MovieListItem.css"
import { Link } from 'react-router-dom'

export default function MovieListItem({movie, index}) {

    
    return (
        <Link to={`/movies/${movie.movieName}`} style={{ textDecoration: 'none' }}>
            <div className="MovieListItem card csmall my-3 mx-3">
                <img src={movie.posterPath} className="card-img-top poster"></img>
                <div className="card-body">
                    <p className="fw-semibold text-decoration-none">{movie.title}</p>
                    <p className="text-decoration-none">Release date: {movie.releaseDate}</p>
                </div>
            </div>
        </Link>
    )
}
