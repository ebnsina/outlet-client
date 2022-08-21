import { ShoppingCartIcon } from "@heroicons/react/outline";

export default function CartButton() {
  return (
    <>
      <ShoppingCartIcon className="h-6 w-6 text-gray-900" />
      <span className="absolute -right-1 -top-1 rounded-full bg-black w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
        5
      </span>
    </>
  );
}
