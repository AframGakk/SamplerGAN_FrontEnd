import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  USER_LOGOUT
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    // If the actiontype matches AUTHENTICATED then the user is authenticated it set to true
    case AUTHENTICATED:
      return { ...state, authenticated: true };
    // If the actiontype matches UNAUTHENTICATED then the user is authenticated is set to false
    case UNAUTHENTICATED:
      return { ...state, authenticated: false };
    // If the actiontype matches AUTHENTICATION_ERROR then the payload is returned
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    // if nothing matches return the state as before
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
