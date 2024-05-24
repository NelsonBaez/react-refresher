import './App.css'
import Postlist from './components/PostList'

const posts = [{
  author: 'Franchesco',
  body: 'La maquina más veloz'
},{
  author: 'Virgulini',
  body: 'The Tota Italiaa'
}]

function App() {
  return <main>
    <Postlist posts={posts}/>
  </main>
}

export default App
