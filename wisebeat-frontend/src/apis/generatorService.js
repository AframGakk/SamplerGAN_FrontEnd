import axios from "axios";
import { authorizationHeader } from "../helpers";
// API CALL TO GENERATOR SERVICE
export default axios.create({
  baseURL: "http://35.246.2.128.11:5025/api",
  headers: authorizationHeader()
});

//api/generator
//api/generator/version
