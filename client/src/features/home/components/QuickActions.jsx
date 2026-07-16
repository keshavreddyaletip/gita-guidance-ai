import { useNavigate } from "react-router-dom";

export default function QuickActions() {

  const navigate = useNavigate();

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-indigo-900 mb-8">

        ❤️ Quick Actions

      </h2>

      <div className="grid md:grid-cols-4 gap-4">

        <button

          onClick={() => navigate("/chapters")}

          className="bg-indigo-100 rounded-xl py-5 hover:bg-indigo-200 transition"

        >

          📖 Chapters

        </button>

        <button

          onClick={() => navigate("/favorites")}

          className="bg-pink-100 rounded-xl py-5 hover:bg-pink-200 transition"

        >

          ❤️ Favorites

        </button>

        <button

          onClick={() => navigate("/journey")}

          className="bg-green-100 rounded-xl py-5 hover:bg-green-200 transition"

        >

          📈 Journey

        </button>

        <button

          onClick={() => navigate("/profile")}

          className="bg-yellow-100 rounded-xl py-5 hover:bg-yellow-200 transition"

        >

          👤 Profile

        </button>

      </div>

    </div>

  );

}