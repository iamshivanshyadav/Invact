import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddEditMoviePage from './pages/AddEditMoviePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/add" element={<AddEditMoviePage />} />
                <Route path="/edit/:id" element={<AddEditMoviePage />} />
                <Route path="/details/:id" element={<MovieDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;
