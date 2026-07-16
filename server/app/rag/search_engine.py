from app.knowledge_base.loader import get_all_verses


class GitaSearchEngine:

    @staticmethod
    def search(problem: str):

        verses = get_all_verses()

        keywords = problem.lower().split()

        scores = []

        for verse in verses:

            text = (
                verse["chapter_summary"]
                + " "
                + verse["word_meanings"]
                + " "
                + verse["sanskrit"]
            ).lower()

            score = 0

            for keyword in keywords:

                if keyword in text:

                    score += 1

            scores.append((score, verse))

        scores.sort(key=lambda x: x[0], reverse=True)

        return [v for _, v in scores[:5]]