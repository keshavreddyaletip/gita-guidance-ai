export default function AuthButton({ text }) {
  return (
    <button
      className="w-full bg-indigo-900 text-white py-3 rounded-xl
                 hover:bg-indigo-800 transition duration-300
                 font-semibold text-lg"
    >
      {text}
    </button>
  );
}