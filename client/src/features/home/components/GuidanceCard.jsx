import { auth } from "../../../config/firebase";
import { addFavorite } from "../../../services/favoriteService";

export default function GuidanceCard({ guidance }) {

  if (!guidance) return null;

  const handleFavorite = async () => {
    try {

      if (!auth.currentUser) {
        alert("Please login first.");
        return;
      }

      await addFavorite(auth.currentUser.uid, guidance);

      alert("⭐ Verse added to Favorites!");

    } catch (err) {

      console.error(err);

      alert("Failed to save favorite.");

    }
  };

  return (

    <div className="bg-white rounded-2xl shadow-lg p-8">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-indigo-900">
          AI Guidance
        </h2>

        <button
          onClick={handleFavorite}
          className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-5 py-2 rounded-xl font-semibold"
        >
          ⭐ Favorite
        </button>

      </div>

      {/* Sloka */}

      <div className="space-y-6">

        <div>
          <h3 className="text-lg font-bold text-indigo-900">
            📜 Sanskrit Sloka
          </h3>

          <p className="mt-2 whitespace-pre-line text-gray-700">
            {guidance.sloka}
          </p>
        </div>

        {/* Meaning */}

        <div>
          <h3 className="text-lg font-bold text-indigo-900">
            📖 Meaning
          </h3>

          <p className="mt-2 text-gray-700">
            {guidance.meaning}
          </p>
        </div>

        {/* Moral */}

        <div>
          <h3 className="text-lg font-bold text-indigo-900">
            🌿 Moral
          </h3>

          <p className="mt-2 text-gray-700">
            {guidance.moral}
          </p>
        </div>

        {/* Personalized Guidance */}

        <div>
          <h3 className="text-lg font-bold text-indigo-900">
            🧠 Personalized Guidance
          </h3>

          <p className="mt-2 text-gray-700">
            {guidance.personalized_guidance}
          </p>
        </div>

        {/* Why Krishna Selected This Verse */}

        <div>
          <h3 className="text-lg font-bold text-indigo-900">
            📚 Why this Verse?
          </h3>

          <p className="mt-2 text-gray-700">
            {guidance.reason}
          </p>
        </div>

      </div>

    </div>

  );
}