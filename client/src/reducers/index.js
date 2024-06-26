import {
    GET_MOVIES,
    ADD_MOVIE,
    EDIT_MOVIE,
    DELETE_MOVIE,
    TOGGLE_WATCHED,
    RATE_MOVIE,
    REVIEW_MOVIE,
} from '../actions/movieActions';

const initialState = {
    movies: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return { ...state, movies: action.payload };
        case ADD_MOVIE:
            return { ...state, movies: [...state.movies, action.payload] };
        case EDIT_MOVIE:
            return {
                ...state,
                movies: state.movies.map(movie => movie._id === action.payload._id ? action.payload : movie),
            };
        case DELETE_MOVIE:
            return { ...state, movies: state.movies.filter(movie => movie._id !== action.payload) };
        case TOGGLE_WATCHED:
            return {
                ...state,
                movies: state.movies.map(movie => movie._id === action.payload._id ? action.payload : movie),
            };
        case RATE_MOVIE:
            return {
                ...state,
                movies: state.movies.map(movie => movie._id === action.payload._id ? action.payload : movie),
            };
        case REVIEW_MOVIE:
            return {
                ...state,
                movies: state.movies.map(movie => movie._id === action.payload._id ? action.payload : movie),
            };
        default:
            return state;
    }
}
