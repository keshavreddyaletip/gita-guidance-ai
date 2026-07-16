export default function StoryPlaceholder({ story }) {

  // Default UI before AI response
  if (!story) {
    return (
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl shadow-lg p-8 border border-indigo-100">

        <h2 className="text-3xl font-bold text-indigo-900">
          🎭 Story Based Learning
        </h2>

        <p className="mt-5 leading-9 text-gray-700">
          Tell Krishna about your situation and receive a beautiful
          personalized conversation that explains this verse using
          real-life examples.
        </p>

      </div>
    );
  }

  return (

    <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl shadow-lg p-8 border border-indigo-100">

      <h2 className="text-3xl font-bold text-indigo-900 mb-8">

        🎭 Story Based Learning

      </h2>

      {/* Story Title */}

      <h3 className="text-2xl font-semibold text-center text-indigo-700 mb-10">

        {story.title}

      </h3>

      {/* Conversation */}

      <div className="space-y-6">

        {story.conversation.map((item, index) => (

          <div
            key={index}
            className="flex flex-col"
          >

            <div className="font-bold text-indigo-700 mb-2">

              {item.speaker}

            </div>

            <div className="bg-white rounded-2xl shadow p-5 leading-8 text-gray-700">

              {item.message}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}