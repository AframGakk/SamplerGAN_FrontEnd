import axios from "axios";
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ikl2YXJLcmlzdGlubiIsIm5iZiI6MTU3NTY4MDY4NywiZXhwIjoxNTc1Njg3NTg3LCJpYXQiOjE1NzU2ODA2ODd9.yJ0hQ0aWeE5s57SDJsC-j1Ap0_XPcNDrEASotvZ_uuk",
    Content_Type: "application/json"
  }
});
