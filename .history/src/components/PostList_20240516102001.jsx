import Post from "./Post";
import PropTypes from 'prop-types';

function Postlist({posts}) {
  return <ul>
    {
      posts.map(post => {<Post author={post.author} body={post.body}/>})
    }
    <Post author='Não' body='Sim'/>
    <Post author='Sim' body='Não'/>
  </ul>
}

Postlist.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}


export default Postlist;