import { useNavigate } from "react-router-dom";

export default function VerseCard({ verse }) {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/chapters/${verse.chapter}/${verse.verse}`)}
      className="bg-white rounded-2xl shadow-md p-6 cursor-pointer"
    >
      <h2>Verse {verse.verse}</h2>
      <p>{verse.sanskrit}</p>
    </div>
  );
}