import api from "./api";

export async function getAllChapters() {
  const res = await api.get("/chapters");
  return res.data;
}

export async function getChapter(chapter) {
  const res = await api.get(`/chapters/${chapter}`);
  return res.data;
}

export async function getVerse(chapter, verse) {
  const res = await api.get(`/chapters/${chapter}/verses/${verse}`);
  return res.data;
}