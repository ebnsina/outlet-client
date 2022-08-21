import { updatePassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";

import Layout from "../../components/layouts/Layout";
import UserNavigation from "../../components/layouts/UserNavigation";
import FormInput from "../../components/ui/FormInput";
import { auth } from "../../utils/firebase";

export default function PasswordUpdatePage() {
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let user = auth.currentUser;
      await updatePassword(user, password);
      toast.success("Password updated successfully.");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Layout className="flex gap-10">
        <div className="w-80">
          <UserNavigation />
        </div>

        <main className="flex-1 p-4">
          <div className="bg-white max-w-md p-4 rounded-xl shadow-sm">
            <h3 className="text-xl font-medium mb-3 text-center ">
              Update your password
            </h3>

            <form onSubmit={handleSubmit} autoComplete="off">
              <FormInput
                htmlFor="password"
                type="password"
                label="Your Password"
                placeholder="********"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button type="submit">Update</button>
            </form>
          </div>
        </main>
      </Layout>
    </div>
  );
}
