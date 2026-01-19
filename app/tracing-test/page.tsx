"use client";

import { useState } from "react";

export default function TracingTestPage() {
  const [data, setData] = useState<unknown>(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/fetch-data");
      const result = await response.json();
      setData(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-2xl font-bold">Tracing Test</h1>
      <button
        onClick={handleFetch}
        disabled={loading}
        className="rounded-full bg-foreground px-6 py-3 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] disabled:opacity-50"
      >
        {loading ? "Loading..." : "Fetch Data"}
      </button>
      {data && (
        <pre className="max-w-lg overflow-auto rounded bg-zinc-100 p-4 dark:bg-zinc-800">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
