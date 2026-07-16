import json
import os

from dotenv import load_dotenv
from groq import Groq

from app.services.profile_service import ProfileService
from app.services.prompt_builder import build_prompt

from app.knowledge_base.loader import GITA
from app.rag.vector_search import search

load_dotenv()

client = Groq(
    api_key=os.getenv("GROQ_API_KEY")
)


class AIService:

    def __init__(self):

        self.client = client

    def get_verse(self, chapter: int, verse: int):

        for item in GITA:

            if (
                item["chapter"] == chapter
                and item["verse"] == verse
            ):
                return item

        return None

    def generate(self, uid, chapter, verse, problem):

        print("\n========== STEP 1 ==========")

        profile = ProfileService.get_profile(uid)

        print(profile)

        print("\n========== STEP 2 ==========")

        verse_data = self.get_verse(chapter, verse)

        print(verse_data)

        print("\n========== STEP 3 ==========")

        related = search(problem)

        print(related)

        print("\n========== STEP 4 ==========")

        prompt = build_prompt(

            profile=profile,

            verse=json.dumps(
                verse_data,
                indent=2,
                ensure_ascii=False
            ),

            related_verses=json.dumps(
                related,
                indent=2,
                ensure_ascii=False
            ),

            problem=problem

        )

        print(prompt[:1000])

        print("\n========== STEP 5 ==========")

        response = self.client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            temperature=0.5,
            max_completion_tokens=1800,
            messages=[
                {
                    "role": "system",
                    "content": "You are GitaMitra AI."
                },
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        content = response.choices[0].message.content.strip()

        print("\n========== RAW AI ==========\n")
        print(content)
        print("\n============================\n")

        # Remove markdown fences if present
        content = content.replace("```json", "")
        content = content.replace("```", "")
        content = content.strip()

        # Keep only the first complete JSON object
        first = content.find("{")
        last = content.rfind("}")

        if first != -1 and last != -1:
            content = content[first:last + 1]

        # Remove accidental extra closing braces
        while True:
            try:
                return json.loads(content)
            except json.JSONDecodeError:
                if content.endswith("}"):
                    content = content[:-1].rstrip()
                else:
                    raise