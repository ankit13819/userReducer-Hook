import { useContext } from "react";
import { GlobalContext } from "../Advanced/useReducerWithContextApi/GlobalState.jsx";

const Login = () => {
  const { dispatch } = useContext(GlobalContext);

  const handleLogin = () => {
    const mockUser = { name: "Ankit", email: "ankit@example.com" };
    dispatch({ type: "LOGIN", payload: mockUser });
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="flex gap-2 mt-4">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;
