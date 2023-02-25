import { useState } from 'react';
import './Tooltip.css';
const TooltipComponent = (props) => {

    const [showTooltip, setShowTooltip] = useState(false);
    const direction = props.direction;

    const whenMouseEnter = () => {
        setShowTooltip(true);
    }

    const whenMouseLeave = () => {
        setShowTooltip(false);
    }
    let directionChange="";
    let directionName=""
    const directionChanger=(direction)=>{
        if(direction==="north"){
            directionChange="this is north";
            directionName="North";
        }else if(direction==="east"){
            directionChange="this is east";
            directionName="East";
        }else if(direction==="west"){
            directionChange="this is west";
            directionName="West";
        }else if(direction==="south"){
            directionChange="this is south";
            directionName="South";
        }
    }
    directionChanger(direction);

    return (
        <div className="container">
            <button className="button" onMouseEnter={whenMouseEnter} onMouseLeave={whenMouseLeave} >{directionName}</button>
            {showTooltip && <div className={`tooltip ${direction}`}>
                <div className="tooltip-pointer"></div>
                <div className="tooltip-label">{directionChange}</div>
            </div>}
        </div>
    )
}
export default TooltipComponent;