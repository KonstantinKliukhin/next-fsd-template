import axios from "axios";
const { cookies } = require("next/headers");

import { env } from "../config/env";

const ssrMainApiInstance = axios.create({
  baseURL: env.NEXT_PUBLIC_APP_API_URL,
});

ssrMainApiInstance.interceptors.request.use((config) => {
  config.headers["Cookie"] = cookies().toString();

  return config;
});

export { ssrMainApiInstance };
