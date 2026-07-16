import chromadb
from sentence_transformers import SentenceTransformer

from app.knowledge_base.loader import get_all_verses

client = chromadb.PersistentClient(path="./gita_db")

collection = client.get_or_create_collection("gita")

model = SentenceTransformer("all-MiniLM-L6-v2")

verses = get_all_verses()

documents = []

ids = []

metadatas = []

for verse in verses:

    documents.append(

        verse["chapter_summary"]
        + " "
        + verse["word_meanings"]

    )

    ids.append(f'{verse["chapter"]}_{verse["verse"]}')

    metadatas.append(verse)

embeddings = model.encode(documents).tolist()

collection.add(

    documents=documents,

    embeddings=embeddings,

    ids=ids,

    metadatas=metadatas

)

print("Embeddings Created Successfully")