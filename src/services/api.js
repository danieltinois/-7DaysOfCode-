import axios from "axios";

export const api = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/danieltinois/backend-casaverde-json/main/offers.json",
});
