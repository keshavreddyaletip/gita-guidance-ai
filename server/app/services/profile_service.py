from app.config.firebase import db


class ProfileService:

    @staticmethod
    def get_profile(uid: str):

        print("\n========== UID RECEIVED ==========")
        print(uid)

        doc = db.collection("users").document(uid).get()

        print("Document Exists:", doc.exists)

        if not doc.exists:
            return None

        print(doc.to_dict())

        return doc.to_dict()