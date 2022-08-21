import { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import { createCategory } from "../../../services/category";

export default function NewCategory({ setFormIsShow }) {
  const { user } = useSelector((state) => ({ ...state }));
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createCategory({ title }, user?.token);
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
      <h3 className="text-xl font-medium mb-3">Add new category</h3>

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
