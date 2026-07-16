import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { loginUser, googleLogin } from "../../services/authService";
import { getUserProfile } from "../../services/firestoreService";
import { updateDailyStreak } from "../../services/streakService";

import AuthLogo from "./components/AuthLogo";
import AuthCard from "./components/AuthCard";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const result = await loginUser(email.trim(), password);

      const profile = await getUserProfile(result.user.uid);

      if (profile) {

        await updateDailyStreak(result.user.uid);

        navigate("/home");

      } else {

        navigate("/profile-setup");

      }

    } catch (err) {

      console.error(err);

      alert(err.message);

    }

  };

  const handleGoogle = async () => {

    try {

      const userCredential = await googleLogin();

      const profile = await getUserProfile(userCredential.user.uid);

      if (profile) {

        await updateDailyStreak(userCredential.user.uid);

        navigate("/home");

      } else {

        navigate("/profile-setup");

      }

    } catch (err) {

      console.error(err);

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
          onClick={handleLogin}
          className="w-full bg-indigo-900 text-white py-3 rounded-lg mb-3"
        >
          Login
        </button>

        <button
          onClick={handleGoogle}
          className="w-full border py-3 rounded-lg"
        >
          Continue with Google
        </button>

        <div className="text-center mt-5">

          <Link to="/register">
            Create Account
          </Link>

        </div>

      </AuthCard>

    </div>

  );

}