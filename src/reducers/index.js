import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { typicodeReduxStateReducer } from "./typicodeReduxStateReducer";

const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  typicodeReduxStateReducer: typicodeReduxStateReducer,
});

export default rootReducer;
