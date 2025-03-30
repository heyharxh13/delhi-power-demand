"use client"

import { useState } from "react"
import { Calendar, ChevronDown } from "lucide-react"

export default function Forecast() {
  const [forecastPeriod, setForecastPeriod] = useState("week")

  // Sample forecast data
  const weeklyData = [
    { day: "Monday", demand: "1,420 MW", peak: "1,580 MW", temperature: "32°C" },
    { day: "Tuesday", demand: "1,450 MW", peak: "1,610 MW", temperature: "33°C" },
    { day: "Wednesday", demand: "1,480 MW", peak: "1,650 MW", temperature: "34°C" },
    { day: "Thursday", demand: "1,460 MW", peak: "1,620 MW", temperature: "33°C" },
    { day: "Friday", demand: "1,430 MW", peak: "1,590 MW", temperature: "32°C" },
    { day: "Saturday", demand: "1,350 MW", peak: "1,490 MW", temperature: "30°C" },
    { day: "Sunday", demand: "1,300 MW", peak: "1,420 MW", temperature: "29°C" },
  ]

  const monthlyData = [
    { week: "Week 1", demand: "1,380 MW", peak: "1,550 MW", temperature: "31°C" },
    { week: "Week 2", demand: "1,420 MW", peak: "1,600 MW", temperature: "32°C" },
    { week: "Week 3", demand: "1,460 MW", peak: "1,640 MW", temperature: "33°C" },
    { week: "Week 4", demand: "1,410 MW", peak: "1,580 MW", temperature: "32°C" },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-gray-600">Power Demand Forecast</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm">
              <Calendar className="w-4 h-4" />
              <span>March 2025</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
          <div className="flex rounded-md overflow-hidden border border-gray-300">
            <button
              className={`px-4 py-2 text-sm ${forecastPeriod === "week" ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}
              onClick={() => setForecastPeriod("week")}
            >
              Weekly
            </button>
            <button
              className={`px-4 py-2 text-sm ${forecastPeriod === "month" ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`}
              onClick={() => setForecastPeriod("month")}
            >
              Monthly
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Forecast Summary</h3>
          <p className="text-gray-600">
            Based on historical data, weather predictions, and seasonal patterns, we forecast
            {forecastPeriod === "week" ? " a weekly" : " a monthly"} average demand of 1,410 MW with peak loads reaching
            up to 1,650 MW during high temperature periods.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {forecastPeriod === "week" ? "Day" : "Week"}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Average Demand
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Peak Demand
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Avg. Temperature
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {(forecastPeriod === "week" ? weeklyData : monthlyData).map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {forecastPeriod === "week" ? item.day : item.week}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.demand}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.peak}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.temperature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Factors Affecting Forecast</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500 mt-1"></div>
              <p className="ml-3 text-gray-600">Seasonal temperature variations</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
              <p className="ml-3 text-gray-600">Historical consumption patterns</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500 mt-1"></div>
              <p className="ml-3 text-gray-600">Scheduled maintenance periods</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-500 mt-1"></div>
              <p className="ml-3 text-gray-600">Special events and holidays</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-500 mt-1"></div>
              <p className="ml-3 text-gray-600">Industrial sector activity</p>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-medium mb-4">Recommendations</h3>
          <div className="space-y-4">
            <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded">
              <h4 className="font-medium text-yellow-800">Peak Load Management</h4>
              <p className="text-sm text-yellow-700 mt-1">
                Schedule load shedding during forecasted peak hours to maintain grid stability.
              </p>
            </div>
            <div className="p-3 bg-green-50 border-l-4 border-green-500 rounded">
              <h4 className="font-medium text-green-800">Renewable Integration</h4>
              <p className="text-sm text-green-700 mt-1">
                Increase solar power utilization during high temperature days to offset thermal generation.
              </p>
            </div>
            <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
              <h4 className="font-medium text-blue-800">Maintenance Planning</h4>
              <p className="text-sm text-blue-700 mt-1">
                Schedule non-critical maintenance during forecasted low demand periods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

