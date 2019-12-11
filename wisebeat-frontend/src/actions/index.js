import metadata from "../apis/metaService";
import userdata from "../apis/userService";
import sampledata from "../apis/sampleService";
import auth from "../apis/authService";
import jobdata from "../apis/adminService";
import generate from "../apis/generatorService";
import { history } from "../helpers";

import {
  FETCH_FOLDERS,
  FETCH_FILES,
  FETCH_SELECTED_FILE_METADATA,
  FILE_SELECTED,
  GAIN_VALUE_CHANGED,
  ENVELOPES_VALUE_CHANGED,
  ATTACK_VALUE_CHANGED,
  HOLD_VALUE_CHANGED,
  DECAY_VALUE_CHANGED,
  FILTERS_VALUE_CHANGED,
  CUTOFF_VALUE_CHANGED,
  RESO_VALUE_CHANGED,
  FX_VALUE_CHANGED,
  REVERB_VALUE_CHANGED,
  DELAY_VALUE_CHANGED,
  UPDATE_METADATA,
  FETCH_SELECTED_SAMPLE_DATA,
  CREATE_FOLDER,
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  FETCH_JOBS,
  CREATE_USER,
  USER_LOGOUT,
  GET_CURRENT_USER,
  GENERATE_NEW_FILE,
  SAVE_THE_NEWLY_GENERATED_FILE
} from "../actions/types";

// ACTION CREATOR

//FOLDERS
export const fetchFolders = () => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let currentUserId = localStorage.getItem("userid");
  let jwt = localStorage.getItem("jwt");

  const response = await metadata.get(`/users/${currentUserId}/folders`, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });
  //console.log("Hi er í FetchFolders Action Creator");
  dispatch({ type: FETCH_FOLDERS, payload: response.data });
};

export const createFolder = (foldern, parId, usId, loc) => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let currentUserId = localStorage.getItem("userid");
  let jwt = localStorage.getItem("jwt");
  // Construction data body for sample service
  const body = { name: foldern, parent: parId, user: usId, location: loc };
  //console.log(body);

  // Create the new folder
  const makefile = await metadata.post(`/users/${usId}/folders`, body, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });

  // Get user new folders
  const response = await metadata.get(`/users/${usId}/folders`, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });
  //console.log("Hi er í CREATEFOLDER Action Creator");
  dispatch({ type: CREATE_FOLDER, payload: response.data });
};

//FILES
export const fetchFiles = () => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let currentUserId = localStorage.getItem("userid");
  let jwt = localStorage.getItem("jwt");
  const response = await metadata.get(`/users/${currentUserId}/files`, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });
  //console.log("Hi er í FetchFiles Action Creator");
  dispatch({ type: FETCH_FILES, payload: response.data });
};

export const selectFile = file => {
  //console.log("Hi er í SelectFile Action Creator");
  return {
    type: FILE_SELECTED,
    payload: file
  };
};

export const fetchSelectedFileMetadata = fileid => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let currentUserId = localStorage.getItem("userid");
  let jwt = localStorage.getItem("jwt");
  //console.log("Hi er í SelectFile Action Creator");
  //console.log(`fileid:${fileid}`);
  const response = await metadata.get(`/${fileid}`, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });
  dispatch({ type: FETCH_SELECTED_FILE_METADATA, payload: response.data[0] });
};

//METADATA
export const gainValChanged = value => {
  //console.log("Hi er í gainValChanged Action Creator");
  return {
    type: GAIN_VALUE_CHANGED,
    payload: value
  };
};

export const envelopesValChanged = value => {
  //console.log("Hi er í gainValChanged Action Creator");
  return {
    type: ENVELOPES_VALUE_CHANGED,
    payload: value
  };
};

export const attackValChanged = value => {
  //console.log("Hi er í attackValChanged Action Creator");
  return {
    type: ATTACK_VALUE_CHANGED,
    payload: value
  };
};

export const holdValChanged = value => {
  //console.log("Hi er í holdValChanged Action Creator");
  return {
    type: HOLD_VALUE_CHANGED,
    payload: value
  };
};

export const decayValChanged = value => {
  //console.log("Hi er í decayValChanged Action Creator");
  return {
    type: DECAY_VALUE_CHANGED,
    payload: value
  };
};

export const filtersValChanged = value => {
  //console.log("Hi er í filtersValChanged Action Creator");
  return {
    type: FILTERS_VALUE_CHANGED,
    payload: value
  };
};

export const cutoffValChanged = value => {
  //console.log("Hi er í cutoffValChanged Action Creator");
  return {
    type: CUTOFF_VALUE_CHANGED,
    payload: value
  };
};

export const resoValChanged = value => {
  //console.log("Hi er í resoValChanged Action Creator");
  return {
    type: RESO_VALUE_CHANGED,
    payload: value
  };
};

export const fxValChanged = value => {
  //console.log("Hi er í fxValChanged Action Creator");
  return {
    type: FX_VALUE_CHANGED,
    payload: value
  };
};

export const reverbValChanged = value => {
  //console.log("Hi er í reverbValChanged Action Creator");
  return {
    type: REVERB_VALUE_CHANGED,
    payload: value
  };
};

export const delayValChanged = value => {
  //console.log("Hi er í delayValChanged Action Creator");
  return {
    type: DELAY_VALUE_CHANGED,
    payload: value
  };
};

export const updateMetadata = (id, meta) => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let currentUserId = localStorage.getItem("userid");
  let jwt = localStorage.getItem("jwt");
  //console.log("Hi er í FetchFolders Action Creator");
  const response = await metadata.put(`/${id}`, meta, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });
  dispatch({ type: UPDATE_METADATA, payload: response.data[0] });
};

// SAMPLE
export const fetchSelectedSampleData = (userId, loc) => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let currentUserId = localStorage.getItem("userid");
  let jwt = localStorage.getItem("jwt");
  // Getting username
  const respUser = await userdata.get(`/${userId}`, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });

  //console.log(respUser.data);
  //console.log(respUser.data.userName);

  // Deconstruting the resp and getting user name
  const bodyUserName = respUser.data.userName;

  // Construction data body for sample service
  const body = { username: bodyUserName, location: loc };

  console.log(body);

  /*const response = await sampledata.get(`/sample`, body, {
    params: { username: `${currentUser}` }
  });
  dispatch({ type: FETCH_SELECTED_SAMPLE_DATA, payload: response.data });
  */
};

// Generate new file
export const fetchGenerateSampleData = () => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let currentUserId = localStorage.getItem("userid");
  let jwt = localStorage.getItem("jwt");
  const response = await generate.post(
    "/generator",
    {
      username: currentUser,
      label: "KICK"
    },
    {
      headers: { Authorization: jwt }
    }
  );
  //console.log("Hi er í FetchFolders Action Creator");
  //console.log(response.data);
  dispatch({ type: GENERATE_NEW_FILE, payload: response["data"] });
};
// Save the newly generated file
// þarf að fá inn sample arrayinn sjálfann hingað inn, svo save takinn þarf að hafa aðgang
// að selectedFileSoundDataReducer
export const saveGeneratedSampleData = () => async dispatch => {
  //SAVE_THE_NEWLY_GENERATED_FILE
  let currentUser = localStorage.getItem("username");
  let currentUserId = localStorage.getItem("userid");
  let jwt = localStorage.getItem("jwt");
  const response = await sampledata.post(
    "/generator",
    {
      username: currentUser,
      location: "KICK",
      data: 1111
    },
    {
      headers: { Authorization: jwt }
    }
  );
  //console.log("Hi er í FetchFolders Action Creator");
  //console.log(response.data);
  dispatch({ type: SAVE_THE_NEWLY_GENERATED_FILE, payload: response.data });
};

// USER
export const signIn = (_username, _password) => async dispatch => {
  if (
    new String(_username).valueOf() == new String("admin").valueOf() &&
    new String(_password).valueOf() == new String("admin").valueOf()
  ) {
    console.log("ADMIN");
    history.push("/admin");
  } else {
    const body = { username: _username, password: _password };
    console.log(body);
    try {
      const response = await auth.post(`/authenticate`, body, {
        params: { username: `${_username}` }
      });

      const userId = await userdata.get("/username", {
        params: { username: `${_username}` }
      });

      setTimeout(function() {
        localStorage.setItem("jwt", response.data);
        localStorage.setItem("username", _username);
        localStorage.setItem("userid", userId.data);
      }, 1500);

      dispatch({ type: AUTHENTICATED });
      // Was loading too fast, an was resulting in that the variables were returning null
      history.push("/studio");
    } catch (error) {
      dispatch({
        type: AUTHENTICATION_ERROR,
        payload: "Invalid email or password"
        //response.data
      });
    }
  }
};

export const logOut = () => {
  //console.log("Hi er í logOut Action Creator");
  // remove user from local storage to log user out
  localStorage.clear();
  history.push("/login");
  return {
    type: USER_LOGOUT
  };
};

export const createUser = (
  _username,
  _firstname,
  _lastname,
  _password,
  _email
) => async dispatch => {
  // Construction data body for sample service
  const body = {
    username: _username,
    firstname: _firstname,
    lastname: _lastname,
    email: _email,
    password: _password
  };
  console.log(body);

  // Create the new user
  const response = await userdata.post("/", body);

  // logga this new user in ?

  //console.log("Hi er í createUser Action Creator");
  dispatch({ type: CREATE_USER, payload: response.data });
  history.push("/login");
};

// ADMIN
export const fetchJobs = () => async dispatch => {
  const response = await jobdata.get("/job");
  //console.log("Hi er í fetchJobs Action Creator");
  dispatch({ type: FETCH_JOBS, payload: response.data });
};
