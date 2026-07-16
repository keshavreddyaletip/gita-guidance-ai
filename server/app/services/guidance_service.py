from app.rag.vector_search import search
from app.services.openai_service import ask_gpt


class GuidanceService:

    @staticmethod
    def generate(problem: str):

        # Get top 5 relevant verses from ChromaDB
        verses = search(problem)

        # Ask GPT using those verses
        response = ask_gpt(problem, verses)

        return response