import Post from "./Post";
import PropTypes from 'prop-types';
import classes from './PostList.module.css';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function PostList() {
  const posts = useLoaderData();
  
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      setPosts(resData.posts);
      setIsFetching(false);
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
      
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map(post =>
            <Post key={post.id} author={post.author} body={post.body} />
          )}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>No posts</h2>
          <p>Add some!</p>
        </div>
      )}
      {isFetching && <div style={{textAlign:'center', color:'white'}}><p>Loading posts...</p></div>
      }
    </>
  )

}

PostList.propTypes = {
  isPosting: PropTypes.bool.isRequired,
  onStopPosting: PropTypes.func.isRequired,
}


export default PostList;