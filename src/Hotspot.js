import React from "react";
import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const style = {
  height: "200px",
  width: "200px",
  background: "orangered",
};
function Hotspot({ index, dispatch, turn }) {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.PIECE,
    drop: () => ({ index }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div
      ref={drop}
      style={{ ...style, backgroundColor }}
      key={index}
      onClick={() =>
        dispatch({
          type: "PLAY_A_PIECE",
          payload: { player: turn, column: index },
        })
      }
    >
      Add piece to column {index}
    </div>
  );
}

export default Hotspot;
