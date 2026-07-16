import { useNavigate } from "react-router-dom";

export default function DailyVerseCard({ verse }) {

  const navigate = useNavigate();

  return (

    <div

      onClick={() => navigate(`/chapters/${verse.chapter}/${verse.verse}`)}

      className="bg-white rounded-3xl shadow-lg p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition"

    >

      <h2 className="text-2xl font-bold text-indigo-900">

        📖 Today's Verse

      </h2>

      <p className="mt-4 font-semibold">

        Chapter {verse.chapter} • Verse {verse.verse}

      </p>

      <p className="mt-5 text-gray-600 leading-8 line-clamp-4">

        {verse.text}

      </p>

      <button className="mt-8 bg-indigo-700 text-white px-6 py-3 rounded-xl hover:bg-indigo-800 transition">

        Read Verse →

      </button>

    </div>

  );

}