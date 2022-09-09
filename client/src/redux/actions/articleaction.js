import axios from "axios";

import { GET_ARTICLE } from "../types/article";

export const getArticles = () => async (dispatch) => {
  try {
    const res = await axios.get("/article/article");

    dispatch({ type: GET_ARTICLE, payload: res.data });
  } catch (error) {
    console.log(error);
  }
};
export const addArticle = (oneArticle, Navigate) => async (dispatch) => {
  try {
    await axios.post("/article/article/create", oneArticle);
    dispatch(getArticles());
    Navigate("/Article");
  } catch (error) {
    console.log(error);
  }
};
export const deleteArticle = (id) => async (dispatch) => {
  try {
    await axios.delete(`/article/article/${id}`);
    dispatch(getArticles());
  } catch (error) {
    console.log(error);
  }
};
export const editArticle = (id, articleUpdated) => async (dispatch) => {
  try {
    await axios.put(`/article/article/${id}`, articleUpdated);
    dispatch(getArticles());
  } catch (error) {
    console.log(error);
  }
};
