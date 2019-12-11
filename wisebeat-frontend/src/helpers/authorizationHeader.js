export function authorizationHeader() {
  // return authorization header with jwt token
  const jwt = localStorage.getItem("jwt");

  //console.log(user);
  if (jwt) {
    return { Authorization: jwt };
  } else {
    return {};
  }
}
