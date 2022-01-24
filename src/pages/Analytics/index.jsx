import React from "react";
import "./styles.scss";
import EditIcon from "@mui/icons-material/Edit";
import Widgets from "../../components/Widgets";
import Drop from "../../components/Drop";
import { dataCharts } from "../../data";

const Analytics = () => {
  return (
    <div className="analytics">
      <div className="analytics__title__container">
        <h2 className="title">Draw's Analytics Dashboard</h2>
        <EditIcon fontSize="small" style={{ color: "#8d979777" }} />
      </div>
      <div className="analytics__container">
        <Widgets data={dataCharts} />
        <Drop data={dataCharts} />
      </div>
    </div>
  );
};

export default Analytics;
