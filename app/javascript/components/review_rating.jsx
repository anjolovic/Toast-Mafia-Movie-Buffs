import React from 'react';
import PropTypes from 'prop-types';
import Rating from 'react-rating';

class ReviewRating extends React.Component {
  constructor(props) {
    super(props);
    this.errorClass = this.errorClass.bind(this);
    this.state = {
      error: false,
      readOnly: this.props.readOnly,
      rating: this.props.rating
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({error: nextProps.error, rating: nextProps.rating });
  }

  errorClass() {
    return this.state.error ? "alert alert-danger" : "";
  }

  displayError() {
    return this.state.error ? "display-block" : "hidden";
  }

  render() {
    return(
      <div className={ `${this.props.className} ${this.errorClass()}` }>
        <Rating
           empty="fa fa-star-o fa-1x Rating"
           full="fa fa-star fa-1x Rating"
           fractions={2}
           initialRate={ this.state.rating }
           placeholderRate={ this.state.rating }
           onChange={ this.props.onChange }
           readonly={ this.state.readOnly }
           />
      </div>
    );
  }
}

export default ReviewRating;
