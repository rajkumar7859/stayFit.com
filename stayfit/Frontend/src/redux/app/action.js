import * as types from "./actionTypes";
import axios from "axios";

export const addBreakfast = (payload) => async(dispatch) => {
  await dispatch({ type: types.ADD_BREAKFAST_REQUEST });
  return axios
    .post("https://newapi.onrender.com/AddedBreakfast", payload)
    .then((res) =>
      dispatch({ type: types.ADD_BREAKFAST_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.ADD_BREAKFAST_FAILURE, payload: err.response })
    );
};

export const getBreakfast = (payload) => async(dispatch) => {
  await dispatch({ type: types.GET_BREAKFAST_REQUEST });
  return axios
    .get("https://newapi.onrender.com/AddedBreakfast")
    .then((res) =>
      dispatch({ type: types.GET_BREAKFAST_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_BREAKFAST_FAILURE }));
};

export const deleteBreakfast = (payload) => async(dispatch) => {
  await dispatch({ type: types.DELETE_BREAKFAST_REQUEST });
  return axios
    .delete(`https://newapi.onrender.com/AddedBreakfast/${payload}`)
    .then((res) =>
      dispatch({ type: types.DELETE_BREAKFAST_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.DELETE_BREAKFAST_FAILURE }));
};

export const addLunch = (payload) => async(dispatch) => {
  await dispatch({ type: types.ADD_LUNCH_REQUEST });
  return axios
    .post("https://newapi.onrender.com/AddedLunch", payload)
    .then((res) =>
      dispatch({ type: types.ADD_LUNCH_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.ADD_LUNCH_FAILURE, payload: err.response })
    );
};

export const getLunch = (payload) => async(dispatch) => {
  await dispatch({ type: types.GET_LUNCH_REQUEST });
  return axios
    .get("https://newapi.onrender.com/AddedLunch")
    .then((res) =>
      dispatch({ type: types.GET_LUNCH_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_LUNCH_FAILURE }));
};

export const deleteLunch = (payload) => async(dispatch) => {
  await dispatch({ type: types.DELETE_LUNCH_REQUEST });
  return axios
    .delete(`https://newapi.onrender.com/AddedLunch/${payload}`)
    .then((res) =>
      dispatch({ type: types.DELETE_LUNCH_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.DELETE_LUNCH_FAILURE }));
};

export const addDinner = (payload) => async(dispatch) => {
  await dispatch({ type: types.ADD_DINNER_REQUEST });
  return axios
    .post("https://newapi.onrender.com/AddedDinner", payload)
    .then((res) =>
      dispatch({ type: types.ADD_DINNER_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.ADD_DINNER_FAILURE, payload: err.response })
    );
};

export const getDinner = (payload) => async(dispatch) => {
  await dispatch({ type: types.GET_DINNER_REQUEST });
  return axios
    .get("https://newapi.onrender.com/AddedDinner")
    .then((res) =>
      dispatch({ type: types.GET_DINNER_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_DINNER_FAILURE }));
};

export const deleteDinner = (payload) => async(dispatch) => {
  await dispatch({ type: types.DELETE_DINNER_REQUEST });
  return axios
    .delete(`https://newapi.onrender.com/AddedDinner/${payload}`)
    .then((res) =>
      dispatch({ type: types.DELETE_DINNER_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.DELETE_DINNER_FAILURE }));
};

export const addSnack = (payload) => async(dispatch) => {
  await dispatch({ type: types.ADD_SNACK_REQUEST });
  return axios
    .post("https://newapi.onrender.com/AddedSnacks", payload)
    .then((res) =>
      dispatch({ type: types.ADD_SNACK_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: types.ADD_SNACK_FAILURE, payload: err.response })
    );
};

export const getSnack = (payload) => async(dispatch) => {
  await dispatch({ type: types.GET_SNACK_REQUEST });
  return axios
    .get("https://newapi.onrender.com/AddedSnacks")
    .then((res) =>
      dispatch({ type: types.GET_SNACK_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.GET_SNACK_FAILURE }));
};

export const deleteSnack = (payload) => async(dispatch) => {
  await dispatch({ type: types.DELETE_SNACK_REQUEST });
  return axios
    .delete(`https://newapi.onrender.com/AddedSnacks/${payload}`)
    .then((res) =>
      dispatch({ type: types.DELETE_SNACK_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: types.DELETE_SNACK_FAILURE }));
};
