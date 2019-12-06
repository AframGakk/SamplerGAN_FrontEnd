import axios from "axios";
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://localhost:5020/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ikl2YXJLcmlzdGlubiIsIm5iZiI6MTU3NTU2MDE1NywiZXhwIjoxNTc1NTYzNDU3LCJpYXQiOjE1NzU1NjAxNTd9.Vk8NVBsaZzeOPgXnI5UdzI7w-xLbAIikC-e6GTcbYc0",
    Content_Type: "application/json"
  }
});
