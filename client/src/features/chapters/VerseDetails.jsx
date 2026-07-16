import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";

import { getVerse } from "../../services/chapterService";
import { auth } from "../../config/firebase";

import {
  addFavorite,
  removeFavorite,
  isFavorite,
} from "../../services/favoriteService";

import VerseHeader from "./components/verse/VerseHeader";
import SanskritCard from "./components/verse/SanskritCard";
import TranslationCard from "./components/verse/TranslationCard";
import TransliterationCard from "./components/verse/TransliterationCard";
import WordMeaningCard from "./components/verse/WordMeaningCard";
import VerseActions from "./components/verse/VerseActions";

import WriteToKrishna from "./components/verse/WriteToKrishna";

import StoryPlaceholder from "./components/verse/StoryPlaceholder";
import DeepMeaningPlaceholder from "./components/verse/DeepMeaningPlaceholder";
import GuidancePlaceholder from "./components/verse/GuidancePlaceholder";
import ReflectionPlaceholder from "./components/verse/ReflectionPlaceholder";

export default function VerseDetails() {

  const { chapter, verse } = useParams();

  const [data, setData] = useState(null);
  const [favorite, setFavorite] = useState(false);

  // AI Response
  const [aiData, setAiData] = useState(null);

  useEffect(() => {

    async function load() {

      const res = await getVerse(chapter, verse);

      setData(res);

      if (auth.currentUser) {

        const fav = await isFavorite(
          auth.currentUser.uid,
          Number(chapter),
          Number(verse)
        );

        setFavorite(fav);

      }

    }

    load();

  }, [chapter, verse]);

  async function handleFavorite() {

    if (!auth.currentUser) return;

    if (favorite) {

      await removeFavorite(
        auth.currentUser.uid,
        Number(chapter),
        Number(verse)
      );

      setFavorite(false);

    } else {

      await addFavorite(
        auth.currentUser.uid,
        Number(chapter),
        Number(verse)
      );

      setFavorite(true);

    }

  }

  function previousVerse() {

    if (Number(verse) > 1) {

      window.location.href = `/chapters/${chapter}/${Number(verse) - 1}`;

    }

  }

  function nextVerse() {

    window.location.href = `/chapters/${chapter}/${Number(verse) + 1}`;

  }

  if (!data) {

    return (

      <MainLayout>

        <div className="text-center py-32">

          Loading...

        </div>

      </MainLayout>

    );

  }

  return (

    <MainLayout>

      <div className="max-w-6xl mx-auto py-10 px-6 space-y-8">

        <VerseHeader
          chapter={data.chapter}
          verse={data.verse}
          onPrevious={previousVerse}
          onNext={nextVerse}
        />

        <SanskritCard
          sanskrit={data.sanskrit}
        />

        <TranslationCard
          translation={
            data.translation ||
            data.meaning ||
            "Translation coming soon."
          }
        />

        <TransliterationCard
          transliteration={data.transliteration}
        />

        <WordMeaningCard
          wordMeanings={data.word_meanings}
        />

        <VerseActions
          favorite={favorite}
          onFavorite={handleFavorite}
        />

        {/* Krishna AI */}

        <WriteToKrishna
          chapter={data.chapter}
          verse={data.verse}
          onResponse={setAiData}
        />

        {/* Story */}

        {
          aiData ?

            <StoryPlaceholder
              story={aiData.story}
            />

            :

            <StoryPlaceholder />

        }

        {/* Deep Meaning */}

        {
          aiData ?

            <DeepMeaningPlaceholder
              meaning={aiData.deepMeaning}
            />

            :

            <DeepMeaningPlaceholder />

        }

        {/* Personalized Guidance */}

        {
          aiData ?

            <GuidancePlaceholder
              guidance={aiData.guidance}
            />

            :

            <GuidancePlaceholder />

        }

        {/* Reflection */}

        {
          aiData ?

            <ReflectionPlaceholder
              reflection={aiData.reflection}
              action={aiData.todayAction}
            />

            :

            <ReflectionPlaceholder />

        }

      </div>

    </MainLayout>

  );

}