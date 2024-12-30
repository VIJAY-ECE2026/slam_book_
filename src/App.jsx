import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Form from './form'
import SlamBook from './slambook'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<center>
        <SlamBook/>
        </center>
    </>
  )
}

export default App
