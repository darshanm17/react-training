import Inputtext from "./Inputtext";
import Inputdate from "./Inputdate";
import { useState } from "react";
import styles from "./Appcontainer.module.css"
const InputContainer = ({ onclickadd }) => {
  const [textvalue, settextvalue] = useState("");
  const [duedate, setduedate] = useState("");
  const Inputvalue = (event) => {
    console.log(event.target.value);
    settextvalue(event.target.value);
  };
  const Inputduedate = (event) => {
    console.log(event.target.value);
    setduedate(event.target.value);
    
  };
  const handlisubmitclicked = () => {
    onclickadd(textvalue, duedate);
    settextvalue("");
    setduedate("");
  };
  return (
    <div className={` container-textcenter`}>
      <div className="row">
        <div className="col-4">
          <form>
            <div className="mb-3">
              <Inputtext Inputvalue={Inputvalue} textvalue={textvalue} />
            </div>{" "}
          </form>
        </div>
        <div className="col-4">
          <div className="mb-3">
            <Inputdate Inputduedate={Inputduedate} datevalue={duedate} />
          </div>
        </div>
        <div className="col-4">
          <button
            className="btn btn-primary"
            onClick={() => {
              handlisubmitclicked();
            }}
          >
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default InputContainer;
