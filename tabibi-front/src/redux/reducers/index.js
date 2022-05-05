import { combineReducers } from "redux";
import { doctorReducer, selectedDoctorReducer } from "./doctorsReducer";
const reducers = combineReducers({
  allDoctors: doctorReducer,
  doctor: selectedDoctorReducer,
});
export default reducers;