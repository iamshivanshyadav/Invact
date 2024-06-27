

# Movie Watchlist Application

A web-based application to manage a list of movies you want to watch. Users can add, edit, delete movies from their watchlist, mark movies as watched or unwatched, and rate and review movies. The state management is handled using Redux to ensure efficient and predictable state updates.

## Hosted Application

You can access the live application [here](https://invact.onrender.com).

## GitHub Repository

The source code for the application is available on GitHub [here](https://github.com/iamshivanshyadav/Invact).

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Add Movies**: Users can add movies to their watchlist by providing details such as the movie title, description, release year, and genre.
2. **Edit Movies**: Users can edit the details of movies already in their watchlist.
3. **Delete Movies**: Users can delete movies from their watchlist.
4. **Mark Movies as Watched/Unwatched**: Users can toggle the status of a movie between watched and unwatched.
5. **Rate and Review Movies**: Users can rate movies on a scale of 1 to 5 stars and provide a text review for each movie.
6. **State Management with Redux**: All state changes (adding, editing, deleting movies, marking as watched/unwatched, rating, and reviewing) are managed using Redux.

## Technology Stack

### Frontend

- React.js: For building the user interface
- Redux: For state management
- CSS: For styling the application

### Backend

- Node.js and Express: For building the server-side application
- MongoDB Atlas: As the database for storing movie data

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/iamshivanshyadav/Invact.git
    cd Invact
    ```

2. Install dependencies for both client and server:

    ```bash
    # Install client dependencies
    cd client
    npm install

    # Install server dependencies
    cd ../server
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the `server` directory with the following content:

    ```plaintext
    MONGODB_URI=your_mongodb_atlas_connection_string
    ```

4. Start the application:

    ```bash
    # Start the client
    cd client
    npm start

    # Start the server
    cd ../server
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Adding a Movie

1. Click on the "Add Movie" button.
2. Fill in the movie details and click "Save".

### Editing a Movie

1. Click on the "Edit" button next to the movie you want to edit.
2. Update the movie details and click "Save".

### Deleting a Movie

1. Click on the "Delete" button next to the movie you want to delete.
2. Confirm the deletion.

### Marking a Movie as Watched/Unwatched

1. Click on the "Watched" or "Unwatched" button next to the movie to toggle its status.

### Rating and Reviewing a Movie

1. Click on the movie title to view its details.
2. Rate the movie using the star rating component.
3. Write a review in the provided textarea and click "Save".

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

Please ensure your code follows the project's coding standards and passes all tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
