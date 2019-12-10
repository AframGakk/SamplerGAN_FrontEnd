export function authorizationHeader() {
  // return authorization header with jwt token
  const user = localStorage.getItem("user");

  console.log(user);
  if (user) {
    return { Authorization: user };
  } else {
    return {};
  }
}
