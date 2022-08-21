import { Link } from "react-router-dom";

export default function CartPage() {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4 flex">
        <div className="flex-1">
          <h3 className="text-xl font-medium">Your cart</h3>

          <div>
            <p className="text-2xl font-semibold">Your cart is empty!</p>
          </div>
        </div>
        <div className="w-80 bg-white p-4 rounded-xl shadow-sm">
          <h3 className="text-xl font-medium text-center">Order Summary</h3>
          <div>
            <div className="flex justify-between py-3">
              <div>
                <h4>MacBook Pro M2</h4>
                <span className="inline-block text-xs text-gray-600">
                  The best deal you can get!
                </span>
              </div>
              <p>$ 1999</p>
            </div>

            <hr />

            <div className="py-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Subtotal:</span>
                <span>$ 2000</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600 text-sm">Shipping:</span>
                <span>$10</span>
              </div>
            </div>

            <hr />

            <h2 className="ttext-2xl font-bold mt-3 text-right">
              Total: $ 4000
            </h2>
          </div>

          <Link
            to="/checkout"
            className="mt-3 px-4 py-2 rounded-xl bg-black text-white block text-center border tracking-wider transition hover:border-black hover:text-black hover:bg-transparent"
          >
            Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
