"use client"

import { LayoutDashboard, Monitor, Cloud, BarChart2, FileText, SettingsIcon } from "lucide-react"

export default function Sidebar({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: "live-monitor", label: "Live Monitor", icon: <Monitor className="w-5 h-5" /> },
    { id: "forecast", label: "Forecast", icon: <Cloud className="w-5 h-5" /> },
    { id: "prediction", label: "Prediction", icon: <BarChart2 className="w-5 h-5" /> },
    { id: "reports", label: "Reports", icon: <FileText className="w-5 h-5" /> },
    { id: "settings", label: "Settings", icon: <SettingsIcon className="w-5 h-5" /> },
  ]

  return (
    <aside className="w-64 bg-blue-500 text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold">EDelhi</h1>
      </div>
      <nav className="mt-6">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center w-full px-6 py-4 text-left ${
                  activeTab === item.id ? "bg-blue-600" : "hover:bg-blue-600"
                }`}
              >
                <span className="mr-4">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

