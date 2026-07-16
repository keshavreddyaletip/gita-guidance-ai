import { GiLotus } from "react-icons/gi";

export default function AuthLogo() {
  return (
    <div className="text-center mb-8">

      <GiLotus className="mx-auto text-6xl text-yellow-500" />

      <h1 className="text-4xl font-bold text-indigo-900 mt-3">
        Gita Guidance
      </h1>

      <p className="text-gray-600 mt-2">
        Ancient Wisdom • Modern Guidance
      </p>

    </div>
  );
}