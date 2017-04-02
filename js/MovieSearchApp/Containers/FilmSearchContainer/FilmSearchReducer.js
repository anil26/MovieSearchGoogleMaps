import * as MovieSearchConstants from './FilmSearchConstants';
const assign = Object.assign || require('object.assign');

const initialState = {
    suggestion : [],
    isFetching : false,
    isFetched : false,
    movieData : []
};

// Takes care of changing the application state
export default function MovieSearchReducer(state = initialState, action) {
    switch (action.type) {
        case MovieSearchConstants.MOVIE_SEARCH_API_REQUEST:
            return assign({}, state, {
                    isFetching : true
                });
            break;
        case MovieSearchConstants.MOVIE_SEARCH_API_SUCCESS:
            
            return assign({}, state, {
                    suggestion: action.newState,
                    isFetching : false,
                    isFetched : true
                });
            break;
        case MovieSearchConstants.MOVIE_SEARCH_API_FAILURE:
            return assign({}, state, {
                    isFetching : false,
                    isFetched : true
                });
            
            break;
         case MovieSearchConstants.GET_LOCATIONDATA_MOVIE_REQUEST:
            return assign({}, state, {
                    isFetching : true
                });
            break;
        case MovieSearchConstants.GET_LOCATIONDATA_MOVIE_SUCCESS:
            
            return assign({}, state, {
                    movieData : action.newState,
                    isFetching : false,
                    isFetched : true
                });
            break;
        case MovieSearchConstants.GET_LOCATIONDATA_MOVIE_FAILURE:
            return assign({}, state, {
                    isFetching : false,
                    isFetched : true
                });
            
            break;
            
        default:
            return state;
    }
}

