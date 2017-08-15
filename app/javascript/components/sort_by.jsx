import React from 'react';
import PropTypes from 'prop-types';

class SortBy extends React.Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick (e) {
    const sortBy = jQuery(e.currentTarget).data('sort-by');
    this.props.setSortOrder(sortBy);
  }

  render () {
    const labelStyle = {
      padding: '15px 20px 0'
    };

    return (
      <section className="sort-by SortBy mt-4">
        <div className="btn-toolbar"  role="toolbar">
          <label style={labelStyle}>Sort By:</label>

          <div className="btn-group" role="group" aria-label="sort">
            <button type="button" className="btn btn-secondary" data-sort-by="title" onClick={ this.handleButtonClick }>
              Title
            </button>
            <button type="button" className="btn btn-secondary" data-sort-by="release_date" onClick={ this.handleButtonClick }>
              Released Date
            </button>
            <button type="button" className="btn btn-secondary" data-sort-by="popularity" onClick={ this.handleButtonClick }>
              Popularity
            </button>
          </div>
        </div>
      </section>
    );
  }
}

SortBy.propTypes = {
  setSortOrder: PropTypes.func.isRequired
};

export default SortBy;
