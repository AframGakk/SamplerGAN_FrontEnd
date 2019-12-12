import axios from "axios";
// API CALL TO SAMPLE SERVICE
export default axios.create({
  baseURL: "http://35.235.51.11:5020/api"
});
