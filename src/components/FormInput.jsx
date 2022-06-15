import React from "react";

import "./formInput.css";

function FormInput(props) {
  // const {label, onChange, ...inputProps} = props;

  return (
    <div className="formInput">
      {/* <label>Username</label> */}

      {/* <label>{label}</label>
      <input {...inputProps} onChange={onChange} /> */}
      
      <label>{props.label}</label>
      <input {...props} onChange={props.onChange} />
    </div>
  );
}

export default FormInput;
