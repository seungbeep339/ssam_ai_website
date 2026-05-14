"use client";

import { FormEvent, useState } from "react";

const DEVELOPER_PASSWORD = "lemoncrew#2017";

function KPISection() {
  return (
    <a
      href="https://www.ssamapp.com/kpi"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-gray-300"
    >
      <h2 className="text-xl font-semibold text-gray-900">KPI</h2>
      <p className="mt-1 text-sm text-gray-500">View key performance indicators →</p>
    </a>
  );
}

function WaitlistSection() {
  return (
    <a
      href="https://www.ssamapp.com/waitlistresult"
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md hover:border-gray-300"
    >
      <h2 className="text-xl font-semibold text-gray-900">Waitlist</h2>
      <p className="mt-1 text-sm text-gray-500">View sign-ups →</p>
    </a>
  );
}

export default function DeveloperPage() {
  const [password, setPassword] = useState("");
  const [allowed, setAllowed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === DEVELOPER_PASSWORD) {
      setAllowed(true);
      setError("");
      return;
    }

    setAllowed(false);
    setError("Incorrect password.");
  };

  if (!allowed) {
    return (
      <div className="min-h-screen px-6 py-28 bg-white flex items-center justify-center">
        <div className="w-full max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="developer-password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="developer-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
                autoComplete="current-password"
                autoFocus
              />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              type="submit"
              className="gradient-btn w-full rounded-md px-4 py-3 text-sm font-semibold text-white shadow-sm"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Developer</h1>
        <KPISection />
        <WaitlistSection />
      </div>
    </div>
  );
}
