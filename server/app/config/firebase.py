import os
import json

import firebase_admin

from firebase_admin import credentials, firestore


if not firebase_admin._apps:

    if os.getenv("FIREBASE_CREDENTIALS"):

        cred_dict = json.loads(
            os.getenv("FIREBASE_CREDENTIALS")
        )

        cred = credentials.Certificate(cred_dict)

    else:

        cred = credentials.Certificate(
            "app/config/serviceAccountKey.json"
        )

    firebase_admin.initialize_app(cred)

db = firestore.client()