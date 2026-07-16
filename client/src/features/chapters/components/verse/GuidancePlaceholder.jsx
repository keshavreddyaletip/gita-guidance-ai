export default function GuidancePlaceholder({ guidance }) {

  if (!guidance) {

    return (

      <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl shadow-xl border border-orange-100 p-8">

        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-3xl">

            🎯

          </div>

          <div>

            <h2 className="text-3xl font-bold text-orange-700">

              Personalized Guidance

            </h2>

            <p className="text-orange-500 mt-1">

              Krishna will guide you according to your life.

            </p>

          </div>

        </div>

        <div className="bg-white rounded-2xl border border-orange-100 p-6">

          <p className="leading-9 text-gray-600">

            After you share your thoughts with Krishna,
            this section will contain guidance personalized
            to your occupation, goals, current challenges,
            and the selected Bhagavad Gita verse.

          </p>

        </div>

      </div>

    );

  }

  return (

    <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 rounded-3xl shadow-xl border border-orange-100 p-8">

      <div className="flex items-center gap-4 mb-8">

        <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-3xl">

          🎯

        </div>

        <div>

          <h2 className="text-3xl font-bold text-orange-700">

            Krishna's Guidance For You

          </h2>

          <p className="text-orange-500 mt-1">

            Personalized wisdom inspired by the Bhagavad Gita.

          </p>

        </div>

      </div>

      <div className="bg-white rounded-3xl shadow-md border border-orange-100 p-8">

        <p className="leading-9 whitespace-pre-line text-gray-700 text-lg">

          {guidance}

        </p>

      </div>

    </div>

  );

}