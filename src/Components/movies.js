// Import the MovieItem component, which will display individual movie details
import MovieItem from "./movieItem";

// Movies component that receives a list of movies as props
const Movies = (props)=>{
   // Iterate over the 'myMovies' array passed as a prop, and for each movie,
    // render the MovieItem component, passing the current movie as a prop (myMovie)
        return props.myMovies.map(
            (movie)=>{
             // For each movie, render the MovieItem component with the 'myMovie' prop
           return  <MovieItem mymovie={movie} key={movie.imdbID} />
            }
        );
    
}

export default Movies;
