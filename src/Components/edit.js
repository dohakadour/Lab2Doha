import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Edit(props) {
  // Extracting the movie ID from the URL parameters
  let { id } = useParams();

  // Defining state variables to store movie details
  const [title, setTitle] = useState(""); // Stores the movie title
  const [year, setYear] = useState("");  // Stores the release year
  const [poster, setPoster] = useState(""); // Stores the poster URL

  // Hook to programmatically navigate to another route
  const navigate = useNavigate();

  // Fetch movie data when the component mounts or when `id` changes
  useEffect(() => {
    axios.get('http://localhost:4000/api/movie/' + id) // API call to fetch movie details
      .then((response) => {
        // Updating state variables with the fetched data
        setTitle(response.data.title);
        setYear(response.data.year);
        setPoster(response.data.poster);
      })
      .catch((error) => {
        // Log any errors from the API call
        console.log(error);
      });
  }, [id]); // Dependency array ensures the effect runs when `id` changes

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const newMovie = { id, title, year, poster }; // Construct the updated movie object

    // API call to update the movie details
    axios.put('http://localhost:4000/api/movie/' + id, newMovie)
      .then((res) => {
        console.log(res.data); // Log the API response
        navigate('/read'); // Redirect to the "Read" page after a successful update
      })
      .catch((error) => {
        console.log(error); // Handle potential errors during the API call
      });
  };

  return (
    <div>
      {/* Form to edit movie details */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Movie Title: </label>
          <input
            type="text"
            className="form-control"
            value={title} // Binds input value to the `title` state
            onChange={(e) => setTitle(e.target.value)} // Updates the `title` state on change
          />
        </div>
        <div className="form-group">
          <label>Release Year: </label>
          <input
            type="text"
            className="form-control"
            value={year} // Binds input value to the `year` state
            onChange={(e) => setYear(e.target.value)} // Updates the `year` state on change
          />
        </div>
        <div className="form-group">
          <label>Poster URL: </label>
          <input
            type="text"
            className="form-control"
            value={poster} // Binds input value to the `poster` state
            onChange={(e) => setPoster(e.target.value)} // Updates the `poster` state on change
          />
        </div>
        <div className="form-group">
          {/* Submit button to trigger the form submission */}
          <input type="submit" value="Edit Movie" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}
