import axios from "axios";

export default axios.create({
  // todo-var
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});