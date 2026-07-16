import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import { getChapter } from "../../services/chapterService";
import VerseCard from "./components/VerseCard";

export default function ChapterDetails() {

  const { chapter } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {

    async function load() {

      try {

        console.log("Loading Chapter:", chapter);

        const res = await getChapter(chapter);

        console.log("Response:");
        console.log(res);

        setData(res);

      } catch (err) {

        console.log("ERROR");
        console.log(err);

      }

    }

    load();

  }, [chapter]);

  if (!data) return <div>Loading...</div>;

  return (

    <MainLayout>

      <div className="p-8">

        <h1>
          Chapter {data.chapter.chapter}
        </h1>

        <h2>
          {data.chapter.chapter_name}
        </h2>

        <p>
          Total Verses : {data.verses.length}
        </p>

        <hr />

        <div className="grid md:grid-cols-2 gap-5 mt-10">

          {data.verses.map((verse) => (

            <VerseCard
              key={verse.verse}
              verse={verse}
            />

          ))}

        </div>

      </div>

    </MainLayout>

  );



}