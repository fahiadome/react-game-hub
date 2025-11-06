import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c1e1876a12dd4b5cafd2261a2017d4f3",
  },
});