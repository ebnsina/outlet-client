import { NavLink } from "react-router-dom";

const userNavData = [
  { id: "un1", text: "History", to: "/user/history" },
  { id: "un2", text: "Password", to: "/user/password" },
  { id: "un3", text: "Wishlist", to: "/user/wishlist" },
];

export default function UserNavigation() {
  return (
    <nav className="p-4">
      <ul className="space-y-3">
        {userNavData.map((link) => (
          <li key={link.id}>
            <NavLink
              className="px-6 py-2 block rounded-xl hover:bg-gray-900 hover:text-white transition"
              to={link.to}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
