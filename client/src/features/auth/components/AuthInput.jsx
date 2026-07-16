export default function AuthInput({
  label,
  type = "text",
  placeholder,
}) {
  return (
    <div className="mb-5">

      <label className="block mb-2 font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          border
          border-gray-300
          rounded-xl
          px-4
          py-3
          focus:outline-none
          focus:ring-2
          focus:ring-indigo-500
        "
      />

    </div>
  );
}