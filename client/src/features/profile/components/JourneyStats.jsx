export default function JourneyStats({ profile }) {

  const stats = [

    {
      icon: "🔥",
      title: "Reading Streak",
      value: profile.dailyStreak || 0,
      unit: "Days",
    },

    {
      icon: "📖",
      title: "Verses Read",
      value: profile.completedVerses?.length || 0,
      unit: "Verses",
    },

    {
      icon: "❤️",
      title: "Favorites",
      value: profile.favoriteVerses?.length || 0,
      unit: "Saved",
    },

    {
      icon: "📚",
      title: "Chapters",
      value: profile.completedChapters?.length || 0,
      unit: "Completed",
    },

  ];

  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

      {stats.map((item) => (

        <div
          key={item.title}
          className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:-translate-y-1 transition"
        >

          <div className="text-4xl">

            {item.icon}

          </div>

          <h2 className="mt-4 font-bold text-indigo-900">

            {item.title}

          </h2>

          <h1 className="text-4xl font-bold mt-5">

            {item.value}

          </h1>

          <p className="text-gray-500">

            {item.unit}

          </p>

        </div>

      ))}

    </div>

  );

}