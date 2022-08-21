import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getCategories, getCategory } from "../../../services/category";
import {
  getSubcategories,
  getSubcategory,
  updateSubcategory,
} from "../../../services/subcategory";

export default function EditSubcategory({ setForm }) {
  const { user } = useSelector((state) => ({ ...state }));
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState("");

  const fetchCategories = async () => {
    try {
      const { data } = await getCategories();
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSubcategories = async () => {
    try {
      const { data } = await getSubcategories();
      setSubcategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchSubcategories();
  }, []);

  const history = useHistory();
  const { slug } = useParams();

  const fetchSubcategory = async () => {
    try {
      const { data } = await getSubcategory(slug);
      setTitle(data.title);
      setCategory(data.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSubcategory();
  }, [slug]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateSubcategory(
        slug,
        { title, category },
        user?.token
      );
      toast.success(`${data.title} updated!`);
      history.push(`/admin/subcategories`);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5 shadow-sm bg-white p-4 rounded-xl">
      <h3 className="text-xl font-medium mb-3">Edit Subcategory</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <select
            name="category"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="" selected>
              Select category
            </option>
            {categories.length > 0 &&
              categories.map((c) => (
                <option key={c._id} value={c._id} selected={c._id === category}>
                  {c.title}
                </option>
              ))}
          </select>
        </div>

        <div className="mb-3">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <Link
            to="/admin/subcategories"
            className="block px-4 py-2 text-center bg-gray-100 rounded-xl"
          >
            Cancel
          </Link>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}
