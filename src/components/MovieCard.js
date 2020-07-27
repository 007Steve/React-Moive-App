import React from 'react';
const MovieCard = ({movie}) => {
    return (  <div key={movie.id} className="Movie-Card">
    <img className="Movie-Image" src={movie.image} alt={movie.title}/>
    <h1>{movie.title}</h1>
    <p>{movie.description}</p>
    <h3>{movie.category}</h3>
    <h3>{movie.year}</h3>
    
</div>);
}
 
export default MovieCard;