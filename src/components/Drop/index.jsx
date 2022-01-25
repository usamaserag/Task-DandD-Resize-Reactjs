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

const DropTarget = (data) => {
  const [dropItem, setDropItem] = useState([]);

  const [post, setPost] = useState(false);

  const [size, setSize] = useState({ width: 300, height: 240 });

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "chart",
    drop: (item) => addChartToDrop(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addChartToDrop = (id) => {
    const dropItem = [...data.data[id]];
    setDropItem(dropItem);
    setPost(!post);
    localStorage.setItem("items", JSON.stringify(dropItem));
  };

  useEffect(() => {
    if (localStorage.getItem("items") !== null) {
      const postInLocalStorage = JSON.parse(localStorage.getItem("items"));
      setDropItem(postInLocalStorage);
      setPost(true);
    }
  }, []);

  return (
    <div>
      <div className={isOver ? "droping" : ""} ref={drop}>
        <Resizable
          style={style}
          defaultSize={{
            // width: 300,
            height: 180,
          }}
          onResizeStop={(e, direction, ref, d) => {
            setSize({
              width: size.width + d.width,
              height: size.height + d.height,
            });
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
  return (
    <div className="drop">
      <h2 className="title">Drag a widget into an open Dashboard slot</h2>
      <div className="drop__add">
        {[1, 2].map((index) => {
          return <DropTarget data={data} key={index} />;
        })}
      </div>
      <div className="btns-container">
        <button className="back-btn">Back</button>
        <button className="submit-btn">Finish</button>
      </div>
    </div>
  );
};

export default Drop;
