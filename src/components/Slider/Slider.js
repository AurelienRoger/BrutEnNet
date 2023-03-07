import './Slider.scss';

function Slider({ slider, setSlider }) {
  const handleChangeSlider = (event) => {
    setSlider(event.target.value);
  };
  return (
    <>
      <p className="imposition">Taux d'imposition: {slider}%</p>
      <div className="slidecontainer">
        <input className="slider" type="range" min={0} max={50} step={0.1} value={slider} onChange={handleChangeSlider} />
      </div>
    </>
  );
}

export default Slider;
