import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'roUiJGu2cVNTbHgkpz3k12Bvl4DtMpK3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: null,
      search: ""
    }
  }

  handleFetch = event => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.search}` + `api-key=${NYT_API_KEY}`)
    .then(resp => resp.json())
    .then(json => this.setState({
      reviews: json
    }))
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div class="searchable-movie-reviews">
        <form onSubmit={this.handleFetch}>
          <input type="text" name="search" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
