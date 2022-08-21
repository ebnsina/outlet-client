import AdminNavigation from "../../components/layouts/AdminNavigation";
import Layout from "../../components/layouts/Layout";

export default function Dashboard() {
  return (
    <div>
      <Layout className="flex gap-10">
        <div className="w-48">
          <AdminNavigation />
        </div>

        <main className="flex-1 p-4">
          <h4>Content goes here</h4>
        </main>
      </Layout>
    </div>
  );
}
