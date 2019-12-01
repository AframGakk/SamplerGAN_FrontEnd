import axios from "axios";
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://localhost:5099/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ikl2YXJLcmlzdGlubiIsIm5iZiI6MTU3NTIzNDQ4NCwiZXhwIjoxNTc1MjM3Nzg0LCJpYXQiOjE1NzUyMzQ0ODR9.dv7shh9ywGrtLOKLu3aomAE8HA7YBuD3MOVT7uovDvE"
  }
});
