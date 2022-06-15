// import { useRef, useState } from "react";
import { useState } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  // const [username, setUsername] = useState("");
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 3,
      name: "birthday",
      type: "text",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
    },
  ];

  // console.log('re-rendered');

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Username" />
        {/* <FormInput name="email" placeholder="Email"/>
        <FormInput name="fullname" placeholder="Full Name"/>
        <FormInput name="else" placeholder="Else"/> */}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
