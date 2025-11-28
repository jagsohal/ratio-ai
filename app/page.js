"use client";
import { useState } from "react";
import RatioMeter from "../components/RatioMeter";
import WordCloud from "../components/WordCloud";
import SentimentChart from "../components/SentimentChart";

export default function Home() {
  const [comments, setComments] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const handleAnalyze = async () => {
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comments }),
    });
    const data = await res.json();
    setAnalysis(data);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-6">ratio.ai</h1>
      <textarea
        className="w-full p-4 border rounded mb-4"
        rows="6"
        placeholder="Paste comments here..."
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />
      <button
        onClick={handleAnalyze}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Analyze
      </button>

      {analysis && (
        <div className="mt-8 space-y-6">
          <RatioMeter ratio={analysis.ratio} />
          <WordCloud keywords={analysis.keywords} />
          <SentimentChart sentiment={analysis.sentiment} />
        </div>
      )}
    </main>
  );
}
