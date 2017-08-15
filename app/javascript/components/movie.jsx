import React from 'react';
import PropTypes from 'prop-types';
import MovieDetailsCard from 'components/movie_details_card';
import ReviewMovie from 'components/review_movie';
import BottomLinks from 'components/bottom_links';

class Movie extends React.Component {
  constructor (props) {
//    debugger;
    super(props);
    this.cardBlockStyle = this.cardBlockStyle.bind(this);
    this.submitReview =this.submitReview.bind(this);
    this.leaveReview = this.leaveReview.bind(this);
    this.updateCurrentReview = this.updateCurrentReview.bind(this);
    this.state = {
      movie: JSON.parse(JSON.stringify(this.props.movie)),
      reviews: this.props.movie.reviews,
      newReview: "",
      card: true
    };
  }

  leaveReview() {
    this.setState({card: false});
  }

  submitReview() {
    const _this = this;
    const newReviewId = (this.maxReviewId() || 0) + 1;
    jQuery.post(this.props.routes.movie_reviews_path, this.movieReviewParams())
      .done(function() {
        const reviews = _this.state.reviews.slice(0);
        reviews.unshift([newReviewId, _this.state.newReview]);

        _this.setState({card: true, reviews: reviews});
      });
  }

  maxReviewId () {
    const ids = this.state.reviews.map(function(review) {
      return review[0];
    });
    return Math.max(...ids);
  }

  updateCurrentReview(event) {
    const content = $(event.currentTarget).val();
    this.setState({newReview: content });
  }

  movieReviewParams() {
    return {
      movie_review: {
        movie_id: this.state.movie.id,
        content: this.state.newReview
      }
    };
  }

  cardBlockStyle() {
    return {
      paddingTop: '15px',
      paddingBottom: '15px',
      paddingLeft: '15px'
    };
  }

  imagePath() {
    return "http://image.tmdb.org/t/p/w154" + this.state.movie.poster_path;
  }

  render() {
    return (
      <div className="col-md-8 Movie" >
        <div className="card moviesDisplay__card row">
          <div className="img-holder">
            <img src={ this.imagePath() } />
          </div>

          <div className="card-block"
               style={ this.cardBlockStyle() }>

            <MovieDetailsCard
               movie={ this.state.movie }
               reviews={ this.state.reviews }
               cardBlockStyle={ this.cardBlockStyle }
               card={ this.state.card } />

            <ReviewMovie
               updateCurrentReview={ this.updateCurrentReview }
               value={ this.state.newReview }
               card={ this.state.card } />

            <BottomLinks
               leaveReview={ this.leaveReview }
               submitReview={ this.submitReview }
               card={ this.state.card } />
          </div>
        </div>
      </div>
    );
  }
}

Movie.propTypes = {
  movies: PropTypes.array,
  routes: PropTypes.object
};

// poster_path: string
export default Movie;
