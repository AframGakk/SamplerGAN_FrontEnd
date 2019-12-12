import { FETCH_FILES } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FETCH_FILES then return that payload
    case FETCH_FILES:
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
