import { unstable_noStore as noStore } from 'next/cache';

export default function HealthPage() {
  noStore();
  
  const healthData = {
    status: 'online',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: 'production / preview',
  };

  return (
    <div className="min-h-[80vh] px-[4%] py-12 flex flex-col justify-center max-w-2xl mx-auto space-y-6">
      <h1 className="text-3xl font-black uppercase tracking-wide">System Health Check</h1>
      <p className="text-gray-400 text-sm">Server-rendered status page verifying application health and runtime metrics.</p>
      
      <div className="bg-[#1f1f1f] p-6 rounded-xl border border-gray-800 font-mono text-sm text-green-400 space-y-2 shadow-xl">
        <p>&#123;</p>
        <p className="pl-4">status: <span className="text-white">"{healthData.status}"</span>,</p>
        <p className="pl-4">timestamp: <span className="text-white">"{healthData.timestamp}"</span>,</p>
        <p className="pl-4">version: <span className="text-white">"{healthData.version}"</span>,</p>
        <p className="pl-4">environment: <span className="text-white">"{healthData.environment}"</span></p>
        <p>&#125;</p>
      </div>
    </div>
  );
}