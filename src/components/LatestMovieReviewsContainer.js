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
      reviews: null
    }
  }

  handleFetch = event => {
    fetch(URL)
    .then(resp => resp.json())
    .then(data =>
      this.setState({
      debugger
      reviews: data
    }))
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews onLoad={this.handleFetch} reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
