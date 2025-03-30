"use client"

import { useState } from "react"
import { Download, Filter, Printer, Search } from "lucide-react"

export default function Reports() {
  const [reportType, setReportType] = useState("consumption")
  const [dateRange, setDateRange] = useState("week")

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-gray-600">Reports</h2>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-50">
            <Printer className="w-4 h-4" />
            <span>Print</span>
          </button>
          <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-50">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-4 py-2 text-sm rounded-md ${
                reportType === "consumption" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setReportType("consumption")}
            >
              Consumption
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-md ${
                reportType === "generation" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setReportType("generation")}
            >
              Generation
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-md ${
                reportType === "efficiency" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setReportType("efficiency")}
            >
              Efficiency
            </button>
            <button
              className={`px-4 py-2 text-sm rounded-md ${
                reportType === "outages" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setReportType("outages")}
            >
              Outages
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search reports..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            </div>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-50">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`px-4 py-2 text-sm border-b-2 ${
              dateRange === "week"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setDateRange("week")}
          >
            This Week
          </button>
          <button
            className={`px-4 py-2 text-sm border-b-2 ${
              dateRange === "month"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setDateRange("month")}
          >
            This Month
          </button>
          <button
            className={`px-4 py-2 text-sm border-b-2 ${
              dateRange === "quarter"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setDateRange("quarter")}
          >
            This Quarter
          </button>
          <button
            className={`px-4 py-2 text-sm border-b-2 ${
              dateRange === "year"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setDateRange("year")}
          >
            This Year
          </button>
          <button
            className={`px-4 py-2 text-sm border-b-2 ${
              dateRange === "custom"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setDateRange("custom")}
          >
            Custom Range
          </button>
        </div>

        {reportType === "consumption" && (
          <div>
            <h3 className="text-lg font-medium mb-4">Power Consumption Report</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Consumption
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Peak Load
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Off-Peak Load
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Avg. Temperature
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 30, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,425 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,580 MW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">980 MW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32°C</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 29, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,410 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,560 MW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">970 MW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31°C</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 28, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,390 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,540 MW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">960 MW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">30°C</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 27, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,405 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,550 MW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">965 MW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">31°C</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 26, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,420 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,570 MW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">975 MW</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32°C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {reportType === "generation" && (
          <div>
            <h3 className="text-lg font-medium mb-4">Power Generation Report</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Thermal
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Solar
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Other Renewables
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Generation
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 30, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,050 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">320 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">180 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,550 MWh</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 29, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,040 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">310 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">175 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,525 MWh</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 28, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,030 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">300 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">170 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,500 MWh</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 27, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,045 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">315 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">175 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,535 MWh</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 26, 2025</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,055 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">325 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">185 MWh</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,565 MWh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {reportType === "efficiency" && (
          <div>
            <h3 className="text-lg font-medium mb-4">System Efficiency Report</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Station
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Efficiency
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fuel Consumption
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      CO2 Emissions
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Maintenance Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Badarpur Thermal</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">92%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">450 tons/day</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,200 tons/day</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Optimal
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rajghat Power</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">88%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">220 tons/day</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">580 tons/day</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Good
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Indraprastha</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0 tons/day</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">0 tons/day</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Under Maintenance
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Pragati Power</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">95%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">780 tons/day</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,850 tons/day</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Excellent
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Rithala</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">87%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">320 tons/day</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">780 tons/day</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Needs Maintenance
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {reportType === "outages" && (
          <div>
            <h3 className="text-lg font-medium mb-4">Power Outage Report</h3>
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
                      Duration
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Affected Users
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cause
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 29, 2025 - 15:20</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">South Delhi</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">45 minutes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12,500</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Equipment Failure</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 28, 2025 - 08:15</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">East Delhi</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 hours 10 minutes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28,750</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Transformer Overload</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 27, 2025 - 22:45</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">North Delhi</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">35 minutes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9,200</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Weather Related</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 26, 2025 - 14:30</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">West Delhi</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 hour 15 minutes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18,400</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Scheduled Maintenance</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Mar 25, 2025 - 10:10</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Central Delhi</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25 minutes</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7,800</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Grid Fluctuation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

