import styles from "./inputtext.module.css"
import { useState } from "react";
const Inputtext=({Inputvalue,textvalue})=>{
 
  const [values,setvalues]=useState("Enter the task");
    const valueafter=()=>{
      values?setvalues('Enter the work'):setvalues('');
    }
return(<>
  <input type='text' value={`${textvalue}`}  placeholder="Enter the task" className={`${styles.inputcont} form-control`}id='inputtexttask'
    onChange={(event)=>{
     Inputvalue(event);
       }}   
 />
  </>
);
};
export default Inputtext;