import { useState } from 'react'
import './App.css'
import Key from './Component/Key'
import DIsplay from './Component/DIsplay'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='cont'>
        <DIsplay />
        <Key />
      </div>
    </>
  )
}

export default App
