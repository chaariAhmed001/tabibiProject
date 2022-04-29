import { combineReducers } from "redux";
import { doctorReducer } from "./doctorsReducer";
const reducers = combineReducers({
  allDoctors: doctorReducer,
  
});
export default reducers;