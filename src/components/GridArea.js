import React from 'react';
import Piece from './Piece';

function GridArea() {
    const gridStyle = {
        backgroundColor: "black",
        width: "400px",
        height: "800px",
        margin: "50px"
    };
    return (
        <div style={gridStyle}>
            <Piece></Piece>
        </div>);
}

export default GridArea;