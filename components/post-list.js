import { map } from 'lodash'
import React, { PropTypes } from 'react'

import Post from './post'

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

export default PostList
