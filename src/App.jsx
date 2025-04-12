import Login from "./components/Login";
import UserInfo from "./components/UserInfo";
import "./App.css";
import Counter from "./Beginner/Counter";

function App() {
  return (
    <div className="p-4">
      <h2>Counter</h2>
      <Counter />
      <h1>useReducer + Context API</h1>
      <Login />
      <UserInfo />
    </div>
  );
}

export default App;
