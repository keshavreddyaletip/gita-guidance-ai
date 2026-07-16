import firebase_admin
from firebase_admin import credentials, firestore

# Prevent multiple initializations
if not firebase_admin._apps:
    cred = credentials.Certificate("app/config/serviceAccountKey.json")
    firebase_admin.initialize_app(cred)

db = firestore.client()