import './DirectionComponent.css';

const Direction = (props) => {
    function changeDirection (e) {
        props.getDirection(e.target.value);
    }

    return (
        <div className='topcontainer'>
            <p className='heading-text'> Press the button to check the Direction of tooltip.</p>
            <div className="button-wrapper">
            <button className='direction-btn' value="north" onClick={changeDirection}>North</button>
            <button className='direction-btn' value="south" onClick={changeDirection}>South</button>
            <button className='direction-btn' value="west" onClick={changeDirection}>West</button>
            <button className='direction-btn' value="east" onClick={changeDirection}>East</button>
            </div>
        </div>
    );
}

export default Direction;