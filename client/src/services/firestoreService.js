import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../config/firebase";

// Save profile after onboarding
export async function saveUserProfile(uid, data) {
  await setDoc(doc(db, "users", uid), {
    ...data,
    createdAt: serverTimestamp(),

    streak: 1,
    longestStreak: 1,
    lastLogin: new Date().toISOString(),

    favorites: [],
    history: [],
  });
}

// Get user profile
export async function getUserProfile(uid) {
  const snap = await getDoc(doc(db, "users", uid));

  if (snap.exists()) {
    return snap.data();
  }

  return null;
}