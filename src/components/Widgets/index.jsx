import React from "react";
import "./styles.scss";
import ChartLine from "../ChartLine";
import ChartBar from "../ChartBar";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const Widgets = () => {
  return (
    <div className="widgets">
      <Button
        variant="outlined"
        startIcon={<AddIcon style={{ fontWeight: "bold" }} />}
        className="btn"
      >
        New Widget
      </Button>
      <div className="widgets__wrapper">
        <ChartLine />
        <ChartBar />
      </div>
    </div>
  );
};

export default Widgets;
