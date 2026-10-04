"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    localStorage.setItem("loggedIn", "true");

    router.push("/");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-white">

      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold">
            Dispatcch
          </h1>

          <p className="mt-2 text-slate-400">
            Logistics Management System
          </p>

        </div>

        <div className="space-y-5">

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Email
            </label>

            <input
              type="email"
              placeholder="admin@dispatcch.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl bg-slate-950 p-3 outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-slate-950 p-3 outline-none"
            />
          </div>

          <button
            onClick={login}
            className="w-full rounded-xl bg-cyan-500 py-3 font-semibold text-black"
          >
            Login
          </button>

        </div>

      </div>

    </main>
  );
}