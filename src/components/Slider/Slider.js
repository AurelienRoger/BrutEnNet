import { useState } from 'react';
import './Slider.scss';
import { Message } from 'semantic-ui-react';

function Slider({ slider, setSlider }) {
  const handleChangeSlider = (event) => {
    setSlider(event.target.value);
  };
  //     <div className="ui slider" id="slider-1" />
  return (
    <div>
      <label htmlFor="annuelbrut">
        Taux d'imposition: {slider}%
        <input className="ui slider slide" type="range" min={0} max={50} step={0.1} value={slider} onChange={handleChangeSlider} />
      </label>
    </div>
  );
}

export default Slider;
