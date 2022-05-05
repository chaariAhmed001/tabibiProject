import { ActionTypes } from "../contants/action-types";

export const setDoctors = (doctors) => {
  return {
    type: ActionTypes.SET_DOCTORS,
    payload: doctors,
  };
};

export const selectedDoctor = (doctor) => {
  return {
    type: ActionTypes.SELECTED_DOCTOR,
    payload: doctor,
  };
};
export const removeSelectedDoctor = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_DOCTOR,
  };
};