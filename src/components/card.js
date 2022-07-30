import React, { useState, useRef } from 'react';
import PI from '../pi-icon.svg';
import GraphPI from './graphComponent';
function TopCard({setInside, setOutside, inside, outside}){
    const [lop, setLop] = useState([]);
    const timer = useRef(null);
    const [pressed, setPress] = useState(false);
    const [hovered, setHover] = useState(false);
    let repeat = 0;
    let globalRepeat = 0;
    let time = 300;
    function handleGraph() {
        
        setPress(true);
        function fastChangeStates(){

            const tempArr = [];
            let insideCount = 0;
            let outsideCount = 0;
            for(let i = 0; i < 10; i++){
                let dotX = Math.random();
                let dotY = Math.random();
                tempArr.push([dotX, dotY]);
                if(Math.sqrt(dotX*dotX + dotY*dotY) < 1){
                    insideCount++;
                } else {
                    outsideCount++;
                }
            }
            setLop((lop) => [...lop, ...tempArr])
            setInside((inside) => inside + insideCount);
            setOutside((outside) => outside + outsideCount);
        
        }

        function changeStates(){
            let dotX = Math.random();
            let dotY = Math.random();
            setLop((lop) => [...lop, [dotX, dotY]])
            if(Math.sqrt(dotX*dotX + dotY*dotY) < 1){
                setInside((inside) => inside + 1);
            } else {
                setOutside((outside) => outside + 1);
            }
            repeat = repeat + 1;
            globalRepeat = globalRepeat + 1;
            if(repeat == 3){
                clearInterval(timer.current);
                repeat = 0;
                if(time > 0.1){
                    time = time/1.5;
                }
                timer.current = setInterval(changeStates, time);
            }
            if(globalRepeat > 300){
                clearInterval(timer.current);
                timer.current = setInterval(fastChangeStates, time);
            }
        }
        timer.current = setInterval(changeStates, 500);

        // console.log(inside);
        // console.log(outside);
        // console.log(Math.round((400000 * inside) / (inside + outside)) / 100000);
    }
    function timeoutClear() {
        clearInterval(timer.current);
        repeat = 0;
        globalRepeat = 0;
        time = 300;
        setHover(false);
        
    }
    function mouseOver() {
        setHover(true);
    }
    return(
        <div className="TopCard">
            <a href="https://en.wikipedia.org/wiki/Monte_Carlo_method#:~:text=Given%20that%20the%20ratio%20of,origin%20of%20less%20than%201" target="_blank"><h3>Monte Carlo Estimate</h3></a>
            <GraphPI 
            onMouseDown={handleGraph} 
            onMouseLeave={timeoutClear}
            onMouseUp={timeoutClear}
            onMouseEnter={mouseOver}
            data={lop}>
            </GraphPI>
            <div className='tip' style={(pressed || hovered )? {opacity: 0} : {}}>(Click and Hold to Begin)</div>
            <h2><img src={PI} className = "pi-icon"></img> ≈ {(inside + outside) ? (Math.round((400000 * inside) / (inside + outside)) / 100000) : 0}</h2>
        </div>
    );
}

export default TopCard;