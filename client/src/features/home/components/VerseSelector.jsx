import { useGita } from "../../../context/GitaContext";
import { chapterVerseCount } from "../../../constants/gitaChapters";

export default function VerseSelector() {

  const {
    selectedChapter,
    selectedVerse,
    setSelectedVerse,
  } = useGita();

  if (!selectedChapter) {
    return null;
  }

  const verses = Array.from(
    {
      length: chapterVerseCount[selectedChapter],
    },
    (_, i) => i + 1
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg p-5">

      <div className="flex justify-between items-center mb-4">

        <h2 className="text-xl font-bold">
          📜 Verses
        </h2>

        <span className="text-yellow-500">
          ⭐
        </span>

      </div>

      <div className="grid grid-cols-4 gap-2 max-h-[350px] overflow-y-auto">

        {verses.map((verse) => (

          <button
            key={verse}
            onClick={() => setSelectedVerse(verse)}
            className={`rounded-lg p-2 transition ${
              selectedVerse === verse
                ? "bg-yellow-500 text-white"
                : "bg-indigo-900 text-white hover:bg-indigo-700"
            }`}
          >
            {verse}
          </button>

        ))}

      </div>

    </div>
  );
}