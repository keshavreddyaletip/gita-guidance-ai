import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../services/authService";

import AuthLogo from "./components/AuthLogo";
import AuthCard from "./components/AuthCard";

import { saveUserProfile } from "../../services/firestoreService";

export default function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
  try {
    const result = await registerUser(email, password);

    console.log(result);

    navigate("/profile-setup");

  } catch (err) {
    console.log(err);

    console.log(err.code);

    console.log(err.message);

    alert(err.message);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-yellow-50 flex justify-center items-center">
      <AuthCard>
        <AuthLogo />

        <input
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-3 rounded-lg mb-4"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-indigo-900 text-white py-3 rounded-lg mb-3"
        >
          Create Account
        </button>

        <div className="text-center mt-5">
          <Link to="/">
            Already have an account? Login
          </Link>
        </div>
      </AuthCard>
    </div>
  );
}