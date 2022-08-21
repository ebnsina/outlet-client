import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import LoadingToRedirect from "../ui/LoadingToRedirect";

export default function UserRoute({ children, ...rest }) {
  const { user } = useSelector((state) => ({ ...state }));
  const isAuthenticated = user && user?.token;

  return isAuthenticated ? (
    <Route {...rest} render={() => children} />
  ) : (
    <LoadingToRedirect />
  );
}
