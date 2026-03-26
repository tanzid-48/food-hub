
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const handleInc = () =>{
    setCount(count+1);
  }


  return (
    <>
      <div>
      <p>Count: {count}</p>
        <button onClick={handleInc} className='btn btn-accent'>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} className='btn btn-primary'>
        Decrement
      </button>
      <button onClick={() => setCount(0)}className='btn btn-accent'>Reset</button>
      </div>
    </>
  )
}

export default App