import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appname from './components/Appname'
import InputContainer from './components/Appcontainer'

function App() {
  const [count, setCount] = useState(0)

  return <center class="todo-container">
    <Appname/>
    <InputContainer/>
   </center>   
}

export default App
