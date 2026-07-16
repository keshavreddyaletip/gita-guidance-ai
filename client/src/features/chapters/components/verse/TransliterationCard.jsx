export default function TransliterationCard({

  transliteration,

}) {

  return (

    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10">

      <div className="flex items-center gap-3 mb-8">

        <span className="text-4xl">

          📖

        </span>

        <h2 className="text-3xl font-bold text-indigo-900">

          Transliteration

        </h2>

      </div>

      <div className="bg-green-50 rounded-2xl p-8">

        <p className="text-xl leading-9 text-gray-700 whitespace-pre-line">

          {transliteration}

        </p>

      </div>

    </div>

  );

}