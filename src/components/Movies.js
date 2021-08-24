import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Movies({id, title, year, rating, runtime, genres, poster, summary, summarycut}) {
  return (
      <div className="movie-container">
        <img className="movie-poster" src={poster} alt={title} />
        <div className="movie-description">
          <h2 className="movie-title">{title}</h2>
          <ul className="movie-genres">{genres.map((genre, index) =>
            (<li className="movie-genre" key={index}>{genre}</li>)
            )}
          </ul>
            <span className="movie-year">{year}</span>
          <p className="movie-rating">rating : {rating}</p>
          <span className="movie-runtime">{runtime} min</span>
          <p className="movie-summary">{summarycut}.....</p>
          <Link to={{
            pathname: `/movie/${id}`,
          state: {
              id,
              year,
              title,
              summary,
              poster,
              genres,
              runtime,
              rating
            }
              }} >
            <span className="movie-detail-view">detail..</span>
          </Link>
        </div>
      </div>
  )
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