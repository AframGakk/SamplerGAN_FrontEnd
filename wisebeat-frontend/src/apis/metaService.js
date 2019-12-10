import axios from "axios";
import { authorizationHeader } from "../helpers";
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://wisebeatstudio.com/api/metadata",
  headers: authorizationHeader()
});
