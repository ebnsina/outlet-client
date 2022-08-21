import AdminNavigation from "../../components/layouts/AdminNavigation";
import Layout from "../../components/layouts/Layout";

export default function SubcategoryPage() {
  return (
    <div>
      <Layout className="flex gap-10">
        <div className="w-48">
          <AdminNavigation />
        </div>

        <main className="flex-1 p-4">
          <h4>Subcategory goes here</h4>
        </main>
      </Layout>
    </div>
  );
}
