import { useContext } from "react";
import { GlobalContext } from "../Advanced/useReducerWithContextApi/GlobalState.jsx";

const UserInfo = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="mt-4">
      {state.isLoggedIn ? (
        <div>
          <h3>Welcome, {state.user.name}!</h3>
          <p>Email: {state.user.email}</p>
        </div>
      ) : (
        <h3>Please log in</h3>
      )}
    </div>
  );
};

export default UserInfo;
