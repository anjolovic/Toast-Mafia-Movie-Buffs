import React from 'react';
import PropTypes from 'prop-types';
import Movie from 'components/movie';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      routes: nextProps.routes,
      movies: nextProps.movies
    });
  }

  render() {
    return (
      <div className="moviesDisplay MovieList">
        { this.renderMoviesList() }
      </div>
    );
  }

  renderMoviesList() {
    return this.props.movies.map((movie) => {
      return this.renderMovie(movie);
    });
  }

  renderMovie(movie) {
    return (
      <div className="card" key={movie.id} >
        <Movie
           routes={ this.props.routes }
           movie={ movie } />
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
  routes: PropTypes.object
};


export default MovieList;
