import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";
import ChapterCard from "./components/ChapterCard";
import { getAllChapters } from "../../services/chapterService";

export default function Chapters() {

  const [chapters, setChapters] = useState([]);

  useEffect(() => {

    async function load() {

      console.log("STEP 1");

      try {

        const data = await getAllChapters();

        console.log("STEP 2");
        console.log(data);

        setChapters(data);

        console.log("STEP 3");

      } catch (err) {

        console.log("ERROR");
        console.log(err);

      }

    }

    load();

  }, []);

  console.log("RENDER");
  console.log(chapters);

  return (

    <MainLayout>

      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chapters.map((chapter) => (
          <ChapterCard
            key={chapter.chapter}
            chapter={chapter}
          />
        ))}
      </div>

    </MainLayout>

  );

}