import { GET_MQ2706 } from "../types/mq2706";

const initialState = {
  mq: null,
};

const MqReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MQ2706:
      return { ...state, mq: payload };

    default:
      return state;
  }
};
export default MqReducer;
