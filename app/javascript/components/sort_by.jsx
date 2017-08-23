import React from 'react';
import PropTypes from 'prop-types';

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

  render () {
    const labelStyle = {
      padding: '15px 20px 0'
    };

    return (
      <section className="container sort-by SortBy">
        <div className="row">
          <div className="btn-toolbar"  role="toolbar">
            <label style={labelStyle}>Sort By:</label>

            <div className="btn-group" role="group" aria-label="sort">
              <button type="button" className={ this.classNames("title") } data-sort-by="title" onClick={ this.handleButtonClick }>
                Title
              </button>
              <button type="button" className={ this.classNames("release_date") } data-sort-by="release_date" onClick={ this.handleButtonClick }>
                Released Date
              </button>
              <button type="button" className={ this.classNames("genres") } data-sort-by="genres" onClick={ this.handleButtonClick }>
                Genre
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  classNames (buttonType) {
    const active = this.state.sortOrder === buttonType ? ' active' : '';
    return "btn btn-secondary" + active;
  }

  getSortOrder (sortOrder) {
    return sortOrder.length > 1 ? sortOrder.split(' ')[0] : 'title';
  }

  handleButtonClick (e) {
    const sortBy = jQuery(e.currentTarget).data('sort-by');
    this.props.setSortOrder(sortBy);
  }
}

SortBy.propTypes = {
  setSortOrder: PropTypes.func.isRequired
};

export default SortBy;
