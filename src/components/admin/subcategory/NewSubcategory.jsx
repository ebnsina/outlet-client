import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createCategory, getCategories } from "../../../services/category";
import { createSubcategory } from "../../../services/subcategory";

export default function NewSubcategory({ setFormIsShow }) {
  const { user } = useSelector((state) => ({ ...state }));
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState("");

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
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createSubcategory(
        { title, category },
        user?.token
      );
      console.log(data);
      toast.success(`${data.title} created!`);
      setTitle("");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="max-w-md shadow-sm bg-white p-4 rounded-xl">
      <h3 className="text-xl font-medium mb-3">Add new subcategory</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <select
            name="category"
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="" selected>
              Select category
            </option>
            {categories &&
              categories.map((c) => (
                <option key={c._id} value={c._id}>
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
          <button
            onClick={() => setFormIsShow(false)}
            className="bg-gray-100 rounded-xl"
            type="button"
          >
            Cancel
          </button>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
