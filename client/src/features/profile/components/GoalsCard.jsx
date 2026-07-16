export default function GoalsCard({ goals = [] }) {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-indigo-900">

        🎯 My Goals

      </h2>

      <div className="flex flex-wrap gap-3 mt-6">

        {goals.length === 0 ? (

          <p className="text-gray-500">

            No goals added.

          </p>

        ) : (

          goals.map((goal) => (

            <span
              key={goal}
              className="bg-indigo-100 px-4 py-2 rounded-full"
            >

              {goal}

            </span>

          ))

        )}

      </div>

    </div>

  );

}