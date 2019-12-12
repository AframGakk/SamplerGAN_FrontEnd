import { POST_NEW_GENERATOR_MODEL } from "../actions/types";
// GENERATOR REDUCER

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches POST_NEW_GENERATOR_MODEL then return that payload
    case POST_NEW_GENERATOR_MODEL:
      //console.log("Hi er í generatorReducer");
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
