import { combineReducers } from "redux";
import folderReducer from "../reducers/folderReducer";
import fileReducer from "../reducers/fileReducer";
import selectedFileReducer from "../reducers/selectedFileReducer";
import selectedFileMetadataReducer from "../reducers/selectedFileMetadataReducer";
import selectedFileSoundDataReducer from "../reducers/selectedFileSoundDataReducer";
import authReducer from "../reducers/authReducer";
import jobReducer from "../reducers/jobReducer";
import userReducer from "../reducers/userReducer";
import generatorReducer from "../reducers/generatorReducer";

export default combineReducers({
  folders: folderReducer,
  files: fileReducer,
  selectedFile: selectedFileReducer,
  selectedFileMetadata: selectedFileMetadataReducer,
  selectedFileSoundDataReducer: selectedFileSoundDataReducer,
  authReducer: authReducer,
  jobReducer: jobReducer,
  userReducer: userReducer,
  generatorReducer: generatorReducer
});
