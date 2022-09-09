import { GET_ALL_XLS, GET_XLS } from "../types/xls";

const initialState = {
  xls: null,
  allXls: null,
};

const XlsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_XLS:
      return { ...state, xls: payload };
    case GET_ALL_XLS:
      return { ...state, allXls: payload };

    default:
      return state;
  }
};
export default XlsReducer;
