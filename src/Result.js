import React from "react";

function Result({ board }) {
  return (
    <table>
      <tbody>
        {board.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((piece, i) => (
                <td key={i}>{piece}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
