import axios from "axios";
import { authorizationHeader } from "../helpers";
// API CALL TO AUTH SERVICE
export default axios.create({
  baseURL: "http://wisebeatstudio.com/api/auth",
  headers: authorizationHeader()
});
