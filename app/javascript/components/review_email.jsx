import React from 'react';
import PropTypes from 'prop-types';

class ReviewEmail extends React.Component {
  constructor(props) {
    super(props);
    this.errorClass = this.errorClass.bind(this);
    this.state = {
      error: false,
      email: this.props.email
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({error: nextProps.error, email: nextProps.email });
  }

  errorClass() {
    return this.state.error ? "danger" : "";
  }

  displayError() {
    return this.state.error ? "display-block" : "hidden";
  }

  render() {
    return(
      <div className={ `${this.props.className} ${this.errorClass()}` }>
        <input type="text" className="form-control" onChange={ this.props.onChange } />
        <small className={`form-control-feedback ${this.displayError()}`}>
          Please enter email.
        </small>
      </div>
    );
  }
}

export default ReviewEmail;
