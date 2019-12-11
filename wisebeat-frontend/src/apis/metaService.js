import axios from "axios";
//import { authorizationHeader } from "../helpers";
//let jwt = localStorage.getItem("jwt");
//console.log(jwt);
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://wisebeatstudio.com/api/metadata"
});
