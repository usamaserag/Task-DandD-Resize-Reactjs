import React from "react";
import "./styles.scss";
import EditIcon from "@mui/icons-material/Edit";
import Widgets from "../../components/Widgets";

const Analytics = () => {
  return (
    <div className="analytics">
      <div className="analytics__title__container">
        <h2 className="analytics__title">Draw's Analytics Dashboard</h2>
        <EditIcon fontSize="small" style={{ color: "#8d979777" }} />
      </div>
      <div className="analytics__container">
        <Widgets />
      </div>
    </div>
  );
};

export default Analytics;
