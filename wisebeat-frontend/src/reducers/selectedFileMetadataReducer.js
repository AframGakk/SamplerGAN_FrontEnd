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

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FETCH_SELECTED_FILE_METADATA then return that payload
    case FETCH_SELECTED_FILE_METADATA:
      return action.payload;
    // If the actiontype matches GAIN_VALUE_CHANGED then return that payload
    case GAIN_VALUE_CHANGED:
      return { ...state, gain: action.payload };
    // If the actiontype matches ENVELOPES_VALUE_CHANGED then return that payload
    case ENVELOPES_VALUE_CHANGED:
      return { ...state, envelopes: action.payload };
    // If the actiontype matches ATTACK_VALUE_CHANGED then return that payload
    case ATTACK_VALUE_CHANGED:
      return { ...state, attack: action.payload };
    // If the actiontype matches HOLD_VALUE_CHANGED then return that payload
    case HOLD_VALUE_CHANGED:
      return { ...state, hold: action.payload };
    // If the actiontype matches DECAY_VALUE_CHANGED then return that payload
    case DECAY_VALUE_CHANGED:
      return { ...state, decay: action.payload };
    // If the actiontype matches FILTERS_VALUE_CHANGED then return that payload
    case FILTERS_VALUE_CHANGED:
      return { ...state, filters: action.payload };
    // If the actiontype matches CUTOFF_VALUE_CHANGED then return that payload
    case CUTOFF_VALUE_CHANGED:
      return { ...state, cutoff: action.payload };
    // If the actiontype matches RESO_VALUE_CHANGED then return that payload
    case RESO_VALUE_CHANGED:
      return { ...state, reso: action.payload };
    // If the actiontype matches FX_VALUE_CHANGED then return that payload
    case FX_VALUE_CHANGED:
      return { ...state, fx: action.payload };
    // If the actiontype matches REVERB_VALUE_CHANGED then return that payload
    case REVERB_VALUE_CHANGED:
      return { ...state, reverb: action.payload };
    // If the actiontype matches DELAY_VALUE_CHANGED then return that payload
    case DELAY_VALUE_CHANGED:
      return { ...state, delay: action.payload };
    // If the actiontype matches UPDATE_METADATA then return that payload
    case UPDATE_METADATA:
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
