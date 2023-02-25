import { useState } from 'react';
import Direction from './components/DirectionComponent';
import TooltipComponent from './components/TooltipComponent';

function App() {
  const [direction, setDirection] = useState('');

  const manageDirection = (tooltipDirection) => {
    setDirection(tooltipDirection);
  }

  return (
    <div className='main-container'>
      <Direction getDirection={manageDirection} />
      <TooltipComponent direction={direction} />
    </div>
  );
}

export default App;