async function getHealthData() {
  // محاكاة جلب بيانات من مصدر خارجي أو داخلي
  return {
    status: 'online',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: 'production / preview',
  };
}

export default async function HealthPage() {
  const data = await getHealthData();

  return (
    <div className="min-h-[80vh] px-[4%] py-12 flex flex-col justify-center max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-wide">System Health Check</h1>
      <div className="bg-[#1f1f1f] border border-gray-800 rounded-xl p-6 space-y-4 shadow-xl">
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <span className="text-gray-400 font-medium">Status</span>
          <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full uppercase">
            {data.status}
          </span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <span className="text-gray-400 font-medium">Timestamp</span>
          <span className="text-white text-sm font-mono">{data.timestamp}</span>
        </div>
        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
          <span className="text-gray-400 font-medium">App Version</span>
          <span className="text-white text-sm font-mono">{data.version}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400 font-medium">Environment</span>
          <span className="text-white text-sm font-mono">{data.environment}</span>
        </div>
      </div>
    </div>
  );
}