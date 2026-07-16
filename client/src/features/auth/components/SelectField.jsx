export default function SelectField({

  label,

  value,

  onChange,

  options,

}) {

  return (

    <div className="mb-6">

      <label className="block mb-2 font-semibold text-gray-700">

        {label}

      </label>

      <select

        value={value}

        onChange={onChange}

        className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-indigo-500"

      >

        {options.map(option=>(

          <option

            key={option}

            value={option}

          >

            {option}

          </option>

        ))}

      </select>

    </div>

  );

}