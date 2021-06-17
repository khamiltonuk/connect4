import React from "react";
import Hotspot from "./Hotspot";

function Hotspots({ dispatch, turn }) {
  return (
    <>
      {new Array(7).fill().map((cols, index) => {
        return <Hotspot dispatch={dispatch} turn={turn} index={index} />;
      })}
    </>
  );
}

export default Hotspots;
