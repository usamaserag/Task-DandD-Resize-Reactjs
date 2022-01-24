import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useDrag } from "react-dnd";
// import { dataCharts } from "../../data";

const Charts = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Chart data={item} id={index} key={index} />
      ))}
    </div>
  );
};

export const Chart = ({ data, id }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "chart",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  return (
    <ResponsiveContainer
      width="100%"
      aspect={2.5}
      ref={drag}
      opacity={isDragging ? "0.5" : "1"}
    >
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stackId="1"
          stroke="#ffc658"
          fill="#ffc658"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Charts;
