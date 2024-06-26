import React from 'react';
import MovieList from '../components/MovieList';
import { Link } from 'react-router-dom';
import './homepage.css';  

const HomePage = () => {
    return (
        <div className='home'>
            <h1>Movie Watchlist</h1>
            <Link className='addbtn' to="/add">Add Movie</Link>
            <MovieList />
        </div>
    );
};

export default HomePage;
