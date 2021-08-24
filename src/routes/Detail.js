import React from 'react';
import "./Detail.css"

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/")
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return  <div className="location-container">
        <img className="location-poster" src={location.state.poster} alt={location.state.title} />
        <div className="location-description">
          <h2 className="location-title">{location.state.title}</h2>
          <ul className="location-genres">{location.state.genres.map((genre, index) =>
            (<li className="location-genre" key={index}>{genre}</li>)
            )}
          </ul>
            <span className="location-year">{location.state.year}</span>
          <p className="location-rating">rating : {location.state.rating}</p>
          <span className="location-runtime">{location.state.runtime} min</span>
        </div>
          <p className="location-summary">{location.state.summary}</p>
      </div>
    } else {
      return null
    }
  }
}

export default Detail;