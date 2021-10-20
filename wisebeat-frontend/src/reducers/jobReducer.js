import { FETCH_JOBS, POST_NEW_JOB } from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FECTH_JOBS then return that payload
    case FETCH_JOBS:
      return action.payload;
    // If the actiontype matches POST_NEW_JOB then return that payload
    //case POST_NEW_JOB:
     // return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
