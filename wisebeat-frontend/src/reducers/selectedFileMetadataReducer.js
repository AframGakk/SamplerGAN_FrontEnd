export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FETCH_SELECTED_FILE_METADATA then return that payload
    case "FETCH_SELECTED_FILE_METADATA":
      console.log("Hi er í SelectFileMetadataReducer");
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
