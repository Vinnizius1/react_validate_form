import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  return (
    <div className="App">
      <form>
        <FormInput placeholder="Username" />
        <FormInput placeholder="Email"/>
        <FormInput placeholder="Full Name"/>
        <FormInput placeholder="Else"/>
      </form>
    </div>
  );
}

export default App;
