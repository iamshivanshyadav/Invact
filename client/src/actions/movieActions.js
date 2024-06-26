import axios from 'axios';

export const GET_MOVIES = 'GET_MOVIES';
export const ADD_MOVIE = 'ADD_MOVIE';
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const TOGGLE_WATCHED = 'TOGGLE_WATCHED';
export const RATE_MOVIE = 'RATE_MOVIE';
export const REVIEW_MOVIE = 'REVIEW_MOVIE';

const apiUrl = 'http://localhost:5000/movies';

export const getMovies = () => async dispatch => {
    const res = await axios.get(apiUrl);
    dispatch({ type: GET_MOVIES, payload: res.data });
};

export const addMovie = movie => async dispatch => {
    const res = await axios.post(apiUrl, movie);
    dispatch({ type: ADD_MOVIE, payload: res.data });
};

export const editMovie = (id, updates) => async dispatch => {
    const res = await axios.put(`${apiUrl}/${id}`, updates);
    dispatch({ type: EDIT_MOVIE, payload: res.data });
};

export const deleteMovie = id => async dispatch => {
    await axios.delete(`${apiUrl}/${id}`);
    dispatch({ type: DELETE_MOVIE, payload: id });
};

export const toggleWatched = id => async dispatch => {
    const movie = await axios.get(`${apiUrl}/${id}`);
    const updatedMovie = { ...movie.data, watched: !movie.data.watched };
    const res = await axios.put(`${apiUrl}/${id}`, updatedMovie);
    dispatch({ type: TOGGLE_WATCHED, payload: res.data });
};

export const rateMovie = (id, rating) => async dispatch => {
    const movie = await axios.get(`${apiUrl}/${id}`);
    const updatedMovie = { ...movie.data, rating };
    const res = await axios.put(`${apiUrl}/${id}`, updatedMovie);
    dispatch({ type: RATE_MOVIE, payload: res.data });
};

export const reviewMovie = (id, review) => async dispatch => {
    const movie = await axios.get(`${apiUrl}/${id}`);
    const updatedMovie = { ...movie.data, review };
    const res = await axios.put(`${apiUrl}/${id}`, updatedMovie);
    dispatch({ type: REVIEW_MOVIE, payload: res.data });
};
