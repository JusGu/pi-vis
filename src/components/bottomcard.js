import React, { useState, useRef } from 'react';
function BottomCard({inside, outside}){
    return(
        <div className="BottomCard">
            <h3>Points</h3>
            <div className='stat-wrapper'>
                <div className="stat"><div className="stat-heading">Inside</div> <div>{inside}</div></div>
                <div className="stat"><div className="stat-heading">Outside</div> <div>{outside}</div></div>
                <div className="stat"><div className="stat-heading">Total</div> <div>{inside + outside}</div></div>
            </div>

        </div>
    );
}

export default BottomCard;