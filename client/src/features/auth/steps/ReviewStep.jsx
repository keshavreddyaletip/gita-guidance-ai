import StepCard from "../components/StepCard";
import SectionTitle from "../components/SectionTitle";

export default function ReviewStep({ profile }) {

  return (

    <StepCard>

      <SectionTitle
        icon="🪷"
        title="Your Spiritual Profile"
        subtitle="Review your profile before beginning your journey."
      />

      <div className="space-y-6">

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-indigo-50 rounded-2xl p-5">

            <h3 className="font-bold text-indigo-900 mb-2">
              👤 Personal
            </h3>

            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Age:</strong> {profile.age}</p>
            <p><strong>Gender:</strong> {profile.gender}</p>
            <p><strong>City:</strong> {profile.city}</p>
            <p><strong>Country:</strong> {profile.country}</p>

          </div>

          <div className="bg-purple-50 rounded-2xl p-5">

            <h3 className="font-bold text-purple-900 mb-2">
              🎓 Education
            </h3>

            <p><strong>Qualification:</strong> {profile.qualification}</p>
            <p><strong>Occupation:</strong> {profile.occupation}</p>
            <p><strong>Organization:</strong> {profile.organization}</p>

          </div>

        </div>

        <div className="bg-green-50 rounded-2xl p-5">

          <h3 className="font-bold text-green-800 mb-3">
            🌍 Reading Experience
          </h3>

          <p>{profile.preferredLanguage}</p>

          <h3 className="font-bold text-green-800 mt-5 mb-2">
            🧠 Guidance Style
          </h3>

          <p>{profile.guidanceStyle}</p>

        </div>

        <div className="bg-orange-50 rounded-2xl p-5">

          <h3 className="font-bold text-orange-800 mb-3">

            🎯 Goals

          </h3>

          <div className="flex flex-wrap gap-2">

            {profile.goals.map(goal=>(

              <span
                key={goal}
                className="px-3 py-2 rounded-full bg-orange-200"
              >

                {goal}

              </span>

            ))}

          </div>

        </div>

        <div className="bg-red-50 rounded-2xl p-5">

          <h3 className="font-bold text-red-800 mb-3">

            💭 Current Challenges

          </h3>

          <div className="flex flex-wrap gap-2">

            {profile.problems.map(problem=>(

              <span
                key={problem}
                className="px-3 py-2 rounded-full bg-red-200"
              >

                {problem}

              </span>

            ))}

          </div>

        </div>

        <div className="bg-yellow-50 rounded-2xl p-5">

          <h3 className="font-bold text-yellow-800 mb-3">

            🪷 Tell Krishna

          </h3>

          <p className="leading-8">

            {profile.customProblem || "No personal message provided."}

          </p>

        </div>

        <div className="bg-blue-50 rounded-2xl p-5">

          <h3 className="font-bold text-blue-900 mb-3">

            ❤️ Interests

          </h3>

          <div className="flex flex-wrap gap-2">

            {profile.interests.map(item=>(

              <span
                key={item}
                className="px-3 py-2 rounded-full bg-blue-200"
              >

                {item}

              </span>

            ))}

          </div>

        </div>

      </div>

    </StepCard>

  );

}