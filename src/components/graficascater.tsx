// graficascater.tsx
import React from 'react'
import Chart from './chart'

const graficascater = () => {
    return (
        <div>
            <h2>Gráfica de Datos Climáticos con plotly (scatter polar)</h2>
            <Chart path="/graficascater.html" title="Gráfica de Datos Climáticos con plotly" />
        </div>
    )
}

export default graficascater