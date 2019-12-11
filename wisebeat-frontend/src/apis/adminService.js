import axios from "axios";
// API CALL TO ADMIN SERVICE
export default axios.create({
  baseURL: "http://wisebeatstudio.com/admin/training"
});
