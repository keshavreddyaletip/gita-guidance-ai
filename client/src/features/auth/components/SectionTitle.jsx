export default function SectionTitle({

  icon,

  title,

  subtitle

}) {

  return (

    <div className="mb-8">

      <h1 className="text-4xl font-bold text-indigo-900">

        {icon} {title}

      </h1>

      <p className="mt-3 text-gray-500 text-lg">

        {subtitle}

      </p>

    </div>

  );

}