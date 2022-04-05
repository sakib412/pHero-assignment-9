import React, { useEffect, useState } from 'react'
import {
    LineChart, AreaChart, Area,
    CartesianGrid, ComposedChart,
    ResponsiveContainer,
    XAxis, YAxis, Tooltip,
    Legend, Line,
    Bar, BarChart
} from 'recharts'
const Charts = () => {
    const [data, setData] = useState()
    useEffect(() => {
        fetch('data/data.json')
            .then(data => data.json())
            .then(result => {
                setData(result)
            })

    }, [])
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <h4 className='text-center'>Month wise sell</h4>
                    <ResponsiveContainer width="100%" height="90%">
                        <LineChart width={730} height={250} data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-6">
                    <h4 className='text-center'>Investment vs Revenue</h4>
                    <ResponsiveContainer width="100%" height="90%">
                        <AreaChart width={730} height={250} data={data}
                            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="month" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h4 className='text-center'>Investment vs Revenue</h4>
                    <ResponsiveContainer width="100%" height="90%">
                        <BarChart width={730} height={250} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" fill="#8884d8" />
                            <Bar dataKey="revenue" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-6">
                    <h4 className='text-center'>Investment, Revenue</h4>
                    <ResponsiveContainer width="100%" height="90%">
                        <ComposedChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 20,
                                right: 80,
                                bottom: 20,
                                left: 20,
                            }}
                        >
                            <CartesianGrid stroke="#f5f5f5" />
                            <XAxis dataKey="month" scale="band" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                        </ComposedChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    )
}

export default Charts