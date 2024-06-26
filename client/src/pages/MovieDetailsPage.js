import React from 'react';
import MovieDetails from '../components/MovieDetails';

const MovieDetailsPage = () => {
    return (
        <div style={{ backgroundColor: '#f0f0f0', height: '100vh', margin: '-20px' }}>
            <h1 style={{ textAlign: 'center' }}>Movie Details</h1>
            <MovieDetails />
        </div>
    );
};

export default MovieDetailsPage;
