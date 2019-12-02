import axios from "axios";
// API CALL TO METADATA SERVICE
export default axios.create({
  baseURL: "http://localhost:5099/api",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Ikl2YXJLcmlzdGlubiIsIm5iZiI6MTU3NTMyNzM4MSwiZXhwIjoxNTc1MzMwNjgxLCJpYXQiOjE1NzUzMjczODF9.I5Zc1IZcbOlXKseqa_y8DGDeNxUMMj-14p-90HlptXs"
  }
});
