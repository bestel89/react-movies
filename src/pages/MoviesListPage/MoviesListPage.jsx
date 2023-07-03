import MovieListItem from "../../components/MovieListItems/MovieListItems"

export default function MoviesListPage({movies}) {
    
    const movieListItems = movies.map((movie, idx) => (
        <MovieListItem movie={movie} key={idx} index={idx} />
    ))
    
    return (
        <div className="d-flex flex-column">
            <h1>All Movies</h1>
            <div className="d-flex flex-wrap justify-content-center my-5">
                {movieListItems}
            </div>
        </div>
    )
}