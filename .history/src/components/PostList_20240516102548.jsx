import Post from "./Post";
import PropTypes from 'prop-types';

function Postlist({posts}) {
  return <ul>
    {posts.map(post =>
        <Post key={post.author} author={post.author} body={post.body}/>
      )}
  </ul>
}

Postlist.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Postlist;