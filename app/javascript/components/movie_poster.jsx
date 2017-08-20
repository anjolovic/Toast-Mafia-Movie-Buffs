import React from 'react';
import PropTypes from 'prop-types';
import ReviewRating from 'components/review_rating';

class MoviePoster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePath: props.imagePath,
      rating: props.rating
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ imagePath: nextProps.imagePath, rating: nextProps.rating });
  }

  render() {
    return (
      <div className="img-holder relative MoviePoster">
        <img src={ this.state.imagePath } />
        <ReviewRating
           className="text-center"
           readOnly={ true }
           rating={ parseFloat(this.state.rating, 10) || 0 }
           />
      </div>
    );
  }
}

export default MoviePoster;
