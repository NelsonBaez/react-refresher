import './App.css'
import MainHeader from './components/MainHeader'
import PostList from './components/PostList'

const posts = [{
  author: 'Franchesco',
  body: 'La maquina más veloz'
},{
  author: 'Virgulini',
  body: 'The Tota Italiaa'
}]

function App() {
  return (
    <>
      <MainHeader />
      <main>
        <PostList posts={posts}/>
      </main>
    </>
    )
}

export default App
