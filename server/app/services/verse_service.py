from app.models.response_models import VerseGuidanceResponse


def explain_verse(chapter: int, verse: int):

    return VerseGuidanceResponse(

        sloka=f"Bhagavad Gita {chapter}.{verse}",

        meaning="Sample meaning of the selected verse.",

        moral="Sample moral.",

        explanation="50% explanation of the selected verse + 50% relation to the whole Bhagavad Gita.",

        personalized_guidance="This teaching can be applied in your daily life."

    )