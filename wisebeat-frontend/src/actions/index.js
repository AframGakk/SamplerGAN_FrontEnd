import metadata from "../apis/metaService";
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
  UPDATE_METADATA
} from "../actions/types";

// ACTION CREATOR

// ATH átt að geta tekið inn id og username hérna væri sniðugt til að
// fá folder og file fyrir userinn sem er að koma inn sjá að neðan

export const fetchFolders = () => async dispatch => {
  const response = await metadata.get("/users/1/folders", {
    params: { username: "IvarKristinn" }
  });
  //console.log("Hi er í FetchFolders Action Creator");
  dispatch({ type: FETCH_FOLDERS, payload: response.data });
};

export const fetchFiles = () => async dispatch => {
  const response = await metadata.get("/users/1/files", {
    params: { username: "IvarKristinn" }
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
  //console.log("Hi er í SelectFile Action Creator");
  //console.log(`fileid:${fileid}`);
  const response = await metadata.get(`/metadata/${fileid}`, {
    params: { username: "IvarKristinn" }
  });
  dispatch({ type: FETCH_SELECTED_FILE_METADATA, payload: response.data[0] });
};

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
  //console.log("Hi er í FetchFolders Action Creator");
  const response = await metadata.put(`/metadata/${id}`, meta, {
    params: { username: "IvarKristinn" }
  });
  dispatch({ type: UPDATE_METADATA, payload: response.data[0] });
};
