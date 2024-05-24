import Post from "./Post";
import PropTypes from 'prop-types';

function Postlist({posts}) {
  return <ul>
     {posts &&
      posts.map(post => {<Post author={post.author} body={post.body}/>})
    }
  </ul>
}

Postlist.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Postlist;