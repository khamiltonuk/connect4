import React from 'react'

function Result({board}) {
    return (
        <>
        {board.map((row,i ) => {
            return (<div key={i}>{row.map(piece => (<div>{piece}</div>))}</div>)
        })}
        </>
    )
}

export default Result