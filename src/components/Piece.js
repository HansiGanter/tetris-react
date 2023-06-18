import React, { useEffect } from "react";

function Piece() {
    const count = 4;
    let left = 80;
    let top = 0;

    useEffect(() => {
        while (top <= 800) {
            setTimeout(() => {
                // Code to be executed in the next tick

                top += 40;
                console.log('Next tick event ' + top);
            }, 100);
        }
    }, []);

    return (
        <>
            {Array.from({ length: count }).map((_, index) => {
                left += 40
                console.log(left)
                return <div key={index} className={`top-[${top}px] left-[${left}px] bg-red-500 border-2 border-black w-[40px] h-[40px] absolute`}></div>
            })}
        </>
    )
}

export default Piece;