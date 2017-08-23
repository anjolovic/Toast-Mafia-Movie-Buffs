import React from 'react';
import PropTypes from 'prop-types';
import ReviewRating from 'components/review_rating';
import ReviewEmail from 'components/review_email';

class ReviewMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card,
      rating: 0,
      ratingEmpty: this.props.ratingEmpty,
      email: '',
      emailError: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      card: nextProps.card,
      value: nextProps.value,
      rating: nextProps.rating,
      ratingEmpty: nextProps.ratingEmpty,
      email: nextProps.email,
      emailError: nextProps.emailError
    });
  }

  render() {
    if(this.state.card) {
      return(null);
    } else {
      return(
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-5">
                <div className="form-group col-sm-12">
                  <label className="form-control-label">
                    Rating:
                  </label>
                  <ReviewRating
                     rating={ this.state.rating }
                     error={ this.state.ratingEmpty }
                     onChange={ this.props.updateCurrentRating }
                     readOnly={ false }
                     />
                </div>
              </div>
              <div className="col-sm-7">
                <div className="form-group">
                  <label className="form-control-label">
                    Email:
                  </label>
                  <ReviewEmail
                     email={ this.state.email }
                     error={ this.state.emailError }
                     onChange={ this.props.updateCurrentEmail }
                     />
                </div>
              </div>
            </div>
          </div>

          <div className="form-group col-sm-12">
            <label className="form-control-label">
              Comment:
            </label>
            <textarea className="form-control"
                      rows="3"
                      onChange={ this.props.updateCurrentReview }
                      value={ this.state.value } />
          </div>
        </div>
      );
    }
  }
}

export default ReviewMovie;
