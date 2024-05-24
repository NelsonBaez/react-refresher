import PropTypes from 'prop-types';

function Post({author, body}) {

  return (
    <div>
      <p>{author}</p>
      <p>{body}</p>
    </div>
  )
}
Post.propTypes = {
  author: PropTypes.string.isRequired
  body: PropTypes.string.isRequired
}


export default Post;