export default function PreferencesCard({ profile }) {

  return (

    <div className="bg-white rounded-3xl shadow-lg p-8">

      <h2 className="text-2xl font-bold text-indigo-900">

        ⚙ Reading Preferences

      </h2>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div>

          <p className="text-gray-500">

            Language

          </p>

          <h3 className="font-bold text-lg">

            {profile.readingExperience?.language || "English"}

          </h3>

        </div>

        <div>

          <p className="text-gray-500">

            Guidance

          </p>

          <h3 className="font-bold text-lg">

            {profile.guidanceStyle}

          </h3>

        </div>

        <div>

          <p className="text-gray-500">

            Reading Level

          </p>

          <h3 className="font-bold text-lg">

            {profile.readingLevel}

          </h3>

        </div>

        <div>

          <p className="text-gray-500">

            Purpose

          </p>

          <h3 className="font-bold text-lg">

            {profile.purpose}

          </h3>

        </div>

      </div>

    </div>

  );

}