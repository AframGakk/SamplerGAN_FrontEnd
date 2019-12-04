import {
  FETCH_SELECTED_FILE_METADATA,
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

const initState = [
  {
    id: 0,
    file_id: 0,
    gain: 0,
    attack: 0,
    cutoff: 0,
    decay: 0,
    delay: 0,
    envelopes: false,
    filters: false,
    fx: false,
    hold: 0,
    reso: 0,
    reverb: 0
  }
];

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FETCH_SELECTED_FILE_METADATA then return that payload
    case FETCH_SELECTED_FILE_METADATA:
      //console.log("Hi er í SelectFileMetadataReducer");
      return action.payload;
    // If the actiontype matches GAIN_VALUE_CHANGED then return that payload
    case GAIN_VALUE_CHANGED:
      //console.log("Gain Updated");
      return { ...state, gain: action.payload };
    case ENVELOPES_VALUE_CHANGED:
      //console.log("Enveloped updated");
      return { ...state, envelopes: action.payload };
    case ATTACK_VALUE_CHANGED:
      //console.log("Attack Updated");
      return { ...state, attack: action.payload };
    case HOLD_VALUE_CHANGED:
      //console.log("Hold Updated");
      return { ...state, hold: action.payload };
    case DECAY_VALUE_CHANGED:
      //console.log("Decay Updated");
      return { ...state, decay: action.payload };
    case FILTERS_VALUE_CHANGED:
      //console.log("Filter Updated");
      return { ...state, filters: action.payload };
    case CUTOFF_VALUE_CHANGED:
      //console.log("Cutoff Updated");
      return { ...state, cutoff: action.payload };
    case RESO_VALUE_CHANGED:
      //console.log("Reso Updated");
      return { ...state, reso: action.payload };
    case FX_VALUE_CHANGED:
      //console.log("FX Updated");
      return { ...state, fx: action.payload };
    case REVERB_VALUE_CHANGED:
      //console.log("Reverb Updated");
      return { ...state, reverb: action.payload };
    case DELAY_VALUE_CHANGED:
      //console.log("Delay Updated");
      return { ...state, delay: action.payload };
    case UPDATE_METADATA:
      console.log("Metadata Updated");
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
