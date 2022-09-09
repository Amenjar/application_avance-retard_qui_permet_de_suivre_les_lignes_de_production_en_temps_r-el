import axios from "axios";
import { GET_JOURF } from "../types/JourF";

export const getjoursferier = () => async (dispatch) => {
  try {
    const res = await axios.get("/jourF/");

    dispatch({ type: GET_JOURF, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const addjoursferier = (jour) => async (dispatch) => {
  try {
    await axios.post("/jourF/ajouter", jour);
    dispatch(getjoursferier());
  } catch (error) {
    console.log(error);
  }
};
export const deletejour = (id) => async (dispatch) => {
  try {
    await axios.delete(`/jourF/${id}`);
    dispatch(getjoursferier());
  } catch (error) {
    console.log(error);
  }
};
export const editjour = (id, newJour) => async (dispatch) => {
  try {
    await axios.put(`/jourF/${id}`, newJour);
    dispatch(getjoursferier());
  } catch (error) {}
};
