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
      reviews: null
    }
  }

  handleFetch = event => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${event}` + `api-key=${NYT_API_KEY}`)
    .then(resp => resp.json())
    .then(json => this.setState({
      console.log(json)
      reviews: json
    }))
  }

  render() {
    return (
      <div class="searchable-movie-reviews">

      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
