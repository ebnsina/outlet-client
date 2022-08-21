import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { getCurrentAdmin } from "../../services/auth";
import LoadingToRedirect from "../ui/LoadingToRedirect";

export default function AdminRoute({ children, ...rest }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  const fetchCurrentAdmin = async () => {
    try {
      const { data } = await getCurrentAdmin(user?.token);
      if (data) {
        setIsAdmin(true);
      }
    } catch (error) {
      console.log(error);
      setIsAdmin(false);
    }
  };

  useEffect(() => {
    fetchCurrentAdmin();
  }, []);

  return isAdmin ? (
    <Route {...rest} render={() => children} />
  ) : (
    <LoadingToRedirect />
  );
}
