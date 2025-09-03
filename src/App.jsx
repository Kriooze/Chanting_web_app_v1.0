import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  return (
    <>
      <div>
        <h1>RAM</h1>
       <h2>{count}</h2>
        <button onClick={() => count>0? setCount((count) => count - 1) : setCount(0)}>
         -
        </button>
        <button onClick={() => setCount((count) => count + 1)}>
         +
        </button>
        <button onClick={() => setCount(0)}>
         reset
        </button>
       </div>

       <div>
        <h1>RADHA</h1>
       <h2>{count2}</h2>
        <button onClick={() => count2>0? setCount2((count2) => count2 - 1) : setCount2(0)}>
         -
        </button>
        <button onClick={() => setCount2((count2) => count2 + 1)}>
         +
        </button>
        <button onClick={() => setCount2(0)}>
         reset
        </button>
       </div>
    </>
  )
}

export default App
