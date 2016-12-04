import { assign } from 'lodash'

import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from './actions'

const defaultState = {
  isFetching: false,
  data: [],
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return assign({}, state, {
        isFetching: true
      })

    case FETCH_POSTS_SUCCESS:
      return assign({}, state, {
        isFetching: false,
        data: action.data,
      })

    case FETCH_POSTS_FAILURE:
      return assign({}, state, {
        isFetching: false,
      })

    default:
      return state
  }
}

export default reducer
