import Layout from "../../components/layouts/Layout";
import UserNavigation from "../../components/layouts/UserNavigation";

export default function HistoryPage() {
  return (
    <div>
      <Layout className="flex gap-10">
        <div className="w-80">
          <UserNavigation />
        </div>

        <main className="flex-1 p-4">
          <h4>Content goes here</h4>
        </main>
      </Layout>
    </div>
  );
}
