"use client";

import { useState } from "react";

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#f5f7fb] p-8">
      <div className="mx-auto max-w-3xl">

        <h1 className="text-3xl font-bold text-gray-900">
          Book a Delivery
        </h1>

        <p className="mt-2 text-gray-500">
          Create a new shipment with Dispatcch.
        </p>

        {submitted ? (
          <div className="mt-8 rounded-xl border border-green-200 bg-green-50 p-6">
            <h2 className="text-xl font-bold text-green-700">
              Delivery Request Created
            </h2>

            <p className="mt-2 text-green-600">
              Your delivery request has been submitted successfully.
            </p>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-5 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"
            >
              Book Another Delivery
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 rounded-xl border bg-white p-6 shadow-sm"
          >

            <div className="grid gap-5 md:grid-cols-2">

              <div>
                <label className="text-sm font-medium">
                  Pickup Location
                </label>

                <input
                  required
                  className="mt-2 w-full rounded-lg border p-3"
                  placeholder="Delhi"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Delivery Location
                </label>

                <input
                  required
                  className="mt-2 w-full rounded-lg border p-3"
                  placeholder="Jaipur"
                />
              </div>

              <div>
                <label className="text-sm font-medium">
                  Package Type
                </label>

                <select className="mt-2 w-full rounded-lg border p-3">
                  <option>Document</option>
                  <option>Small Package</option>
                  <option>Medium Package</option>
                  <option>Large Package</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Package Weight
                </label>

                <input
                  required
                  type="number"
                  className="mt-2 w-full rounded-lg border p-3"
                  placeholder="Weight in kg"
                />
              </div>

            </div>

            <button
              type="submit"
              className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Book Delivery
            </button>

          </form>
        )}

      </div>
    </main>
  );
}