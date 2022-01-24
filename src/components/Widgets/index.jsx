import React from "react";
import "./styles.scss";
import Charts from "../Charts";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const Widgets = ({item}) => {
  return (
    <div className="widgets">
      <Button
        disabled
        startIcon={<AddIcon style={{ fontWeight: "bold" }} />}
        className="btn"
      >
        New Widget
      </Button>
      <div className="widgets__wrapper">
        <Charts item={item} />
      </div>
    </div>
  );
};

export default Widgets;
