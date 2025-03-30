"use client"

import { useState } from "react"
import { BarChart, LineChart, PieChart } from "lucide-react"

export default function Prediction() {
  const [chartType, setChartType] = useState("line")

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-gray-600">Load Prediction Analysis</h2>
        <div className="flex space-x-2 bg-gray-100 p-1 rounded-md">
          <button
            onClick={() => setChartType("line")}
            className={`p-2 rounded ${chartType === "line" ? "bg-white shadow" : "hover:bg-gray-200"}`}
          >
            <LineChart className="w-5 h-5" />
          </button>
          <button
            onClick={() => setChartType("bar")}
            className={`p-2 rounded ${chartType === "bar" ? "bg-white shadow" : "hover:bg-gray-200"}`}
          >
            <BarChart className="w-5 h-5" />
          </button>
          <button
            onClick={() => setChartType("pie")}
            className={`p-2 rounded ${chartType === "pie" ? "bg-white shadow" : "hover:bg-gray-200"}`}
          >
            <PieChart className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm col-span-2">
          <h3 className="text-lg font-medium mb-4">Predicted Load Distribution</h3>
          <div className="h-80 flex items-center justify-center border border-gray-200 rounded-lg">
            {chartType === "line" && (
              <div className="w-full h-full p-4 flex flex-col">
                <div className="flex-1 relative">
                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                    <span>00:00</span>
                    <span>06:00</span>
                    <span>12:00</span>
                    <span>18:00</span>
                    <span>24:00</span>
                  </div>

                  {/* Y-axis grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 border-t border-gray-100"
                      style={{ bottom: `${i * 20}%` }}
                    ></div>
                  ))}

                  {/* Actual line */}
                  <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                    <path
                      d="M0,160 C40,140 80,180 120,170 C160,160 200,120 240,110 C280,100 320,80 360,70 C400,60 440,80 480,100 C520,120 560,150 600,160"
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="2"
                    />
                  </svg>

                  {/* Predicted line */}
                  <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                    <path
                      d="M0,160 C40,145 80,175 120,165 C160,155 200,115 240,105 C280,95 320,75 360,65 C400,55 440,75 480,95 C520,115 560,145 600,155"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  </svg>
                </div>

                <div className="flex justify-center space-x-6 mt-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Actual Load</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Predicted Load</span>
                  </div>
                </div>
              </div>
            )}

            {chartType === "bar" && (
              <div className="w-full h-full p-4 flex flex-col">
                <div className="flex-1 relative">
                  {/* X-axis labels */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                    <span>Residential</span>
                    <span>Commercial</span>
                    <span>Industrial</span>
                    <span>Government</span>
                    <span>Others</span>
                  </div>

                  {/* Y-axis grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="absolute left-0 right-0 border-t border-gray-100"
                      style={{ bottom: `${i * 20}%` }}
                    ></div>
                  ))}

                  {/* Bars */}
                  <div className="absolute inset-0 flex justify-around items-end pt-10 pb-6">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 bg-blue-500 rounded-t" style={{ height: "40%" }}></div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 bg-blue-500 rounded-t" style={{ height: "60%" }}></div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 bg-blue-500 rounded-t" style={{ height: "75%" }}></div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 bg-blue-500 rounded-t" style={{ height: "30%" }}></div>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-16 bg-blue-500 rounded-t" style={{ height: "20%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {chartType === "pie" && (
              <div className="w-full h-full p-4 flex flex-col items-center justify-center">
                <div className="relative w-48 h-48">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Pie segments */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#3b82f6"
                      strokeWidth="20"
                      strokeDasharray="75.4 175.9"
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#ef4444"
                      strokeWidth="20"
                      strokeDasharray="50.3 175.9"
                      strokeDashoffset="-75.4"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#10b981"
                      strokeWidth="20"
                      strokeDasharray="37.7 175.9"
                      strokeDashoffset="-125.7"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#f59e0b"
                      strokeWidth="20"
                      strokeDasharray="25.1 175.9"
                      strokeDashoffset="-163.4"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Residential (40%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Commercial (27%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Industrial (20%)</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-600">Others (13%)</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Prediction Accuracy</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">24-Hour Forecast</span>
                <span className="text-sm font-medium text-gray-700">96%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "96%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">48-Hour Forecast</span>
                <span className="text-sm font-medium text-gray-700">92%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "92%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">7-Day Forecast</span>
                <span className="text-sm font-medium text-gray-700">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">30-Day Forecast</span>
                <span className="text-sm font-medium text-gray-700">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "72%" }}></div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Prediction Model</h4>
              <p className="text-sm text-gray-600">
                Using advanced machine learning algorithms with historical data, weather patterns, and seasonal trends
                to predict power demand.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Last Updated</h4>
              <p className="text-sm text-gray-600">March 30, 2025 at 08:30 AM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium mb-4">Anomaly Detection</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Anomaly Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Severity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 29, 2025 - 14:32</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">South Delhi Grid</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Unexpected Load Spike</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Medium
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Resolved</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 28, 2025 - 08:15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">East Delhi Substation</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Frequency Deviation</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    High
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Investigating</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 27, 2025 - 22:45</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">North Delhi Distribution</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Voltage Fluctuation</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Low
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Resolved</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

