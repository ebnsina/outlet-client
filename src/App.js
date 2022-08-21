import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";

import Header from "./components/layouts/Header";
import CommandPalette from "./components/ui/CommandPalette";
import HomePage from "./pages/home";
import ShopPage from "./pages/shop";
import ConfirmRegistrationPage from "./pages/auth/confirm-registration";
import ForgotPasswordPage from "./pages/auth/forgot-password";
import SigninPage from "./pages/auth/signin";
import SignupPage from "./pages/auth/signup";
import { auth } from "./utils/firebase";
import CheckoutPage from "./pages/checkout";
import CartPage from "./pages/cart";
import { getCurrentUser } from "./services/auth";
import HistoryPage from "./pages/user/history";
import UserRoute from "./components/routes/UserRoute";
import WishlistPage from "./pages/user/wishlist";
import PasswordUpdatePage from "./pages/user/password";
import AdminRoute from "./components/routes/AdminRoute";
import Dashboard from "./pages/admin/dashboard";
import CategoryPage from "./pages/admin/category";
import OrderPage from "./pages/admin/order";
import CouponPage from "./pages/admin/coupon";
import SubcategoryPage from "./pages/admin/subcategory";
import ProductPage from "./pages/admin/product";
import EditCategory from "./components/admin/category/EditCategory";
import EditSubcategory from "./components/admin/subcategory/EditSubcategory";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        const { data } = await getCurrentUser(idTokenResult.token);

        dispatch({
          type: "LOGGED_IN",
          payload: {
            _id: data._id,
            email: data.email,
            role: data.role,
            token: idTokenResult.token,
          },
        });
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div className="bg-gray-100 min-h-screen">
      <ToastContainer />
      <CommandPalette />
      <Header />
      <Switch>
        <AdminRoute path="/admin/orders" component={OrderPage} />
        <AdminRoute path="/admin/coupons" component={CouponPage} />
        <AdminRoute
          path="/admin/subcategories/:slug"
          component={EditSubcategory}
        />
        <AdminRoute path="/admin/subcategories" component={SubcategoryPage} />
        <AdminRoute path="/admin/categories/:slug" component={EditCategory} />
        <AdminRoute path="/admin/categories" component={CategoryPage} />
        <AdminRoute path="/admin/products" component={ProductPage} />
        <AdminRoute path="/admin/dashboard" component={Dashboard} />

        <UserRoute path="/user/wishlist" component={WishlistPage} />
        <UserRoute path="/user/password" component={PasswordUpdatePage} />
        <UserRoute path="/user/history" component={HistoryPage} />

        <Route path="/checkout" component={CheckoutPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/forgot-password" component={ForgotPasswordPage} />
        <Route
          path="/confirm-registration"
          component={ConfirmRegistrationPage}
        />
        <Route path="/signup" component={SignupPage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}
