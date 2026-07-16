import { useEffect, useState } from "react";
import MainLayout from "../../components/layout/MainLayout";

import { auth } from "../../config/firebase";
import { getUserProfile } from "../../services/firestoreService";

export default function Journey() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    async function loadJourney() {

      if (!auth.currentUser) return;

      const profile = await getUserProfile(auth.currentUser.uid);

      if (profile?.history) {

        const sorted = [...profile.history].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setHistory(sorted);

      }

    }

    loadJourney();

  }, []);

  return (

    <MainLayout>

      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-indigo-900 mb-8">

          📜 My Journey

        </h1>

        {history.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

            <h2 className="text-2xl font-semibold">

              No conversations yet

            </h2>

            <p className="text-gray-500 mt-3">

              Start talking with Lord Krishna and your journey will appear here.

            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {history.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6"
              >

                <p className="text-gray-400 text-sm">

                  {new Date(item.createdAt).toLocaleString()}

                </p>

                <h2 className="font-bold text-indigo-900 mt-4">

                  ❓ Your Question

                </h2>

                <p className="mt-2">

                  {item.question}

                </p>

                <h2 className="font-bold text-indigo-900 mt-6">

                  📜 Sloka

                </h2>

                <p className="mt-2">

                  {item.sloka}

                </p>

                <h2 className="font-bold text-indigo-900 mt-6">

                  🌿 Krishna's Guidance

                </h2>

                <p className="mt-2">

                  {item.personalized_guidance}

                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </MainLayout>

  );

}