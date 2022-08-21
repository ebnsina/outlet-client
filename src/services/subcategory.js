import axios from "axios";

import { url } from "./api";

export const getSubcategories = async () => {
  return axios.get(`${url}/subcategories`);
};

export const createSubcategory = async (subcategory, authtoken) => {
  return axios.post(`${url}/subcategories`, subcategory, {
    headers: { authtoken },
  });
};

export const getSubcategory = async (slug) => {
  return axios.get(`${url}/subcategories/${slug}`);
};

export const updateSubcategory = async (slug, subcategory, authtoken) => {
  return axios.put(`${url}/subcategories/${slug}`, subcategory, {
    headers: { authtoken },
  });
};

export const deleteSubcategory = async (slug, authtoken) => {
  return axios.delete(`${url}/subcategories/${slug}`, {
    headers: { authtoken },
  });
};
