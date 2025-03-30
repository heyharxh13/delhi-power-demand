"use client"

import { useState, useEffect } from "react"
import { ArrowUp, ArrowDown } from "lucide-react"

export default function LiveMonitor() {
  const [powerStations, setPowerStations] = useState([
    { id: 1, name: "Badarpur Thermal", status: "Online", load: 85, output: "320 MW", efficiency: 92 },
    { id: 2, name: "Rajghat Power", status: "Online", load: 72, output: "135 MW", efficiency: 88 },
    { id: 3, name: "Indraprastha", status: "Maintenance", load: 0, output: "0 MW", efficiency: 0 },
    { id: 4, name: "Pragati Power", status: "Online", load: 91, output: "750 MW", efficiency: 95 },
    { id: 5, name: "Rithala", status: "Online", load: 65, output: "210 MW", efficiency: 87 },
  ])

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())

      // Simulate random changes in power station data
      setPowerStations((prev) =>
        prev.map((station) => {
          if (station.status === "Online") {
            const loadChange = Math.random() > 0.5 ? 1 : -1
            const newLoad = Math.max(50, Math.min(95, station.load + loadChange))
            return {
              ...station,
              load: newLoad,
              efficiency: Math.max(80, Math.min(98, station.efficiency + (Math.random() > 0.7 ? 1 : -1))),
            }
          }
          return station
        }),
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-gray-600">Live Monitor</h2>
        <div className="text-sm text-gray-500">Last updated: {currentTime.toLocaleTimeString()}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-500 mb-2">Total Power Generation</h3>
          <div className="flex items-end">
            <span className="text-2xl font-bold">1,415 MW</span>
            <span className="ml-2 text-green-500 flex items-center text-sm">
              <ArrowUp className="w-4 h-4" /> 3.2%
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-500 mb-2">Grid Frequency</h3>
          <div className="flex items-end">
            <span className="text-2xl font-bold">49.8 Hz</span>
            <span className="ml-2 text-red-500 flex items-center text-sm">
              <ArrowDown className="w-4 h-4" /> 0.4%
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-500 mb-2">System Demand</h3>
          <div className="flex items-end">
            <span className="text-2xl font-bold">1,380 MW</span>
            <span className="ml-2 text-green-500 flex items-center text-sm">
              <ArrowUp className="w-4 h-4" /> 2.8%
            </span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-sm text-gray-500 mb-2">Average Efficiency</h3>
          <div className="flex items-end">
            <span className="text-2xl font-bold">90.5%</span>
            <span className="ml-2 text-green-500 flex items-center text-sm">
              <ArrowUp className="w-4 h-4" /> 0.5%
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="font-medium">Power Stations Status</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Station Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Current Load
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Power Output
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Efficiency
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {powerStations.map((station) => (
                <tr key={station.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{station.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        station.status === "Online" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {station.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{station.load}%</div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${
                          station.load > 90 ? "bg-red-500" : station.load > 70 ? "bg-yellow-500" : "bg-green-500"
                        }`}
                        style={{ width: `${station.load}%` }}
                      ></div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{station.output}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{station.efficiency}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

