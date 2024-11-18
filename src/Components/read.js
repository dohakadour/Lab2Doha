// Import the Movies component, which will display the list of movies passed as props
import { useEffect, useState } from "react";
import Movies from "./movies";
import axios from "axios";


// The Read component, which serves as a container to display a list of movies
const Read = ()=>{
    // Data array containing movie details, including title, year, IMDB ID, type, and poster URL
    //const data = [];
    const [movies, setMovies] = useState([]); 

    useEffect(() => {
      axios.get('http://localhost:4000/api/movies')
        .then((response) => {
          setMovies(response.data.movies);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);


    // JSX returned by the Read component
    return(
        <div>
            <h1>
                this is my read component
            </h1>
            {/* Pass the movie data to the Movies component as a prop called 'myMovies' */}
            <Movies myMovies={movies} />
        </div>
    );
}
export default Read;
