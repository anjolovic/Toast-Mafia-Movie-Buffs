import React from 'react';
import PropTypes from 'prop-types';
import ReviewRating from 'components/review_rating';
import ReviewEmail from 'components/review_email';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

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
        <article>
            <FormGroup>
              <ControlLabel>
                Rating
              </ControlLabel>
              <ReviewRating
                 empty={this.props.empty}
                 full={this.props.full}
                 rating={ this.state.rating }
                 error={ this.state.ratingEmpty }
                 onChange={ this.props.updateCurrentRating }
                 readOnly={ false }
                 />
                 {this.state.ratingEmpty === true && (
                   <small className="alert alert-danger">
                      Please leave a rating.
                   </small>
                 )}
            </FormGroup>
            <FormGroup>
              <ControlLabel>
                Email:
              </ControlLabel>
              <ReviewEmail
                 email={ this.state.email }
                 error={ this.state.emailError }
                 onChange={ this.props.updateCurrentEmail }
                 />
            </FormGroup>
            <FormGroup>
              <ControlLabel>
                Comment:
              </ControlLabel>
              <textarea
                  rows="2"
                  className="form-control"
                  onChange={ this.props.updateCurrentReview }
                  value={ this.state.value } />
            </FormGroup>
      </article>
      );
    }
  }
}

export default ReviewMovie;
