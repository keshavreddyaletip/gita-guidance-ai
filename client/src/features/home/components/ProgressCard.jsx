export default function ProgressCard({ progress }) {

  const percentage = Math.round(

    (progress.completed / progress.total) * 100

  );

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-indigo-900">

        📈 Reading Progress

      </h2>

      <div className="mt-8 h-4 bg-gray-200 rounded-full overflow-hidden">

        <div

          className="bg-indigo-700 h-full"

          style={{

            width: `${percentage}%`

          }}

        />

      </div>

      <p className="mt-5">

        {progress.completed}

        /

        {progress.total}

        verses completed

      </p>

    </div>

  );

}