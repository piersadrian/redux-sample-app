import React, { PropTypes } from 'react'

const Post = (props) => {
  return (
    <div className="post">
      <h3>{props.title}</h3>
      <p>{props.body}</p>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Post
