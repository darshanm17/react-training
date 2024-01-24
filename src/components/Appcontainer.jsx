function InputContainer(){
  return(
    <div class="container-textcenter">
    <div class="row">
      <div class="col-4">
      <form>
        <div class='mb-3'>
       
          <input type='text' placeholder='Enter the task' class='form-control'id='inputtexttask'/>
        </div> </form>
        </div>
        <div class="col-4"> 
        <div class='mb-3'>
          <input type='date' class='form-control input-with-post-icon datepicker'/>
        </div></div>
        <div class='col-4'>
         <button class='btn btn-primary'>submit</button>
        </div>
       </div>
       </div>
  )
}
export default InputContainer;