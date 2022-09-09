import { GET_JOURF } from "../types/JourF";

const initialState = {
  joursf: null,
};

const JourfReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_JOURF:
      return { ...state, joursf: payload };

    default:
      return state;
  }
};
export default JourfReducer;
