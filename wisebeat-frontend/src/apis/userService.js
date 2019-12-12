import axios from "axios";
// API CALL TO USER SERVICE
export default axios.create({
  baseURL: "http://wisebeatstudio.com/api/users"
});
