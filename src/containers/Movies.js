import React from 'react';
import MovieCard from '../components/MovieCard'
import './Movies.css'
const Movies = (props) => (
       <div className="Movie-Container">
         <h1>Movies component</h1>
         {props.movies.map(movie => <MovieCard movie={movie}/>
            
            )}
        </div> 
      );

  export default Movies;