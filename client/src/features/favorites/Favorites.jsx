import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";

import { auth } from "../../config/firebase";

import {

  getFavorites,

  removeFavorite

} from "../../services/favoriteService";

import {

  getVerse

} from "../../services/chapterService";

export default function Favorites() {

  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    loadFavorites();

  }, []);

  async function loadFavorites() {

    try {

      const refs = await getFavorites(

        auth.currentUser.uid

      );

      const verses = [];

      for (const item of refs) {

        const verse = await getVerse(

          item.chapter,

          item.verse

        );

        verses.push(verse);

      }

      setFavorites(verses);

    } catch (err) {

      console.log(err);

    }

    setLoading(false);

  }

  async function deleteFavorite(chapter, verse) {

    try {

      await removeFavorite(
        auth.currentUser.uid,
        Number(chapter),
        Number(verse)
      );

      setFavorites((prev) =>
        prev.filter(
          (item) =>
            !(
              item.chapter === Number(chapter) &&
              item.verse === Number(verse)
            )
        )
      );

    } catch (err) {

      console.log(err);

    }

  }

  const filtered = favorites.filter(

    item =>

      item.chapter_name

        .toLowerCase()

        .includes(search.toLowerCase())

      ||

      item.sanskrit

        .toLowerCase()

        .includes(search.toLowerCase())

      ||

      item.chapter

        .toString()

        .includes(search)

      ||

      item.verse

        .toString()

        .includes(search)

  );

  return (

    <MainLayout>

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-indigo-900">

          ❤️ Favorite Verses

        </h1>

        <p className="text-gray-500 mt-2">

          Keep your most inspiring verses in one place.

        </p>

        <input

          placeholder="Search chapter, verse or Sanskrit..."

          value={search}

          onChange={(e) => setSearch(e.target.value)}

          className="w-full mt-8 border rounded-xl p-4"

        />

        {loading &&

          <h2 className="mt-10">

            Loading...

          </h2>

        }

        {!loading && filtered.length === 0 && (

          <div className="bg-white rounded-2xl shadow-lg p-10 text-center mt-8">

            <h2 className="text-3xl">

              ❤️ No Favorite Verses

            </h2>

            <p className="mt-3 text-gray-500">

              Save verses while reading.

            </p>

          </div>

        )}

        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {filtered.map((verse) => (

            <div

              key={`${verse.chapter}-${verse.verse}`}

              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8"

            >

              <div className="flex justify-between">

                <div>

                  <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm">

                    Chapter {verse.chapter}

                  </span>

                  <span className="ml-3 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm">

                    Verse {verse.verse}

                  </span>

                </div>

                <button

                  onClick={() => deleteFavorite(

                    verse.chapter,

                    verse.verse

                  )}

                  className="text-red-500 hover:text-red-700 text-xl"

                >

                  🗑

                </button>

              </div>

              <h2 className="mt-6 text-2xl font-bold text-indigo-900">

                {verse.chapter_name}

              </h2>

              <p className="text-orange-500 mt-2">

                {verse.chapter_name_sanskrit}

              </p>

              <p className="mt-6 line-clamp-4 leading-8">

                {verse.sanskrit}

              </p>

              <button

                onClick={() => navigate(

                  `/chapters/${verse.chapter}/${verse.verse}`

                )}

                className="mt-8 bg-indigo-900 text-white px-6 py-3 rounded-xl hover:bg-indigo-800 transition"

              >

                📖 Read Verse

              </button>

            </div>

          ))}

        </div>

      </div>

    </MainLayout>

  );

}