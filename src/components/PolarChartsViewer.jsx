import React, { useState } from "react"

const charts = {
  "Polar Scatter": "/polar_scatter.html",   // ← debe empezar con /
  "Polar Line": "/polar_line.html",         // ← sin carpeta public en la ruta
  "Polar Bar": "/polar_bar.html",           // ← Vercel sirve public/ como raíz
}

export const PolarChartsViewer = () => {
  const [selectedChart, setSelectedChart] = useState(charts["Polar Scatter"])

  return (
    <div>
      <h2>Climate Polar Visualizations</h2>
      
      <select
        onChange={(e) => setSelectedChart(e.target.value)}
        value={selectedChart}
      >
        {Object.entries(charts).map(([label, path]) => (
          <option key={path} value={path}>
            {label}
          </option>
        ))}
      </select>

      <div>
        <iframe
          title="Polar Chart"
          src={selectedChart}
          width="1000"
          height="600"
        />
      </div>
    </div>
  )
}