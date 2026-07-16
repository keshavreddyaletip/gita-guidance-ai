export default function TranslationCard({ translation }) {

  return (

    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10">

      <div className="flex items-center gap-3 mb-8">

        <span className="text-4xl">

          🌐

        </span>

        <h2 className="text-3xl font-bold text-indigo-900">

          Meaning

        </h2>

      </div>

      <div className="bg-indigo-50 rounded-2xl p-8">

        <p className="text-2xl leading-10 text-gray-700">

          {translation}

        </p>

      </div>

    </div>

  );

}