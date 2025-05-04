import { useState } from 'react'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar />
      </div>
  )
}

export default App
