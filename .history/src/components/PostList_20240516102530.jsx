import Post from "./Post";
import PropTypes from 'prop-types';

function Postlist({posts}) {
  return <ul>
    {
      posts && posts.map(post =>
        <Post key={post.author} author={post.author} body={post.body}/>
      )}
    {options && options.map(option => 
        <option key={option.value} value={option.value}>{option.name}</option>
      )}
  </ul>
}

Postlist.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Postlist;