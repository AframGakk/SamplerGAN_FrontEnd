import axios from "axios";
//import { authorizationHeader } from "../helpers";
// API CALL TO USER SERVICE
export default axios.create({
  baseURL: "http://wisebeatstudio.com/api/users"
});
