import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { reviewMovie } from '../actions/movieActions';

const Review = ({ movie }) => {
    const [review, setReview] = useState('');
    const [submittedReview, setSubmittedReview] = useState(movie.review || '');
    const dispatch = useDispatch();

    useEffect(() => {
        setReview(''); // Reset review state when component mounts
    }, [movie]);

    const handleChange = e => {
        setReview(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(reviewMovie(movie._id, review));
        setSubmittedReview(review); // Store submitted review
        setReview(''); // Clear textarea after submitting review
    };

    return (
        <div>
            <h3>Review</h3>
            <form onSubmit={handleSubmit}>
                <textarea value={review} onChange={handleChange} />
                <button type="submit">Save</button>
            </form>
            {submittedReview && (
                <div>
                    <h4>Submitted Review:</h4>
                    <p>{submittedReview}</p>
                </div>
            )}
        </div>
    );
};

export default Review;
