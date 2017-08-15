import React from 'react';
import PropTypes from 'prop-types';


class BottomLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      card: this.props.card
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      card: nextProps.card
    });
  }

  renderActionButton() {
    if(this.state.card) {
      return(
        <button className="btn btn-secondary btn-sm" onClick={ this.props.leaveReview }>
          Leave Review
        </button>
      );
    } else {
      return(
        <button className="btn btn-secondary btn-sm" onClick={ this.props.submitReview }>
          Submit
        </button>
      );
    }
  }

  render() {
    return(
      <div className="row">
        <div className="col-sm-3 pull-right">
          { this.renderActionButton() }
        </div>
      </div>
    );
  }
}

export default BottomLinks;
