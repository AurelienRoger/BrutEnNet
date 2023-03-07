import { useState } from 'react';
import './Slider.scss';
import { Message } from 'semantic-ui-react';

function Slider() {
  const [slider, setSlider] = useState(0);

  const handleChangeSlider = (event) => {
    setSlider(event.target.value);
  };
  //     <div className="ui slider" id="slider-1" />
  return (
    <div>
      <Message>Taux d'imposition: {slider}%</Message>
      <input className="ui slider slide" type="range" min={0} max={50} step={0.1} value={slider} onChange={handleChangeSlider} />
    </div>
  );
}

export default Slider;
