import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { rateMovie } from '../actions/movieActions';

const Rating = ({ movie }) => {
    const [rating, setRating] = useState(movie.rating || 0);
    const dispatch = useDispatch();

    const handleRating = value => {
        setRating(value);
        dispatch(rateMovie(movie._id, value));
    };

    return (
        <div>
            <h3>Rating</h3>
            {[1, 2, 3, 4, 5].map(star => (
                <span
                    key={star}
                    style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'grey' }}
                    onClick={() => handleRating(star)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default Rating;
