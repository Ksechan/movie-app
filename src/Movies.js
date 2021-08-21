import React from 'react';
import PropTypes from 'prop-types'

function Movies({title, year, rating, runtime, genres, poster, summary}) {
  return <div className="movie-container">
    <img className="movie-poster" src={poster} alt={title} />
    <h2 className="movie-title">{title}</h2>
    <span className="movie-year">{year}</span>
    <span className="movie-rating">{rating}</span>
    <span className="movie-runtime">{runtime}</span>
    <ul className="movie-genres">{genres.map((genre, index) =>
      (<li className="movie-genre" key={index}>{genre}</li>))}
    </ul>
    <p className="movie-summary">{summary}</p>
  </div>
}

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movies;