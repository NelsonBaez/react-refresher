import './App.css'
import Postlist from './components/PostList'



function App() {
  const posts = [{
    author: 'Franchesco',
    body: 'La maquina más veloz'
  },{
    author: 'Virgulini',
    body: 'The Tota Italiaa'
  }]
  return <main>
    <Postlist posts={posts}/>
  </main>
}

export default App
