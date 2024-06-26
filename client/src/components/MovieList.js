import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../actions/movieActions';
import MovieItem from './MovieItem';
import './movieslist.css'

const MovieList = () => {
    const movies = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <div className='movie-list'>
            {movies.map(movie => (
                <MovieItem key={movie._id} movie={movie} />
            ))}
        </div>
    );
};

export default MovieList;
