export default function DeepMeaningPlaceholder({ meaning }) {

  if (!meaning) {

    return (

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl shadow-lg p-8">

        <h2 className="text-3xl font-bold text-green-700">

          🧠 Deep Meaning

        </h2>

        <p className="mt-5 leading-9">

          Krishna will reveal the deepest wisdom
          hidden inside this verse.

        </p>

      </div>

    );

  }

  return (

    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl shadow-lg p-8">

      <h2 className="text-3xl font-bold text-green-700 mb-8">

        🧠 Deep Meaning

      </h2>

      <div className="space-y-6">

        <Section
          title="📖 Literal Meaning"
          text={meaning.literalMeaning}
        />

        <Section
          title="🌌 Hidden Spiritual Meaning"
          text={meaning.hiddenMeaning}
        />

        <Section
          title="🌍 Modern Life Meaning"
          text={meaning.modernMeaning}
        />

        <Section
          title="🕉 Why Krishna Said This"
          text={meaning.whyKrishnaSaidThis}
        />

        <Section
          title="✨ Moral"
          text={meaning.moral}
        />

      </div>

    </div>

  );

}

function Section({ title, text }) {

  return (

    <div className="bg-white rounded-2xl shadow p-5">

      <h3 className="font-bold text-green-700 mb-3">

        {title}

      </h3>

      <p className="leading-8">

        {text}

      </p>

    </div>

  );

}