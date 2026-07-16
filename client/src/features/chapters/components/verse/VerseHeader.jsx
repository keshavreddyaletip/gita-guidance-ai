import { useNavigate } from "react-router-dom";

export default function VerseHeader({

  chapter,

  verse,

  onPrevious,

  onNext,

}) {

  const navigate = useNavigate();

  return (

    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 mb-8">

      <div className="flex items-center justify-between">

        <button
          onClick={onPrevious}
          className="px-5 py-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition font-semibold"
        >
          ← Previous
        </button>

        <div className="text-center">

          <p className="text-gray-500">

            Bhagavad Gita

          </p>

          <h1 className="text-3xl font-bold text-indigo-900">

            Chapter {chapter}

          </h1>

          <p className="text-orange-500 font-semibold mt-2">

            Verse {verse}

          </p>

        </div>

        <button
          onClick={onNext}
          className="px-5 py-3 rounded-xl bg-indigo-50 hover:bg-indigo-100 transition font-semibold"
        >
          Next →
        </button>

      </div>

    </div>

  );

}