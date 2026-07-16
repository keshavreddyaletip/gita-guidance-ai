import { useEffect, useState } from "react";

export default function useDailyVerse() {

  const [dailyVerse, setDailyVerse] = useState({

    chapter: 2,

    verse: 47,

    text:

      "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",

  });

  useEffect(() => {

    // Backend API later

  }, []);

  return {

    dailyVerse,

  };

}