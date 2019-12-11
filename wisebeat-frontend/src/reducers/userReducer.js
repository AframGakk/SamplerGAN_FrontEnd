import { CREATE_USER } from "../actions/types";
// USER REDUCER

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches CREATE_USER then return that payload
    case CREATE_USER:
      //console.log("Hi er í UserReducer");
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
