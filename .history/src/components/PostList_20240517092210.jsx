import Post from "./Post";
import PropTypes from 'prop-types';
import classes from './PostList.module.css';
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({ posts, isPosting, onStopPosting }) {
  

  return (
    <>
      {isPosting &&
        <Modal onClose={onStopPosting}>
          <NewPost 
            onCancel={onStopPosting}
          />
        </Modal>
      }
      <ul className={classes.posts}>
        {posts.map(post =>
          <Post key={post.author} author={post.author} body={post.body} />
        )}
      </ul>
    </>
  )

}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  isPosting: PropTypes.bool.isRequired,
  onStopPosting: PropTypes.func.isRequired,
}


export default PostList;