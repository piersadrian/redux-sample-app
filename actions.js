import axios from 'axios'
import Promise from 'bluebird'

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'

export const willFetchPosts = () => ({
  type: FETCH_POSTS_REQUEST,
})

export const didFetchPosts = (res) => ({
  type: FETCH_POSTS_SUCCESS,
  data: res.data,
  receivedAt: Date.now(),
})

export const failedToFetchPosts = (res) => ({
  type: FETCH_POSTS_FAILURE,
  error: {
    statusCode: res.status,
  },
  receivedAt: Date.now(),
})

const fetchPosts = () => (dispatch, getState) => {
  const state = getState().posts
  if (!state.isFetching) {
    dispatch(willFetchPosts())

    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => dispatch(didFetchPosts(res)))
      .catch((err) => dispatch(failedToFetchPosts(err.response)))
  }

  return Promise.resolve()
}

export default fetchPosts