import React from 'react';
import PropTypes from 'prop-types';


class BottomLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: props.card,
      showFullReviews: props.showFullReviews
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      card: nextProps.card,
      showFullReviews: nextProps.showFullReviews
    });
  }

  renderActionButton() {
    if(this.state.card) {
      return(
        <div className="col-sm-6">
          <button className="btn btn-secondary btn-sm view-more"
                  onClick={ this.props.showReviews }>
            { this.state.showFullReviews ? 'View Less' : 'View More'}
          </button>
          <button className="btn btn-secondary btn-sm pull-right leave-review"
                  onClick={ this.props.leaveReview }>
            Leave Review
          </button>
        </div>
      );
    } else {
      return(
        <div className="col-sm-12">
          <button className="btn btn-secondary btn-sm cancel-review"
                  onClick={ this.props.cancelReview }>
            Cancel
          </button>
          <button className="btn btn-secondary btn-sm pull-right submit-review"
                  onClick={ this.props.submitReview }>
            Submit
          </button>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="row BottomLinks">
        { this.renderActionButton() }
      </div>
    );
  }
}

export default BottomLinks;
