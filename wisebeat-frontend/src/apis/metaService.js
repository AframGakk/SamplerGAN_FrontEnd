import axios from "axios";
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://localhost:5099/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ikl2YXJLcmlzdGlubiIsIm5iZiI6MTU3NTc0OTA5MiwiZXhwIjoxNTc1NzU1OTkyLCJpYXQiOjE1NzU3NDkwOTJ9.XCr12OCnZax2faegsKsdu3K60gbGdfLyyn_bmnFbSOM",
    Content_Type: "application/json"
  }
});
