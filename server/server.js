const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// MongoDB connection
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

// Movie schema and model
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    releaseYear: Number,
    genre: String,
    watched: { type: Boolean, default: false },
    rating: { type: Number, min: 1, max: 5 },
    review: String
});

const Movie = mongoose.model('Movie', movieSchema);

// Routes
app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.json(movie);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post('/movies', async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        const savedMovie = await newMovie.save();
        res.json(savedMovie);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.put('/movies/:id', async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMovie);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/movies/:id', async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        res.json(deletedMovie);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
