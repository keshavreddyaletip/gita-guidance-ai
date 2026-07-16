import {
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";

import { db } from "../config/firebase";

export async function addFavorite(uid, chapter, verse) {
  const ref = doc(db, "users", uid);

  await updateDoc(ref, {
    favorites: arrayUnion({
      chapter: Number(chapter),
      verse: Number(verse),
    }),
  });
}

export async function removeFavorite(uid, chapter, verse) {
  const ref = doc(db, "users", uid);

  await updateDoc(ref, {
    favorites: arrayRemove({
      chapter: Number(chapter),
      verse: Number(verse),
    }),
  });
}

export async function getFavorites(uid) {
  const ref = doc(db, "users", uid);

  const snap = await getDoc(ref);

  if (!snap.exists()) return [];

  return snap.data().favorites || [];
}

export async function isFavorite(uid, chapter, verse) {
  const favorites = await getFavorites(uid);

  return favorites.some(
    (item) =>
      item.chapter === Number(chapter) &&
      item.verse === Number(verse)
  );
}