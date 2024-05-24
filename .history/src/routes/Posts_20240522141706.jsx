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
