import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../config/firebase";

export async function updateDailyStreak(uid) {

  const ref = doc(db, "users", uid);

  const snap = await getDoc(ref);

  if (!snap.exists()) return;

  const data = snap.data();

  const today = new Date();

  const last = data.lastLogin
    ? new Date(data.lastLogin)
    : today;

  const diff =
    Math.floor(
      (today - last) /
      (1000 * 60 * 60 * 24)
    );

  let streak = data.streak || 1;

  if (diff === 1)
    streak++;

  if (diff > 1)
    streak = 1;

  await updateDoc(ref, {

    streak,

    longestStreak: Math.max(
      streak,
      data.longestStreak || 1
    ),

    lastLogin: today.toISOString()

  });

}