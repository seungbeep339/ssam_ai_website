"use client";

import { FormEvent, useState } from "react";

const DEVELOPER_PASSWORD = "lemoncrew#2017";

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

  return (
    <div className="min-h-screen px-6 py-28 bg-gray-950 text-white flex items-center justify-center">
      <div className="w-full max-w-sm">
        {allowed ? (
          <h1 className="text-4xl font-bold tracking-normal text-center">Welcom</h1>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="developer-password" className="block text-sm font-medium text-gray-200">
                Password
              </label>
              <input
                id="developer-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-md border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-white/40 focus:bg-white/15"
                autoComplete="current-password"
                autoFocus
              />
            </div>
            {error && <p className="text-sm text-red-300">{error}</p>}
            <button
              type="submit"
              className="gradient-btn w-full rounded-md px-4 py-3 text-sm font-semibold text-white shadow-sm"
            >
              Enter
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
