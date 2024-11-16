import axios from "axios";

import { env } from "../config/env";

export const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_APP_API_URL,
});
