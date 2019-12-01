import metadata from "../apis/metaService";
// ACTION CREATOR

// ATH átt að geta tekið inn id og username hérna væri sniðugt til að
// fá folder og file fyrir userinn sem er að koma inn

export const fetchFolders = () => async dispatch => {
  const response = await metadata.get("/users/1/folders", {
    params: { username: "IvarKristinn" }
  });
  //console.log("Hi er í FetchFolders Action Creator");
  dispatch({ type: "FETCH_FOLDERS", payload: response.data });
};

export const fetchFiles = () => async dispatch => {
  const response = await metadata.get("/users/1/files", {
    params: { username: "IvarKristinn" }
  });
  //console.log("Hi er í FetchFiles Action Creator");
  dispatch({ type: "FETCH_FILES", payload: response.data });
};

export const selectFile = file => {
  console.log("Hi er í SelectFile Action Creator");
  return {
    type: "FILE_SELECTED",
    payload: file
  };
};
