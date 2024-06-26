import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, editMovie } from '../actions/movieActions';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import './movieslist.css'

const MovieForm = ({ movie }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        releaseYear: '',
        genre: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (movie) {
            setFormData({
                ...movie,
                releaseYear: movie.releaseYear ? moment(movie.releaseYear, 'YYYY').toDate() : '',
            });
        }
    }, [movie]);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleDateChange = date => {
        setFormData(prevState => ({
            ...prevState,
            releaseYear: date,
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        const updatedData = {
            ...formData,
            releaseYear: formData.releaseYear ? moment(formData.releaseYear).format('YYYY') : '',
        };

        if (id) {
            dispatch(editMovie(id, updatedData));
        } else {
            dispatch(addMovie(updatedData));
        }
        navigate('/');
    };

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </div>
            <div>
                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} />
            </div>
            <div>
                <label>Release Year</label>
                <DatePicker
                    selected={formData.releaseYear}
                    onChange={handleDateChange}
                    showYearPicker
                    dateFormat="yyyy"
                    placeholderText="Select Year"
                    className="year-picker"
                />
            </div>
            <div>
                <label>Genre</label>
                <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
            </div>
            <button type="submit" className="btn-primary">Save</button>
        </form>
    );
};

export default MovieForm;
