import { FILE_SELECTED } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FILE_SELECTED then return that payload
    case FILE_SELECTED:
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
