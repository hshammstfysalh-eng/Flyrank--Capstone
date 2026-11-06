import { Suspense } from "react";
import { headers } from "next/headers";

type Health = {
  status: string;
  timestamp: string;
  version: string;
  environment: string;
};

async function HealthData() {
  const h = await headers();
  const host = h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";

  const res = await fetch(`${proto}://${host}/api/health`, {
    cache: "no-store",
  });
  const data: Health = await res.json();

  return (
    <dl className="space-y-2 rounded-lg border border-neutral-700 p-6">
      <div><dt className="text-sm text-neutral-400">Status</dt><dd>{data.status}</dd></div>
      <div><dt className="text-sm text-neutral-400">Timestamp</dt><dd>{data.timestamp}</dd></div>
      <div><dt className="text-sm text-neutral-400">Version</dt><dd>{data.version}</dd></div>
      <div><dt className="text-sm text-neutral-400">Environment</dt><dd>{data.environment}</dd></div>
    </dl>
  );
}

export default function HealthPage() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="mb-4 text-2xl font-bold">Health Check</h1>
      <Suspense fallback={<p>Checking...</p>}>
        <HealthData />
      </Suspense>
    </main>
  );
}
