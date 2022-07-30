import React, { useState } from 'react';
function GraphPi(props){
    let key = 0;
    function dotColor (x, y) {
        if(Math.sqrt(x*x + y*y) > 1){
            return "dot whiteDot";
        } else {
            if((x * 1000) % 3 < 1){
                
                return "dot blueDot";
            } else if ((x * 1000) % 3 < 2){
                return "dot purpleDot";
            } 
            return "dot pinkDot";
        }
    }
    return(
        <div className='GraphBorder' onMouseEnter = {props.onMouseEnter} onMouseDown={props.onMouseDown} onMouseLeave={props.onMouseLeave} onMouseUp={props.onMouseUp}>
            <div className='GraphRadius'></div>
            {props.data.map((dataPoint) => 
            <div key = {key++}
                 className={dotColor(dataPoint[0], dataPoint[1])}
                 style={{left: dataPoint[0] * 396, top: (1 - dataPoint[1]) * 396 }}>
            </div>)}
        </div>
    );
}

export default GraphPi;