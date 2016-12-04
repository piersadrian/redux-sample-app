import { map } from 'lodash'
import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Post from './post'
import fetchPosts from '../actions'

const PostList = (props) => {
  return (
    <div className="post-list">
      <h1>Posts</h1>
      <button onClick={props.loadPostsOnClickFunction}>Load Posts</button>
      {map(props.posts, (post) => <Post title={post.title} body={post.body} key={post.id} />)}
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  })).isRequired,
  loadPostsOnClickFunction: PropTypes.func.isRequired,
}

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
