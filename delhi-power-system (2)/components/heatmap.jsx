"use client"

import { useState, useEffect, useRef } from "react"

export default function Heatmap() {
  const canvasRef = useRef(null)
  const [activeView, setActiveView] = useState("consumption")

  // Sample data for the heatmap (5x5 grid representing different areas)
  const consumptionData = [
    [0.9, 0.8, 0.7, 0.8, 0.9],
    [0.8, 0.7, 0.6, 0.7, 0.8],
    [0.7, 0.6, 0.5, 0.6, 0.7],
    [0.8, 0.7, 0.6, 0.7, 0.8],
    [0.9, 0.8, 0.7, 0.8, 0.9],
  ]

  const temperatureData = [
    [0.7, 0.8, 0.9, 0.8, 0.7],
    [0.6, 0.7, 0.8, 0.7, 0.6],
    [0.5, 0.6, 0.7, 0.6, 0.5],
    [0.6, 0.7, 0.8, 0.7, 0.6],
    [0.7, 0.8, 0.9, 0.8, 0.7],
  ]

  // Areas corresponding to the grid
  const areas = [
    ["North West", "North", "North", "North", "North East"],
    ["West", "North West Central", "North Central", "North East Central", "East"],
    ["West", "West Central", "Central", "East Central", "East"],
    ["West", "South West Central", "South Central", "South East Central", "East"],
    ["South West", "South", "South", "South", "South East"],
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const width = canvas.width
    const height = canvas.height

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    const data = activeView === "consumption" ? consumptionData : temperatureData
    const cellSize = Math.min(width, height) / 5

    // Draw heatmap cells
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const value = data[i][j]

        // Calculate color based on value (red for high, blue for low)
        let r, g, b
        if (activeView === "consumption") {
          r = Math.round(255 * value)
          g = Math.round(255 * (1 - value))
          b = 0
        } else {
          r = Math.round(255 * value)
          g = Math.round(100 * (1 - value))
          b = Math.round(100 * (1 - value))
        }

        const color = `rgb(${r}, ${g}, ${b})`

        // Draw cell
        ctx.fillStyle = color
        ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize)

        // Draw cell border
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 1
        ctx.strokeRect(j * cellSize, i * cellSize, cellSize, cellSize)

        // Draw text
        ctx.fillStyle = "#ffffff"
        ctx.font = "10px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(areas[i][j], j * cellSize + cellSize / 2, i * cellSize + cellSize / 2 - 10)

        // Draw value
        const displayValue =
          activeView === "consumption" ? `${Math.round(value * 100)}%` : `${Math.round(25 + value * 10)}°C`
        ctx.font = "bold 12px Arial"
        ctx.fillText(displayValue, j * cellSize + cellSize / 2, i * cellSize + cellSize / 2 + 10)
      }
    }

    // Draw legend
    const legendWidth = 20
    const legendHeight = height - 40
    const legendX = width - legendWidth - 20
    const legendY = 20

    // Draw gradient
    const gradient = ctx.createLinearGradient(0, legendY, 0, legendY + legendHeight)
    if (activeView === "consumption") {
      gradient.addColorStop(0, "rgb(255, 0, 0)")
      gradient.addColorStop(0.5, "rgb(255, 255, 0)")
      gradient.addColorStop(1, "rgb(0, 255, 0)")
    } else {
      gradient.addColorStop(0, "rgb(255, 0, 0)")
      gradient.addColorStop(0.5, "rgb(255, 100, 100)")
      gradient.addColorStop(1, "rgb(255, 200, 200)")
    }

    ctx.fillStyle = gradient
    ctx.fillRect(legendX, legendY, legendWidth, legendHeight)

    // Draw legend border
    ctx.strokeStyle = "#000000"
    ctx.lineWidth = 1
    ctx.strokeRect(legendX, legendY, legendWidth, legendHeight)

    // Draw legend labels
    ctx.fillStyle = "#000000"
    ctx.font = "12px Arial"
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"

    if (activeView === "consumption") {
      ctx.fillText("High", legendX - 5, legendY)
      ctx.fillText("Medium", legendX - 5, legendY + legendHeight / 2)
      ctx.fillText("Low", legendX - 5, legendY + legendHeight)
    } else {
      ctx.fillText("35°C", legendX - 5, legendY)
      ctx.fillText("30°C", legendX - 5, legendY + legendHeight / 2)
      ctx.fillText("25°C", legendX - 5, legendY + legendHeight)
    }
  }, [activeView, consumptionData, temperatureData, areas])

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Delhi Region Heatmap</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveView("consumption")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              activeView === "consumption" ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Power Consumption
          </button>
          <button
            onClick={() => setActiveView("temperature")}
            className={`px-3 py-1.5 text-sm rounded-md ${
              activeView === "temperature" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            Temperature
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <canvas ref={canvasRef} width={500} height={400} className="max-w-full"></canvas>
      </div>

      <div className="mt-4 text-sm text-gray-500 text-center">
        {activeView === "consumption"
          ? "Power consumption intensity across Delhi regions"
          : "Temperature distribution across Delhi regions"}
      </div>
    </div>
  )
}

