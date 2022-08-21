import { Link } from "react-router-dom";
import Signin from "../../components/auth/Signin";

export default function SigninPage() {
  return (
    <div className="bg-white shadow-sm p-4 rounded-xl max-w-md mx-auto mt-[10vh]">
      <h2 className="text-xl font-medium text-center">Sign In</h2>

      <p className="text-center my-1">
        <span className="text-gray-600">Or</span>{" "}
        <Link
          className="font-medium text-cyan-400 hover:text-cyan-500"
          to="/signup"
        >
          Create a new account
        </Link>
      </p>

      <Signin />
    </div>
  );
}
