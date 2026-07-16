export default function LanguageCard({

  language,

  selected,

  onClick,

}) {

  return (

    <div

      onClick={onClick}

      className={`cursor-pointer rounded-2xl p-6 border-2 transition duration-300

      ${selected

        ? "border-indigo-700 bg-indigo-50"

        : "border-gray-200 hover:border-indigo-400"

      }`}

    >

      <h2 className="text-xl font-bold">

        {language}

      </h2>

    </div>

  );

}