import { GET_ARTICLE } from "../types/article";

const initialState = {
  articles: null,
};

const ArticleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ARTICLE:
      return { ...state, articles: payload };

    default:
      return state;
  }
};
export default ArticleReducer;
