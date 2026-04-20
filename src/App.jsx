import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sidebar'
import Body from './components/body'
import Background from './components/background'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Background />
   <div className="relative h-auto md:h-[100vh] px-[6%] md:px-0 overflow-x-hidden flex flex-col md:flex-row">
  <Sidebar className="relative z-20" />
  <Body />
</div>
</>
  )
}

export default App
