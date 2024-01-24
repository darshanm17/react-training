import './Todolist.css'
const Todolist=({names})=>{
  console.log(names);
  return(<> 
  <div>
  {names.map(item=>(
   
      <div class="row todolist-row">
      <div class="col ">
      {item.namelist}
    </div>
    <div class="col">
     {item.duedate}
    </div>
    <div class="col">
     <button className='btn btn-danger'>delete</button>
    </div>
    </div>

  
    ))}
</div>
  </>
  );
}
export default Todolist;