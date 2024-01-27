import './Todolist.css'
import { MdDelete } from "react-icons/md";

const Todolist=({names,onDeleteclick})=>{

  return(<> 
  <div className='listcontaienr'>
  {names.length!=0? names.map(item=>(
   
      <div class="row todolist-row">
      <div key={item.namelist}class="col ">
      {item.namelist}
    </div>
    <div key={item.duedate} class="col">
     {item.duedate}
    </div>
    <div class="col">
     <button className='btn btn-danger' onClick={
      ()=>{
        onDeleteclick(item.namelist);
      }
     }><MdDelete /></button>
    </div>
    </div>

   
    )):<h1>Enjoy your day</h1>}
</div>
  </>
  );
}
export default Todolist;