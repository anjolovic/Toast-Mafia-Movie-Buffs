import React from 'react';
import PropTypes from 'prop-types';
import Movie from 'components/movie';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }

  renderMoviesList() {
    return this.props.movies.map((movie) => {
      return this.renderMovie(movie);
    });
  }

  renderMovie(movie) {
    return (
        <Movie
           routes={ this.props.routes }
           movie={ movie }
           key={movie.id}/>
    );
  }

  render() {
    return (
      <div className="MovieList">
        <div class="row">
          { this.renderMoviesList() }
        </div>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
  routes: PropTypes.object
};


export default MovieList;
