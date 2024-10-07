// Import the Movies component, which will display the list of movies passed as props
import Movies from "./movies";

// The Read component, which serves as a container to display a list of movies
const Read = ()=>{
    // Data array containing movie details, including title, year, IMDB ID, type, and poster URL
    const data = [
        {
          "Title": "Avengers: Infinity War",
          "Year": "2018",
          "imdbID": "tt4154756",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
          "Title": "Captain America: Civil War",
          "Year": "2016",
          "imdbID": "tt3498820",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
          "Title": "World War Z",
          "Year": "2013",
          "imdbID": "tt0816711",
          "Type": "movie",
          "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
      ];


    // JSX returned by the Read component
    return(
        <div>
            <h1>
                this is my read component
            </h1>
            {/* Pass the movie data to the Movies component as a prop called 'myMovies' */}
            <Movies myMovies={data} />
        </div>
    );
}
export default Read;
