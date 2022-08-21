import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/outline";

import Dropdown from "./Dropdown";
import CartButton from "../cart/CartButton";
import { useSelector } from "react-redux";

export default function Navigation() {
  const { user } = useSelector((state) => ({ ...state }));
  const isAuthenticated = user !== null;

  return (
    <nav className="flex space-x-6">
      <ul className="flex items-center space-x-3">
        <li>
          <Link to="/shop">
            <ShoppingBagIcon className="h-6 w-6 text-gray-900" />
          </Link>
        </li>
        <li className="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
          <Link to="/cart" className="relative flex">
            <CartButton />
          </Link>
        </li>

        {!isAuthenticated && (
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
        )}
      </ul>

      {isAuthenticated && <Dropdown />}
    </nav>
  );
}
