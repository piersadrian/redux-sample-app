import { connect } from 'react-redux'

import fetchPosts from '../actions'
import PostList from './post-list'

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.posts.data,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadPostsOnClickFunction: () => {
      dispatch(fetchPosts())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)