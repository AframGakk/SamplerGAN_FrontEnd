import axios from "axios";
//import { authorizationHeader } from "../helpers";
// API CALL TO AUTH SERVICE
//let jwt = localStorage.getItem("jwt");
export default axios.create({
  baseURL: "http://wisebeatstudio.com/api/auth"
});
