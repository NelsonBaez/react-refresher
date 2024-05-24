import './App.css'
import PostList from './components/PostList'

const posts = [{
  author: 'Franchesco',
  body: 'La maquina más veloz'
},{
  author: 'Virgulini',
  body: 'The Tota Italiaa'
}]

function App() {
  return <main>
    <PostList posts={posts}/>
  </main>
}

export default App
