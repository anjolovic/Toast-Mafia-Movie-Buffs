import React from 'react';
import PropTypes from 'prop-types';

import SortBy from 'components/sort_by';
import MovieList from 'components/movie_list';

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);
    this.flushSortOrder = this.flushSortOrder.bind(this);
    this.state = {
      sort_order: this.props.sort_order,
      movies: this.props.movies,
      routes: this.props.routes
    };
  }

  flushSortOrder (sortOrder) {
    this.reloadIndex(sortOrder);
  }

  reloadIndex (sortOrder) {
    const _this = this;
    jQuery.get(window.location.href, {sort_order: sortOrder}).done(function(data){
      _this.setState(data);
    });
  }

  render() {
    return(
      <section className="MovieIndex">
        <header className="container">
          <SortBy
             sortOrder={ this.state.sort_order }
             setSortOrder={ this.flushSortOrder }
             />
        </header>

        <article className="container">
          <MovieList
             routes={ this.state.routes }
             movies={ this.state.movies }/>
        </article>
      </section>
    );
  }
}

MovieIndex.propTypes = {
  movies: PropTypes.array,
  routes: PropTypes.object
};


export default MovieIndex;
