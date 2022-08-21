import { useEffect, useState } from "react";
import { sendSignInLinkToEmail } from "firebase/auth";
import { toast } from "react-toastify";

import { auth } from "../../utils/firebase";
import FormInput from "../ui/FormInput";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Signup() {
  const { user } = useSelector((state) => ({ ...state }));
  const [email, setEmail] = useState("ebnsina.me@gmail.com");
  const history = useHistory();

  useEffect(() => {
    if (user && user.token) {
      history.replace("/");
    }
  }, [user, history]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const actionCodeSettings = {
        url: `${process.env.REACT_APP_APP_URI}/confirm-registration`,
        handleCodeInApp: true,
      };

      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      toast.success(
        `Email is sent to ${email}. Please check to confirm registration.`
      );
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <FormInput
        htmlFor="email"
        label="Email Address"
        placeholder="helena@mexico.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button type="submit">Next</button>
    </form>
  );
}
