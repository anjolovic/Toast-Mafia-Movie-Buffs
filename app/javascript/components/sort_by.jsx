import React from 'react';
import PropTypes from 'prop-types';
import {ButtonGroup, Button} from 'react-bootstrap';

class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      sortOrder: this.getSortOrder(this.props.sortOrder)
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({sortOrder: this.getSortOrder(nextProps.sortOrder)});
  }

  classNames (buttonType) {
    const activeButton = this.state.sortOrder === buttonType ? ' activeButton' : '';
    return "btn btn-secondary" + activeButton;
  }

  getSortOrder (sortOrder) {
    return sortOrder.length > 1 ? sortOrder.split(' ')[0] : 'title';
  }

  handleButtonClick (e) {
    const sortBy = jQuery(e.currentTarget).data('sort-by');
    this.props.setSortOrder(sortBy);
  }

  render () {
    const labelStyle = {
      padding: '15px 25px 0'
    };
    console.log(this.state.sortOrder);

    return (
      <section className="sort-by SortBy mt-4 mb-4">
        <ButtonGroup role="group" aria-label="sort" bsSize="xsmall">
          <label style={labelStyle}>Sort By:</label>
          <Button
            className={ this.classNames("title") }
            data-sort-by="title"
            onClick={ this.handleButtonClick }>Title</Button>
          <Button
            className={ this.classNames("release_date") }
            data-sort-by="release_date"
            onClick={ this.handleButtonClick }>Released Date</Button>
          <Button
            className={ this.classNames("popularity") }
            data-sort-by="popularity"
            onClick={ this.handleButtonClick }>Popularity</Button>
        </ButtonGroup>
      </section>
    );
  }
}

SortBy.propTypes = {
  setSortOrder: PropTypes.func.isRequired
};

export default SortBy;
