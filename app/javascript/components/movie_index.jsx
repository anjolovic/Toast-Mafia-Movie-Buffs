import React from 'react';
import PropTypes from 'prop-types';
import SortBy from 'components/sort_by';
import MovieList from 'components/movie_list';
import RecentReviews from 'components/recent_reviews';
import RecentMovies from 'components/recent_movies';

class MovieIndex extends React.Component {
  constructor(props) {
    super(props);
    this.flushSortOrder = this.flushSortOrder.bind(this);
    this.state = {
      sort_order: props.sort_order,
      movies: props.movies,
      routes: props.routes,
      recent_reviews: props.recent_reviews,
      recent_movies: props.recent_movies
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
    const margin = {
        marginTop: '40px'
      };

    const background = {
      backgroundColor: '#FFFEE2'
    }

    return(
      <div className="MovieIndex">
        <SortBy
           sortOrder={ this.state.sort_order }
           setSortOrder={ this.flushSortOrder }
           />

        <section className="container">
          <div className="row" style={margin}>
            <div className="col-md-8 movies">
              <MovieList
                 routes={ this.state.routes }
                 movies={ this.state.movies }
               />
            </div>
            <div className="col-md-4">
              <div className="card" >
                <div className="card-body" style={background}>
                  <RecentReviews
                     reviews={ this.state.recent_reviews}
                     />

                  <RecentMovies
                     movies={ this.state.recent_movies}
                   />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

MovieIndex.propTypes = {
  movies: PropTypes.array,
  routes: PropTypes.object
};


export default MovieIndex;
