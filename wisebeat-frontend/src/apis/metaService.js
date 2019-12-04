import axios from "axios";
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://localhost:5099/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ikl2YXJLcmlzdGlubiIsIm5iZiI6MTU3NTQxODI4MywiZXhwIjoxNTc1NDIxNTgzLCJpYXQiOjE1NzU0MTgyODN9.OExSiNRcLXf0gBF7CcIBD617yJ9tDP5wWIpoLAjFY-4"
  }
});
