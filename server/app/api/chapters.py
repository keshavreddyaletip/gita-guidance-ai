from fastapi import APIRouter, HTTPException

from app.knowledge_base.loader import GITA

router = APIRouter()


# -----------------------------
# GET ALL CHAPTERS
# -----------------------------
@router.get("/chapters")
def get_all_chapters():

    chapters = {}

    for verse in GITA:

        chapter = verse["chapter"]

        if chapter not in chapters:

            chapters[chapter] = {

                "chapter": chapter,

                "chapter_name": verse["chapter_name"],

                "chapter_name_sanskrit": verse["chapter_name_sanskrit"],

                "chapter_meaning": verse["chapter_meaning"],

                "chapter_summary": verse["chapter_summary"],

                "total_verses": 0

            }

        chapters[chapter]["total_verses"] += 1

    return list(chapters.values())


# -----------------------------
# GET ONE CHAPTER
# -----------------------------
@router.get("/chapters/{chapter}")
def get_chapter(chapter: int):

    verses = [

        verse

        for verse in GITA

        if verse["chapter"] == chapter

    ]

    if not verses:

        raise HTTPException(
            status_code=404,
            detail="Chapter not found"
        )

    chapter_info = {

        "chapter": chapter,

        "chapter_name": verses[0]["chapter_name"],

        "chapter_name_sanskrit": verses[0]["chapter_name_sanskrit"],

        "chapter_meaning": verses[0]["chapter_meaning"],

        "chapter_summary": verses[0]["chapter_summary"],

        "total_verses": len(verses)

    }

    return {

        "chapter": chapter_info,

        "verses": verses

    }


# -----------------------------
# GET SINGLE VERSE
# -----------------------------
@router.get("/chapters/{chapter}/verses/{verse}")
def get_single_verse(chapter: int, verse: int):

    for item in GITA:

        if item["chapter"] == chapter and item["verse"] == verse:

            return item

    raise HTTPException(
        status_code=404,
        detail="Verse not found"
    )