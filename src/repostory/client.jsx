import axios from "axios";
import React from "react";

export const baseDomain = "http://localhost:5001/api/v1/todos";

const client = axios.create({
  baseURL: baseDomain,
  headers: { "X-Custem-Header": "footer" },
});

export default client;
