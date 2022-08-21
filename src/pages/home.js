import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section>
      <div className="container mx-auto px-4 rounded-xl bg-gray-300 mt-8 py-20 grid place-items-center">
        <h1 className="text-3xl md:text-6xl font-semibold mb-3">
          Welcome to Outlet!
        </h1>
        <p className="text-xl">Spend less. Smile More</p>
        <Link
          to="/shop"
          className="px-8 py-4 bg-black text-white block rounded-xl mt-8 transition hover:bg-gray-800"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
