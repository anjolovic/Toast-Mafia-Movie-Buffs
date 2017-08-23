import React from 'react';
import PropTypes from 'prop-types';
import MovieDetailsCard from 'components/movie_details_card';
import ReviewMovie from 'components/review_movie';
import BottomLinks from 'components/bottom_links';
import MoviePoster from 'components/movie_poster';

class Movie extends React.Component {
  constructor (props) {
    super(props);
    this.cardBlockStyle = this.cardBlockStyle.bind(this);
    this.submitReview =this.submitReview.bind(this);
    this.leaveReview = this.leaveReview.bind(this);
    this.cancelReview = this.cancelReview.bind(this);
    this.showReviews = this.showReviews.bind(this);
    this.updateCurrentReview = this.updateCurrentReview.bind(this);
    this.updateCurrentRating = this.updateCurrentRating.bind(this);
    this.updateCurrentEmail = this.updateCurrentEmail.bind(this);
    this.state = this.getState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getState(nextProps));
  }

  getState(props) {
    return {
      movie: JSON.parse(JSON.stringify(props.movie)),
      reviews: props.movie.reviews,
      rating: props.movie.rating,
      newReview: '',
      newRating: 0,
      ratingEmpty: false,
      email: '',
      emailError: false,
      card: true,
      showFullReviews: false
    };
  }

  cancelReview() {
    this.setState({card: true, showFullReviews: false});
  }

  leaveReview() {
    this.setState({card: false, showFullReviews: false});
  }

  showReviews() {
    this.setState({showFullReviews: !this.state.showFullReviews});
  }

  formValid() {
    return !!(this.validateEmailField(this.state.email) & this.validateRatingField(this.state.newRating));
  }

  submitReview() {
    const _this = this;
    if(this.formValid()) {
      jQuery.post(this.props.routes.movie_reviews_path, this.movieReviewParams())
        .done(function(data) {
          _this.setState(_this.getState(data));
        });
    }
  }

  updateCurrentReview(event) {
    const content = jQuery(event.currentTarget).val();
    this.setState({newReview: content });
  }

  validateEmailField(email) {
    if(this.validateEmail(email)) {
      this.setState({email: email, emailError: false});
      return true;
    }else{
      this.setState({emailError: true});
      return false;
    }
  }

  validateRatingField(rating) {
    if(rating <= 0){
      this.setState({ratingEmpty: true});
      return false;
    } else {
      this.setState({newRating: rating, ratingEmpty: false});
      return true;
    }
  }

  updateCurrentRating(rating) {
    this.validateRatingField(rating);
  }

  updateCurrentEmail(event) {
    const email = jQuery(event.currentTarget).val();
    this.validateEmailField(email);
  }

  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  movieReviewParams() {
    return {
      movie_review: {
        movie_id: this.state.movie.id,
        content: this.state.newReview,
        rating: this.state.newRating,
        email: this.state.email
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
      <div className="col-sm-12 Movie" >
        <div className="card moviesDisplay__card row">
          <MoviePoster
             imagePath={ this.imagePath() }
             rating={ this.state.rating }
             />

          <div className="card-block container"
               style={ this.cardBlockStyle() }>

            <MovieDetailsCard
               movie={ this.state.movie }
               reviews={ this.state.reviews }
               cardBlockStyle={ this.cardBlockStyle }
               showFullReviews={ this.state.showFullReviews }
               card={ this.state.card } />

            <ReviewMovie
               updateCurrentReview={ this.updateCurrentReview }
               updateCurrentRating={ this.updateCurrentRating }
               updateCurrentEmail={ this.updateCurrentEmail }
               value={ this.state.newReview }
               rating={ this.state.newRating }
               ratingEmpty={ this.state.ratingEmpty }
               email={ this.state.email }
               emailError={ this.state.emailError }
               card={ this.state.card } />

            <BottomLinks
               showFullReviews={ this.state.showFullReviews }
               leaveReview={ this.leaveReview }
               cancelReview={ this.cancelReview }
               submitReview={ this.submitReview }
               showReviews={ this.showReviews }
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
