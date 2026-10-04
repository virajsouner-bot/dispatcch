"use client";

import { useState } from "react";

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState("");
  const [message, setMessage] = useState("");

  const handleTrack = () => {
    if (!trackingId.trim()) {
      setMessage("Please enter your tracking ID.");
      return;
    }

    setMessage(`Tracking shipment: ${trackingId}`);
  };

  return (
    <main className="min-h-screen bg-[#07152f] px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10">
        <a
          href="/"
          className="font-semibold text-blue-600"
        >
          ← Back to Home
        </a>

        <h1 className="mt-10 text-4xl font-extrabold">
          Track your shipment
        </h1>

        <p className="mt-3 text-gray-500">
          Enter your tracking ID to see your shipment status.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter tracking ID"
            className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none"
          />

          <button
            onClick={handleTrack}
            className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"
          >
            Track →
          </button>
        </div>

        {message && (
          <div className="mt-5 rounded-xl bg-blue-50 p-4 text-blue-700">
            {message}
          </div>
        )}
      </div>
    </main>
  );
}