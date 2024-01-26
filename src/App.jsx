import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appname from './components/Appname'
import InputContainer from './components/Appcontainer'
import Todolist from './components/Todolist'
import ErrorMessage from './components/ErrorMessage'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [count, setCount] = useState(0);
  const [list,setlist]=useState([]);
  console.log(list.length);

 const handlesubmit=(value,duedate)=>{
  const newlist=[...list,{ namelist:value,
  duedate:duedate}]
  setlist(newlist);
 }
 const handledelete=(taskname)=>{
  const newlist=list.filter(item=>item.namelist!==taskname);
  console.log(newlist);
  setlist(newlist);
  console.log(taskname);
 }

  return <center class="todo-container">
    <Appname/>
    <InputContainer onclickadd={handlesubmit}/>
  

    <Todolist  key={list} names={list} onDeleteclick={handledelete}/>
    
  
   </center>   
}

export default App
