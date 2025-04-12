import { createContext, useReducer } from "react";

// Initial global state
const initialState = {
  user: null,
  isLoggedIn: false,
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isLoggedIn: true };
    case "LOGOUT":
      return { ...state, user: null, isLoggedIn: false };
    default:
      return state;
  }
}

// Create context
export const GlobalContext = createContext();

// Provider component
export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
