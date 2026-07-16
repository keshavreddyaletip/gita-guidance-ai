from app.config.firebase import db


class ProfileRepository:

    @staticmethod
    def get(uid: str):

        doc = db.collection("users").document(uid).get()

        if not doc.exists:
            return None

        return doc.to_dict()

    @staticmethod
    def update(uid: str, data: dict):

        db.collection("users").document(uid).set(
            data,
            merge=True
        )

        return True