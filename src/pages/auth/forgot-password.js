import ForgotPassword from "../../components/auth/ForgotPassword";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-white shadow-sm p-4 rounded-xl max-w-md mx-auto mt-[10vh]">
      <h2 className="text-xl font-medium text-center">Reset your password</h2>

      <ForgotPassword />
    </div>
  );
}
