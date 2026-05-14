"use client";

import { useEffect, useState } from "react";

type WaitlistEntry = {
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
};

export default function WaitlistResultPage() {
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/waitlist")
      .then((r) => r.json())
      .then((json) => {
        if (json.error) {
          setError(json.error);
        } else {
          setEntries(json.data ?? []);
        }
      })
      .catch(() => setError("Failed to load waitlist."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Waitlist</h1>

        {loading && <p className="text-gray-500 mt-8">Loading…</p>}
        {error && <p className="text-red-500 mt-8">{error}</p>}

        {!loading && !error && (
          <>
            <p className="text-sm text-gray-500 mb-8">{entries.length} sign-ups total</p>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr className="text-gray-500 text-xs uppercase tracking-wide">
                    <th className="px-6 py-4 font-medium">#</th>
                    <th className="px-6 py-4 font-medium">First</th>
                    <th className="px-6 py-4 font-medium">Last</th>
                    <th className="px-6 py-4 font-medium">Email</th>
                    <th className="px-6 py-4 font-medium">Signed up</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {entries.map((e, i) => (
                    <tr key={i} className="text-gray-700 hover:bg-gray-50 transition">
                      <td className="px-6 py-4 text-gray-400">{i + 1}</td>
                      <td className="px-6 py-4">{e.first_name}</td>
                      <td className="px-6 py-4">{e.last_name}</td>
                      <td className="px-6 py-4">{e.email}</td>
                      <td className="px-6 py-4 text-gray-400">
                        {new Date(e.created_at).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
