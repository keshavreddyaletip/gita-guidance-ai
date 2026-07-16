import chromadb
from sentence_transformers import SentenceTransformer

client = chromadb.PersistentClient(path="./gita_db")

collection = client.get_collection("gita")

model = SentenceTransformer("all-MiniLM-L6-v2")


def search(problem, n_results=5):

    embedding = model.encode(problem).tolist()

    results = collection.query(
        query_embeddings=[embedding],
        n_results=n_results
    )

    return results["metadatas"][0]