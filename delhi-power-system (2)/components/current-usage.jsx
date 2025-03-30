"use client"

import { useEffect, useRef } from "react"

export default function CurrentUsage() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) - 20

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background arc
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, Math.PI * 0.75, Math.PI * 2.25, false)
    ctx.lineWidth = 20
    ctx.strokeStyle = "#f3f4f6"
    ctx.stroke()

    // Draw loaded part (blue)
    const loadedPercentage = 0.75
    const loadedEndAngle = Math.PI * 0.75 + Math.PI * 1.5 * loadedPercentage

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
    gradient.addColorStop(0, "#3b82f6")
    gradient.addColorStop(1, "#60a5fa")

    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, Math.PI * 0.75, loadedEndAngle, false)
    ctx.lineWidth = 20
    ctx.lineCap = "round"
    ctx.strokeStyle = gradient
    ctx.stroke()

    // Draw tick marks
    for (let i = 0; i <= 10; i++) {
      const angle = Math.PI * 0.75 + Math.PI * 1.5 * (i / 10)
      const innerRadius = radius - 25
      const outerRadius = radius - 15

      const x1 = centerX + Math.cos(angle) * innerRadius
      const y1 = centerY + Math.sin(angle) * innerRadius
      const x2 = centerX + Math.cos(angle) * outerRadius
      const y2 = centerY + Math.sin(angle) * outerRadius

      ctx.beginPath()
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.lineWidth = i % 5 === 0 ? 3 : 1
      ctx.strokeStyle = "#9ca3af"
      ctx.stroke()

      if (i % 5 === 0) {
        const textRadius = radius - 40
        const x = centerX + Math.cos(angle) * textRadius
        const y = centerY + Math.sin(angle) * textRadius

        ctx.font = "12px Arial"
        ctx.fillStyle = "#6b7280"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(`${i * 10}%`, x, y)
      }
    }

    // Draw center text
    ctx.font = "bold 36px Arial"
    ctx.fillStyle = "#111827"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText("75%", centerX, centerY - 15)

    ctx.font = "16px Arial"
    ctx.fillStyle = "#6b7280"
    ctx.fillText("(Normal)", centerX, centerY + 15)

    // Draw needle
    const needleAngle = Math.PI * 0.75 + Math.PI * 1.5 * loadedPercentage
    const needleLength = radius - 30

    ctx.beginPath()
    ctx.moveTo(centerX, centerY)
    ctx.lineTo(centerX + Math.cos(needleAngle) * needleLength, centerY + Math.sin(needleAngle) * needleLength)
    ctx.lineWidth = 3
    ctx.strokeStyle = "#ef4444"
    ctx.stroke()

    // Draw needle center
    ctx.beginPath()
    ctx.arc(centerX, centerY, 8, 0, Math.PI * 2)
    ctx.fillStyle = "#ef4444"
    ctx.fill()
    ctx.strokeStyle = "#ffffff"
    ctx.lineWidth = 2
    ctx.stroke()
  }, [])

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4">Current Usage</h3>
      <div className="flex justify-center">
        <div className="relative">
          <canvas ref={canvasRef} width={300} height={200} className="mx-auto"></canvas>
          <div className="absolute top-4 right-0 flex flex-col space-y-2">
            <div className="flex items-center bg-blue-50 px-2 py-1 rounded-md">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-sm text-gray-600">Loaded</span>
            </div>
            <div className="flex items-center bg-red-50 px-2 py-1 rounded-md">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <span className="text-sm text-gray-600">Unloaded</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Daily Target: 70%</span>
          <span>Current: 75%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
        </div>
      </div>
    </div>
  )
}

