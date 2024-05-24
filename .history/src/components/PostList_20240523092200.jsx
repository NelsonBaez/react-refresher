import Post from "./Post";
import PropTypes from 'prop-types';
import classes from './PostList.module.css';
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();

  // const addPostHandler = postData => {
  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {'Content-Type': 'application/json'}
  //   });
  //   setPosts(exitingPosts => [postData, ...exitingPosts])
  // };

  return (
    <>
      
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
}


export default PostList;