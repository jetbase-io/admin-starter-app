import axios, { AxiosRequestConfig } from "axios";

import { REFRESH } from "../constants/api-constants";
import {
  cleanUserTokensFromLocalStorage,
  getAccessToken,
  getRefreshToken,
  setUserTokensToLocalStorage,
} from "./helpers/auth";

const baseURL = process.env.REACT_APP_API_URL;

const http = axios.create({ baseURL });

http.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const accessToken = getAccessToken();
    if (config.headers === undefined) {
      config.headers = {};
    }
    if (accessToken) {
      config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : "";
    }
    return config;
  },
  (error) => error
);

let refresh = false;

http.interceptors.response.use(
  (resp) => resp,
  async (error) => {
    if (error.response.status === 401 && !refresh) {
      refresh = true;
      try {
        const response = await axios.post(
          `${baseURL}${REFRESH}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${getRefreshToken()}`,
            },
          }
        );
        setUserTokensToLocalStorage(response.data.accessToken, response.data.refreshToken);
        error.config.headers = {
          ...error.config.headers,
          Authorization: `Bearer ${response.data.accessToken}`,
        };
        if (response.data.accessToken?.length) refresh = false;
        return await http.request(error.config);
      } catch (er) {
        cleanUserTokensFromLocalStorage();
        // eslint-disable-next-line no-restricted-globals,no-return-assign
        return (location.href = "/#/login");
      }
    }
    refresh = false;
    return error;
  }
);

export default http;
