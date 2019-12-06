import axios from "axios";
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ikl2YXJLcmlzdGlubiIsIm5iZiI6MTU3NTYzMDEyNywiZXhwIjoxNTc1NjMzNDI3LCJpYXQiOjE1NzU2MzAxMjd9.Acn5lRnQBDrO2PFnr2KHfEzO76qVOINI0zfZki_8Gzg",
    Content_Type: "application/json"
  }
});
