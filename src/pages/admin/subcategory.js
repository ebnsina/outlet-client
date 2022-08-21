import { useState } from "react";

import NewSubcategory from "../../components/admin/subcategory/NewSubcategory";
import SubcategoryLists from "../../components/admin/subcategory/SubcategoryLists";
import AdminNavigation from "../../components/layouts/AdminNavigation";
import Layout from "../../components/layouts/Layout";

export default function SubcategoryPage() {
  const [formIsShow, setFormIsShow] = useState(false);

  return (
    <div>
      <Layout className="flex gap-10">
        <div className="w-48">
          <AdminNavigation />
        </div>

        <main className="flex-1 p-4">
          {formIsShow && (
            <NewSubcategory
              formIsShow={formIsShow}
              setFormIsShow={setFormIsShow}
            />
          )}

          <div className="flex justify-between items-center mt-3">
            <h3 className="text-xl font-medium">Subcategories</h3>

            <button
              className="bg-gray-800 text-white rounded-xl px-4 py-2"
              onClick={() => setFormIsShow(true)}
              type="button"
            >
              Add New
            </button>
          </div>

          <SubcategoryLists />
        </main>
      </Layout>
    </div>
  );
}
