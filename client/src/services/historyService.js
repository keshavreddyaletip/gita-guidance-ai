import {
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

import { db } from "../config/firebase";

export async function saveHistory(uid, historyItem) {
  await updateDoc(doc(db, "users", uid), {
    history: arrayUnion(historyItem),
  });
}