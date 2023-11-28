import { useState } from 'react'
import './App.css'
import Notes from './components/Notes'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main'>
        <Header/>
        <Notes/>
        </div>
    </>
  )
}

export default App
