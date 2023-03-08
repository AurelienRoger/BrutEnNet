import ButtonsPercent from '../ButtonsPercent/ButtonsPercent';
import ButtonsHour from '../ButtonsHour/ButtonsHour';
import './Buttons.scss';

function Buttons({ setPercent, setHour }) {
  return (
    <div>
      <ButtonsPercent setPercent={setPercent} />
      <ButtonsHour setHour={setHour} />
    </div>
  );
}

export default Buttons;
