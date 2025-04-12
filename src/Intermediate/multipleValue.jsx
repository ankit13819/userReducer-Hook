const initialState = {
  name: "",
  email: "",
  isLoggedIn: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, isLoggedIn: true };
    case "logout":
      return { ...state, isLoggedIn: false };
    case "updateEmail":
      return { ...state, email: action.payload };
    default:
      return state;
  }
}
