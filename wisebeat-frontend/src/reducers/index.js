import { combineReducers } from "redux";
import folderReducer from "../reducers/folderReducer";
import fileReducer from "../reducers/fileReducer";
import selectedFileReducer from "../reducers/selectedFileReducer";
import selectedFileMetadataReducer from "../reducers/selectedFileMetadataReducer";
import selectedFileSoundDataReducer from "../reducers/selectedFileSoundDataReducer";
import authReducer from "../reducers/authReducer";

// COMBINE REDUCERS

export default combineReducers({
  folders: folderReducer,
  files: fileReducer,
  selectedFile: selectedFileReducer,
  selectedFileMetadata: selectedFileMetadataReducer,
  selectedFileSoundDataReducer: selectedFileSoundDataReducer,
  authReducer: authReducer
});
