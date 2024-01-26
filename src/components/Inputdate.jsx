import { useState } from "react";
import styles from "./inputtext.module.css"
const Inputdate=({Inputduedate,datevalue})=>{

   return(
    <>
      <input type="date" className={`${styles.inputcont} form-control`}
      onChange={()=>{
        Inputduedate(event);
     
       }} value={`${datevalue}`}
   
      />
    </>
   );
};
export default Inputdate;