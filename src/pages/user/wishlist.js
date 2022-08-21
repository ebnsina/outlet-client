import Layout from "../../components/layouts/Layout";
import UserNavigation from "../../components/layouts/UserNavigation";

export default function WishlistPage() {
  return (
    <div>
      <Layout className="flex gap-10">
        <div className="w-48">
          <UserNavigation />
        </div>

        <main className="flex-1 p-4">
          <h4>Wishlist goes here</h4>
        </main>
      </Layout>
    </div>
  );
}
