"use client";
import { useState } from "react";
import Image from "next/image";
import workersData from "../../../workers.json";

export default function WorkersPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [hireDays, setHireDays] = useState<Record<number, number>>({});

  const handleHire = (workerId: number, workerName: string, service: string, price: number) => {
    const days = hireDays[workerId] || 1;
    const total = price * days;
    alert(`Hiring ${workerName} for ${service} for ${days} day${days > 1 ? 's' : ''} at ₹${total} total. Contact details will be shared via email.`);
  };

  const updateDays = (workerId: number, days: number) => {
    setHireDays(prev => ({ ...prev, [workerId]: Math.max(1, days) }));
  };

  // Group workers by service
  const workersByService = workersData
    .filter((worker) => worker.pricePerDay > 0)
    .reduce((acc, worker) => {
      if (!acc[worker.service]) {
        acc[worker.service] = [];
      }
      acc[worker.service].push(worker);
      return acc;
    }, {} as Record<string, typeof workersData>);

  // Sort services alphabetically
  const sortedServices = Object.keys(workersByService).sort();

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Elite Professionals
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {selectedService ? `Browse ${selectedService} professionals` : "Choose a service category to find professionals"}
          </p>
          {selectedService && (
            <button
              onClick={() => setSelectedService(null)}
              className="mt-4 text-blue-600 hover:text-blue-800 font-semibold flex items-center mx-auto"
            >
              ← Back to Services
            </button>
          )}
        </div>

        {!selectedService ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedServices.map((service) => (
              <div
                key={service}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/20 hover:border-blue-200"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl text-white font-bold">{service.charAt(0)}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {service}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {workersByService[service].length} professionals available
                  </p>
                  <div className="text-blue-600 font-semibold flex items-center justify-center">
                    View Professionals
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {selectedService}
              </span>
              <span className="text-lg text-gray-500 ml-2">({workersByService[selectedService].length})</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {workersByService[selectedService]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((worker) => (
                  <div
                    key={worker.id}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 border border-white/20 hover:border-blue-200"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative">
                      <div className="w-full h-56 relative overflow-hidden">
                        <Image
                          src={worker.image}
                          alt={worker.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          priority={worker.id <= 10}
                        />
                        <div className="absolute top-3 right-3">
                          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-gray-700">
                            ⭐ 4.{(worker.id % 5) + 5}
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="p-6 relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <h2 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{worker.name}</h2>
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        
                        <div className="flex items-center mb-3">
                          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">{worker.service}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                              ₹{Math.round(worker.pricePerDay * 1.18)}
                            </p>
                            <p className="text-xs text-gray-500">per day</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Experience</p>
                            <p className="text-sm font-semibold text-gray-700">{(worker.id % 8) + 2}+ years</p>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Hire for how many days?</label>
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => updateDays(worker.id, (hireDays[worker.id] || 1) - 1)}
                              className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={hireDays[worker.id] || 1}
                              onChange={(e) => updateDays(worker.id, parseInt(e.target.value) || 1)}
                              className="w-16 text-center border border-gray-300 rounded-lg py-1 px-2 text-sm font-semibold"
                            />
                            <button
                              onClick={() => updateDays(worker.id, (hireDays[worker.id] || 1) + 1)}
                              className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold"
                            >
                              +
                            </button>
                            <span className="text-sm text-gray-500">days</span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Total: ₹{Math.round(worker.pricePerDay * 1.18) * (hireDays[worker.id] || 1)}
                          </p>
                        </div>
                        
                        <button 
                          onClick={() => handleHire(worker.id, worker.name, worker.service, Math.round(worker.pricePerDay * 1.18))}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <span className="flex items-center justify-center">
                            <span>Hire for {hireDays[worker.id] || 1} day{(hireDays[worker.id] || 1) > 1 ? 's' : ''}</span>
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
