import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { authenticate } from "../../services/auth";

import { auth, googleProvider } from "../../utils/firebase";
import FormInput from "../ui/FormInput";

export default function Signin() {
  const { user } = useSelector((state) => ({ ...state }));
  const [email, setEmail] = useState("ebnsina.me@gmail.com");
  const [password, setPassword] = useState("12345678");
  const dispatch = useDispatch();
  const history = useHistory();

  // useEffect(() => {
  //   if (user && user.token) {
  //     history.replace("/");
  //   }
  // }, [user, history]);

  const roleBasedRedirect = (data) => {
    if (data.role === "admin") {
      history.push("/admin/dashboard");
    } else {
      history.push("/user/history");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const idTokenResult = await user.getIdTokenResult();
      const { data } = await authenticate(idTokenResult.token);

      dispatch({
        type: "LOGGED_IN",
        payload: {
          _id: data._id,
          email: data.email,
          role: data.role,
          token: idTokenResult.token,
        },
      });

      roleBasedRedirect(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      const idTokenResult = await user.getIdTokenResult();
      const { data } = await authenticate(idTokenResult.token);

      dispatch({
        type: "LOGGED_IN",
        payload: {
          _id: data._id,
          email: data.email,
          role: data.role,
          token: idTokenResult.token,
        },
      });

      roleBasedRedirect(data);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormInput
        htmlFor="email"
        type="email"
        label="Email Address"
        placeholder="helena@mexico.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <FormInput
        htmlFor="password"
        type="password"
        label="Your Password"
        placeholder="********"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <div className="flex justify-end items-center mb-3">
        <Link
          className="block text-sm text-cyan-400 hover:text-cyan-300"
          to="/forgot-password"
        >
          Forgot your password?
        </Link>
      </div>

      <button type="submit">Sign in</button>

      <button
        className="px-4 py-2 bg-blue-500 text-white transition hover:bg-blue-600 w-full rounded-lg mt-3"
        type="button"
        onClick={handleGoogleLogin}
      >
        Sign in with Google
      </button>
    </form>
  );
}
