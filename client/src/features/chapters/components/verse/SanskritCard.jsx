export default function SanskritCard({ sanskrit }) {

  return (

    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10">

      <div className="flex items-center gap-3 mb-8">

        <span className="text-4xl">

          📜

        </span>

        <h2 className="text-3xl font-bold text-indigo-900">

          Sanskrit Verse

        </h2>

      </div>

      <div className="bg-orange-50 rounded-2xl p-10">

        <p className="text-4xl leading-loose text-center whitespace-pre-line font-serif">

          {sanskrit}

        </p>

      </div>

    </div>

  );

}