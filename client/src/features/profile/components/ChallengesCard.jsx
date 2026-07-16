export default function ChallengesCard({ problems = [] }) {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-red-600">

        🌱 Current Challenges

      </h2>

      <div className="flex flex-wrap gap-3 mt-6">

        {problems.length === 0 ? (

          <p className="text-gray-500">

            No challenges selected.

          </p>

        ) : (

          problems.map((item) => (

            <span
              key={item}
              className="bg-red-100 px-4 py-2 rounded-full"
            >

              {item}

            </span>

          ))

        )}

      </div>

    </div>

  );

}