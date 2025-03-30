"use client"

import { useState, useEffect, useRef } from "react"
import { Zap, Thermometer } from "lucide-react"

export default function WeeklyReport() {
  const [activeTab, setActiveTab] = useState("electricity")
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  const canvasRef = useRef(null)

  // Sample data for the chart
  const electricityData = [65, 59, 80, 81, 56, 55, 40]
  const temperatureData = [28, 30, 32, 31, 29, 27, 26]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw grid lines
    ctx.beginPath()
    for (let i = 0; i <= 6; i++) {
      const y = height - (i * height) / 6 - 30
      ctx.moveTo(40, y)
      ctx.lineTo(width - 20, y)
    }
    ctx.strokeStyle = "#e5e7eb"
    ctx.stroke()

    // Draw data
    const data = activeTab === "electricity" ? electricityData : temperatureData
    const maxValue = Math.max(...data) * 1.2

    // Draw line chart
    ctx.beginPath()
    data.forEach((value, index) => {
      const x = 40 + (index * (width - 60)) / 6
      const y = height - (value / maxValue) * (height - 60) - 30

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.strokeStyle = activeTab === "electricity" ? "#3b82f6" : "#ef4444"
    ctx.lineWidth = 3
    ctx.stroke()

    // Draw area under the line
    ctx.lineTo(40 + ((data.length - 1) * (width - 60)) / 6, height - 30)
    ctx.lineTo(40, height - 30)
    ctx.closePath()
    ctx.fillStyle = activeTab === "electricity" ? "rgba(59, 130, 246, 0.1)" : "rgba(239, 68, 68, 0.1)"
    ctx.fill()

    // Draw data points
    data.forEach((value, index) => {
      const x = 40 + (index * (width - 60)) / 6
      const y = height - (value / maxValue) * (height - 60) - 30

      ctx.beginPath()
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fillStyle = activeTab === "electricity" ? "#3b82f6" : "#ef4444"
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // Draw x-axis labels
    ctx.textAlign = "center"
    ctx.fillStyle = "#6b7280"
    ctx.font = "12px Arial"
    days.forEach((day, index) => {
      const x = 40 + (index * (width - 60)) / 6
      ctx.fillText(day, x, height - 10)
    })

    // Draw y-axis labels
    ctx.textAlign = "right"
    for (let i = 0; i <= 6; i++) {
      const y = height - (i * height) / 6 - 30
      const value = Math.round((i / 6) * maxValue)
      ctx.fillText(value.toString(), 35, y + 4)
    }

    // Draw units
    ctx.textAlign = "left"
    ctx.fillText(activeTab === "electricity" ? "MW" : "°C", width - 15, 20)
  }, [activeTab, electricityData, temperatureData])

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Current Consumption</h3>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("electricity")}
            className={`flex items-center px-3 py-1.5 rounded-full ${
              activeTab === "electricity" ? "bg-blue-100 text-blue-600" : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <Zap className="w-4 h-4 mr-1" />
            <span>Electricity</span>
          </button>
          <button
            onClick={() => setActiveTab("temperature")}
            className={`flex items-center px-3 py-1.5 rounded-full ${
              activeTab === "temperature" ? "bg-red-100 text-red-600" : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <Thermometer className="w-4 h-4 mr-1" />
            <span>Temperature</span>
          </button>
        </div>
      </div>

      <div className="h-64 relative">
        <canvas ref={canvasRef} width={800} height={300} className="w-full h-full"></canvas>
      </div>
    </div>
  )
}

