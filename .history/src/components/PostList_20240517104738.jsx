import Post from "./Post";
import PropTypes from 'prop-types';
import classes from './PostList.module.css';
import NewPost from "./NewPost";
import Modal from "./Modal";
import { useEffect, useState } from "react";

function PostList({isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts);
    }

    fetchPosts();
  }, []);

  const addPostHandler = postData => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {'Content-Type': 'application/json'}
    });
    setPosts(exitingPosts => [postData, ...exitingPosts])
  };

  return (
    <>
      {isPosting &&
        <Modal onClose={onStopPosting}>
          <NewPost 
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      }
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(post =>
            <Post key={post.id} author={post.author} body={post.body} />
          )}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>No posts</h2>
          <p>Add some!</p>
        </div>
      )}
    </>
  )

}

PostList.propTypes = {
  isPosting: PropTypes.bool.isRequired,
  onStopPosting: PropTypes.func.isRequired,
}


export default PostList;