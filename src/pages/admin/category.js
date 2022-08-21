import { useState } from "react";

import CategoryLists from "../../components/admin/category/CategoryLists";
import NewCategory from "../../components/admin/category/NewCategory";
import AdminNavigation from "../../components/layouts/AdminNavigation";
import Layout from "../../components/layouts/Layout";

export default function CategoryPage() {
  const [categoryFormIsShow, setCategoryFormIsShow] = useState(false);

  return (
    <div>
      <Layout className="flex gap-10">
        <div className="w-48">
          <AdminNavigation />
        </div>

        <main className="flex-1 p-4">
          {categoryFormIsShow && (
            <NewCategory
              categoryFormIsShow={categoryFormIsShow}
              setCategoryFormIsShow={setCategoryFormIsShow}
            />
          )}

          <div className="flex justify-between items-center mt-3">
            <h3 className="text-xl font-medium">Categories</h3>

            <button
              className="bg-gray-800 text-white rounded-xl px-4 py-2"
              onClick={() => setCategoryFormIsShow(true)}
              type="button"
            >
              Add New
            </button>
          </div>

          <CategoryLists />
        </main>
      </Layout>
    </div>
  );
}
