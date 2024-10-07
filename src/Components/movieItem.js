// Import useEffect hook to handle side effects
import { useEffect } from "react";
// Import Bootstrap Card component for styling
import Card from 'react-bootstrap/Card';

function MovieItem(props) {
  // useEffect hook that runs whenever the 'mymovie' prop changes
  useEffect(() => {
    // Log the movie details to the console for debugging purposes
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  return (
    <div>
      {/* Bootstrap Card component to display the movie details in a styled card format */}
      <Card>
        {/* The Card.Header displays the movie title */}
        <Card.Header>{props.mymovie.Title}</Card.Header>
        {/* The Card.Body contains the movie poster and year of release */}
        <Card.Body>
          <blockquote className="blockquote mb-0">
            {/* Display the movie poster image */}
            <img src={props.mymovie.Poster} alt={props.mymovie.Title} />
            <footer>{props.mymovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieItem;
