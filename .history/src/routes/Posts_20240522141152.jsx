import { useState } from 'react'
import MainHeader from '../components/MainHeader'
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

  const showModalHandler = () => setModalIsVisible(true);

  const hideModalHandler = () => setModalIsVisible(false);

  return (
    <>
      <MainHeader onCreatePost={showModalHandler}/>
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
