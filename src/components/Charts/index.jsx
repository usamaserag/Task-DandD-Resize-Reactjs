import React from "react";
import { AreaChart, Area, CartesianGrid, ResponsiveContainer } from "recharts";
import { useDrag } from "react-dnd";
import "./styles.scss";

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
  const [{ opacity }, drag] = useDrag(() => ({
    type: "chart",
    item: { id: id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.3 : 1,
    }),
  }));
  return (
    <div style={{ opacity }} className="chart__container">
      <ResponsiveContainer width="100%" height="100%" ref={drag}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
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
    </div>
  );
};

export default Charts;
