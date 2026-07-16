export default function WizardButtons({

  step,

  totalSteps,

  onNext,

  onPrevious,

}) {

  return (

    <div className="flex justify-between mt-12">

      <button

        disabled={step===1}

        onClick={onPrevious}

        className={`px-8 py-3 rounded-xl transition

        ${step===1

          ? "bg-gray-300 cursor-not-allowed"

          : "bg-gray-700 text-white hover:bg-gray-800"

        }`}

      >

        ← Previous

      </button>

      <button

        onClick={onNext}

        className="px-8 py-3 bg-indigo-700 text-white rounded-xl hover:bg-indigo-800 transition"

      >

        {step===totalSteps ? "Finish 🎉" : "Next →"}

      </button>

    </div>

  );

}