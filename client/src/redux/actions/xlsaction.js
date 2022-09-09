import axios from "axios";

import { GET_ALL_XLS, GET_XLS } from "../types/xls";

export const get_xls = (code) => async (dispatch) => {
  try {
    const res = await axios.get(`/uploads/${code}`);
    console.log(res.data);
    dispatch({ type: GET_XLS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const transformeExcelonDb = () => async (dispatch) => {
  try {
    const res = await axios.get("/xls");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
// export const ajouterxls =
//   ({ excel }) =>
//   async (dispatch) => {
//     const info = new FormData();

//     info.append("excel", excel);
//     try {
//       await axios.post("/uploads/excel", info);
//       console.log(info);
//       dispatch(get_xls());
//     } catch (error) {
//       console.log(error);
//     }
//   };

export const get_all_xls = () => async (dispatch) => {
  try {
    const res = await axios.get("/tabarticle162");

    dispatch({ type: GET_ALL_XLS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const mise_a_jour = () => async (dispatch) => {
  try {
    const res = await axios.get("/rafraichir");
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};
