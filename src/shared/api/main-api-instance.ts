import axios from "axios";

import { ENV } from "../config/env";

export const mainApi = axios.create({
  baseURL: ENV.NEXT_PUBLIC_APP_API_URL,
});
