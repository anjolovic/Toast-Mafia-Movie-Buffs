import React from 'react';
import PropTypes from 'prop-types';

import SortBy from 'components/sort_by';
import MovieList from 'components/movie_list';

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);
    this.flushSortOrder = this.flushSortOrder.bind(this);
    this.state = {};
  }

  flushSortOrder (sortOrder) {
    const url = this.props.routes.movies_set_sort_order_path;
    jQuery.post(url, {sort_order: sortOrder}).done(function(){
      window.location.reload();
    });
  }

  render() {
    return(
      <section className="MovieIndex">
        <header className="container">
        <SortBy
           setSortOrder={ this.flushSortOrder }
           />
       </header>
        <article className="moviesDisplay container">
          <MovieList
             routes={ this.props.routes }
             movies={ this.props.movies }/>
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
