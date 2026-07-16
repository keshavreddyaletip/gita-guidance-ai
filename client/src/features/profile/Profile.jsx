import MainLayout from "../../components/layout/MainLayout";

import useProfile from "../../hooks/useProfile";

import ProfileHeader from "./components/ProfileHeader";
import JourneyStats from "./components/JourneyStats";
import GoalsCard from "./components/GoalsCard";
import ChallengesCard from "./components/ChallengesCard";
import PreferencesCard from "./components/PreferencesCard";

import { useNavigate } from "react-router-dom";

export default function Profile() {

  const navigate = useNavigate();

  const { profile } = useProfile();

  return (

    <MainLayout>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* Hero */}

        <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 rounded-3xl p-10 text-white shadow-xl">

          <h1 className="text-5xl font-bold">

            🪷 My Gita Dashboard

          </h1>

          <p className="mt-5 text-xl text-indigo-100">

            Every verse you read shapes the person you become.

          </p>

        </div>

        {/* Profile */}

        <ProfileHeader profile={profile} />

        {/* Journey */}

        <JourneyStats profile={profile} />

        {/* Goals & Challenges */}

        <div className="grid lg:grid-cols-2 gap-6">

          <GoalsCard

            goals={profile.goals}

          />

          <ChallengesCard

            problems={profile.problems}

          />

        </div>

        {/* Preferences */}

        <PreferencesCard

          profile={profile}

        />

        {/* Quick Actions */}

        <div className="bg-white rounded-3xl shadow-lg p-8">

          <h2 className="text-2xl font-bold text-indigo-900 mb-8">

            ⚡ Quick Actions

          </h2>

          <div className="grid md:grid-cols-3 gap-5">

            <button

              onClick={() => navigate("/profile-setup")}

              className="bg-indigo-700 text-white rounded-2xl py-5 hover:bg-indigo-800 transition"

            >

              ✏ Edit Profile

            </button>

            <button

              className="bg-green-100 rounded-2xl py-5 hover:bg-green-200 transition"

            >

              📤 Export Journey

            </button>

            <button

              className="bg-red-100 rounded-2xl py-5 hover:bg-red-200 transition"

            >

              🔄 Restart Journey

            </button>

          </div>

        </div>

      </div>

    </MainLayout>

  );

}