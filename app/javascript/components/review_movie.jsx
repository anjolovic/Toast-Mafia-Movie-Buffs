import React from 'react';
import PropTypes from 'prop-types';

class ReviewMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      card: nextProps.card,
      value: nextProps.value
    });
  }

  render() {
    if(this.state.card) {
      return(null);
    } else {
      return(
        <div className="form-group">
          <textarea className="form-control"
                    rows="5"
                    onChange={ this.props.updateCurrentReview }
                    value={ this.state.value } />
        </div>
      );
    }
  }
}

export default ReviewMovie;
