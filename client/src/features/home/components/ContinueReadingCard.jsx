import { useNavigate } from "react-router-dom";

export default function ContinueReadingCard() {

  const navigate = useNavigate();

  return (

    <div

      onClick={() => navigate("/chapters")}

      className="bg-white rounded-3xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition"

    >

      <h2 className="text-2xl font-bold text-indigo-900">

        📚 Continue Reading

      </h2>

      <p className="mt-6 text-gray-600">

        Continue your spiritual journey.

      </p>

      <button className="mt-8 bg-indigo-700 text-white px-6 py-3 rounded-xl">

        Open Chapters →

      </button>

    </div>

  );

}