import json
from groq import Groq

from app.core.config import GROQ_API_KEY

client = Groq(api_key=GROQ_API_KEY)


def ask_gpt(problem, verses):

    context = ""

    for verse in verses:
        context += f"""
Chapter: {verse['chapter']}
Verse: {verse['verse']}

Sanskrit:
{verse['sanskrit']}

Transliteration:
{verse['transliteration']}

Word Meanings:
{verse['word_meanings']}

Chapter Summary:
{verse['chapter_summary']}

--------------------------------
"""

    prompt = f"""
You are Lord Krishna and a Bhagavad Gita expert.

A user says:

{problem}

Below are the most relevant Bhagavad Gita verses retrieved from the knowledge base.

{context}

Choose ONLY ONE verse that best answers the user's problem.

Return ONLY valid JSON.

{{
"sloka":"",
"meaning":"",
"moral":"",
"personalized_guidance":"",
"reason":""
}}
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are an expert in the Bhagavad Gita. Always return valid JSON only."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.4,
        response_format={"type": "json_object"}
    )

    return json.loads(response.choices[0].message.content)