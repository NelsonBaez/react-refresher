import { Outlet } from 'react-router-dom'
import PostList from '../components/PostList'

const posts = [{
  author: 'Franchesco',
  body: 'La maquina más veloz'
},{
  author: 'Virgulini',
  body: 'The Tota Italiaa'
}]

function Posts() {


  return (
    <>

      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  )
}

export default Posts

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const resData = await response.json();
  return resData.posts;
}