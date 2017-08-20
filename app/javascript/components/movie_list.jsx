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

  renderMoviesList() {
    return this.props.movies.map((movie) => {
      return this.renderMovie(movie);
    });
  }

  renderMovie(movie) {
    return (
      <div key={movie.id} >
        <Movie
           routes={ this.props.routes }
           movie={ movie } />
      </div>
    );
  }

  render() {
    return (
      <div className="MovieList">
        <div className="row">
          <div className="col-md-8">
            { this.renderMoviesList() }
          </div>
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
