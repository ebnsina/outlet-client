import { NavLink } from "react-router-dom";

const userNavData = [
  { id: "an1", text: "Dashboard", to: "/admin/dashboard" },
  { id: "an2", text: "Products", to: "/admin/products" },
  { id: "an3", text: "Categories", to: "/admin/categories" },
  { id: "an4", text: "Subcategories", to: "/admin/subcategories" },
  { id: "an5", text: "Coupon", to: "/admin/coupons" },
  { id: "an6", text: "Orders", to: "/admin/orders" },
];

export default function AdminNavigation() {
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
