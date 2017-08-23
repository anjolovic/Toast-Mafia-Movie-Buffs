import React from 'react';
import PropTypes from 'prop-types';
import ReviewRating from 'components/review_rating';

class RecentReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews
    };
  }

  renderReviews() {
    return this.state.reviews.map(function(review) {
      return(
        <div className="review row" key={review.id}>
          <div className="col-6">
            { review.content }
          </div>
          <div className="col-6">
            <ReviewRating
               readOnly={ true }
               rating={ parseFloat(review.rating, 10) || 0 }
               />
          </div>
        </div>
      );
    });
  }

  render(){
    return(
      <div className="RecentReviews">
          <h4 className="card-title">
            Recent Reviews
          </h4>
          { this.renderReviews() }
      </div>
    );
  }
}

export default RecentReviews;
