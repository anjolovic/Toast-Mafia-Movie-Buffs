import React from 'react';
import PropTypes from 'prop-types';
import ReviewRating from 'components/review_rating';

class RecentMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: props.movies
    };
  }

  renderMovies() {
    return this.state.movies.map(function(movie) {
      return(
        <div className="movie row" key={movie.id}>
            <div className="col-6">
              { movie.title }
            </div>
            <div className="col-6">
              <ReviewRating
                 readOnly={ true }
                 rating={ parseFloat(movie.rating, 10) || 0 }
                 />
            </div>
        </div>
      );
    });
  }

  render() {
    return(
      <div className="RecentMovies">
          <h4 className="card-title">
            Recent Movies
          </h4>
          { this.renderMovies() }
      </div>
    );
  }
}

export default RecentMovies;
