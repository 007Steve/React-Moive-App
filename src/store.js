import {
    createStore,
    compose,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import movies from './reducers/movies'  
import movieFormData from './reducers/movieFormData'
/* add "s "
 const movie = (state = [],action) => {
    switch(action.type) {
        case 'GET_MOVIES_SUCCESS':
            return action.movies;

        default:
            return state;
    }
}
**/
const reducers = combineReducers ({
     movies,
     movieFormData 
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

export default  createStore(
    reducers,

    composeEnhancer(applyMiddleware(...middleware)),
  );