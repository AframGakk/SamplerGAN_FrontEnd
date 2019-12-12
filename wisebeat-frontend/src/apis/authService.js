import axios from "axios";
// API CALL TO AUTH SERVICE
export default axios.create({
  baseURL: "http://wisebeatstudio.com/api/auth"
});
