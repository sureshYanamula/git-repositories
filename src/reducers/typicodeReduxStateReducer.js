const initialState = { loading: true, error: "", userData: [] };

export const typicodeReduxStateReducer = (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case "TYPI_USER_PENDING":
      return { loading: true, error: "", userData: [] };
    case "TYPI_USER_SUCCESS":
      return { loading: false, error: "", userData: action.payload };
    case "TYPI_USER_FAILURE":
      return { loading: false, error: "something went wrong", userData: [] };
    default:
      return state;
  }
};
