export default function VerseActions({

  favorite,

  onFavorite,

}) {

  return (

    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <button
          onClick={onFavorite}
          className={`rounded-2xl py-5 transition text-lg font-semibold

          ${
            favorite
              ? "bg-pink-500 text-white"
              : "bg-pink-100 hover:bg-pink-200"
          }`}
        >

          {favorite ? "❤️ Saved" : "🤍 Favorite"}

        </button>

        <button
          className="rounded-2xl py-5 bg-indigo-100 hover:bg-indigo-200 transition text-lg"
        >

          🔊 Listen

        </button>

        <button
          className="rounded-2xl py-5 bg-green-100 hover:bg-green-200 transition text-lg"
        >

          🌍 Language

        </button>

        <button
          className="rounded-2xl py-5 bg-orange-100 hover:bg-orange-200 transition text-lg"
        >

          📤 Share

        </button>

      </div>

    </div>

  );

}