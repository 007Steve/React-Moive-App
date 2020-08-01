export default (state = [],action) => {
    console.log(action.type);
    switch(action.type) {
        case 'GET_MOVIES_SUCCESS':
            return action.movies;
            
         case 'CREATE_MOVIES_SUCCESS':
              return state.concat(action.movie);

        default:
            return state;
    }
}