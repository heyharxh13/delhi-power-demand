"use client"

import { useState } from "react"
import { ArrowUp, AlertTriangle, Clock, Zap, Activity } from "lucide-react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import WeeklyReport from "@/components/weekly-report"
import Summary from "@/components/summary"
import CurrentUsage from "@/components/current-usage"
import LiveMonitor from "@/components/live-monitor"
import Forecast from "@/components/forecast"
import Prediction from "@/components/prediction"
import Reports from "@/components/reports"
import Settings from "@/components/settings"
import Heatmap from "@/components/heatmap"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl text-gray-600">Weekly Report</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>Last updated: {new Date().toLocaleTimeString()}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <WeeklyReport />
              </div>
              <div className="space-y-6">
                <Summary />
                <CurrentUsage />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <Zap className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-medium">Power Generation</h3>
                  </div>
                  <div className="flex items-center text-green-500 text-sm">
                    <ArrowUp className="w-4 h-4 mr-1" />
                    <span>4.5%</span>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">1,425 MW</div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Daily Target: 1,400 MW</span>
                  <span>+25 MW</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                      <Activity className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="font-medium">Grid Stability</h3>
                  </div>
                  <div className="flex items-center text-green-500 text-sm">
                    <ArrowUp className="w-4 h-4 mr-1" />
                    <span>1.2%</span>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">98.7%</div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Frequency: 49.8 Hz</span>
                  <span>Voltage: 220 kV</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "98%" }}></div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    </div>
                    <h3 className="font-medium">Active Alerts</h3>
                  </div>
                  <div className="flex items-center text-red-500 text-sm">
                    <ArrowUp className="w-4 h-4 mr-1" />
                    <span>2</span>
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="space-y-2 mt-2">
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-gray-700">Transformer overload at East Delhi</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-gray-700">Maintenance required at Rithala</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-gray-700">High temperature at Badarpur</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium">Power Distribution by Region</h3>
                <div className="flex items-center space-x-2">
                  <select className="text-sm border border-gray-300 rounded-md px-2 py-1">
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="col-span-3">
                  <div className="h-64 relative">
                    <div className="absolute inset-0 flex items-end justify-around">
                      <div className="w-1/5 mx-1">
                        <div className="bg-blue-500 rounded-t-lg h-40 relative group">
                          <div className="absolute inset-x-0 -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-blue-700 text-white text-xs rounded py-1 px-2 text-center">
                            North Delhi: 320 MW
                          </div>
                        </div>
                        <div className="text-center text-sm mt-2 text-gray-600">North</div>
                      </div>
                      <div className="w-1/5 mx-1">
                        <div className="bg-green-500 rounded-t-lg h-56 relative group">
                          <div className="absolute inset-x-0 -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-green-700 text-white text-xs rounded py-1 px-2 text-center">
                            South Delhi: 450 MW
                          </div>
                        </div>
                        <div className="text-center text-sm mt-2 text-gray-600">South</div>
                      </div>
                      <div className="w-1/5 mx-1">
                        <div className="bg-yellow-500 rounded-t-lg h-32 relative group">
                          <div className="absolute inset-x-0 -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-yellow-700 text-white text-xs rounded py-1 px-2 text-center">
                            East Delhi: 260 MW
                          </div>
                        </div>
                        <div className="text-center text-sm mt-2 text-gray-600">East</div>
                      </div>
                      <div className="w-1/5 mx-1">
                        <div className="bg-purple-500 rounded-t-lg h-48 relative group">
                          <div className="absolute inset-x-0 -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-purple-700 text-white text-xs rounded py-1 px-2 text-center">
                            West Delhi: 380 MW
                          </div>
                        </div>
                        <div className="text-center text-sm mt-2 text-gray-600">West</div>
                      </div>
                      <div className="w-1/5 mx-1">
                        <div className="bg-red-500 rounded-t-lg h-24 relative group">
                          <div className="absolute inset-x-0 -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-red-700 text-white text-xs rounded py-1 px-2 text-center">
                            Central Delhi: 210 MW
                          </div>
                        </div>
                        <div className="text-center text-sm mt-2 text-gray-600">Central</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-sm text-gray-600">North Delhi</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium">320 MW</span>
                        <span className="text-xs text-gray-500 ml-2">(22%)</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-sm text-gray-600">South Delhi</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium">450 MW</span>
                        <span className="text-xs text-gray-500 ml-2">(31%)</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                        <span className="text-sm text-gray-600">East Delhi</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium">260 MW</span>
                        <span className="text-xs text-gray-500 ml-2">(18%)</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                        <span className="text-sm text-gray-600">West Delhi</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium">380 MW</span>
                        <span className="text-xs text-gray-500 ml-2">(26%)</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                        <span className="text-sm text-gray-600">Central Delhi</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium">210 MW</span>
                        <span className="text-xs text-gray-500 ml-2">(15%)</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200 mt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">Total Consumption</span>
                        <span className="text-sm font-medium">1,620 MW</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Heatmap />
            </div>
          </div>
        )
      case "live-monitor":
        return <LiveMonitor />
      case "forecast":
        return <Forecast />
      case "prediction":
        return <Prediction />
      case "reports":
        return <Reports />
      case "settings":
        return <Settings />
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  )
}

