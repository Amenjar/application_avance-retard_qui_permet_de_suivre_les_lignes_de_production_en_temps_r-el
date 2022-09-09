import axios from "axios";
import { GET_MQ2706 } from "../types/mq2706";

export const rafraichirmqv1 = () => async (dispatch) => {
  try {
    await axios.post("/mq2706v1");
    // console.log("hello from v1");
  } catch (error) {
    console.log(error);
  }
};

export const rafraichirmqv2 = () => async (dispatch) => {
  try {
    await axios.post("/mq2706v2");
    // console.log("hello from v2");
  } catch (error) {
    console.log(error);
  }
};


export const getplanif = () => async (dispatch) => {
  try {
    await axios.get("/controle/planif");
    await axios.get("/controle/reel");
    await axios.get("/controle/etat");
    // console.log("hello from v2");
  } catch (error) {
    console.log(error);
  }
};
export const getreel = () => async (dispatch) => {
  try {
    await axios.get("/controle/reel");
    // console.log("hello from v2");
  } catch (error) {
    console.log(error);
  }
};
export const getetat = () => async (dispatch) => {
  try {
    await axios.get("/controle/etat");
    // console.log("hello from v2");
  } catch (error) {
    console.log(error);
  }
};

export const getmq2706 = () => async (dispatch) => {
  try {
    const res = await axios.get("/mq2706v2");
    console.log(res.data);

    dispatch({ type: GET_MQ2706, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};

