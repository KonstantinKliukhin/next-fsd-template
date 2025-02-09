import axios from "axios";

import { ENV } from "../config/env";

const { cookies } = require("next/headers");

const ssrMainApiInstance = axios.create({
  baseURL: ENV.NEXT_PUBLIC_APP_API_URL,
});

ssrMainApiInstance.interceptors.request.use(async (config) => {
  const cookie = await cookies();
  config.headers["Cookie"] = cookie.toString();

  return config;
});

export { ssrMainApiInstance };
