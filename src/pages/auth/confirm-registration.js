import ConfirmRegistration from "../../components/auth/ConfirmRegistration";

export default function ConfirmRegistrationPage() {
  return (
    <div className="bg-white shadow-sm p-4 rounded-xl max-w-md mx-auto mt-[10vh]">
      <h2 className="text-xl font-medium text-center">
        Confirm your registration
      </h2>

      <ConfirmRegistration />
    </div>
  );
}
