/*const selectedFileReducer = (selectedFile = null, action) => {
  console.log("Hi er í SelectFileReducer");
  if (action.type === "FILE_SELECTED") {
    return action.payload;
  }
  return selectedFile;
};
*/

export default (state = [], action) => {
  switch (action.type) {
    // If the actiontype matches FILE_SELECTED then return that payload
    case "FILE_SELECTED":
      console.log("Hi er í SelectFileReducer");
      return action.payload;
    // if nothing matches return the state as before
    default:
      return state;
  }
};
