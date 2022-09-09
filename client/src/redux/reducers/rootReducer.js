import { combineReducers } from "redux";
import ArticleReducer from "./articleReducer";
import XlsReducer from "./xlsReducer";
import JourfReducer from "./jourfReducer";
import MqReducer from "./mq2706Reducer";
import AuthReducer from "./AuthReducer";
const rootReducer = combineReducers({
  ArticleReducer,
  XlsReducer,
  JourfReducer,
  MqReducer,
  AuthReducer
});

export default rootReducer;
