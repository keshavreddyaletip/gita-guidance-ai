export default function InputField({

  label,

  value,

  onChange,

  placeholder,

  type = "text",

}) {

  return (

    <div className="mb-6">

      <label className="block mb-2 font-semibold text-gray-700">

        {label}

      </label>

      <input

        type={type}

        value={value}

        onChange={onChange}

        placeholder={placeholder}

        className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"

      />

    </div>

  );

}