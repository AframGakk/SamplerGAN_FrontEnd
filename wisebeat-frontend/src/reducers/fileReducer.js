// FILE REDUCER

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FETCH_FILES then return that payload
    case "FETCH_FILES":
      //console.log("Hi er í FileReducer");
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
