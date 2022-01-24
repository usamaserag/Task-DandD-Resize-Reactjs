import React, { useState } from "react";
import "./styles.scss";
import { useDrop } from "react-dnd";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Chart } from "../Charts";

const Drop = ({ data }) => {
  const [dropItems, setDropItems] = useState([]);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "chart",
    drop: (item) => addChartToDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addChartToDrop = (id) => {
    const dropItem = data[id];
    setDropItems([dropItem]);
  };
  return (
    <div className="drop">
      <h2 className="title">Drag a widget into an open Dashboard slot</h2>
      <div className="drop__add">
        <div
          className="drop__add__item"
          ref={drop}
          style={{ border: isOver ? "1px solid green" : "" }}
        >
          {!isOver ? (
            dropItems.map((item, i) => <Chart data={item} key={i} />)
          ) : (
            <AddCircleOutlinedIcon className="icon-add" />
          )}
        </div>
        <div className="drop__add__item">
          <AddCircleOutlinedIcon className="icon-add" />
        </div>
      </div>
    </div>
  );
};

export default Drop;
