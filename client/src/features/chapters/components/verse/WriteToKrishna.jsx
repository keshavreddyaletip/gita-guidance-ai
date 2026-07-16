import { useState } from "react";
import { auth } from "../../../../config/firebase";
import { getAIGuidance } from "../../../../services/aiService";

export default function WriteToKrishna({
  chapter,
  verse,
  onResponse,
}) {

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAskKrishna() {

    if (!message.trim()) {
      alert("Please describe your situation.");
      return;
    }

    setLoading(true);

    try {

      const result = await getAIGuidance({

        uid: auth.currentUser.uid,

        chapter,

        verse,

        problem: message,

      });

      onResponse(result);

    } catch (err) {

      console.error(err);

      alert("Unable to generate guidance.");

    }

    setLoading(false);

  }

  return (

    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

      <div className="flex items-center gap-3 mb-6">

        <span className="text-4xl">💙</span>

        <h2 className="text-3xl font-bold text-indigo-900">

          Write to Krishna

        </h2>

      </div>

      <p className="text-gray-500 mb-5">

        Share what's on your heart today.

      </p>

      <textarea

        rows={6}

        value={message}

        onChange={(e) => setMessage(e.target.value)}

        placeholder="Dear Krishna..."

        className="w-full rounded-2xl border border-gray-300 p-5 resize-none outline-none focus:border-indigo-600"

      />

      <button

        onClick={handleAskKrishna}

        disabled={loading}

        className="mt-6 bg-indigo-700 hover:bg-indigo-800 transition text-white px-8 py-3 rounded-xl"

      >

        {loading ? "Krishna is thinking..." : "Ask Krishna"}

      </button>

    </div>

  );

}