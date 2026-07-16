export default function ReflectionPlaceholder({

  reflection,

  action,

}) {

  if (!reflection) {

    return (

      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-pink-700">

          💭 Reflection

        </h2>

        <p className="mt-5 leading-9">

          Krishna will help you reflect on this teaching
          through meaningful questions.

        </p>

      </div>

    );

  }

  return (

    <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-pink-700 mb-8">

        💭 Reflection

      </h2>

      <div className="space-y-5">

        {reflection.map((question, index)=>(

          <div

            key={index}

            className="bg-white rounded-2xl shadow p-5"

          >

            <h3 className="font-bold text-pink-700 mb-2">

              Reflection {index+1}

            </h3>

            <p>

              {question}

            </p>

          </div>

        ))}

      </div>

      <div className="bg-indigo-50 rounded-2xl mt-8 p-6">

        <h3 className="font-bold text-indigo-700 mb-3">

          🙏 Today's Sadhana

        </h3>

        <p>

          {action}

        </p>

      </div>

    </div>

  );

}