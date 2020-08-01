import movies from "../reducers/movies.js";

export  const setMovies = movies => {
    return {
        type: 'GET_MOVIES_SUCCESS',
        movies
    }
}

const addMovie = movie => {
    return {
        type: "CREATE_MOVIE_SUCCESS",
        movie
    }
}

export const getMovies = () => {
     return dispatch => {
         return fetch("http://localhost:3000/movies")
            .then(response => response.json())
            .then( movies => dispatch(setMovies(movies)))
            .catch(error => console.log(error));
            
    }
  }


  export const createMovie = movie => {
      return dispatch => {
          return fetch("http://localhost:3000/movies",{
              method: "POST",
              headers: {
                  'Content-Type' : 'application/json'
              },
              body: JSON.stringify({movie: movie})
          })
          .then(response => response.json())
          .then(movies => dispatch(addMovie(movies)))
          .catch(error => console.log(error));

      }
  }