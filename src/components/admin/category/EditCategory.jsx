import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { getCategory, updateCategory } from "../../../services/category";

export default function EditCategory({ setCategoryFormIsShow }) {
  const { user } = useSelector((state) => ({ ...state }));
  const [title, setTitle] = useState("");

  const history = useHistory();
  const { slug } = useParams();

  const fetchCategory = async () => {
    try {
      const { data } = await getCategory(slug);
      setTitle(data.title);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [slug]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await updateCategory(slug, { title }, user?.token);
      console.log(data);
      toast.success(`${data.title} updated!`);

      history.push(`/admin/categories`);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-5 shadow-sm bg-white p-4 rounded-xl">
      <h3 className="text-xl font-medium mb-3">Edit category</h3>

      <form onSubmit={handleSubmit}>
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
            to="/admin/categories"
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
