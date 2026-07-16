import VerseCard from "./VerseCard";

export default function VerseGrid({ verseCount }) {
  const verses = Array.from(
    { length: verseCount },
    (_, i) => i + 1
  );

  return (
    <div className="grid grid-cols-6 gap-3">
      {verses.map((verse) => (
        <VerseCard
          key={verse}
          verse={verse}
        />
      ))}
    </div>
  );
}