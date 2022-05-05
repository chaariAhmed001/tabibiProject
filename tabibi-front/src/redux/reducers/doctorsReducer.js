import { ActionTypes } from "../contants/action-types";
const intialState = {
  doctors: [
  ],
};

export const doctorReducer = (state=intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_DOCTORS :
      return {...state,doctors:payload}
    default:
      return state;
  }
};

export const selectedDoctorReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_DOCTOR:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_DOCTOR:
      return {};
    default:
      return state;
  }
};
