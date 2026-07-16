export default function ProgressBar({ currentStep, totalSteps }) {

  const percentage = (currentStep / totalSteps) * 100;

  return (

    <div className="mb-10">

      <div className="flex justify-between mb-3">

        <h2 className="text-lg font-semibold text-gray-700">

          Step {currentStep} of {totalSteps}

        </h2>

        <span className="text-indigo-700 font-semibold">

          {Math.round(percentage)}%

        </span>

      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

        <div
          className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />

      </div>

    </div>

  );

}