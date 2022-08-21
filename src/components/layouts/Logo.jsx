import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <h1>
      <Link to="/" className="text-2xl font-semibold uppercase tracking-wider">
        Outlet
      </Link>
    </h1>
  );
}
