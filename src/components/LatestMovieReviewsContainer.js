import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'roUiJGu2cVNTbHgkpz3k12Bvl4DtMpK3';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  handleFetch = event => {
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/all.json`)
    .then(resp => resp.json())
    .then(json => this.setState({
      data: json
    }))
  }

  render() {
    return (
      <div class="latest-movie-reviews">
        <MovieReviews onFetch={this.handleFetch} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
