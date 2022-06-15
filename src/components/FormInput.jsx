import React from "react";

import "./formInput.css";

function FormInput(props) {
  return (
    <div className="formInput">
      {/* <label htmlFor="">Username</label> */}
      <input placeholder={props.placeholder} name={props.name}/>
    </div>
  );
}

export default FormInput;
