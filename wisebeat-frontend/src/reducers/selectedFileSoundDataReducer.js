import { FETCH_SELECTED_SAMPLE_DATA } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FETCH_SELECTED_SAMPLE_DATA then return that payload
    case FETCH_SELECTED_SAMPLE_DATA:
      //console.log("Hi er í SelectFileReducer");
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
