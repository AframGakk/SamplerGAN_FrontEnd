import axios from "axios";
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://localhost:5099/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ikl2YXJLcmlzdGlubiIsIm5iZiI6MTU3NTQ4NDE4MywiZXhwIjoxNTc1NDg3NDgzLCJpYXQiOjE1NzU0ODQxODN9.Zv47BS-qJHyI2HyY_ZfAHatIFQMI8vIDhq5l_3Y6qFk",
    Content_Type: "application/json"
  }
});
