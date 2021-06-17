import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const style = {
  height: "200px",
  width: "200px",
  background: "gold",
  borderRadius: "50%",
  cursor: "move",
};
function Piece({ dispatch, turn }) {
  const name = "yellow";
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PIECE,
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log("dropResult.turn,", turn);
      if (item && dropResult) {
        dispatch({
          type: "PLAY_A_PIECE",
          payload: { player: turn, column: dropResult.index },
        });
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  return (
    <>
      <div
        className="piece"
        ref={drag}
        style={{
          ...style,
          opacity: isDragging ? 0.5 : 1,
        }}
      ></div>
    </>
  );
}

export default Piece;
