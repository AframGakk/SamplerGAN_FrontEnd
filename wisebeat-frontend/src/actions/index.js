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
  AUTHENTICATION_ERROR,
  FETCH_JOBS,
  CREATE_USER,
  USER_LOGOUT,
  GENERATE_NEW_FILE,
  SAVE_THE_NEWLY_GENERATED_FILE,
  POST_NEW_GENERATOR_MODEL,
  POST_NEW_JOB,
  UPDATE_USER
} from "../actions/types";

//FOLDERS
export const fetchFolders = () => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let currentUserId = localStorage.getItem("userid");
  let jwt = localStorage.getItem("jwt");

  const response = await metadata.get(`/users/${currentUserId}/folders`, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });
  dispatch({ type: FETCH_FOLDERS, payload: response.data });
};

// Create new folder
export const createFolder = (foldern, parId, usId, loc) => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let jwt = localStorage.getItem("jwt");
  // Construction data body for sample service
  const body = { name: foldern, parent: parId, user: usId, location: loc };

  // Create the new folder
  await metadata.post(`/users/${usId}/folders`, body, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });

  // Get user new folders
  const response = await metadata.get(`/users/${usId}/folders`, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });
  dispatch({ type: CREATE_FOLDER, payload: response.data });
};

//FILES

// Gets all users files
export const fetchFiles = () => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let currentUserId = localStorage.getItem("userid");
  let jwt = localStorage.getItem("jwt");
  const response = await metadata.get(`/users/${currentUserId}/files`, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });
  dispatch({ type: FETCH_FILES, payload: response.data });
};

// Get the info on selected file
export const selectFile = file => {
  return {
    type: FILE_SELECTED,
    payload: file
  };
};

// Fetch select file metadata
export const fetchSelectedFileMetadata = fileid => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let jwt = localStorage.getItem("jwt");
  const response = await metadata.get(`/${fileid}`, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });
  dispatch({ type: FETCH_SELECTED_FILE_METADATA, payload: response.data[0] });
};

export const gainValChanged = value => {
  return {
    type: GAIN_VALUE_CHANGED,
    payload: value
  };
};

export const envelopesValChanged = value => {
  return {
    type: ENVELOPES_VALUE_CHANGED,
    payload: value
  };
};

export const attackValChanged = value => {
  return {
    type: ATTACK_VALUE_CHANGED,
    payload: value
  };
};

export const holdValChanged = value => {
  return {
    type: HOLD_VALUE_CHANGED,
    payload: value
  };
};

export const decayValChanged = value => {
  return {
    type: DECAY_VALUE_CHANGED,
    payload: value
  };
};

export const filtersValChanged = value => {
  return {
    type: FILTERS_VALUE_CHANGED,
    payload: value
  };
};

export const cutoffValChanged = value => {
  return {
    type: CUTOFF_VALUE_CHANGED,
    payload: value
  };
};

export const resoValChanged = value => {
  return {
    type: RESO_VALUE_CHANGED,
    payload: value
  };
};

export const fxValChanged = value => {
  return {
    type: FX_VALUE_CHANGED,
    payload: value
  };
};

export const reverbValChanged = value => {
  return {
    type: REVERB_VALUE_CHANGED,
    payload: value
  };
};

export const delayValChanged = value => {
  return {
    type: DELAY_VALUE_CHANGED,
    payload: value
  };
};

// Updates file metadata, after interacting with the sampler
export const updateMetadata = (id, meta) => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let jwt = localStorage.getItem("jwt");

  const response = await metadata.put(`/${id}`, meta, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });
  dispatch({ type: UPDATE_METADATA, payload: response.data[0] });
};

// SAMPLE

// Fetch the selected Sample data
export const fetchSelectedSampleData = loc => async dispatch => {
  let currentUser = localStorage.getItem("username");

  // Construction data body for sample service
  const body = { username: currentUser, location: loc };

  const response = await sampledata.get(`/sample`, body, {
    params: { username: `${currentUser}` }
  });
  dispatch({ type: FETCH_SELECTED_SAMPLE_DATA, payload: response.data });
};

// Generate new file
export const fetchGenerateSampleData = () => async dispatch => {
  let currentUser = localStorage.getItem("username");
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
  dispatch({ type: GENERATE_NEW_FILE, payload: response["data"] });
};

// Save the newly generated file
export const saveGeneratedSampleData = _data => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let currentUserId = localStorage.getItem("userid");
  let jwt = localStorage.getItem("jwt");

  const body = {
    Name: "NewFile",
    Sound_type: 1,
    Location: `${currentUserId}/middleheavy/NewFile.wav`,
    Parent: 8
  };

  await metadata.post(`/users/${currentUserId}/files`, body, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });

  const response = await sampledata.post(
    "/sample",
    {
      username: currentUser,
      location: `${currentUserId}/middleheavy/NewFile.wav`,
      data: _data
    },
    {
      headers: { Authorization: jwt }
    }
  );
  dispatch({ type: SAVE_THE_NEWLY_GENERATED_FILE, payload: response.data });
};

// USER
// Sign in function, now used just for admin purposes
export const signIn = (_username, _password) => async dispatch => {
  const body = { username: _username, password: _password };
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
    history.push("/panel");
  } catch (error) {
    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: "Invalid email or password"
    });
  }
};

// Log out function, now used for admin purposes
export const logOut = () => {
  // remove user from local storage to log user out
  localStorage.clear();
  history.push("/admin");
  return {
    type: USER_LOGOUT
  };
};

// Sign up function
export const createUser = (
  _username,
  _firstname,
  _lastname,
  _password,
  _email
) => async dispatch => {
  // Construction data body for user service
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

  // log this new user in
  dispatch(signIn(_username, _password));
  dispatch({ type: CREATE_USER, payload: response.data });
};

// Update user function
export const updateUser = (
  _firstname,
  _lastname,
  _password,
  _email
) => async dispatch => {
  let currentUser = localStorage.getItem("username");
  let jwt = localStorage.getItem("jwt");
  const body = {
    firstname: _firstname,
    lastname: _lastname,
    email: _email,
    password: _password
  };

  const response = await userdata.patch("/", body, {
    headers: { Authorization: jwt },
    params: { username: currentUser }
  });

  dispatch({ type: UPDATE_USER, payload: response.data });
};

// ADMIN
// Fetch all jobs
export const fetchJobs = () => async dispatch => {
  const response = await jobdata.get("/job", {
    headers: { Authorization: "asghwegalkjerhghoaier0439845!" }
  });
  dispatch({ type: FETCH_JOBS, payload: response.data });
};

// Create new job
export const createJob = (
  _label,
  _version,
  _batchsize,
  _learningrate,
  _adambeta,
  _lreluaalpha,
  _ep,
  _description
) => async dispatch => {
  const response = await jobdata.post(
    "/job",
    {
      label: _label,
      version: Number(_version),
      sound_type: 1,
      parameters: {
        batch_size: Number(_batchsize),
        adam_learning_rate: Number(_learningrate),
        adam_beta: Number(_adambeta),
        lrelu_alpha: Number(_lreluaalpha),
        episodes: Number(_ep)
      },
      description: _description
    },
    {
      headers: { Authorization: "asghwegalkjerhghoaier0439845!" }
    }
  );

  //dispatch({ type: POST_NEW_JOB, payload: response.data });
};

// Update model
export const createNewGeneratorModel = _location => async dispatch => {
  console.log(_location);
  const response = await generate.post("/generator/version", {
    location: `${_location}`
  });
  dispatch({ type: POST_NEW_GENERATOR_MODEL, payload: response });
};
