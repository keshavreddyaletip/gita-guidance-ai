import json
import os

BASE_DIR = os.path.dirname(__file__)

DATA_DIR = os.path.join(BASE_DIR, "data")

with open(
    os.path.join(DATA_DIR, "bhagavad_gita.json"),
    encoding="utf-8"
) as f:
    GITA = json.load(f)


def get_all_verses():
    return GITA