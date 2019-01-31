import React from 'react'
import { LineChart, XAxis, YAxis, CartesianGrid, Line, ReferenceLine, Tooltip } from 'recharts'

const GlucoseChart = ({ data }) => {
    return(
        <div>
            <div align="center">
                <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <XAxis dataKey="time"/>
                    <YAxis domain={[60, 200]}/>
                    <Tooltip/>
                    <CartesianGrid stroke="#FFFFFF" strokeDasharray="1 1"/>
                    <ReferenceLine y={180} stroke="red"/>
                    <ReferenceLine y={80} stroke="red"/>
                    <Line type="monotone" dataKey="mgdl" stroke="#000000" />
                </LineChart>
            </div>
        </div>
    )    
}

export default GlucoseChart;