"use client"

import { ArrowUp, Zap, Thermometer, Gauge, BarChart } from "lucide-react"

export default function Summary() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4">Summary</h3>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <Zap className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-gray-600">Total Consumption</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-lg">1,245 kWh</span>
            <div className="flex items-center ml-2 text-green-500 text-xs">
              <ArrowUp className="w-3 h-3" />
              <span>3.2%</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-100 my-2"></div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
              <Gauge className="w-4 h-4 text-yellow-600" />
            </div>
            <span className="text-gray-600">Peak Load</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-lg">87 kW</span>
            <div className="flex items-center ml-2 text-red-500 text-xs">
              <ArrowUp className="w-3 h-3" />
              <span>5.7%</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-100 my-2"></div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
              <Thermometer className="w-4 h-4 text-red-600" />
            </div>
            <span className="text-gray-600">Average Temperature</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-lg">29°C</span>
            <div className="flex items-center ml-2 text-red-500 text-xs">
              <ArrowUp className="w-3 h-3" />
              <span>2.1%</span>
            </div>
          </div>
        </div>

        <div className="h-px bg-gray-100 my-2"></div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <BarChart className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-gray-600">Efficiency</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-lg text-green-500">92%</span>
            <div className="flex items-center ml-2 text-green-500 text-xs">
              <ArrowUp className="w-3 h-3" />
              <span>1.5%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

