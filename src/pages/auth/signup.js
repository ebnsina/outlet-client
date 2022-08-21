import Signup from "../../components/auth/Signup";

export default function SignupPage() {
  return (
    <div className="bg-white shadow-sm p-4 rounded-xl max-w-md mx-auto mt-[10vh]">
      <h2 className="text-xl font-medium text-center mb-2">
        Create New Account
      </h2>
      <p className="text-center text-sm text-gray-600">
        Enter your email to get started.
      </p>

      <Signup />
    </div>
  );
}
