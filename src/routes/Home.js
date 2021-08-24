import React from 'react';
import axios from 'axios';
import Movies from '../components/Movies';
import Loading from '../components/Loading';
import './Home.css';
import '../components/reset.css';

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async ()  => {
    const {data :{data: {movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    setTimeout(() => this.setState({ isLoading: false, movies}), 500)
  }

  componentDidMount() {
    this.getMovies()
  }

  render() {
    const { isLoading, movies} = this.state;
    return <div>
      {isLoading ? (
          <Loading />
      ) : (
          movies.map(movie => (
            <Movies key={movie.id} id={movie.id} title={movie.title} year={movie.year} rating={movie.rating} runtime={movie.runtime} genres={movie.genres} poster={movie.medium_cover_image} summary={movie.summary} summarycut={movie.summary.slice(0,100)}/>
          ))
      )}
    </div>
  }
}

export default Home;