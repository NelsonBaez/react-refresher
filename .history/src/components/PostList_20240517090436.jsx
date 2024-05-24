import Post from "./Post";
import PropTypes from 'prop-types';
import classes from './PostList.module.css';
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostList({ posts, isPosting, onStopPosting }) {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const bodyChangeHandler = e => setBody(e.target.value);

  const authorChangeHandler = e => setAuthor(e.target.value);

  return (
    <>
      {isPosting &&
        <Modal onClose={onStopPosting}>
          <NewPost 
            onBodyChange={bodyChangeHandler} 
            onAuthorChange={authorChangeHandler} 
            onCancel={onStopPosting}
          />
        </Modal>
      }
      <ul className={classes.posts}>
        {posts.map(post =>
          <Post key={post.author} author={author} body={body} />
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