import Post from "./Post";
import PropTypes from 'prop-types';
import classes from './PostList.module.css';
import NewPost from "./NewPost";

function PostList({ posts }) {
  return (
    <>
      <NewPost />
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