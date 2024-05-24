import Post from "./Post";

function Postlist({posts}) {
  return <ul>
    {
      posts.map(post => {<Post author={post.author} body={post.body}/>})
    }
    <Post author='Não' body='Sim'/>
    <Post author='Sim' body='Não'/>
  </ul>
}

export default Postlist;