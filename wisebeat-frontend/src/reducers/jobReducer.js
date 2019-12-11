import { FETCH_JOBS } from "../actions/types";
// JOB REDUCER

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FECTH_JOBS then return that payload
    case FETCH_JOBS:
      //console.log("Hi er í JobReducer");
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
