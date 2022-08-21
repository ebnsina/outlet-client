import { Link, useHistory } from "react-router-dom";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Menu, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";

export default function Dropdown() {
  const { user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch({ type: "LOGGED_OUT", payload: null });
    history.replace("/signin");
  };

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-800 text-gray-800 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-cyan-400">
        <span className="text-xs">{user?.email}</span>
        <ChevronDownIcon className="-mr-1 ml-2 h-3 w-3" />
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className="origin-top overflow-hidden absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                className={`group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hovergray-900-800 ${
                  active && "bg-gray-100 text-gray-900"
                }`}
                to={`${
                  user.role === "admin" ? "/admin/dashboard" : "/user/history"
                }`}
              >
                {user.role === "admin" ? "Dashboard" : "History"}
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handleLogout}
                type="button"
                className={`w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hovergray-900-800 ${
                  active && "bg-gray-100 text-gray-900"
                }`}
              >
                Logout
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
