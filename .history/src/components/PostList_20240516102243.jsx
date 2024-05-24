import Post from "./Post";
import PropTypes from 'prop-types';

function Postlist({posts}) {
  return <ul>
    {
      posts.map(post => {<Post author={post.author} body={post.body}/>})
    }
  </ul>
}


export default Postlist;