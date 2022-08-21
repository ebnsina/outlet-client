import axios from "axios";

import { url } from "./api";

export const authenticate = async (authtoken) => {
  return axios.post(
    `${url}/auth`,
    {},
    {
      headers: { authtoken },
    }
  );
};

export const getCurrentUser = async (authtoken) => {
  return axios.post(
    `${url}/current-user`,
    {},
    {
      headers: { authtoken },
    }
  );
};

export const getCurrentAdmin = async (authtoken) => {
  return axios.post(
    `${url}/current-admin`,
    {},
    {
      headers: { authtoken },
    }
  );
};
