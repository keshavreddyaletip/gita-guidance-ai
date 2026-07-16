import { useGita } from "../../../context/GitaContext";
import { chapterVerseCount } from "../../../constants/gitaChapters";

export default function ChapterSidebar() {
  const {
    selectedChapter,
    setSelectedChapter,
    setSelectedVerse,
  } = useGita();

  const chapters = Object.keys(chapterVerseCount);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 h-[82vh]">

      <div className="flex items-center justify-between mb-5">

        <h2 className="text-xl font-bold text-indigo-900">
          📖 Chapters
        </h2>

        <span className="text-yellow-500 text-xl">
          ⭐
        </span>

      </div>

      <div className="space-y-2 overflow-y-auto h-[70vh]">

        {chapters.map((chapter) => (

          <button
            key={chapter}
            onClick={() => {
              setSelectedChapter(Number(chapter));
              setSelectedVerse(null);
            }}
            className={`w-full rounded-xl p-3 transition text-left flex justify-between items-center ${
              selectedChapter === Number(chapter)
                ? "bg-indigo-900 text-white"
                : "hover:bg-indigo-100"
            }`}
          >
            <span>
              Chapter {chapter}
            </span>

            <span className="text-yellow-400">
              ☆
            </span>

          </button>

        ))}

      </div>

    </div>
  );
}