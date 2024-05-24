import './App.css'
import Postlist from './components/PostList'

const posts = [{
  author: 'John',
  body: 'This is Juão'
},{
  author: 'John',
  body: 'This is Juão'
}]

function App() {
  return <main>
    <Postlist posts={posts}/>
  </main>
}

export default App
