import Post from "./Post";
import PropTypes from 'prop-types';
import classes from './PostList.module.css';
import NewPost from "./NewPost";
import { useState } from "react";

function PostList({ posts }) {
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');

  const bodyChangeHandler = e => setBody(e.target.value);

  const authorChangeHandler = e => setAuthor(e.target.value);

  return (
    <>
      <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler}/>
      <ul className={classes.posts}>
        {posts.map(post =>
          <Post key={post.author} author={post.author} body={post.body} />
        )}
      </ul>
    </>
  )
  
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default PostList;