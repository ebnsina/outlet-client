import axios from "axios";

import { url } from "./api";

export const getCategories = async () => {
  return axios.get(`${url}/categories`);
};

export const createCategory = async (category, authtoken) => {
  return axios.post(`${url}/categories`, category, {
    headers: { authtoken },
  });
};

export const getCategory = async (slug) => {
  return axios.get(`${url}/categories/${slug}`);
};

export const updateCategory = async (slug, category, authtoken) => {
  return axios.put(`${url}/categories/${slug}`, category, {
    headers: { authtoken },
  });
};

export const deleteCategory = async (slug, authtoken) => {
  return axios.delete(`${url}/categories/${slug}`, {
    headers: { authtoken },
  });
};
