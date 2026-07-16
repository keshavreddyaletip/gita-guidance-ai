export default function ProfileHeader({ profile }) {

  return (

    <div className="bg-gradient-to-r from-indigo-700 to-purple-700 rounded-3xl text-white p-10 shadow-xl">

      <div className="flex flex-col md:flex-row items-center gap-8">

        <div className="w-28 h-28 rounded-full bg-white text-indigo-700 flex items-center justify-center text-5xl font-bold">

          {profile.name?.charAt(0) || "K"}

        </div>

        <div className="flex-1">

          <h1 className="text-4xl font-bold">

            {profile.name}

          </h1>

          <p className="mt-2 text-indigo-100">

            {profile.occupation}

          </p>

          <div className="mt-6 flex flex-wrap gap-3">

            <span className="bg-white/20 px-4 py-2 rounded-full">

              🪷 {profile.readingLevel}

            </span>

            <span className="bg-white/20 px-4 py-2 rounded-full">

              🌍 {profile.readingExperience?.language || "English"}

            </span>

            <span className="bg-white/20 px-4 py-2 rounded-full">

              🎭 {profile.guidanceStyle}

            </span>

          </div>

        </div>

      </div>

    </div>

  );

}