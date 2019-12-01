import { combineReducers } from "redux";
import folderReducer from "../reducers/folderReducer";
import fileReducer from "../reducers/fileReducer";
import selectedFileReducer from "../reducers/selectedFileReducer";

// COMBINE REDUCERS

export default combineReducers({
  folders: folderReducer,
  files: fileReducer,
  selectedFile: selectedFileReducer
});
