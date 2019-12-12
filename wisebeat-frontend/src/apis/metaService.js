import axios from "axios";
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://wisebeatstudio.com/api/metadata"
});
