import MainLayout from "../../components/layout/MainLayout";

import GreetingCard from "./components/GreetingCard";
import DailyVerseCard from "./components/DailyVerseCard";
import ContinueReadingCard from "./components/ContinueReadingCard";
import ProgressCard from "./components/ProgressCard";
import StreakCard from "./components/StreakCard";
import QuickActions from "./components/QuickActions";

import useGreeting from "../../hooks/useGreeting";
import useProfile from "../../hooks/useProfile";
import useDailyVerse from "../../hooks/useDailyVerse";
import useReadingProgress from "../../hooks/useReadingProgress";

export default function Home() {

  const { profile } = useProfile();

  const greeting = useGreeting(profile.name);

  const { dailyVerse } = useDailyVerse();

  const { progress } = useReadingProgress();

  const quotes = [

    "Every day is another opportunity to practice wisdom.",

    "Small efforts made every day lead to great transformation.",

    "Peace begins when expectations end.",

    "Your duty today shapes your destiny tomorrow.",

    "Every verse you read is a step closer to inner peace.",

    "The mind becomes powerful when guided by wisdom.",

    "Let your actions be greater than your worries.",

    "Today's discipline creates tomorrow's success.",

  ];

  const todayQuote = quotes[
    new Date().getDate() % quotes.length
  ];

  return (

    <MainLayout>

      <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">

        {/* Greeting */}

        <GreetingCard greeting={greeting} />

        {/* Quote */}

        <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl shadow-md p-8 border border-orange-100">

          <h2 className="text-xl font-bold text-orange-600">

            🌸 Quote of the Day

          </h2>

          <p className="mt-5 text-gray-700 italic text-lg">

            "{todayQuote}"

          </p>

        </div>

        {/* Top Cards */}

        <div className="grid lg:grid-cols-2 gap-6">

          <DailyVerseCard verse={dailyVerse} />

          <StreakCard streak={profile.dailyStreak} />

        </div>

        {/* Middle Cards */}

        <div className="grid lg:grid-cols-2 gap-6">

          <ContinueReadingCard />

          <ProgressCard progress={progress} />

        </div>

        {/* Quick Actions */}

        <QuickActions />

      </div>

    </MainLayout>

  );

}