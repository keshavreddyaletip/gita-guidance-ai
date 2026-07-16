import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";

import { db } from "../config/firebase";
import { auth } from "../config/firebase";

export default function useProfile() {

  const [profile, setProfile] = useState({
    name: "",
    dailyStreak: 0,
    readingLevel: "Beginner",
    versesCompleted: 0,
    chaptersCompleted: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function loadProfile() {

      try {

        const user = auth.currentUser;

        if (!user) {
          setLoading(false);
          return;
        }

        const docRef = doc(db, "users", user.uid);

        const snap = await getDoc(docRef);

        if (snap.exists()) {

          const data = snap.data();

          setProfile({

            name: data.name || "",

            dailyStreak:
              data.dailyStreak ??
              data.readingStreak ??
              0,

            readingLevel:
              data.readingLevel ||
              "Beginner",

            versesCompleted:
              data.versesCompleted || 0,

            chaptersCompleted:
              data.chaptersCompleted || 0,

          });

        }

      } catch (err) {

        console.error("Profile load failed:", err);

      } finally {

        setLoading(false);

      }

    }

    loadProfile();

  }, []);

  return {
    profile,
    loading,
    setProfile,
  };

}