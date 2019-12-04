import axios from "axios";
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://localhost:5099/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ikl2YXJLcmlzdGlubiIsIm5iZiI6MTU3NTUwMDQzMCwiZXhwIjoxNTc1NTAzNzMwLCJpYXQiOjE1NzU1MDA0MzB9.Z6VpSljIl-0YxqXsilYQ460Ctkt2-JPvnSl6gF5qoz4",
    Content_Type: "application/json"
  }
});
