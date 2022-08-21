import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { deleteCategory, getCategories } from "../../../services/category";
import {
  deleteSubcategory,
  getSubcategories,
} from "../../../services/subcategory";
import FilterSearch from "../../search/FilterSearch";

export default function SubcategoryLists() {
  const { user } = useSelector((state) => ({ ...state }));
  const [subcategories, setSubcategories] = useState([]);
  const [categories, setCategories] = useState([]);

  const [query, setQuery] = useState("");
  const filteredLists = subcategories.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  const fetchSubategories = async () => {
    try {
      const { data } = await getSubcategories();
      setSubcategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data } = await getCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchSubategories();
  }, []);

  const handleDelete = async (slug) => {
    try {
      if (window.confirm("Are you sure to delete?")) {
        const { data } = await deleteSubcategory(slug, user?.token);
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FilterSearch query={query} setQuery={setQuery} />

      <div className="mt-8">
        <div className="flex justify-between items-center w-full bg-cyan-300 p-4 rounded-t-xl">
          <div>Title</div>
          <div>Slug</div>
          <div>Action</div>
        </div>

        <div className="bg-white rounded-b-lg divide-y overflow-hidden divide-gray-50">
          {filteredLists.map((c) => (
            <div
              key={c._id}
              className="flex justify-between items-center w-full p-4"
            >
              <div>{c.title}</div>
              <div>{c.slug}</div>
              <div className="space-x-3">
                <Link
                  to={`/admin/subcategories/${c.slug}`}
                  className="text-violet-500"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(c.slug)}
                  type="button"
                  className="text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
