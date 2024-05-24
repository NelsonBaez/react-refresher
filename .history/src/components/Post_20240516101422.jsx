import PropTypes from 'prop-types';
import classes from './Post.module.css';

function Post({author, body}) {

  return (
    <div className={classes.post}>
      <p className={classes.author}>{author}</p>
      <p className={classes.text}>{body}</p>
    </div>
  )
}
Post.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}


export default Post;