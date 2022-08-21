import { sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import { auth } from "../../utils/firebase";
import FormInput from "../ui/FormInput";

export default function ForgotPassword() {
  const { user } = useSelector((state) => ({ ...state }));
  const [email, setEmail] = useState("");
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
        url: `${process.env.REACT_APP_APP_URI}/signin`,
        handleCodeInApp: true,
      };

      await sendPasswordResetEmail(auth, email, actionCodeSettings);
      toast.success("Check your email for password reset link.");
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

      <button type="submit">Next</button>
    </form>
  );
}
