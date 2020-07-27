import React from 'react';
import './Movies.css'
const Movies = (props) => (
       <div>
         <h1>Movies component</h1>
         {props.movies.map(movie =>
            <div className="Movie-Card">
                <img className="Movie-Image" src={movie.image} alt={movie.title}/>
                <h1>{movie.title}</h1>
                <h3>{movie.desrciption}</h3>
                <h3>{movie.category}</h3>
                <h3>{movie.year}</h3>
                
            </div>
            )}
        </div> 
      );

  export default Movies;