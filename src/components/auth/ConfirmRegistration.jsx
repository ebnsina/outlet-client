import { useEffect, useState } from "react";
import {
  isSignInWithEmailLink,
  signInWithEmailLink,
  updatePassword,
} from "firebase/auth";
import { toast } from "react-toastify";

import { auth } from "../../utils/firebase";
import FormInput from "../ui/FormInput";
import { useHistory } from "react-router-dom";

export default function ConfirmRegistration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    let email = window.localStorage.getItem("emailForSignIn");
    setEmail(email);
  }, [email]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (isSignInWithEmailLink(auth, window.location.href)) {
        let email = window.localStorage.getItem("emailForSignIn");

        if (!email) {
          email = window.prompt("Please provide your email for confirmation");
        }

        const res = await signInWithEmailLink(
          auth,
          email,
          window.location.href
        );

        const { user } = res;

        if (user.emailVerified) {
          window.localStorage.removeItem("emailForSignIn");
          let user = auth.currentUser;
          await updatePassword(user, password);
          const idTokenResult = await user.getIdTokenResult();
          history.push("/signin");
        }
      }
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
        placeholder="*********"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

      <button type="submit">Next</button>
    </form>
  );
}
