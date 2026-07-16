import StepCard from "../components/StepCard";

export default function WelcomeStep({ onNext }) {
  return (
    <StepCard>
      <div className="text-center">

        <div className="text-7xl mb-8">
          🪷
        </div>

        <h1 className="text-5xl font-bold text-indigo-900">

          Welcome to GitaMitra

        </h1>

        <p className="mt-8 text-xl text-gray-600 leading-9 max-w-3xl mx-auto">

          The Bhagavad Gita speaks differently to every individual.

          <br /><br />

          Before we begin your spiritual journey,
          let's understand a little about you.

          <br /><br />

          Your profile helps our AI explain every verse
          according to your life, profession,
          goals and current challenges.

        </p>

        <button
          onClick={onNext}
          className="mt-12 bg-indigo-700 hover:bg-indigo-800 text-white px-10 py-4 rounded-2xl text-lg transition"
        >

          Begin Your Journey →

        </button>

      </div>
    </StepCard>
  );
}