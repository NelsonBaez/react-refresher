import Post from "./Post";

function Postlist() {
  return <ul>
    <Post author='Não' body='Sim'/>
    <Post author='Sim' body='Não'/>
  </ul>
}

export default Postlist;