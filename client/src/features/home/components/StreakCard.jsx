export default function StreakCard({ streak }) {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-orange-500">

        🔥 Reading Streak

      </h2>

      <h1 className="text-6xl font-bold mt-8">

        {streak}

      </h1>

      <p className="mt-3 text-gray-500">

        Days

      </p>

    </div>

  );

}