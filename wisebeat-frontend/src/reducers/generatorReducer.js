import { POST_NEW_GENERATOR_MODEL } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches POST_NEW_GENERATOR_MODEL then return that payload
    case POST_NEW_GENERATOR_MODEL:
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
