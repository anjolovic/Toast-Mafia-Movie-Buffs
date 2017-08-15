import React from 'react';
import PropTypes from 'prop-types';

class MovieDetailsCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movie: this.props.movie,
      card: this.props.card,
      reviews: this.props.reviews
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      movie: nextProps.movie,
      card: nextProps.card,
      reviews: nextProps.reviews
    });
  }

  renderReviewComments() {
    return this.state.reviews.map(function(review) {
      return (
        <div key={review[0]}>
          { review[1] }
        </div>
      );
    });
  }

  render() {
    if(this.state.card) {
      return(
        <div className="MovieDetailsCard">
          <h4 className="card-title">
            { this.state.movie.title }
          </h4>

          <dl className="row">
            <dt className="col-sm-4"> Release Date:</dt>
            <dd className="col-sm-8"> {this.state.movie.release_date} </dd>

            <dt className="col-sm-4"> Genres:</dt>
            <dd className="col-sm-8"> {this.state.movie.genres.join(', ')} </dd>
          </dl>

          <div className="row review-comments">
            { this.renderReviewComments() }
          </div>
        </div>
      );
    } else {
      return(null);
    }
  }
}

export default MovieDetailsCard;
