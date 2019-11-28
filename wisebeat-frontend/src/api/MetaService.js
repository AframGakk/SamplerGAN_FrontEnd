import axios from 'axios';

export default axios.create({
    baseURL: "http://localhost:5099/api",
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IlZpbGxpIiwibmJmIjoxNTc0OTA0MzA2LCJleHAiOjE1NzQ5MDUyMDYsImlhdCI6MTU3NDkwNDMwNn0.kASEyEtZ_H2heVkdCjOgxNzzLxWWlSqbDRKZxkGnp7o"
    }
});
