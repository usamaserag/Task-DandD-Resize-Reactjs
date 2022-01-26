import React, { useState, useEffect } from "react";
import "./styles.scss";
import { useDrop } from "react-dnd";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { Chart } from "../Charts";
import { Resizable } from "re-resizable";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
};
const numberOfDrops = [1, 2];

const DropTarget = ({ data, location, onDrop, onResize }) => {
  const [dropItem, setDropItem] = useState([]);

  const [post, setPost] = useState(false);

  const [size, setSize] = useState({ width: 400, height: 180 });

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "chart",
    drop: (item) => addChartToDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addChartToDrop = (id) => {
    const dropItem = [...data[id]];
    setDropItem(dropItem);
    setPost(!post);
    onDrop(location, dropItem);
  };

  useEffect(() => {
    if (localStorage.getItem("items") !== null) {
      const postInLocalStorage = JSON.parse(localStorage.getItem("items"))?.[
        location
      ];
      setDropItem(postInLocalStorage);
      setPost(true);

      const boxSize = JSON.parse(localStorage.getItem("boxSizes"))?.[location];
      setSize(boxSize);
    }
  }, []);

  return (
    <div>
      <div className={isOver ? "droping" : ""} ref={drop}>
        <Resizable
          style={style}
          defaultSize={{
            width: 400,
            height: 180,
          }}
          size={size}
          onResizeStop={(e, direction, ref, d) => {
            const newSize = {
              width: size.width + d.width,
              height: size.height + d.height,
            };
            setSize(newSize);
            onResize(location, newSize);
          }}
        >
          {post ? (
            <Chart data={dropItem} />
          ) : (
            <div className="drop__add__item">
              <AddCircleOutlinedIcon className="icon-add" />
            </div>
          )}
        </Resizable>
      </div>
    </div>
  );
};

const Drop = ({ data }) => {
  const [droppedItems, setDroppedItems] = useState({});
  const [boxSizes, setBoxSizes] = useState({});

  const onDrop = (id, item) => {
    const newDroppedItem = { [`${id}`]: item };
    setDroppedItems((prevState) => ({ ...prevState, ...newDroppedItem }));
  };

  const onResize = (id, size) => {
    const newBoxSize = { [`${id}`]: size };

    setBoxSizes((prevState) => ({ ...prevState, ...newBoxSize }));
  };

  const onSave = () => {
    localStorage.setItem("items", JSON.stringify(droppedItems));
    localStorage.setItem("boxSizes", JSON.stringify(boxSizes));
    // eslint-disable-next-line
    location.reload(true);
  };

  const resetData = () => {
    window.localStorage.clear();
    // eslint-disable-next-line
    location.reload(true);
  };

  return (
    <div className="drop">
      <div>
        <h2 className="title">Drag a widget into an open Dashboard slot</h2>
        <div className="drop__add">
          {numberOfDrops.map((index) => {
            return (
              <DropTarget
                data={data}
                key={index}
                location={index}
                onDrop={onDrop}
                onResize={onResize}
              />
            );
          })}
        </div>
      </div>

      <div className="btns-container">
        <button className="btn back-btn">Back</button>
        {localStorage.getItem("items") || localStorage.getItem("boxSizes") ? (
          <button className="btn reset-btn" onClick={resetData}>
            Reset
          </button>
        ) : (
          <button className="btn submit-btn" onClick={onSave}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default Drop;
