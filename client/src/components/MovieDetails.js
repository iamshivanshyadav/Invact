import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovies } from '../actions/movieActions';
import { useParams } from 'react-router-dom';
import Rating from './Rating';
import Review from './Review';
import './movieslist.css';

const MovieDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movies.movies);
    const movie = movies.find(movie => movie._id === id);

    useEffect(() => {
        if (!movie) {
            dispatch(getMovies());
        }
    }, [dispatch, movie]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className='detailscard shadow'>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>{movie.releaseYear}</p>
            <p>{movie.genre}</p>
            <p>{movie.watched ? 'Watched' : 'Unwatched'}</p>
            <Rating movie={movie} />
            <Review movie={movie} />
        </div>
    );
};

export default MovieDetails;
