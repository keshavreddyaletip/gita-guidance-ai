import { useState } from "react";
import api from "../../../services/api";

import { auth } from "../../../config/firebase";
import { saveHistory } from "../../../services/historyService";

export default function ProblemInput({ setGuidance }) {

  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {

    if (!problem.trim()) {
      alert("Please enter your problem.");
      return;
    }

    setLoading(true);

    try {

      const res = await api.post("/guidance", {
        problem,
      });

      // Display AI Guidance
      setGuidance(res.data);

      // Save conversation to Firestore
      if (auth.currentUser) {

        await saveHistory(auth.currentUser.uid, {

          question: problem,

          sloka: res.data.sloka,

          meaning: res.data.meaning,

          moral: res.data.moral,

          personalized_guidance: res.data.personalized_guidance,

          reason: res.data.reason,

          createdAt: new Date().toISOString(),

        });

      }

      // Clear input
      setProblem("");

    } catch (err) {

      console.error(err);

      alert("Failed to get guidance.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-indigo-900 mb-4">
        Tell us what you're going through...
      </h2>

      <textarea
        rows={5}
        value={problem}
        onChange={(e) => setProblem(e.target.value)}
        placeholder="Describe your situation..."
        className="w-full border border-gray-300 rounded-xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-5 bg-indigo-900 hover:bg-indigo-800 disabled:bg-gray-400 text-white px-6 py-3 rounded-xl transition"
      >
        {loading ? "Generating Guidance..." : "✨ Get Personalized Guidance"}
      </button>

    </div>

  );

}