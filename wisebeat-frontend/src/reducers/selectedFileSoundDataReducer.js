import {
  FETCH_SELECTED_SAMPLE_DATA,
  GENERATE_NEW_FILE
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FETCH_SELECTED_SAMPLE_DATA then return that payload
    case FETCH_SELECTED_SAMPLE_DATA:
      //console.log("Hi er í SelectFileReducer");
      return action.payload;
    case GENERATE_NEW_FILE:
      return { ...state, newFileData: action.payload };
    // if nothing matches return the state as before
    default:
      return state;
  }
};
