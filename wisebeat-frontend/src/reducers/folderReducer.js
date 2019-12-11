import { FETCH_FOLDERS, CREATE_FOLDER } from "../actions/types";
// FOLDER REDUCER

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FETCH_FOLDERS then return that payload
    case FETCH_FOLDERS:
      //console.log("Hi er í FolderReducer");
      return action.payload;
    case CREATE_FOLDER:
      //console.log("Hi er í FolderReducer");
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
