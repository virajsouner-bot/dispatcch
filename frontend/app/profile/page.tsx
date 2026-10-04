"use client";

import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("Riya Bhardwaj");
  const [email, setEmail] = useState("admin@dispatcch.com");
  const [phone, setPhone] = useState("9876543210");
  const [company, setCompany] = useState("Dispatcch Logistics");
  const [location, setLocation] = useState("New Delhi");

  function saveProfile() {
    alert("Profile saved successfully!");
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">

      <h1 className="text-3xl font-bold">
        Profile
      </h1>

      <p className="mt-2 text-slate-400">
        Manage your account information
      </p>

      <div className="mt-8 max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-6">

        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Name
            </label>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl bg-slate-950 p-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Email
            </label>

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-slate-950 p-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Phone
            </label>

            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl bg-slate-950 p-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Company
            </label>

            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-xl bg-slate-950 p-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Location
            </label>

            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full rounded-xl bg-slate-950 p-3 outline-none"
            />
          </div>

          <button
            onClick={saveProfile}
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black"
          >
            Save Profile
          </button>

        </div>

      </div>

    </main>
  );
}