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


  return (
    <>
      <main>
        <PostList 
        />
      </main>
    </>
  )
}

export default Posts
