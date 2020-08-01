const { default: movieFormData } = require("../reducers/movieFormData");

export const updateMovieFormData = movieFormData => {
    
    return {
        type: 'UPDATED_DATA',
        movieFormData
    }
}