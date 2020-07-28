import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const movies = (state = [],action) => {
    switch(action.type) {
        case 'GET_MOVIES_SUCCESS':
            return action.movies;

        default:
            return state;
    }
}

const reducers = combineReducers ({
    movies: movies
});

const middleware = [thunk];

export default createStore(
    reducers,
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);