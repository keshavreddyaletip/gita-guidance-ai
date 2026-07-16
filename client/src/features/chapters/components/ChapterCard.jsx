import { useNavigate } from "react-router-dom";

export default function ChapterCard({ chapter }) {

  const navigate = useNavigate();

  console.log(chapter);

  return (

    <div
      onClick={() => navigate(`/chapters/${chapter.chapter}`)}
      className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer hover:shadow-2xl transition duration-300 hover:scale-105"
    >

      <h2 className="text-2xl font-bold text-indigo-900">
        Chapter {chapter.chapter}
      </h2>

      <h3 className="text-xl mt-3 font-semibold">
        {chapter.chapter_name}
      </h3>

      <p className="text-orange-600 mt-1">
        {chapter.chapter_name_sanskrit}
      </p>

      <p className="text-gray-500 mt-3">
        {chapter.chapter_meaning}
      </p>

      <div className="mt-5 flex justify-between">

        <span className="text-indigo-600 font-semibold">
          {chapter.total_verses} Verses
        </span>

        <span>→</span>

      </div>

    </div>

  );

}