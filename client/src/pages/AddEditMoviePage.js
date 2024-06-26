import React from 'react';
import MovieForm from '../components/MovieForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const AddEditMoviePage = () => {
    const { id } = useParams();
    const movie = useSelector(state => state.movies.movies.find(movie => movie._id === id));

    return (
        <div className='movie-form1'>
            <h1 style={{ textAlign: 'center' }}>{id ? 'Edit Movie' : 'Add Movie'}</h1>
            <MovieForm movie={movie} />
        </div>
    );
};

export default AddEditMoviePage;
