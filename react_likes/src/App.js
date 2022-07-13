import logo from './logo.svg'
import './App.css'
import Likes from './components/Likes'
import Counter from './components/counter'
import { useState } from 'react'

function App() {
  const [likes, setLikes] = useState(0)

  const addLike = (event) => {
    let like = likes + 1
    setLikes(like)
    console.log('The + button has fired')
  }

  const removeLike = (event) => {
    let like = likes - 1
    setLikes(like)
    console.log('The - button has fired')
  }

  return (
    <div className="App">
      <Counter digit={likes} />
      <Likes addLike={addLike} removeLike={removeLike} />
    </div>
  )
}

export default App
