import { useState } from 'react'
import PostList from '../components/PostList'

const posts = [{
  author: 'Franchesco',
  body: 'La maquina más veloz'
},{
  author: 'Virgulini',
  body: 'The Tota Italiaa'
}]

function Posts() {
  const [modalIsVisible, setModalIsVisible] = useState(false)


  const hideModalHandler = () => setModalIsVisible(false);

  return (
    <>
      <main>
        <PostList 
          isPosting={modalIsVisible} 
          posts={posts} 
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  )
}

export default Posts
