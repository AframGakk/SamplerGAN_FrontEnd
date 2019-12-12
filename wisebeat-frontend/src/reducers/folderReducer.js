import { FETCH_FOLDERS, CREATE_FOLDER } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FETCH_FOLDERS then return that payload
    case FETCH_FOLDERS:
      return action.payload;
    // If the actiontype matches CREATE_FOLDER then return that payload
    case CREATE_FOLDER:
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
