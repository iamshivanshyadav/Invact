import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovie, toggleWatched } from '../actions/movieActions';
import { Link } from 'react-router-dom';
import './movieslist.css';
import { TiEdit } from "react-icons/ti";

const MovieItem = ({ movie }) => {
    const dispatch = useDispatch();

    return (
        <div className='card'>
            <h2>{movie.title}</h2>
            <p>{movie.genre}</p>
            <p>{movie.releaseYear}</p>
            <p>{movie.watched ? 'Watched' : 'Unwatched'}</p>
            <div className='watched'>
                <button onClick={() => dispatch(toggleWatched(movie._id))}>
                    Mark as {movie.watched ? 'Unwatched' : 'Watched'}
                </button>
                <Link to={`/edit/${movie._id}`}><TiEdit /></Link>
            </div>
            <div><button className='delbtn' onClick={() => dispatch(deleteMovie(movie._id))}>Delete</button></div>
            <Link className='details' to={`/details/${movie._id}`}>See Details...</Link>
        </div>
    );
};

export default MovieItem;
