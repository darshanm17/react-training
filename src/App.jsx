import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appname from './components/Appname'
import InputContainer from './components/Appcontainer'
import Todolist from './components/Todolist'

function App() {
  const [count, setCount] = useState(0)
  let list=[{
    namelist:'Buy Milk',
    duedate:'14-11-2022'
  },
   {
    namelist:'Watching Movie',
    duedate:'15-11-2022'
   },
   {
    namelist:'Meeting',
    duedate:'16-11-2022'
   },

]

  return <center class="todo-container">
    <Appname/>
    <InputContainer/>
    <Todolist names={list}/>
    
  
   </center>   
}

export default App
