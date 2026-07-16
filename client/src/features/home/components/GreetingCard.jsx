export default function GreetingCard({ greeting }) {

  return (

    <div className="rounded-3xl bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 text-white p-10 shadow-xl">

      <h1 className="text-5xl font-bold">

        {greeting.text}

      </h1>

      <p className="mt-6 text-indigo-100 text-xl">

        Every day is another opportunity to practice wisdom.

      </p>

    </div>

  );

}